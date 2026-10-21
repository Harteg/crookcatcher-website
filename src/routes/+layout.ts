import { getUi, localeFromPath } from '$lib/i18n';

export const prerender = true;

export function load({ url }) {
	const locale = localeFromPath(url.pathname);
	return { locale, ui: getUi(locale) };
}
