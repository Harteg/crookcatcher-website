#!/usr/bin/env node
/**
 * Pulls last-7-day social-proof metrics from RevenueCat Charts API and writes
 * static/stats/social-proof.json for the app / website to consume.
 *
 * Categories (Play Store app, last 7 calendar days):
 *   - trials_started_7d
 *   - trial_conversions_7d   (trial → paid)
 *   - direct_subscriptions_7d (paid start, no trial/intro)
 *   - intro_offers_7d        (paid intro offer starts; separate from "direct")
 *   - lifetime_purchases_7d  (permanent_upgrade SKUs)
 *
 * Env:
 *   REVENUECAT_SECRET_API_KEY  (required) — V2 secret with charts read
 *   REVENUECAT_PROJECT_ID      (optional) — default CrookCatcher project
 *   REVENUECAT_APP_ID          (optional) — default Play Store app
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ID = process.env.REVENUECAT_PROJECT_ID || 'proj9ed15fcd';
const APP_ID = process.env.REVENUECAT_APP_ID || 'app0feb0ed5eb';
/** Lifetime / permanent upgrade products (Play Store). */
const LIFETIME_PRODUCT_IDS = (
	process.env.REVENUECAT_LIFETIME_PRODUCT_IDS || 'prod82e1b330dd,prod65485e92cc'
).split(',');
const API_KEY = process.env.REVENUECAT_SECRET_API_KEY;

if (!API_KEY) {
	console.error('Missing REVENUECAT_SECRET_API_KEY');
	process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'static', 'stats', 'social-proof.json');

function isoDate(d) {
	return d.toISOString().slice(0, 10);
}

/** Inclusive last 7 calendar days (today and the 6 days before). */
function last7DayRange() {
	const end = new Date();
	const start = new Date(end);
	start.setUTCDate(start.getUTCDate() - 6);
	return { start_date: isoDate(start), end_date: isoDate(end) };
}

function roundDownToTen(n) {
	return Math.floor(Number(n) / 10) * 10;
}

function pickTotal(summary, ...keys) {
	const total = summary?.total ?? {};
	for (const key of keys) {
		if (total[key] != null && !Number.isNaN(Number(total[key]))) {
			return Number(total[key]);
		}
	}
	return null;
}

async function fetchChart(chartName, { start_date, end_date, filters }) {
	const url = new URL(
		`https://api.revenuecat.com/v2/projects/${PROJECT_ID}/charts/${chartName}`
	);
	url.searchParams.set('realtime', 'true');
	url.searchParams.set('resolution', '0'); // day
	url.searchParams.set('start_date', start_date);
	url.searchParams.set('end_date', end_date);
	url.searchParams.set('filters', JSON.stringify(filters));
	url.searchParams.set('aggregate', 'total');

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			Accept: 'application/json'
		}
	});

	if (!res.ok) {
		const body = await res.text();
		throw new Error(`${chartName} → ${res.status}: ${body}`);
	}

	return res.json();
}

const { start_date, end_date } = last7DayRange();
const appFilter = { name: 'app_id', values: [APP_ID] };

const [trialsData, paidData, lifetimeData] = await Promise.all([
	fetchChart('trials_new', {
		start_date,
		end_date,
		filters: [appFilter]
	}),
	fetchChart('actives_new', {
		start_date,
		end_date,
		filters: [appFilter]
	}),
	fetchChart('non-subscription_purchases', {
		start_date,
		end_date,
		filters: [appFilter, { name: 'product_id', values: LIFETIME_PRODUCT_IDS }]
	})
]);

const raw = {
	trials_started: pickTotal(trialsData.summary, 'New Trials'),
	trial_conversions: pickTotal(paidData.summary, 'Trial Conversions'),
	direct_subscriptions: pickTotal(paidData.summary, 'Direct Subscriptions'),
	intro_offers: pickTotal(paidData.summary, 'Intro Offers'),
	lifetime_purchases: pickTotal(lifetimeData.summary, 'Non-subscription Purchases')
};

for (const [key, value] of Object.entries(raw)) {
	if (value == null) {
		console.error(`Missing measure ${key}`, {
			trials: trialsData.summary,
			paid: paidData.summary,
			lifetime: lifetimeData.summary
		});
		process.exit(1);
	}
}

const payload = {
	// Rounded for display (app can sum these as needed)
	trials_started_7d: roundDownToTen(raw.trials_started),
	trial_conversions_7d: roundDownToTen(raw.trial_conversions),
	direct_subscriptions_7d: roundDownToTen(raw.direct_subscriptions),
	intro_offers_7d: roundDownToTen(raw.intro_offers),
	lifetime_purchases_7d: roundDownToTen(raw.lifetime_purchases),

	// Exact totals from RevenueCat
	raw: {
		trials_started_7d: raw.trials_started,
		trial_conversions_7d: raw.trial_conversions,
		direct_subscriptions_7d: raw.direct_subscriptions,
		intro_offers_7d: raw.intro_offers,
		lifetime_purchases_7d: raw.lifetime_purchases
	},

	window: { start_date, end_date },
	app_id: APP_ID,
	updated_at: new Date().toISOString()
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
console.log(`Wrote ${outPath}`);
console.log(JSON.stringify(payload, null, 2));
