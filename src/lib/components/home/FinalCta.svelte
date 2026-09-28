<script lang="ts">
  import PlayStoreButton from '../PlayStoreButton.svelte';

  export let content: {
    title: string;
    note: string;
  };
  export let trust: {
    items: {
      icon: string;
      title: string;
      text: string;
      link?: { href: string; label: string };
    }[];
  } | undefined = undefined;
</script>

<section class="final-cta section" aria-labelledby="final-cta-title">
  <div class="container">
    <div class="cta-panel">
      <h2 id="final-cta-title" class="cta-title">{content.title}</h2>
      <div class="cta-action">
        <PlayStoreButton position="footer" />
        <p class="cta-note">{content.note}</p>
      </div>

      {#if trust?.items?.length}
        <ul class="trust-list">
          {#each trust.items as item}
            <li class="trust-item">
              <span class="trust-icon" aria-hidden="true">
                <span class="material-icons">{item.icon}</span>
              </span>
              <div>
                <p class="trust-title">{item.title}</p>
                <p class="trust-text">
                  {item.text}
                  {#if item.link}
                    <a href={item.link.href}>{item.link.label}</a>
                  {/if}
                </p>
              </div>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</section>

<style>
  .cta-panel {
    padding: 40px 24px 32px;
    border: 1px solid var(--color-card-border);
    border-radius: 24px;
    background:
      radial-gradient(ellipse 70% 60% at 50% 0%, rgba(94, 224, 143, 0.16), transparent 70%),
      var(--color-card);
    text-align: center;
  }

  .cta-title {
    max-width: 18em;
    margin: 0 auto 24px;
    font-size: clamp(1.6rem, 3.5vw, 2.1rem);
    line-height: 1.2;
    color: var(--color-body);
    text-wrap: balance;
  }

  .cta-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .cta-note {
    margin: 0;
    font-size: 0.875rem;
    color: var(--color-secondary);
  }

  .trust-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 36px 0 0;
    padding: 28px 0 0;
    border-top: 1px solid var(--color-card-border);
    list-style: none;
    text-align: left;
  }

  .trust-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin: 0;
  }

  .trust-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(94, 224, 143, 0.12);
    color: var(--color-primary);
  }

  .trust-icon .material-icons {
    font-size: 20px;
  }

  .trust-title {
    margin: 0 0 2px;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.35;
    color: var(--color-body);
  }

  .trust-text {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.45;
    color: var(--color-secondary);
  }

  .trust-text a {
    color: var(--color-primary);
    white-space: nowrap;
  }

  @media (min-width: 900px) {
    .cta-panel {
      padding: 56px 48px 40px;
    }

    .trust-list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 32px;
    }
  }
</style>
