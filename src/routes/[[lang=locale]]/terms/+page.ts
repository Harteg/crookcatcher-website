import termsEn from '$content/terms.en.json';
import termsPt from '$content/terms.pt.json';
import termsFr from '$content/terms.fr.json';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = { en: termsEn, pt: termsPt, fr: termsFr };

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	return { doc: CONTENT[locale] };
}
