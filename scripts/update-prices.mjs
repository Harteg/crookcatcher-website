#!/usr/bin/env node
/**
 * Copies CrookCatcher Pro prices per country from the price tool's live Play Console export
 * into src/lib/server/play-prices.json, which /api/price serves to the homepage.
 *
 * Run after every price change (once prices.json has been re-fetched in the tool):
 *   npm run update-prices [-- path/to/prices.json]
 *
 * Default input: ../crookcatcher-tools/cc-play-prices/prices.json (next to this repo).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const inPath = resolve(
	process.argv[2] ?? join(root, '..', 'crookcatcher-tools', 'cc-play-prices', 'prices.json')
);
const outPath = join(root, 'src', 'lib', 'server', 'play-prices.json');

const SUBSCRIPTION = 'crookcatcher_pro';
const LIFETIME = { product: 'permanent_upgrade', option: 'legacy-base' };

/** Play API money ({ currencyCode, units, nanos }) -> { currency, amount }. */
function money(price) {
	if (!price?.currencyCode) return undefined;
	const amount = Number(price.units ?? 0) + (price.nanos ?? 0) / 1e9;
	return { currency: price.currencyCode, amount: Math.round(amount * 100) / 100 };
}

const data = JSON.parse(readFileSync(inPath, 'utf8'));
const plans = data.subscriptions?.[SUBSCRIPTION]?.basePlans;
const lifetime = data.oneTimeProducts?.[LIFETIME.product]?.purchaseOptions?.[LIFETIME.option];
if (!plans?.yearly || !plans?.monthly || !lifetime) {
	console.error(`Missing yearly/monthly plans or the lifetime product in ${inPath}`);
	process.exit(1);
}

/** Region code -> price, for one base plan, skipping regions closed to new subscribers. */
function planPrices(plan) {
	if (plan.state !== 'ACTIVE') return {};
	return Object.fromEntries(
		plan.regionalConfigs
			.filter((r) => r.newSubscriberAvailability)
			.map((r) => [r.regionCode, money(r.price)])
	);
}

const yearly = planPrices(plans.yearly);
const monthly = planPrices(plans.monthly);
const lifetimeByRegion = Object.fromEntries(
	Object.entries(lifetime.pricesByRegion ?? {})
		.filter(([, r]) => r.availability === 'AVAILABLE')
		.map(([region, r]) => [region, money(r.price)])
);

// The site shows yearly as the main price, so only countries with a yearly price are listed.
const regions = {};
for (const region of Object.keys(yearly).sort()) {
	regions[region] = {
		yearly: yearly[region],
		...(monthly[region] && { monthly: monthly[region] }),
		...(lifetimeByRegion[region] && { lifetime: lifetimeByRegion[region] })
	};
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(
	outPath,
	JSON.stringify({ fetchedAt: data.fetchedAt, regions }, null, '\t') + '\n'
);
console.log(`Wrote ${Object.keys(regions).length} regions (prices fetched ${data.fetchedAt}) to ${outPath}`);
