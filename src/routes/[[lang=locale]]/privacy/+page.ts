import privacyEn from '$content/privacy.en.json';
import privacyPt from '$content/privacy.pt.json';
import privacyFr from '$content/privacy.fr.json';
import privacyEs from '$content/privacy.es.json';
import privacyDe from '$content/privacy.de.json';
import privacyAr from '$content/privacy.ar.json';
import privacyId from '$content/privacy.id.json';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = { en: privacyEn, pt: privacyPt, fr: privacyFr, es: privacyEs, de: privacyDe, ar: privacyAr, id: privacyId };

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	return { doc: CONTENT[locale] };
}
