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
				_: 'src/routes/blog/_post.svelte'
			}
		})
	],

	kit: {
		adapter: adapter(),

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
