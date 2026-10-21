import helpEn from '$content/help.en.json';
import helpPt from '$content/help.pt.json';
import helpFr from '$content/help.fr.json';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = { en: helpEn, pt: helpPt, fr: helpFr };

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	return { help: CONTENT[locale] };
}
