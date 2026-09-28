<script lang="ts">
  export let question: string;
  export let answer = '';
  export let id: string;
  export let headingLevel: 2 | 3 | 4 = 3;

  let isOpen = false;
</script>

<div class="faq-item" class:open={isOpen}>
  <svelte:element this={`h${headingLevel}`} class="faq-heading">
    <button
      id="{id}-question"
      class="faq-question"
      type="button"
      aria-expanded={isOpen}
      aria-controls="{id}-answer"
      on:click={() => (isOpen = !isOpen)}
    >
      <span id="{id}-label" class="faq-question-text">{question}</span>
      <span class="faq-icon" aria-hidden="true">
        <span class="material-icons">expand_more</span>
      </span>
    </button>
  </svelte:element>
  <div
    id="{id}-answer"
    class="faq-answer"
    role="region"
    aria-labelledby="{id}-label"
    inert={!isOpen}
  >
    <div class="faq-answer-inner">
      <div class="faq-answer-content">
        <slot><p>{answer}</p></slot>
      </div>
    </div>
  </div>
</div>

<style>
  .faq-heading {
    margin: 0;
    font-size: inherit;
  }

  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    padding: 18px 20px;
    border: none;
    background: none;
    color: inherit;
    text-align: left;
    cursor: pointer;
  }

  .faq-question-text {
    flex: 1;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.0625rem;
    font-weight: 600;
    line-height: 1.4;
    color: var(--color-body);
    transition: color 0.15s ease;
  }

  .faq-question:hover .faq-question-text,
  .open .faq-question-text {
    color: var(--color-primary);
  }

  .faq-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(94, 224, 143, 0.1);
    color: var(--color-primary);
    transition: transform 0.2s ease, background-color 0.2s ease;
  }

  .faq-icon .material-icons {
    font-size: 20px;
  }

  .open .faq-icon {
    transform: rotate(180deg);
    background: rgba(94, 224, 143, 0.18);
  }

  .faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.25s ease;
  }

  .open .faq-answer {
    grid-template-rows: 1fr;
  }

  .faq-answer-inner {
    overflow: hidden;
  }

  .faq-answer-content {
    padding: 0 64px 20px 20px;
  }

  .faq-answer-content :global(p),
  .faq-answer-content :global(li) {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-secondary);
  }

  .faq-answer-content :global(p + p) {
    margin-top: 10px;
  }

  .faq-answer-content :global(ul) {
    margin: 0;
    padding-left: 20px;
    list-style: disc;
  }

  .faq-answer-content :global(li + li) {
    margin-top: 8px;
  }

  .faq-answer-content :global(li::marker) {
    color: var(--color-primary);
  }

  @media (max-width: 640px) {
    .faq-question {
      padding: 16px;
    }

    .faq-answer-content {
      padding: 0 16px 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .faq-answer,
    .faq-icon {
      transition: none;
    }
  }
</style>
