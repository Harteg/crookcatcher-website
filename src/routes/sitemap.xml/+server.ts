import type { RequestHandler } from '@sveltejs/kit';

const SITE_URL = 'https://www.crookcatcher.app';

const STATIC_PAGES = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/blog', priority: '0.8', changefreq: 'weekly' },
	{ path: '/help', priority: '0.6', changefreq: 'monthly' },
	{ path: '/privacy', priority: '0.4', changefreq: 'yearly' },
	{ path: '/terms', priority: '0.4', changefreq: 'yearly' }
];

export const prerender = true;

export const GET: RequestHandler = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/blog/posts/*.svx')).map(async ([path, resolver]) => {
			const { metadata } = await (resolver as () => Promise<{ metadata: Record<string, string> }>)();
			const slug = path.split('/').pop()?.slice(0, -4) ?? '';
			return {
				slug,
				published: metadata.published,
				lastmod: metadata.dateUpdated ?? metadata.datePublished
			};
		})
	);

	const publishedPosts = posts.filter((p) => p.published);

	const staticUrls = STATIC_PAGES.map(
		({ path, priority, changefreq }) => `
	<url>
		<loc>${SITE_URL}${path}</loc>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`
	).join('');

	const postUrls = publishedPosts
		.map(
			({ slug, lastmod }) => `
	<url>
		<loc>${SITE_URL}/blog/${slug}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${postUrls}
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
