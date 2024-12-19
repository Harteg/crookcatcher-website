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
    const locale = supportedLocales.includes(defaultLocale) ? defaultLocale : 'en';
    const path = url.pathname === '/' ? '' : url.pathname;
    throw redirect(308, `/${locale}${path}`);
  }

  await setLocale(urlLocale);
  locale.set(urlLocale);
  return { url: url.pathname };
}; 