import { browser } from '$app/environment';
import { locale } from 'svelte-i18n';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/i18n';

export const load: LayoutLoad = async ({ url }) => {
  const supportedLocales = ['en', 'fr'];
  const urlLocale = url.pathname.split('/')[1];

  if (!urlLocale || !supportedLocales.includes(urlLocale)) {
    const defaultLocale = browser ? 
      window.localStorage.getItem('preferred-locale') || 
      window.navigator.language.split('-')[0] : 
      'en';
    throw redirect(308, `/${supportedLocales.includes(defaultLocale) ? defaultLocale : 'en'}`);
  }

  // Set and persist the locale
  await setLocale(urlLocale);
  locale.set(urlLocale);
  return { url: url.pathname };
}; 