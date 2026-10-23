<script lang="ts">
    import { page } from '$app/stores';


    export let title: string;
    export let description: string = '';

    $: t = $page.data.ui.blog;

    const shareLinks = [
      {
        name: 'X',
        icon: '/images/social/x.svg',
        getUrl: () => `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent($page.url.href)}`
      },
      {
        name: 'LinkedIn',
        icon: '/images/social/linkedin.svg',
        getUrl: () => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent($page.url.href)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`
      }
    ];

    function handleEmailShare() {
      window.location.href = 'mail' + 'to:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(description + '\n\n' + $page.url.href);
    }
  </script>

  <div class="share-buttons">
    <span class="share-text">{t.share}</span>
    <div class="buttons">
      {#each shareLinks as link}
        <a
          href={link.getUrl()}
          target="_blank"
          rel="noopener noreferrer"
          class="share-button"
          aria-label={t.shareOn.replace('{name}', link.name)}
        >
          <img src={link.icon} alt={link.name} width="20" height="20" />
        </a>
      {/each}
      <button
        on:click={handleEmailShare}
        class="share-button"
        aria-label={t.shareEmail}
      >
        <img src="/images/social/email.svg" alt="Email" width="20" height="20" />
      </button>
    </div>
  </div>
  
  <style>
    .share-buttons {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .share-text {
      color: var(--color-secondary);
      font-size: 0.9rem;
    }
    
    .buttons {
      display: flex;
      gap: 8px;
    }
    
    .share-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: var(--color-cc-dark-bg);
      transition: all 0.2s ease;
      border: 1px solid var(--color-divider);
      padding: 0;
      cursor: pointer;
    }

    /* The icons are white SVGs; turn them dark on light pages. */
    .share-button img {
      filter: invert(var(--icon-invert));
    }
    
    .share-button:hover {
      transform: translateY(-2px);
      background: var(--color-surface-tint);
    }
    
    .share-button img {
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }
    
    .share-button:hover img {
      opacity: 1;
    }
  </style>