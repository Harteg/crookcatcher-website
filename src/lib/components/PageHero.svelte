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
    margin: 0 0 12px;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-primary);
  }

  .page-title {
    margin: 0;
    font-size: clamp(2.2rem, 5vw, 3.25rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--color-body);
    text-wrap: balance;
  }

  .page-lead {
    max-width: 34em;
    margin: 16px 0 0;
    font-size: 1.15rem;
    line-height: 1.6;
    color: var(--color-secondary);
    text-wrap: pretty;
  }

  @media (min-width: 900px) {
    .page-hero {
      padding: 80px 0 56px;
    }
  }
</style>
