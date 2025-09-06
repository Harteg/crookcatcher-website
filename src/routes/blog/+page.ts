import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load() {
    try {
        const posts = await Promise.all(
            Object.entries(import.meta.glob('/src/blog/posts/*.svx')).map(async ([path, resolver]) => {
                const { metadata } = await resolver();
                const slug = path.split('/').pop()?.slice(0, -4);
                return { ...metadata, slug };
            })
        );

        return {
            posts: posts
                .filter(post => post.published)
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        };
    } catch (e) {
        throw error(500, `Could not load blog posts`);
    }
}