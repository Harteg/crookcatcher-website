<script lang="ts">
  import FAQItem from '../FAQItem.svelte';

  export let content: {
    title: string;
    subtitle?: string;
    helpLink?: { href: string; label: string };
    showAll?: string;
    showLess?: string;
    initialCount?: number;
    items: { question: string; answer: string }[];
  };

  let expanded = false;

  $: initialCount = content.initialCount ?? 8;
  $: hasMore = content.items.length > initialCount;
  $: showAllLabel = (content.showAll ?? 'Show all {count} questions').replace(
    '{count}',
    String(content.items.length)
  );
</script>

<section class="faq section" aria-labelledby="faq-title">
  <div class="container faq-layout">
    <header class="faq-intro">
      <h2 id="faq-title" class="section-title">{content.title}</h2>
      {#if content.subtitle}
        <p class="faq-subtitle">{content.subtitle}</p>
      {/if}
      {#if content.helpLink}
        <a class="help-link" href={content.helpLink.href}>
          {content.helpLink.label}
          <span class="material-icons" aria-hidden="true">arrow_forward</span>
        </a>
      {/if}
    </header>

    <div class="faq-body">
      <div class="faq-list">
        {#each content.items as item, index}
          <div class="faq-slot" hidden={!expanded && index >= initialCount}>
            <FAQItem id="faq-{index}" question={item.question} answer={item.answer} />
          </div>
        {/each}
      </div>

      {#if hasMore}
        <button
          type="button"
          class="show-all"
          aria-expanded={expanded}
          on:click={() => (expanded = !expanded)}
        >
          {expanded ? (content.showLess ?? 'Show fewer questions') : showAllLabel}
          <span class="material-icons" aria-hidden="true">
            {expanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      {/if}
    </div>
  </div>
</section>

<style>
  .faq-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .section-title {
    margin: 0;
    text-wrap: balance;
  }

  .faq-subtitle {
    margin: 12px 0 0;
    max-width: 24em;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-secondary);
  }

  .help-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 16px;
    font-weight: 600;
    color: var(--color-primary);
  }

  .help-link .material-icons {
    font-size: 18px;
    transition: transform 0.15s ease;
  }

  .help-link:hover {
    opacity: 1;
  }

  .help-link:hover .material-icons {
    transform: translateX(3px);
  }

  .faq-list {
    border: 1px solid var(--color-card-border);
    border-radius: var(--border-radius);
    background: var(--color-card);
    overflow: hidden;
  }

  .faq-slot + .faq-slot {
    border-top: 1px solid var(--color-card-border);
  }

  .faq-slot[hidden] {
    display: none;
  }

  .show-all {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 16px;
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

  .show-all .material-icons {
    font-size: 20px;
  }

  .show-all:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  @media (min-width: 900px) {
    .faq-layout {
      grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
      gap: 56px;
      align-items: start;
    }

    .faq-intro {
      position: sticky;
      top: 96px;
    }
  }
</style>
