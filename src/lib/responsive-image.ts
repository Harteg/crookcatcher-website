import manifest from './responsive-images.json';

const variants: Record<string, { width: number; src: string }[]> = manifest;

/**
 * WebP src/srcset for an image processed by `npm run optimize-images`. Images that haven't
 * been processed fall back to the original file with no srcset.
 */
export function responsiveImage(src: string) {
	const sizes = variants[src];
	if (!sizes) return { src, srcset: undefined };
	return {
		src: sizes[sizes.length - 1].src,
		srcset: sizes.map((v) => `${v.src} ${v.width}w`).join(', ')
	};
}
