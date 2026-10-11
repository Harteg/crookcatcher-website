#!/usr/bin/env node
/**
 * Pulls New Trials (last 7 days) from RevenueCat Charts API and writes
 * static/stats/social-proof.json for the app / website to consume.
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
	return Math.floor(n / 10) * 10;
}

const { start_date, end_date } = last7DayRange();
const filters = JSON.stringify([{ name: 'app_id', values: [APP_ID] }]);

const url = new URL(
	`https://api.revenuecat.com/v2/projects/${PROJECT_ID}/charts/trials_new`
);
url.searchParams.set('realtime', 'true');
url.searchParams.set('resolution', '0'); // day
url.searchParams.set('start_date', start_date);
url.searchParams.set('end_date', end_date);
url.searchParams.set('filters', filters);
url.searchParams.set('aggregate', 'total');

const res = await fetch(url, {
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		Accept: 'application/json'
	}
});

if (!res.ok) {
	const body = await res.text();
	console.error(`RevenueCat API ${res.status}: ${body}`);
	process.exit(1);
}

const data = await res.json();
const raw =
	data?.summary?.total?.['New Trials'] ??
	data?.summary?.total?.new_trials ??
	null;

if (raw == null || Number.isNaN(Number(raw))) {
	console.error('Unexpected chart response:', JSON.stringify(data, null, 2));
	process.exit(1);
}

const trials_started_7d = roundDownToTen(Number(raw));
const payload = {
	trials_started_7d,
	raw_trials_started_7d: Number(raw),
	window: { start_date, end_date },
	app_id: APP_ID,
	updated_at: new Date().toISOString()
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
console.log(`Wrote ${outPath}`);
console.log(JSON.stringify(payload, null, 2));
