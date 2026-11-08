import termsEn from '$content/terms.en.json';
import termsPt from '$content/terms.pt.json';
import termsFr from '$content/terms.fr.json';
import termsEs from '$content/terms.es.json';
import termsDe from '$content/terms.de.json';
import termsAr from '$content/terms.ar.json';
import termsId from '$content/terms.id.json';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = { en: termsEn, pt: termsPt, fr: termsFr, es: termsEs, de: termsDe, ar: termsAr, id: termsId };

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	return { doc: CONTENT[locale] };
}
