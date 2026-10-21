import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
			layout: {
				_: 'src/routes/[[lang=locale]]/blog/_post.svelte'
			}
		})
	],

	kit: {
		adapter: adapter({
			// Cloudflare caps _routes.json at 100 rules; listing every static file individually
			// overflows it, so exclude the asset folders with wildcards instead.
			routes: {
				include: ['/*'],
				exclude: [
					'<build>',
					'<prerendered>',
					'/images/*',
					'/favicons/*',
					'/fonts/*',
					'/email_res/*',
					'/scripts/*',
					'/stats/*',
					'/robots.txt',
					'/app-ads.txt',
					// Cloudflare ignores static/_redirects for requests that reach the worker, so
					// every redirect source listed there must also be excluded here.
					'/blog/introducing-crookcatcher',
					'/fr/blog/introducing-crookcatcher'
				]
			}
		}),

		alias: {
			$content: 'content'
		},

		paths: {
			base: '',
			assets: ''
		},

		prerender: {
			entries: ['*'],
			handleMissingId: 'warn',
			handleHttpError: 'warn'
		}
	}
};

export default config;
