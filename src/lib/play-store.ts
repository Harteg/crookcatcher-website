import { DEFAULT_LOCALE, type Locale } from '$lib/i18n';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.harteg.crookcatcher';

/**
 * Play Store link with an install referrer. The referrer value must be URL-encoded as a
 * whole: an unencoded `&utm_medium=` ends the referrer early and Play Console never sees it.
 */
export function playStoreUrl(medium: string, campaign: string) {
	const referrer = `utm_source=website&utm_medium=${medium}&utm_campaign=${campaign}`;
	return `${PLAY_URL}&referrer=${encodeURIComponent(referrer)}`;
}

type PageLike = { route: { id: string | null }; params: Record<string, string>; data: Record<string, any> };

/**
 * Tracking for a Play link on the current page. On a guide every link is attributed to the
 * guide (medium=guide, campaign=slug, plus -pt/-fr for translations) so Play Console shows
 * installs per guide; elsewhere medium=button and campaign is the button's position.
 */
export function playTracking(page: PageLike, position = 'unknown') {
	const slug = page.route.id?.endsWith('/blog/[slug]') ? page.params.slug : undefined;
	if (!slug) return { medium: 'button', campaign: position };
	const locale = page.data.locale as Locale;
	return { medium: 'guide', campaign: locale === DEFAULT_LOCALE ? slug : `${slug}-${locale}` };
}
