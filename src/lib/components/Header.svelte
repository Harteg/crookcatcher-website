<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let menuOpen = false;
  let heroBadgeVisible = false;
  let isMobile = false;

  $: ctaDeferred = isMobile && heroBadgeVisible;

  onMount(() => {
    const heroBadge = document.querySelector('.hero .play-store-link');
    if (!heroBadge) return;

    const mobileQuery = window.matchMedia('(max-width: 640px)');
    const updateMobile = () => (isMobile = mobileQuery.matches);
    updateMobile();
    mobileQuery.addEventListener('change', updateMobile);

    const observer = new IntersectionObserver(
      ([entry]) => (heroBadgeVisible = entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px' }
    );
    observer.observe(heroBadge);

    return () => {
      observer.disconnect();
      mobileQuery.removeEventListener('change', updateMobile);
    };
  });

  const playUrl =
    'https://play.google.com/store/apps/details?id=com.harteg.crookcatcher&referrer=utm_source=website&utm_medium=button';

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function trackGtag() {
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('event', 'play_store_button_click', {
        event_category: 'Play Store Button',
        event_label: 'website',
        button_position: 'header',
        value: 1,
        transport_type: 'beacon'
      });
    }
  }
</script>

<header class="header-fixed">
  <div class="header-row">
    <a href="/" class="brand" on:click={closeMenu}>
      <img src="/images/crookcatcher_icon.svg" alt="" width="20" height="27" class="brand-icon" />
      <span class="cc-font brand-name">CrookCatcher</span>
    </a>

    <nav class="nav-menu" class:open={menuOpen} aria-label="Main">
      <a
        class="nav-link"
        href="/blog"
        class:active={$page.url.pathname.includes('/blog')}
        on:click={closeMenu}
      >
        Guides and Tutorials
      </a>
      <a
        class="nav-link"
        href="/help"
        class:active={$page.url.pathname.includes('/help')}
        on:click={closeMenu}
      >
        Help
      </a>
    </nav>

    <a
      class="header-cta"
      class:deferred={ctaDeferred}
      aria-hidden={ctaDeferred ? 'true' : undefined}
      tabindex={ctaDeferred ? -1 : undefined}
      href={playUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-fast-goal="play_store_click"
      data-fast-goal-position="header"
      data-fast-goal-utm-source="website"
      on:click={trackGtag}
    >
      Get the app
    </a>

    <button
      class="hamburger-button"
      type="button"
      on:click={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
    >
      <span class="material-icons">{menuOpen ? 'close' : 'menu'}</span>
    </button>
  </div>
</header>

<style>
  .header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    z-index: 1000;
    background: rgba(14, 19, 16, 0.82);
    backdrop-filter: saturate(140%) blur(12px);
    -webkit-backdrop-filter: saturate(140%) blur(12px);
    border-bottom: 1px solid var(--color-card-border);
  }

  .header-row {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 100%;
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 0 24px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: auto;
    color: var(--color-body);
  }

  .brand:hover {
    opacity: 1;
  }

  .brand-icon {
    display: block;
    width: 20px;
    height: auto;
  }

  .brand-name {
    font-size: 1.15rem;
    line-height: 1;
    padding-top: 2px;
    color: var(--color-body);
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .nav-link {
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-secondary);
    transition: color 0.15s ease, background-color 0.15s ease;
  }

  .nav-link:hover {
    opacity: 1;
    color: var(--color-body);
    background: rgba(255, 255, 255, 0.04);
  }

  .nav-link.active {
    color: var(--color-body);
    background: var(--color-card);
  }

  .header-cta {
    margin-left: 8px;
    padding: 8px 16px;
    border-radius: 999px;
    background: var(--color-primary);
    color: var(--color-on-primary);
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
    transition: filter 0.15s ease, opacity 0.2s ease, transform 0.2s ease;
  }

  .header-cta:hover {
    opacity: 1;
    filter: brightness(1.08);
  }

  .hamburger-button {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 4px;
    margin-right: -8px;
    padding: 0;
    border: none;
    border-radius: 8px;
    background: none;
    color: var(--color-body);
    cursor: pointer;
  }

  .hamburger-button .material-icons {
    font-size: 26px;
  }

  @media (max-width: 640px) {
    .header-row {
      padding: 0 16px;
    }

    .nav-menu {
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      max-height: 0;
      overflow: hidden;
      background: var(--color-dark-bg);
      transition: max-height 0.25s ease-out;
    }

    .nav-menu.open {
      max-height: 240px;
      padding: 8px 8px 12px;
      border-bottom: 1px solid var(--color-card-border);
    }

    .nav-link {
      padding: 14px 12px;
      font-size: 1rem;
    }

    .hamburger-button {
      display: flex;
    }
  }

  .header-cta.deferred {
    opacity: 0;
    transform: translateY(-4px);
    pointer-events: none;
  }
</style>
