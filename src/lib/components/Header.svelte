<script lang="ts">
  import { page } from '$app/stores';
  import { locale } from 'svelte-i18n';
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  import { setLocale } from '$lib/i18n';

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' }
  ];

  async function switchLanguage(langCode: string) {
    const currentPath = $page.url.pathname;
    const newPath = currentPath.replace(/^\/(en|fr)/, '');
    await setLocale(langCode);
    goto(`/${langCode}${newPath}`);
  }
</script>

<header class="header-fixed">
  <div class="header-row">
    <a href="/{$locale}" class="header-button header-logo">
      <span class="cc-font">CrookCatcher</span>
    </a>
    <div class="spacer"></div>
    <!-- <a 
      class="header-button" 
      href="/{$locale}/blog" 
      title="Blog"
      class:active={$page.url.pathname.includes('/blog')}
    >
      {$_('nav.blog')}
    </a> -->
    <a 
      class="header-button" 
      href="/{$locale}/help" 
      title="Help"
      class:active={$page.url.pathname.includes('/help')}
    >
      {$_('nav.help')}
    </a>
    <div class="lang-switcher">
      {#each languages as { code, name }}
        <button
          class="lang-button"
          class:active={$locale === code}
          on:click={() => switchLanguage(code)}
        >
          {name}
        </button>
      {/each}
    </div>
  </div>
</header>

<style>
  .header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 64px;
    background: var(--color-dark-bg);
    z-index: 1000;
    border-bottom: var(--border);
  }

  @media (max-width: 640px) {
    .header-fixed {
      position: relative;
    }
  }


  
  .header-row {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 16px;
    gap: 16px;
    margin: 0 auto;
  }

  .spacer {
    flex: 1;
  }

  .header-button {
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    text-decoration: none;
    height: 100%;
    font-size: 0.9rem;
    transition: background-color 0.2s;
    font-family: 'NexaBold', 'Helvetica', 'Arial', sans-serif;
    position: relative;
  }

  .header-button:hover {
    opacity: 1;
  }

  .header-button::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 8px;
    right: 8px;
    height: 3px;
    background: var(--color-primary);
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.2s, width 0.2s;
    width: 0;
    margin: 0 auto;
  }

  .header-button:hover::after {
    opacity: 1;
    width: calc(100% - 16px);
  }

  .header-button.active {
    color: var(--color-primary);
  }

  .header-button.active::after {
    opacity: 1;
    width: calc(100% - 16px);
  }

  .header-button .cc-font {
    font-size: 1.2rem;
  }

  .lang-switcher {
    display: flex;
    gap: 4px;
    margin-left: 16px;
    padding: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }

  .lang-button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.2s;
  }

  .lang-button:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }

  .lang-button.active {
    background: var(--color-primary);
    color: var(--color-dark-bg);
  }

  @media (max-width: 640px) {
    .header-fixed {
      position: relative;
      height: auto;
      padding: 8px 0;
    }
    
    .header-row {
      flex-wrap: wrap;
      padding: 8px 16px;
      gap: 8px;
      max-width: var(--content-width);
      justify-content: center;
    }

    .header-logo {
      width: 100%;
      justify-content: center;
      margin-bottom: 8px;
    }

    .header-logo .cc-font {
      font-size: 2rem;
    }

    .header-button:not(:first-child) {
      flex: 0 1 auto;
    }

    .spacer {
      display: none;
    }

    .lang-switcher {
      align-self: center;
    }
  }
</style>
