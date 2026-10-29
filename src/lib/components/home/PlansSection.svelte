<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { LOCALE_META } from '$lib/i18n';
  import PlayStoreButton from '../PlayStoreButton.svelte';

  type Price = { currency: string; amount: number };
  type RegionPrices = { yearly: Price; monthly?: Price; lifetime?: Price };

  export let content: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
    trial: string;
    trialThen: string;
    perYear: string;
    monthly: string;
    lifetime: string;
    or: string;
    countryLabel: string;
    priceNote: string;
    fallback: string;
    upgrade: string;
  };

  // In the order of content.items
  const ICONS = ['videocam', 'security', 'camera_rear', 'cloud_upload', 'lock', 'campaign'];

  // Prices come from /api/price after load (the page itself is prerendered and shared by all
  // countries). Until then, and for countries without a price, the fallback text shows.
  let status: 'loading' | 'ready' | 'none' = 'loading';
  let country: string | null = null;
  let prices: RegionPrices | null = null;

  $: lang = LOCALE_META[$page.data.locale as keyof typeof LOCALE_META].htmlLang;

  function format({ currency, amount }: Price) {
    const whole = Number.isInteger(amount);
    return new Intl.NumberFormat(lang, {
      style: 'currency',
      currency,
      minimumFractionDigits: whole ? 0 : 2,
      maximumFractionDigits: whole ? 0 : 2
    }).format(amount);
  }

  function countryName(code: string) {
    try {
      return new Intl.DisplayNames([lang], { type: 'region' }).of(code) ?? code;
    } catch {
      return code;
    }
  }

  onMount(async () => {
    try {
      // The query string is only honoured in dev (?country=KE to preview another country).
      const res = await fetch(`/api/price${location.search}`);
      const data = await res.json();
      country = data.country;
      prices = data.prices;
      status = prices ? 'ready' : 'none';
    } catch {
      status = 'none';
    }
  });

  $: alternatives = prices
    ? [
        prices.monthly && content.monthly.replace('{price}', format(prices.monthly)),
        prices.lifetime && content.lifetime.replace('{price}', format(prices.lifetime))
      ].filter(Boolean)
    : [];
</script>

<section class="pro" aria-labelledby="pro-title">
  <div class="container">
    <header class="pro-header">
      <p class="eyebrow">{content.eyebrow}</p>
      <h2 id="pro-title">{content.title}</h2>
    </header>

    <div class="pro-grid">
      <!-- The trial is on the yearly plan, so with a price it leads into it: "Free for 7 days, then $19.99 / year" -->
      <div class="price-card theme-dark" aria-live="polite">
        <p class="trial">{status === 'ready' ? content.trialThen : content.trial}</p>
        <div class="price-body">
          {#if status === 'ready' && prices}
            <p class="amount">{format(prices.yearly)}<span class="per">{content.perYear}</span></p>
            {#if alternatives.length}
              <p class="alt">{content.or} {alternatives.join(' · ')}</p>
            {/if}
            {#if country}
              <p class="country" title={content.countryLabel}>
                <span class="material-icons" aria-hidden="true">place</span>
                <span class="sr-only">{content.countryLabel}:</span>
                {countryName(country)}
              </p>
            {/if}
          {:else if status === 'none'}
            <p class="fallback">{content.fallback}</p>
          {/if}
        </div>
        <div class="price-action">
          <PlayStoreButton position="pro" />
        </div>
        <p class="note">
          {content.upgrade}
          {#if status === 'ready'}{content.priceNote}{/if}
        </p>
      </div>

      <div class="feature-col">
        <p class="pro-subtitle">{content.subtitle}</p>
        <ul class="features">
          {#each content.items as item, i}
            <li>
              <span class="chip" aria-hidden="true"><span class="material-icons">{ICONS[i] ?? 'check'}</span></span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .pro {
    padding: 96px 0;
  }

  .pro-header {
    text-align: center;
  }

  .eyebrow {
    display: inline-block;
    margin: 0 0 20px;
    padding: 6px 14px;
    border-radius: 999px;
    background: #0e1310;
    color: #5ee08f;
    font-size: 0.875rem;
    font-weight: 700;
  }

  h2 {
    max-width: 12em;
    margin: 0 auto;
    font-size: clamp(2.4rem, 6.4vw, 5.25rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    color: var(--color-primary);
    text-wrap: balance;
  }

  .pro-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    margin-top: 56px;
  }

  /* Dark price card with a soft mint glow */
  .price-card {
    display: flex;
    flex-direction: column;
    padding: 32px 28px;
    border-radius: 28px;
    background:
      radial-gradient(ellipse 80% 60% at 100% 0%, rgba(94, 224, 143, 0.22), transparent 70%),
      #0e1310;
    box-shadow: 0 40px 80px -40px rgba(14, 19, 16, 0.6);
  }

  .trial {
    align-self: flex-start;
    margin: 0;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(94, 224, 143, 0.14);
    color: #5ee08f;
    font-size: 0.9375rem;
    font-weight: 700;
  }

  /* Holds its height while the price loads, so the card doesn't jump. */
  .price-body {
    min-height: 110px;
    margin-top: 20px;
  }

  .amount {
    margin: 0;
    font-family: 'NexaBold', sans-serif;
    font-size: clamp(2.8rem, 5vw, 3.75rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #fff;
  }

  .per {
    margin-left: 8px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.15rem;
    letter-spacing: 0;
    color: var(--color-secondary);
  }

  .alt {
    margin: 10px 0 0;
    font-size: 1rem;
    color: var(--color-body-soft);
  }

  .country {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    margin: 10px 0 0;
    font-size: 0.875rem;
    color: var(--color-secondary);
  }

  .country .material-icons {
    font-size: 16px;
  }

  .fallback {
    max-width: 22em;
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--color-body-soft);
  }

  .price-action {
    margin-top: 28px;
  }

  .note {
    margin: 20px 0 0;
    padding-top: 20px;
    border-top: 1px solid var(--color-divider);
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--color-secondary);
  }

  .pro-subtitle {
    margin: 0 0 28px;
    font-size: 1.2rem;
    line-height: 1.5;
    color: var(--color-body);
  }

  .features {
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px 32px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .features li {
    display: flex;
    gap: 16px;
    margin: 0;
  }

  .chip {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #dff7e8;
    color: #13804a;
  }

  .chip .material-icons {
    font-size: 22px;
  }

  .features h3 {
    margin: 2px 0 4px;
    font-size: 1.15rem;
    line-height: 1.3;
  }

  .features p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color-secondary);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  @media (min-width: 640px) {
    .features {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 900px) {
    .pro {
      padding: 144px 0 128px;
    }

    .pro-grid {
      grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
      gap: 64px;
      align-items: center;
      margin-top: 80px;
    }

    .price-card {
      padding: 44px 40px;
    }
  }
</style>
