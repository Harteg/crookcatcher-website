<script lang="ts">
  export let text: string;
  export let author: string;
  export let date: string = '';
  export let source = 'Google Play';
  export let readMoreLabel = 'Read more';
  export let readLessLabel = 'Show less';

  const CLAMP_THRESHOLD = 230;

  let open = false;

  $: truncatable = text.length > CLAMP_THRESHOLD;
  $: initial = author.trim().charAt(0).toUpperCase();

  function formatDate(value: string) {
    if (!value) return '';
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<article class="testimonial-card">
  <div class="testimonial-stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>

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
    <span class="avatar" aria-hidden="true">{initial}</span>
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
    height: 100%;
    padding: 24px;
    border: 1px solid var(--color-card-border);
    border-radius: var(--border-radius);
    background: var(--color-card);
    color: var(--color-body);
  }

  .testimonial-stars {
    margin-bottom: 14px;
    font-size: 1rem;
    letter-spacing: 2px;
    line-height: 1;
    color: #e8c84a;
  }

  .testimonial-quote {
    margin: 0;
    padding: 0;
    border: none;
  }

  .testimonial-text {
    margin: 0;
    font-size: 1rem;
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
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: auto;
    padding-top: 20px;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(94, 224, 143, 0.14);
    color: var(--color-primary);
    font-family: 'NexaBold', sans-serif;
    font-size: 0.9375rem;
  }

  .author-meta {
    min-width: 0;
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
