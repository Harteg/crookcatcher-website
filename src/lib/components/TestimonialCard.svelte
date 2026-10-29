<script lang="ts">
  import { page } from '$app/stores';
  import { LOCALE_META } from '$lib/i18n';

  export let text: string;
  export let author: string;
  export let date: string = '';
  export let source = 'Google Play';
  export let readMoreLabel = 'Read more';
  export let readLessLabel = 'Show less';

  const CLAMP_THRESHOLD = 230;

  let open = false;

  $: truncatable = text.length > CLAMP_THRESHOLD;

  function formatDate(value: string) {
    if (!value) return '';
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString(LOCALE_META[$page.data.locale as keyof typeof LOCALE_META].htmlLang, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<article class="testimonial-card">
  <div class="testimonial-stars" role="img" aria-label={$page.data.ui.starsLabel}>★★★★★</div>

  <blockquote class="testimonial-quote">
    <p class="testimonial-text" class:clamped={truncatable && !open}>{text}</p>
  </blockquote>

  {#if truncatable}
    <button
      type="button"
      class="read-more"
      aria-expanded={open}
      on:click={() => (open = !open)}
    >
      {open ? readLessLabel : readMoreLabel}
    </button>
  {/if}

  <footer class="testimonial-footer">
    <div class="author-meta">
      <p class="testimonial-author">{author}</p>
      <p class="testimonial-date">
        {source}{#if date}<span class="sep" aria-hidden="true">·</span>{formatDate(date)}{/if}
      </p>
    </div>
  </footer>
</article>

<style>
  .testimonial-card {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    border-left: 2px solid var(--color-card-border);
    color: var(--color-body);
  }

  .testimonial-stars {
    margin-bottom: 12px;
    font-size: 0.9375rem;
    letter-spacing: 2px;
    line-height: 1;
    color: #e2b33c;
  }

  .testimonial-quote {
    margin: 0;
    padding: 0;
    border: none;
  }

  .testimonial-text {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-body);
  }

  .testimonial-text.clamped {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    align-self: flex-start;
    margin-top: 8px;
    padding: 0;
    border: none;
    background: none;
    color: var(--color-primary);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
  }

  .read-more:hover {
    text-decoration: underline;
  }

  .testimonial-footer {
    margin-top: 16px;
  }

  .testimonial-author {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-body);
  }

  .testimonial-date {
    margin: 2px 0 0;
    font-size: 0.8125rem;
    line-height: 1.3;
    color: var(--color-secondary);
  }

  .sep {
    margin: 0 6px;
  }
</style>
