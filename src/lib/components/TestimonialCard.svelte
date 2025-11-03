<script lang="ts">
  export let text: string;
  export let author: string;
  export let date: string;
  export let highlighted: boolean = false;
</script>

<div class="testimonial-card glass-card" class:highlighted>
  <div class="testimonial-header">
    <span class="material-symbols-outlined quote-icon">format_quote</span>
    <div class="testimonial-stars">★★★★★</div>
  </div>
  <p class="testimonial-text">{text}</p>
  <div class="testimonial-author-info">
    <div class="testimonial-author-details">
      <p class="testimonial-author">{author}</p>
      <!-- <p class="testimonial-date">{date}</p> -->
    </div>
  </div>
</div>

<style>
  .testimonial-card {
    padding: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    color: #fff;
  }

  .testimonial-card.highlighted {
    border: 3px solid var(--color-primary);
    padding: 48px 40px;
    min-height: 420px;
    /* color: var(--color-on-primary); */
  }

  .testimonial-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .quote-icon {
    font-size: 72px;
    font-weight: 300;
    line-height: 0.8;
  }

  .highlighted .quote-icon {
    font-size: 96px;
  }

  .testimonial-stars {
    font-size: 1.5rem;
    letter-spacing: 2px;
    line-height: 1;
    margin-top: 8px;
    color: gold;
  }

  .testimonial-text {
    line-height: 1.7;
    font-size: 1.25rem;
    margin-bottom: 32px;
    flex-grow: 1;
    font-weight: 400;
  }

  .testimonial-author-info {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: auto;
  }

  .testimonial-author-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .testimonial-author {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }

  .highlighted .testimonial-author {
    font-size: 1.05rem;
  }

  .testimonial-date {
    font-size: 0.9rem;
    margin: 0;
    font-weight: 400;
  }

  .highlighted .testimonial-date {
    font-size: 0.95rem;
  }

  @media (max-width: 840px) {
    .testimonial-card {
      padding: 32px 24px;
    }

    .testimonial-card.highlighted {
      min-height: auto;
      padding: 32px 24px;
    }

    .quote-icon {
      font-size: 56px;
    }

    .highlighted .quote-icon {
      font-size: 72px;
    }

    .testimonial-header {
      margin-bottom: 20px;
    }

    .testimonial-text {
      font-size: 0.95rem;
      margin-bottom: 24px;
    }

    .highlighted .testimonial-text {
      font-size: 1.05rem;
      margin-bottom: 28px;
    }

    .testimonial-author-info {
      gap: 12px;
    }
  }
</style>

