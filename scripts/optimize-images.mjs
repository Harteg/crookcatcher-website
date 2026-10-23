#!/usr/bin/env node
/**
 * Generates responsive WebP variants for the LCP-critical images (homepage hero and the
 * header image of every published blog post) and writes src/lib/responsive-images.json,
 * which src/lib/responsive-image.ts reads to build srcset attributes.
 *
 * Variants are written next to the original: /images/foo.png -> /images/foo-800.webp.
 * Images missing from the manifest are simply served as-is, so a new post never shows a
 * broken image — run this script after adding one to give it a srcset.
 *
 * Requires `cwebp` (brew install webp) and macOS `sips` for reading dimensions.
 *
 *   npm run optimize-images
 */

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const STATIC = join(ROOT, 'static');
const MANIFEST = join(ROOT, 'src/lib/responsive-images.json');

const WIDTHS = [480, 800, 1200, 1600];
const QUALITY = '82';

const EXTRA_IMAGES = ['/images/hero-alert.png'];

function publishedPostImages() {
	const dirs = ['src/blog/posts', 'src/blog/posts/pt', 'src/blog/posts/fr', 'src/blog/posts/es'].map((d) => join(ROOT, d));
	const images = new Set();
	for (const dir of dirs.filter(existsSync)) {
		for (const file of readdirSync(dir).filter((f) => f.endsWith('.svx'))) {
			const frontmatter = readFileSync(join(dir, file), 'utf8').split('---')[1] ?? '';
			if (!/^published:\s*true\s*$/m.test(frontmatter)) continue;
			const image = frontmatter.match(/^image:\s*['"]?([^'"\n]+)['"]?\s*$/m)?.[1];
			if (image && !image.endsWith('.webp')) images.add(image);
		}
	}
	return [...images];
}

function widthOf(file) {
	const out = execFileSync('sips', ['-g', 'pixelWidth', file], { encoding: 'utf8' });
	return Number(out.match(/pixelWidth:\s*(\d+)/)[1]);
}

const manifest = {};

for (const src of [...EXTRA_IMAGES, ...publishedPostImages()].sort()) {
	const file = join(STATIC, src);
	if (!existsSync(file)) {
		console.warn(`skip ${src}: file not found`);
		continue;
	}
	const original = widthOf(file);
	// Standard widths below the original, plus the original width itself (never upscale).
	const widths = [...WIDTHS.filter((w) => w < original), Math.min(original, WIDTHS.at(-1))];

	manifest[src] = widths.map((w) => {
		const variant = src.replace(/\.[a-z]+$/i, `-${w}.webp`);
		const args = ['-quiet', '-q', QUALITY, '-metadata', 'none'];
		if (w < original) args.push('-resize', String(w), '0');
		execFileSync('cwebp', [...args, file, '-o', join(STATIC, variant)]);
		return { width: w, src: variant };
	});
	console.log(`${src} -> ${widths.join(', ')}`);
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, '\t') + '\n');
console.log(`Wrote ${Object.keys(manifest).length} images to src/lib/responsive-images.json`);
