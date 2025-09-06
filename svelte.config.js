import adapter from '@sveltejs/adapter-static';
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
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),

		paths: {
			base: '',
			assets: ''
		},

		prerender: {
			entries: [
				'/',
				'/blog',
				'/help',
				'/privacy',
				'/terms',
				'/blog/introducing-crookcatcher',
				'/blog/crookcatcher-setup',
				'/blog/block-power-menu',
				'/blog/phone-theft',
				'/blog/top_five_settings'
			],
			handleMissingId: 'warn'
		}
	}
};

export default config;
