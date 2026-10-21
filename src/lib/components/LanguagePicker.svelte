<script lang="ts">
  import { page } from '$app/stores';
  import { DEFAULT_LOCALE, LOCALES, LOCALE_META, localizePath, stripLocale, type Locale } from '$lib/i18n';

  let open = false;
  let root: HTMLDivElement;

  $: locale = $page.data.locale as Locale;
  // Pages under [[lang=locale]] exist in every language unless their load returns `locales`
  // (blog posts). Missing versions link to that locale's homepage instead.
  $: available = ($page.data.locales ??
    ($page.route.id?.startsWith('/[[lang=locale]]') ? LOCALES : [DEFAULT_LOCALE])) as readonly Locale[];
  $: basePath = stripLocale($page.url.pathname);

  // Close after navigating to another language.
  $: $page.url.pathname, (open = false);

  function onWindowClick(event: MouseEvent) {
    if (open && !root.contains(event.target as Node)) open = false;
  }

  function onKeydown(event: KeyboardEvent) {
    if (open && event.key === 'Escape') {
      open = false;
      root.querySelector('button')?.focus();
    }
  }
</script>

<svelte:window on:click={onWindowClick} on:keydown={onKeydown} />

<div class="language-picker" bind:this={root}>
  <button
    type="button"
    class="picker-button"
    aria-expanded={open}
    aria-controls="language-menu"
    aria-label={$page.data.ui.header.language}
    on:click={() => (open = !open)}
  >
    <span class="material-icons" aria-hidden="true">language</span>
    <span class="picker-code">{locale.toUpperCase()}</span>
    <span class="material-icons chevron" aria-hidden="true">expand_more</span>
  </button>

  <!-- Links stay in the DOM while closed (hidden with CSS) so crawlers can follow them. -->
  <ul id="language-menu" class="picker-menu" class:open>
    {#each LOCALES as l}
      <li>
        <a
          href={localizePath(available.includes(l) ? basePath : '/', l)}
          hreflang={l}
          lang={LOCALE_META[l].htmlLang}
          class:active={l === locale}
          aria-current={l === locale ? 'true' : undefined}
        >
          {LOCALE_META[l].name}
          {#if l === locale}
            <span class="material-icons check" aria-hidden="true">check</span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .language-picker {
    position: relative;
  }

  .picker-button {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 36px;
    padding: 0 6px 0 8px;
    border: none;
    border-radius: 8px;
    background: none;
    color: var(--color-secondary);
    font: inherit;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.15s ease, background-color 0.15s ease;
  }

  .picker-button:hover,
  .picker-button[aria-expanded='true'] {
    color: var(--color-body);
    background: rgba(255, 255, 255, 0.04);
  }

  .picker-button .material-icons {
    font-size: 18px;
  }

  .picker-button .chevron {
    font-size: 18px;
    transition: transform 0.15s ease;
  }

  .picker-button[aria-expanded='true'] .chevron {
    transform: rotate(180deg);
  }

  .picker-menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 160px;
    margin: 0;
    padding: 6px;
    list-style: none;
    border: 1px solid var(--color-card-border);
    border-radius: 12px;
    background: var(--color-card);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-4px);
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
  }

  .picker-menu.open {
    visibility: visible;
    opacity: 1;
    transform: none;
  }

  .picker-menu a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    color: var(--color-secondary);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .picker-menu a:hover {
    opacity: 1;
    color: var(--color-body);
    background: rgba(255, 255, 255, 0.04);
  }

  .picker-menu a.active {
    color: var(--color-body);
  }

  .picker-menu .check {
    font-size: 18px;
    color: var(--color-primary);
  }

  @media (max-width: 640px) {
    .picker-code,
    .chevron {
      display: none;
    }

    .picker-button {
      width: 34px;
      justify-content: center;
      padding: 0;
    }

    .picker-button .material-icons {
      font-size: 22px;
    }
  }
</style>
