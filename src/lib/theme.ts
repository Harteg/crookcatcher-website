import { stripLocale } from '$lib/i18n';

/**
 * Reading pages (guides, blog index, help, legal) use the light theme unless the reader's system
 * is in dark mode. The homepage is always light, with its own dark and mint bands. Anything else
 * (error page) stays on the dark brand theme. See the theme tokens at the top of app.css.
 */
export function themeForPath(pathname: string): 'light' | 'reading' | 'brand' {
	const path = stripLocale(pathname);
	if (path === '/') return 'light';
	return /^\/(blog|help|privacy|terms)(\/|$)/.test(path) ? 'reading' : 'brand';
}
