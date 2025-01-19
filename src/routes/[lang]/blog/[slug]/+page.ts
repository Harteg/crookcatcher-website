import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { lang, slug } = params;
    
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-JH65GSTF8W', {
            'page_path': `/${lang}/blog/${slug}`,
            'page_title': `${slug} - Blog`
        });
    }

    try {
        // Try to load the post in requested language
        const post = await import(`../../../../blog/posts/${lang}/${slug}.svx`);
        return {
            post: {
                ...post.metadata,
                content: post.default
            },
            lang
        };
    } catch (e) {
        // If requested language is French and post doesn't exist, try English version
        if (lang === 'fr') {
            try {
                const post = await import(`../../../../blog/posts/en/${slug}.svx`);
                return {
                    post: {
                        ...post.metadata,
                        content: post.default
                    },
                    lang,
                    fallback: true
                };
            } catch (e) {
                throw error(404, 'Post not found');
            }
        }
        throw error(404, 'Post not found');
    }
} 