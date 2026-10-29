import homeEn from '$content/home.en.json';
import homePt from '$content/home.pt.json';
import reviewsEn from '$content/reviews.json';
import reviewsPt from '$content/reviews.pt.json';
import homeFr from '$content/home.fr.json';
import reviewsFr from '$content/reviews.fr.json';
import homeEs from '$content/home.es.json';
import reviewsEs from '$content/reviews.es.json';
import { listPosts } from '$lib/blog';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = {
	en: { home: homeEn, reviews: reviewsEn },
	pt: { home: homePt, reviews: reviewsPt },
	fr: { home: homeFr, reviews: reviewsFr },
	es: { home: homeEs, reviews: reviewsEs }
};

export const entries = localeEntries;

export async function load({ parent, data }) {
	const { locale } = await parent();
	const { home, reviews } = CONTENT[locale];

	try {
		return { ...data, home, reviews, posts: await listPosts(locale) };
	} catch (e) {
		console.error('Error loading blog posts:', e);
		return { ...data, home, reviews, posts: [] };
	}
}
