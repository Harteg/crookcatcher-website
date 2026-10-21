import privacyEn from '$content/privacy.en.json';
import privacyPt from '$content/privacy.pt.json';
import privacyFr from '$content/privacy.fr.json';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = { en: privacyEn, pt: privacyPt, fr: privacyFr };

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	return { doc: CONTENT[locale] };
}
