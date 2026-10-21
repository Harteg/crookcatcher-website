import uiEn from '$content/ui.en.json';
import uiPt from '$content/ui.pt.json';
import uiFr from '$content/ui.fr.json';

export const SITE_URL = 'https://www.crookcatcher.app';

export const DEFAULT_LOCALE = 'en';

/** English lives at the root; every other locale gets a URL prefix (/pt/...). */
export const LOCALES = ['en', 'pt', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** Values for <html lang>, date formatting and og:locale. */
export const LOCALE_META: Record<Locale, { htmlLang: string; ogLocale: string; name: string }> = {
	en: { htmlLang: 'en', ogLocale: 'en_US', name: 'English' },
	pt: { htmlLang: 'pt-BR', ogLocale: 'pt_BR', name: 'Português' },
	fr: { htmlLang: 'fr', ogLocale: 'fr_FR', name: 'Français' }
};

const UI: Record<Locale, typeof uiEn> = { en: uiEn, pt: uiPt, fr: uiFr };

export function isLocale(value: string | undefined): value is Locale {
	return !!value && (LOCALES as readonly string[]).includes(value);
}

export function getUi(locale: Locale) {
	return UI[locale];
}

/** Locale from a URL path: '/pt/help' -> 'pt', '/blog' -> 'en'. */
export function localeFromPath(pathname: string): Locale {
	const first = pathname.split('/')[1];
	return isLocale(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE;
}

/** Strip the locale prefix: '/pt/help' -> '/help', '/pt' -> '/'. */
export function stripLocale(pathname: string): string {
	const locale = localeFromPath(pathname);
	if (locale === DEFAULT_LOCALE) return pathname;
	return pathname.slice(locale.length + 1) || '/';
}

/** Add the locale prefix: ('/help', 'pt') -> '/pt/help', ('/', 'pt') -> '/pt'. */
export function localizePath(path: string, locale: Locale): string {
	if (locale === DEFAULT_LOCALE) return path;
	return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

export function absoluteUrl(path: string, locale: Locale): string {
	return `${SITE_URL}${localizePath(path, locale)}`;
}

/** Prerender entries for a [[lang=locale]] route: the root version plus one per prefixed locale. */
export function localeEntries() {
	return [{ lang: '' }, ...PREFIXED_LOCALES.map((lang) => ({ lang }))];
}
