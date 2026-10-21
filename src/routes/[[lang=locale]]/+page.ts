import homeEn from '$content/home.en.json';
import homePt from '$content/home.pt.json';
import reviewsEn from '$content/reviews.json';
import reviewsPt from '$content/reviews.pt.json';
import homeFr from '$content/home.fr.json';
import reviewsFr from '$content/reviews.fr.json';
import { listPosts } from '$lib/blog';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = {
	en: { home: homeEn, reviews: reviewsEn },
	pt: { home: homePt, reviews: reviewsPt },
	fr: { home: homeFr, reviews: reviewsFr }
};

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	const { home, reviews } = CONTENT[locale];

	try {
		return { home, reviews, posts: await listPosts(locale) };
	} catch (e) {
		console.error('Error loading blog posts:', e);
		return { home, reviews, posts: [] };
	}
}
