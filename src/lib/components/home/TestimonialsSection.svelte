<script lang="ts">
  import { page } from '$app/stores';
  import { LOCALE_META } from '$lib/i18n';
  import TestimonialCard from '../TestimonialCard.svelte';

  export let content: {
    title: string;
    subtitle: string;
    note: string;
    showMore: string;
    showLess: string;
    readMore?: string;
    readLess?: string;
    source?: string;
  };
  export let reviews: { text: string; author: string; date: string }[];

  // The first review is the featured story; the rest are cards, three at first.
  const INITIAL = 3;
  let expanded = false;

  $: [featured, ...others] = reviews;
  $: visible = expanded ? others : others.slice(0, INITIAL);
  $: hasMore = others.length > INITIAL;
  $: lang = LOCALE_META[$page.data.locale as keyof typeof LOCALE_META].htmlLang;

  function formatDate(value: string) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString(lang, { year: 'numeric', month: 'short', day: 'numeric' });
  }
</script>

<section class="reviews" aria-labelledby="reviews-title">
  <div class="container">
    <header class="reviews-header">
      <h2 id="reviews-title">{content.title}</h2>
      <p>{content.subtitle}</p>
    </header>

    {#if featured}
      <figure class="featured">
        <div class="stars" role="img" aria-label={$page.data.ui.starsLabel}>★★★★★</div>
        <blockquote>
          <p>{featured.text}</p>
        </blockquote>
        <figcaption>
          <strong>{featured.author}</strong>
          <span>{content.source}{#if featured.date} · {formatDate(featured.date)}{/if}</span>
        </figcaption>
      </figure>
    {/if}

    <div class="quotes">
      {#each visible as review (review.author)}
        <div class="quote">
          <TestimonialCard
            text={review.text}
            author={review.author}
            date={review.date}
            source={content.source}
            readMoreLabel={content.readMore}
            readLessLabel={content.readLess}
          />
        </div>
      {/each}
    </div>

    <div class="quotes-footer">
      {#if hasMore}
        <button
          type="button"
          class="show-more"
          aria-expanded={expanded}
          on:click={() => (expanded = !expanded)}
        >
          {expanded ? content.showLess : content.showMore}
          <span class="material-icons" aria-hidden="true">
            {expanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      {/if}
      <p class="reviews-note">{content.note}</p>
    </div>
  </div>
</section>

<style>
  .reviews {
    padding: 96px 0;
    background: #f1f8f4;
  }

  .reviews-header {
    max-width: 760px;
    margin: 0 auto 48px;
    text-align: center;
  }

  h2 {
    margin: 0;
    font-size: clamp(2.4rem, 6vw, 4.5rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    color: var(--color-primary);
    text-wrap: balance;
  }

  .reviews-header p {
    margin: 16px 0 0;
    font-size: 1.1rem;
    color: var(--color-secondary);
  }

  /* One real story, large */
  .featured {
    max-width: 880px;
    margin: 0 auto 56px;
    text-align: center;
  }

  .stars {
    margin-bottom: 20px;
    font-size: 1.25rem;
    letter-spacing: 4px;
    color: #e2b33c;
  }

  .featured blockquote {
    margin: 0;
    padding: 0;
    border: none;
  }

  .featured blockquote p {
    margin: 0;
    font-size: clamp(1.4rem, 2.8vw, 2rem);
    font-weight: 600;
    line-height: 1.4;
    color: var(--color-body);
    text-wrap: balance;
  }

  .featured figcaption {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 24px;
    font-size: 0.9375rem;
    color: var(--color-secondary);
  }

  .featured figcaption strong {
    font-family: inherit;
    font-size: 1rem;
    color: var(--color-body);
  }

  .quotes {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: start;
  }

  .quote {
    padding: 24px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 1px 0 rgba(22, 32, 26, 0.04), 0 12px 32px -20px rgba(22, 32, 26, 0.25);
  }

  .quote :global(.testimonial-card) {
    padding-left: 0;
    border-left: none;
  }

  .quotes-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 32px;
  }

  .show-more {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 10px 14px 10px 18px;
    border: 1px solid var(--color-card-border);
    border-radius: 999px;
    background: #fff;
    color: var(--color-body);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.15s ease;
  }

  .show-more .material-icons {
    font-size: 20px;
  }

  .show-more:hover {
    border-color: var(--color-secondary);
  }

  .reviews-note {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--color-secondary);
  }

  @media (min-width: 900px) {
    .reviews {
      padding: 144px 0;
    }

    .featured {
      margin-bottom: 80px;
    }

    .quotes {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }
  }
</style>
