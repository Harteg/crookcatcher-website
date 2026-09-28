<script lang="ts">
  export let eyebrow = '';
  export let title: string;
  export let lead = '';
</script>

<header class="page-hero">
  {#if eyebrow}
    <p class="page-eyebrow">{eyebrow}</p>
  {/if}
  <h1 class="page-title">{title}</h1>
  {#if lead}
    <p class="page-lead">{lead}</p>
  {/if}
  <slot />
</header>

<style>
  .page-hero {
    padding: 48px 0 32px;
  }

  .page-eyebrow {
    display: inline-block;
    margin: 0 0 16px;
    padding: 5px 12px;
    border: 1px solid rgba(94, 224, 143, 0.35);
    border-radius: 999px;
    background: rgba(94, 224, 143, 0.12);
    color: var(--color-primary);
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .page-title {
    margin: 0;
    font-size: clamp(2rem, 5vw, 2.75rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: var(--color-body);
    text-wrap: balance;
  }

  .page-lead {
    max-width: 36em;
    margin: 14px 0 0;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-secondary);
    text-wrap: pretty;
  }

  @media (min-width: 900px) {
    .page-hero {
      padding: 72px 0 40px;
    }
  }
</style>
