import impressumEn from '$content/impressum.en.json';
import impressumPt from '$content/impressum.pt.json';
import impressumFr from '$content/impressum.fr.json';
import impressumEs from '$content/impressum.es.json';
import impressumDe from '$content/impressum.de.json';
import impressumAr from '$content/impressum.ar.json';
import impressumId from '$content/impressum.id.json';
import impressumIt from '$content/impressum.it.json';
import impressumJa from '$content/impressum.ja.json';
import { localeEntries } from '$lib/i18n';

export const prerender = true;

const CONTENT = { en: impressumEn, pt: impressumPt, fr: impressumFr, es: impressumEs, de: impressumDe, ar: impressumAr, id: impressumId, it: impressumIt, ja: impressumJa };

export const entries = localeEntries;

export async function load({ parent }) {
	const { locale } = await parent();
	return { doc: CONTENT[locale] };
}
