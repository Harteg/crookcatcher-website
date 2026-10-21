<script lang="ts">
  import { page } from '$app/stores';
  import { LOCALES, LOCALE_META, DEFAULT_LOCALE, absoluteUrl, stripLocale, type Locale } from '$lib/i18n';

  /**
   * Locales this page exists in. Pages that aren't translated everywhere (blog posts) return
   * `locales` from their load function; never point hreflang at a page that doesn't exist.
   */
  $: locales = ($page.data.locales ?? LOCALES) as readonly Locale[];

  $: path = stripLocale($page.url.pathname);
  $: current = $page.data.locale as Locale;
</script>

<svelte:head>
  {#if locales.length > 1}
    {#each locales as locale}
      <link rel="alternate" hreflang={locale} href={absoluteUrl(path, locale)} />
    {/each}
    <link rel="alternate" hreflang="x-default" href={absoluteUrl(path, locales.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : locales[0])} />
  {/if}

  <meta property="og:locale" content={LOCALE_META[current].ogLocale} />
  {#each locales.filter((l) => l !== current) as locale}
    <meta property="og:locale:alternate" content={LOCALE_META[locale].ogLocale} />
  {/each}
</svelte:head>
