import { error, redirect } from '@sveltejs/kit';
import { listPosts, loadPost, postLocales } from '$lib/blog';
import { DEFAULT_LOCALE, LOCALES, localizePath } from '$lib/i18n';

export const prerender = true;

/** Old slugs that permanently redirect to a newer post (also listed in static/_redirects). */
const SLUG_REDIRECTS: Record<string, string> = {
	'introducing-crookcatcher': '/blog/see-who-tried-to-unlock-your-phone'
};

export async function entries() {
	const perLocale = await Promise.all(
		LOCALES.map(async (locale) =>
			(await listPosts(locale))
				// Skip replaced posts — the 301 lives in static/_redirects so Cloudflare
				// returns a real redirect instead of a prerendered meta-refresh HTML file.
				.filter((post) => !SLUG_REDIRECTS[post.slug])
				.map((post) => ({ lang: locale === DEFAULT_LOCALE ? '' : locale, slug: post.slug }))
		)
	);
	return perLocale.flat();
}

export async function load({ params, parent }) {
	const { slug } = params;
	const { locale } = await parent();

	const destination = SLUG_REDIRECTS[slug];
	if (destination) {
		throw redirect(301, destination);
	}

	// Track page view
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', 'G-JH65GSTF8W', {
			page_path: localizePath(`/blog/${slug}`, locale),
			page_title: `${slug} - Blog`
		});
	}

	// No fallback to English: a /pt/ or /fr/ URL only exists when the post is translated.
	const post = await loadPost(locale, slug);
	if (!post) throw error(404, 'Post not found');

	return { post, locales: await postLocales(slug) };
}
