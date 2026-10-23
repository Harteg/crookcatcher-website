<script lang="ts">
  import { page } from '$app/stores';
  import PlayStoreButton from './PlayStoreButton.svelte';

  /**
   * Download card for guides. Use `guide_mid` right after the section where CrookCatcher
   * fills the gap, and `guide_end` as the last element of the guide.
   */
  export let position: 'guide_mid' | 'guide_end';

  $: t = $page.data.ui.appCta;
</script>

<aside class="app-cta theme-dark" aria-label="CrookCatcher">
  <img class="app-icon" src="/images/ic_launcher_512.png" alt="" width="64" height="64" loading="lazy" />
  <div class="app-body">
    <p class="app-name">CrookCatcher</p>
    <p class="app-title">{t.title}</p>
    <p class="app-text">{t.text}</p>
    <ul class="app-facts">
      {#each t.facts as fact}
        <li>{fact}</li>
      {/each}
    </ul>
    <PlayStoreButton {position} compact />
  </div>
</aside>

<style>
  .app-cta {
    display: flex;
    gap: 20px;
    margin: 40px 0;
    padding: 24px;
    border: 1px solid rgba(94, 224, 143, 0.3);
    border-radius: 16px;
    background:
      radial-gradient(ellipse 70% 90% at 0% 0%, rgba(94, 224, 143, 0.12), transparent 70%),
      var(--color-card);
  }

  .app-cta .app-icon {
    flex: none;
    width: 64px;
    height: 64px;
    border-radius: 16px;
  }

  .app-cta .app-body {
    min-width: 0;
  }

  .app-cta .app-name {
    margin: 0 0 4px;
    font-family: 'NexaBold', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    color: var(--color-primary);
  }

  .app-cta .app-title {
    margin: 0 0 8px;
    font-family: 'NexaBold', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: var(--color-body);
  }

  .app-cta .app-text {
    margin: 0 0 14px;
    color: var(--color-secondary);
    line-height: 1.55;
  }

  .app-cta .app-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 0 18px;
    padding: 0;
    list-style: none;
  }

  .app-cta .app-facts li {
    list-style: none;
    margin: 0;
    padding: 4px 12px;
    border: 1px solid var(--color-card-border);
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-body);
    background: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 600px) {
    .app-cta {
      flex-direction: column;
      gap: 14px;
      padding: 20px;
    }

    .app-cta .app-icon {
      width: 52px;
      height: 52px;
      border-radius: 13px;
    }
  }
</style>
