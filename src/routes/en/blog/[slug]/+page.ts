import { redirect } from '@sveltejs/kit';

export const prerender = false;

export function load({ params }) {
    throw redirect(301, `/blog/${params.slug}`);
}
