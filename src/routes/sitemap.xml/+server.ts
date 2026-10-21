import type { RequestHandler } from '@sveltejs/kit';
import { listPosts } from '$lib/blog';
import { DEFAULT_LOCALE, LOCALES, absoluteUrl, type Locale } from '$lib/i18n';

/** Pages under src/routes/[[lang=locale]] — they exist in every locale. */
const TRANSLATED_PAGES = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/blog', priority: '0.8', changefreq: 'weekly' },
	{ path: '/help', priority: '0.6', changefreq: 'monthly' },
	{ path: '/privacy', priority: '0.4', changefreq: 'yearly' },
	{ path: '/terms', priority: '0.4', changefreq: 'yearly' }
];

export const prerender = true;

/** hreflang alternates for a path that exists in `locales` (none if it only exists in one). */
const alternates = (path: string, locales: readonly Locale[]) => {
	if (locales.length < 2) return '';
	const xDefault = locales.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : locales[0];
	return [...locales.map((l) => [l, absoluteUrl(path, l)]), ['x-default', absoluteUrl(path, xDefault)]]
		.map(
			([hreflang, href]) => `
		<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`
		)
		.join('');
};

export const GET: RequestHandler = async () => {
	const postsByLocale = await Promise.all(
		LOCALES.map(async (locale) => ({ locale, posts: await listPosts(locale) }))
	);
	const localesForSlug = (slug: string) =>
		postsByLocale.filter(({ posts }) => posts.some((p) => p.slug === slug)).map((x) => x.locale);

	const translatedUrls = TRANSLATED_PAGES.flatMap(({ path, priority, changefreq }) =>
		LOCALES.map(
			(locale) => `
	<url>
		<loc>${absoluteUrl(path, locale)}</loc>${alternates(path, LOCALES)}
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`
		)
	).join('');

	const postUrls = postsByLocale
		.flatMap(({ locale, posts }) =>
			posts.map((post) => {
				const path = `/blog/${post.slug}`;
				return `
	<url>
		<loc>${absoluteUrl(path, locale)}</loc>${alternates(path, localesForSlug(post.slug))}
		<lastmod>${post.dateUpdated ?? post.datePublished}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`;
			})
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${translatedUrls}
${postUrls}
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
