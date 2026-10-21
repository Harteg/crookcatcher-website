import { error } from '@sveltejs/kit';
import { listPosts } from '$lib/blog';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	try {
		return { posts: await listPosts(locale) };
	} catch (e) {
		throw error(500, `Could not load blog posts`);
	}
}
