import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
    const { slug } = params;
    
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-JH65GSTF8W', {
            'page_path': `/blog/${slug}`,
            'page_title': `${slug} - Blog`
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