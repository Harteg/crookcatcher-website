<script lang="ts">
    import { page } from '$app/stores';


    export let title: string;
    export let description: string = '';

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
    <span class="share-text">Share:</span>
    <div class="buttons">
      {#each shareLinks as link}
        <a
          href={link.getUrl()}
          target="_blank"
          rel="noopener noreferrer"
          class="share-button"
          aria-label="Share on {link.name}"
        >
          <img src={link.icon} alt={link.name} width="20" height="20" />
        </a>
      {/each}
      <button
        on:click={handleEmailShare}
        class="share-button"
        aria-label="Share via Email"
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
      color: rgba(255, 255, 255, 0.7);
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
      border: none;
      padding: 0;
      cursor: pointer;
    }
    
    .share-button:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.1);
    }
    
    .share-button img {
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }
    
    .share-button:hover img {
      opacity: 1;
    }
  </style>