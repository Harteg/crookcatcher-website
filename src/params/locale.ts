import type { ParamMatcher } from '@sveltejs/kit';
import { PREFIXED_LOCALES } from '$lib/i18n';

// Only non-default locales get a prefix, so /en never matches and /blog etc. fall through.
export const match: ParamMatcher = (param) => (PREFIXED_LOCALES as string[]).includes(param);
