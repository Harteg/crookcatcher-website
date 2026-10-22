import type { Component } from 'svelte';
import { dev } from '$app/environment';
import { LOCALES, type Locale } from '$lib/i18n';

/** Frontmatter of a .svx post. */
export type PostMeta = {
	title: string;
	subtitle?: string;
	description: string;
	datePublished: string;
	dateUpdated?: string;
	image?: string;
	imageAlt?: string;
	published?: boolean;
};

export type PostSummary = PostMeta & { slug: string };

type PostModule = { metadata: PostMeta; default: Component };

/**
 * English posts live in src/blog/posts/, translations in src/blog/posts/{locale}/ with the
 * same filename, so a slug identifies the same post across languages.
 */
const MODULES: Record<Locale, Record<string, () => Promise<unknown>>> = {
	en: import.meta.glob('/src/blog/posts/*.svx'),
	pt: import.meta.glob('/src/blog/posts/pt/*.svx'),
	fr: import.meta.glob('/src/blog/posts/fr/*.svx')
};

const slugOf = (path: string) => path.split('/').pop()!.slice(0, -4);

/** Published posts for a locale, newest first. */
export async function listPosts(locale: Locale): Promise<PostSummary[]> {
	const posts = await Promise.all(
		Object.entries(MODULES[locale]).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as PostModule;
			return { ...metadata, slug: slugOf(path) };
		})
	);

	return posts
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}

/** A published post, or in `npm run dev` also a draft, so drafts can be reviewed at their URL. */
export async function loadPost(locale: Locale, slug: string) {
	const resolver = Object.entries(MODULES[locale]).find(([path]) => slugOf(path) === slug)?.[1];
	if (!resolver) return null;

	const post = (await resolver()) as PostModule;
	return post.metadata.published || dev ? { ...post.metadata, content: post.default } : null;
}

/** Locales in which a slug is published — used for hreflang and the language switcher. */
export async function postLocales(slug: string) {
	const published = await Promise.all(
		LOCALES.map(async (locale) => ((await loadPost(locale, slug))?.published ? locale : null))
	);
	return published.filter((l): l is Locale => l !== null);
}
