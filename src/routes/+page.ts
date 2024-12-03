import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
  const base = url.pathname.startsWith('/crookcatcher') ? '/crookcatcher' : '';
  throw redirect(307, `${base}/en`);
}; 