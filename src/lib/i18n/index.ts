import { browser } from '$app/environment';
import { init, register, waitLocale } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('fr', () => import('./locales/fr.json'));

// Initialize with a default but don't set the locale yet
init({
  fallbackLocale: 'en',
  initialLocale: browser ? window.localStorage.getItem('preferred-locale') || 'en' : 'en'
});

// Export a function to set locale with persistence
export async function setLocale(newLocale: string) {
  if (browser) {
    window.localStorage.setItem('preferred-locale', newLocale);
  }
  await waitLocale(newLocale);
} 