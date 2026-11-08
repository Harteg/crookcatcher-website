import { error } from '@sveltejs/kit';
import { listPosts } from '$lib/blog';
import { LOCALES, localeEntries } from '$lib/i18n';

export const prerender = true;

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	try {
		const posts = await listPosts(locale);
		// Hreflang and the language picker only point at blog indexes that have guides.
		const locales = (
			await Promise.all(LOCALES.map(async (l) => ((await listPosts(l)).length ? l : null)))
		).filter((l) => l !== null);
		return { posts, locales };
	} catch (e) {
		throw error(500, `Could not load blog posts`);
	}
}
