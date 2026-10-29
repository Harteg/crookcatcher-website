import { json } from '@sveltejs/kit';
import { dev } from '$app/environment';
import prices from '$lib/server/play-prices.json';

// Runs on Cloudflare for every request: the answer depends on where the visitor is.
export const prerender = false;

type Price = { currency: string; amount: number };
type RegionPrices = { yearly: Price; monthly?: Price; lifetime?: Price };

const REGIONS: Record<string, RegionPrices> = prices.regions;

/**
 * Pro prices for the visitor's country (Cloudflare's CF-IPCountry header), from the snapshot
 * written by `npm run update-prices`. `?country=KE` overrides it in dev, where there is no header.
 * Unknown countries get `{ country, prices: null }` and the page shows its fallback text.
 */
export function GET({ request, url }) {
	const override = dev ? url.searchParams.get('country') : null;
	const country = (override ?? request.headers.get('cf-ipcountry') ?? '').toUpperCase() || null;

	return json(
		{ country, prices: (country && REGIONS[country]) || null },
		// Never share a cached answer between visitors from different countries.
		{ headers: { 'cache-control': 'private, no-store' } }
	);
}
