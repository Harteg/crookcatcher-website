<script lang="ts">
  import { page } from '$app/stores';
  import { playStoreUrl, playTracking } from '$lib/play-store';

  // Official badges we have in static/images/play_badges; anything else falls back to English.
  const BADGES = ['en', 'fr'];

  /** Where the button sits (hero, testimonials, ...); the Play campaign outside guides. */
  export let position: string | undefined = undefined;
  export let compact = false;

  $: tracking = playTracking($page, position);
  $: badge = BADGES.includes($page.data.locale) ? $page.data.locale : 'en';

  function trackGtag() {
    if (typeof window === 'undefined') return;
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('event', 'play_store_button_click', {
        event_category: 'Play Store Button',
        event_label: tracking.campaign,
        button_position: position || 'unknown',
        value: 1,
        transport_type: 'beacon'
      });
    }
  }
</script>

<a
  href={playStoreUrl(tracking.medium, tracking.campaign)}
  class="play-store-link"
  class:compact
  target="_blank"
  rel="noopener noreferrer"
  data-fast-goal="play_store_click"
  data-fast-goal-position={position || 'unknown'}
  data-fast-goal-utm-source={tracking.campaign}
  on:click={trackGtag}
>
  <img
    alt={$page.data.ui.playBadgeAlt}
    src="/images/play_badges/{badge}_badge_web_generic.png"
    class="play-badge"
    width="215"
    height="80"
  />
</a>

<style>
  .play-store-link {
    display: inline-block;
    transition: transform 0.25s ease;
    /* Kill the default blue link focus ring; :focus-visible restores keyboard outline */
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .play-store-link:focus {
    outline: none;
  }

  .play-store-link:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    border-radius: 8px;
  }

  .play-store-link:hover {
    transform: translateY(-2px);
  }

  .play-badge {
    display: block;
    width: auto;
    height: 56px;
    outline: none;
  }

  .compact .play-badge {
    height: 48px;
  }

  @media (max-width: 640px) {
    .play-badge {
      height: 52px;
    }
  }
</style>
