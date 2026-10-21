import type { Handle } from '@sveltejs/kit';
import { LOCALE_META, localeFromPath } from '$lib/i18n';

// Runs at prerender time too, so every static HTML file gets the right <html lang>.
export const handle: Handle = async ({ event, resolve }) => {
  const { htmlLang } = LOCALE_META[localeFromPath(event.url.pathname)];
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', htmlLang)
  });
};
