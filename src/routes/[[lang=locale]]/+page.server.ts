import QRCode from 'qrcode';
import { playStoreUrl } from '$lib/play-store';
import { localeEntries } from '$lib/i18n';

export const prerender = true;
export const entries = localeEntries;

/** Play Store QR code as inline SVG, for desktop visitors to scan with their phone. */
function playQr(campaign: string) {
	return QRCode.toString(playStoreUrl('button', campaign), {
		type: 'svg',
		margin: 0,
		errorCorrectionLevel: 'L',
		color: { dark: '#16201A', light: '#0000' }
	});
}

// Runs at build time only (the page is prerendered), so the QR library never reaches the browser.
export async function load() {
	return { qr: { hero: await playQr('hero_qr'), final: await playQr('footer_qr') } };
}
