import { browser } from '$app/environment';
import { locale } from 'svelte-i18n';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/i18n';

export const load: LayoutLoad = async ({ url }) => {
  const supportedLocales = ['en', 'fr'];
  const pathSegments = url.pathname.split('/');
  const urlLocale = pathSegments[1];

  // If no locale in URL or unsupported locale, redirect to default
  if (!urlLocale || !supportedLocales.includes(urlLocale)) {
    const browserLocale = browser ? 
      window.localStorage.getItem('preferred-locale') || 
      window.navigator.language.split('-')[0] : 
      'en';
    const defaultLocale = supportedLocales.includes(browserLocale) ? 
      browserLocale : 
      'en';
    throw redirect(307, `/${defaultLocale}${url.pathname}`);
  }

  // Set and persist the locale
  await setLocale(urlLocale);
  locale.set(urlLocale);

  return {
    url: url.pathname
  };
}; 