export async function load({ params }) {
    try {
        const posts = await Promise.all(
            Object.entries(import.meta.glob('/src/blog/posts/**/*.svx')).map(async ([path, resolver]) => {
                const { metadata } = await resolver();
                const slug = path.split('/').pop()?.slice(0, -4);
                const lang = path.split('/').slice(-2)[0];
                return { ...metadata, slug, lang };
            })
        );

        return {
            posts: posts
                .filter(post => post.published && post.lang === params.lang)
                .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
        };
    } catch (e) {
        console.error('Error loading blog posts:', e);
        return { posts: [] };
    }
} 