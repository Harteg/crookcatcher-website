<script lang="ts">
  import { page } from '$app/stores';
  
  let menuOpen = false;
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  
  function closeMenu() {
    menuOpen = false;
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</svelte:head>

<header class="header-fixed">
  <div class="header-row">
    <a href="/" class="header-button header-logo">
      <span class="cc-font">CrookCatcher</span>
    </a>
    <div class="spacer"></div>
    <nav class="nav-menu" class:open={menuOpen}>
      <a 
        class="header-button" 
        href="/blog" 
        title="Blog"
        class:active={$page.url.pathname.includes('/blog')}
        on:click={closeMenu}
      >
        Guides and Tutorials
      </a>
      <a 
        class="header-button" 
        href="/help" 
        title="Help"
        class:active={$page.url.pathname.includes('/help')}
        on:click={closeMenu}
      >
        Help
      </a>
    </nav>
    <button 
      class="hamburger-button"
      on:click={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
    >
      <span class="material-icons">{menuOpen ? 'close' : 'menu'}</span>
    </button>
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

  .header-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-button .cc-font {
    font-size: 1.2rem;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .hamburger-button {
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
  }

  .hamburger-button:hover {
    opacity: 0.8;
  }

  .hamburger-button .material-icons {
    font-size: 28px;
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
      min-height: 64px;
      display: flex;
      align-items: center;
    }
    
    .header-row {
      flex-wrap: nowrap;
      padding: 0 16px;
      gap: 0;
      justify-content: space-between;
      position: relative;
      width: 100%;
      min-height: 64px;
    }

    .header-logo {
      flex: 0 0 auto;
      margin-bottom: 0;
      height: 64px;
      display: flex;
      align-items: center;
    }

    .header-logo .cc-font {
      font-size: 1.2rem;
      line-height: 1;
    }

    .spacer {
      display: none;
    }

    .nav-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: var(--color-dark-bg);
      border-top: none;
      padding: 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      gap: 0;
    }

    .nav-menu.open {
      max-height: 300px;
      padding: 8px 0;
      border-top: var(--border);
    }

    .nav-menu .header-button {
      width: 100%;
      padding: 16px;
      height: auto;
      justify-content: flex-start;
      border-radius: 0;
    }

    .nav-menu .header-button::after {
      display: none;
    }

    .nav-menu .header-button.active {
      background: rgba(76, 175, 80, 0.1);
    }

    .hamburger-button {
      display: flex;
      height: 64px;
      align-items: center;
      justify-content: center;
    }

    .lang-switcher {
      align-self: center;
    }
  }
</style>
