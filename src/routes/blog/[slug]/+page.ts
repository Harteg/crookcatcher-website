import { error, redirect } from '@sveltejs/kit';

export const prerender = true;

/** Old slugs that permanently redirect to a newer post (also listed in static/_redirects). */
const SLUG_REDIRECTS: Record<string, string> = {
	'introducing-crookcatcher': '/blog/see-who-tried-to-unlock-your-phone'
};

export async function entries() {
	const modules = import.meta.glob('/src/blog/posts/*.svx');
	const publishedSlugs: string[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const { metadata } = (await (resolver as () => Promise<{ metadata: { published?: boolean } }>)()) as {
			metadata: { published?: boolean };
		};
		if (!metadata.published) continue;

		const slug = path.split('/').pop()?.slice(0, -4);
		// Skip replaced posts — the 301 lives in static/_redirects so Cloudflare
		// returns a real redirect instead of a prerendered meta-refresh HTML file.
		if (slug && !SLUG_REDIRECTS[slug]) publishedSlugs.push(slug);
	}

	return publishedSlugs.map((slug) => ({ slug }));
}

export async function load({ params }) {
	const { slug } = params;

	const destination = SLUG_REDIRECTS[slug];
	if (destination) {
		throw redirect(301, destination);
	}

	// Track page view
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', 'G-JH65GSTF8W', {
			page_path: `/blog/${slug}`,
			page_title: `${slug} - Blog`
		});
	}

	try {
		const post = await import(`../../../blog/posts/${slug}.svx`);
		return {
			post: {
				...post.metadata,
				content: post.default
			}
		};
	} catch (e) {
		throw error(404, 'Post not found');
	}
}
