<script lang="ts">
  import TestimonialCard from '../TestimonialCard.svelte';
  import PlayStoreButton from '../PlayStoreButton.svelte';

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

  const INITIAL = 3;
  let expanded = false;

  $: visible = expanded ? reviews : reviews.slice(0, INITIAL);
  $: hasMore = reviews.length > INITIAL;
</script>

<section class="testimonials section" aria-labelledby="testimonials-title">
  <div class="container">
    <header class="testimonials-header">
      <div>
        <h2 id="testimonials-title" class="section-title">{content.title}</h2>
        <p class="testimonials-subtitle">{content.subtitle}</p>
      </div>
      <div class="header-cta">
        <PlayStoreButton position="testimonials" />
      </div>
    </header>

    <div class="testimonials-grid">
      {#each visible as review (review.author)}
        <TestimonialCard
          text={review.text}
          author={review.author}
          date={review.date}
          source={content.source}
          readMoreLabel={content.readMore}
          readLessLabel={content.readLess}
        />
      {/each}
    </div>

    <div class="testimonials-footer">
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
  .testimonials-header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 28px;
  }

  .section-title {
    margin: 0;
  }

  .testimonials-subtitle {
    margin: 8px 0 0;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-secondary);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: stretch;
  }

  .testimonials-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
  }

  .show-more {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 10px 14px 10px 18px;
    border: 1px solid var(--color-card-border);
    border-radius: 999px;
    background: transparent;
    color: var(--color-body);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.15s ease, color 0.15s ease;
  }

  .show-more .material-icons {
    font-size: 20px;
  }

  .show-more:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .reviews-note {
    margin: 0;
    text-align: center;
    font-size: 0.8125rem;
    color: var(--color-secondary);
  }

  @media (min-width: 900px) {
    .testimonials-header {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      gap: 32px;
    }

    .header-cta {
      flex-shrink: 0;
    }

    .testimonials-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
