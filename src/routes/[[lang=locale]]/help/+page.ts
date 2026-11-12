import helpEn from '$content/help.en.json';
import helpPt from '$content/help.pt.json';
import helpFr from '$content/help.fr.json';
import helpEs from '$content/help.es.json';
import helpDe from '$content/help.de.json';
import helpAr from '$content/help.ar.json';
import helpId from '$content/help.id.json';
import helpIt from '$content/help.it.json';
import helpJa from '$content/help.ja.json';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = { en: helpEn, pt: helpPt, fr: helpFr, es: helpEs, de: helpDe, ar: helpAr, id: helpId, it: helpIt, ja: helpJa };

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	return { help: CONTENT[locale] };
}
