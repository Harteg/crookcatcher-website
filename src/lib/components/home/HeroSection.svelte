<script lang="ts">
  import PlayStoreButton from '../PlayStoreButton.svelte';

  export let content: {
    pill: string;
    headline: string;
    headlineSecond: string;
    headlineSecondHighlight?: string;
    subline: string;
    playNote: string;
    heroImage: { src: string; alt: string };
    stats: { value: string; label: string }[];
  };

  function highlight(text: string, phrase?: string) {
    if (!phrase || !text.includes(phrase)) return text;
    return text.replace(phrase, `<span class="accent">${phrase}</span>`);
  }
</script>

<section class="hero section" id="section_CC">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="hero-pill">{content.pill}</p>
      <h1 class="hero-title">
        <span class="hero-line">{content.headline}</span>
        <span class="hero-line hero-line-second">
          {@html highlight(content.headlineSecond, content.headlineSecondHighlight)}
        </span>
      </h1>
      <p class="hero-subline">{content.subline}</p>

      <div class="hero-cta">
        <PlayStoreButton position="hero" />
        <p class="play-note">
          <span class="material-icons" aria-hidden="true">check_circle</span>
          {content.playNote}
        </p>
      </div>
    </div>

    <div class="hero-visual">
      <img
        src={content.heroImage.src}
        alt={content.heroImage.alt}
        width="990"
        height="1024"
        class="hero-alert-img"
        fetchpriority="high"
      />
    </div>

    <dl class="hero-stats">
      {#each content.stats as stat}
        <div class="stat">
          <dt class="stat-value">
            {#if stat.value.includes('★')}
              <span class="stat-rating">{stat.value.replace('★', '').trim()}<svg class="stat-star" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                />
              </svg><span class="sr-only">stars</span></span>
            {:else}
              {stat.value}
            {/if}
          </dt>
          <dd class="stat-label">{stat.label}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  .hero {
    padding-top: 32px;
    padding-bottom: 48px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-pill {
    display: inline-block;
    margin: 0 0 18px;
    padding: 5px 12px;
    border-radius: 999px;
    background: rgba(94, 224, 143, 0.12);
    border: 1px solid rgba(94, 224, 143, 0.35);
    color: var(--color-primary);
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    line-height: 1.3;
  }

  .hero-title {
    margin: 0 0 18px;
    font-size: clamp(2.1rem, 6vw, 3.1rem);
    line-height: 1.08;
    letter-spacing: -0.01em;
    color: var(--color-body);
  }

  .hero-line {
    display: block;
    text-wrap: balance;
  }

  .hero-line-second {
    margin-top: 0.3em;
    font-size: 0.6em;
    line-height: 1.2;
    color: var(--color-body);
  }

  .hero-subline {
    margin: 0 0 28px;
    max-width: 32em;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-secondary);
    text-wrap: pretty;
  }

  .hero-cta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .play-note {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.4;
    color: var(--color-secondary);
  }

  .play-note .material-icons {
    font-size: 16px;
    color: var(--color-primary);
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 16px;
    margin: 0;
    padding: 20px 0 0;
    border-top: 1px solid var(--color-card-border);
  }

  .stat {
    margin: 0;
    min-width: 0;
  }

  .stat-value {
    font-family: 'NexaBold', sans-serif;
    font-size: 1.25rem;
    line-height: 1.15;
    white-space: nowrap;
    color: var(--color-body);
  }

  .stat-rating {
    display: inline-flex;
    align-items: center;
    gap: 0.12em;
  }

  .stat-star {
    width: 1.1em;
    height: 1.1em;
    margin-top: -0.1em;
    fill: #e8c84a;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .stat-label {
    margin: 4px 0 0;
    font-size: 0.8125rem;
    line-height: 1.35;
    color: var(--color-secondary);
    text-wrap: balance;
  }

  .hero-visual {
    display: flex;
    justify-content: center;
  }

  .hero-alert-img {
    width: 100%;
    max-width: 360px;
    height: auto;
    border-radius: 20px;
    box-shadow:
      0 0 0 1px var(--color-card-border),
      0 24px 60px rgba(0, 0, 0, 0.5),
      0 0 80px rgba(94, 224, 143, 0.06);
  }

  /* Mobile: copy + Play badge first so it stays above the fold */
  .hero-copy { order: 1; }
  .hero-visual { order: 2; }
  .hero-stats { order: 3; }

  @media (min-width: 900px) {
    .hero {
      padding-top: 64px;
      padding-bottom: 64px;
    }

    .hero-grid {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
      grid-template-rows: auto auto;
      column-gap: 56px;
      row-gap: 40px;
      align-items: center;
    }

    .hero-copy {
      grid-column: 1;
      grid-row: 1;
    }

    .hero-visual {
      grid-column: 2;
      grid-row: 1 / span 2;
      justify-content: flex-end;
    }

    .hero-stats {
      grid-column: 1;
      grid-row: 2;
      align-self: start;
      grid-template-columns: repeat(4, auto);
      justify-content: start;
      gap: 0;
      padding-top: 24px;
    }

    .stat {
      max-width: 11em;
      padding: 0 24px;
      border-left: 1px solid var(--color-card-border);
    }

    .stat:first-child {
      padding-left: 0;
      border-left: none;
    }

    .hero-alert-img {
      max-width: 420px;
    }
  }
</style>
