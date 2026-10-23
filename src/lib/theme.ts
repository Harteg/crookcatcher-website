import { stripLocale } from '$lib/i18n';

/**
 * Long-form reading pages (guides, blog index, help, legal) use the light theme unless the
 * reader's system is in dark mode; everything else (the homepage) stays on the dark brand theme.
 * See the theme tokens at the top of app.css.
 */
export function themeForPath(pathname: string): 'reading' | 'brand' {
	return /^\/(blog|help|privacy|terms)(\/|$)/.test(stripLocale(pathname)) ? 'reading' : 'brand';
}
