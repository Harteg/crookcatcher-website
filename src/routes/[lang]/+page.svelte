<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Features from '$lib/components/Features.svelte';
  import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
  import { _} from 'svelte-i18n';
  import { fly } from 'svelte/transition';

  let isEmailExpanded = false;
</script>

<svelte:head>
  <title>{$_('meta.title')}</title>
  <meta name="description" content={$_('meta.description')}>
</svelte:head>

<header class="app-header">
  <Header />
</header>

<main>
    <div class="container">
      <!-- Header Section -->
      <section class="section hero-section" id="section_CC" style="padding-bottom: 5rem;">
        <div class="text-center" 
            in:fly={{ y: 50, duration: 1000, delay: 200, opacity: 0 }}>
          <!-- <img src="/images/crookcatcher_icon.svg" class="top-section-icon" alt="Crookcatcher icon" /> -->
          <!-- <h1 class="hero-title cc-font">Crook<wbr>Catcher</h1> -->

          <h1 class="hero-title">👋</h1>
          <h1 class="hero-title cc-font">{$_('hero.title')}</h1>
          <p class="hero-subtitle">{@html $_('hero.subtitle')}</p>
          <PlayStoreButton />
        </div>
      </section>

      <!-- Lockscreen Section -->
      <section class="section feature-section" id="section_lockscreen" 
                in:fly={{ y: 50, duration: 1000, delay: 400, opacity: 0 }}>
        <div class="feature-grid">
          <div class="section_text_right feature-text">
            <h2>{@html $_('features.lockscreen')}</h2>
          </div>
          <div class="feature-image">
            <img src="/images/screen_alert_event_shadow.png" 
                alt="Take pictures when the lock pattern is wrong" />
          </div>
        </div>
      </section>

      <!-- GPS Section -->
      <section class="section feature-section" style='overflow: hidden'
                in:fly={{ y: 50, duration: 1000, delay: 600, opacity: 0 }}>
        <div class="feature-grid">
          <div class="section_text_left feature-text">
            <h2>{@html $_('features.gps')}</h2>
          </div>
          <div class="feature-image">
            <img src="/images/ic_earth_dark.svg" 
                alt="Globe showing GPS location tracking capabilities" 
                class="earth-icon" />
          </div>
        </div>
      </section>

      <!-- Email Section -->
      <section class="section feature-section email-section" 
            class:expanded={isEmailExpanded}
            in:fly={{ y: 50, duration: 1000, delay: 800, opacity: 0 }}>
        <div class="feature-grid">
          <div class="section_text_left feature-text">
            <h2>{@html $_('features.email')}</h2>
          </div>
          <div class="feature-image not-mobile">
            <img src="/images/paper-plane.svg" style="max-width: 300px;" alt="Email illustration">
          </div>
        </div>
        <img src="/images/blog/email_preview_sm.jpg" alt="Email preview" class="email-preview">
        <button 
          class="expand-button"
          on:click|stopPropagation={() => isEmailExpanded = !isEmailExpanded}>
          {$_('features.email_expand_btn')}
        </button>
      </section>
    </div>

    <!-- <div class="container text-center">
      <h2 style="margin-top: 64px; font-size: 26px;">
        CrookCatcher starts working silently in the backgorund when the wrong password is entered. Although receiving pictures by email is the most important feature
      </h2>
    </div> -->

    <!-- Screenshots Section -->
    <section class="section" style="padding: 0;">
      <div class="screenshots center">
        <img alt="CrookCatcher settings" class="screenshot" src="/images/screen_config.png" loading="lazy">
        <img alt="Main screen of CrookCatcher" class="screenshot" src="/images/screen_home.png" loading="lazy">
        <img alt="List of captured pictures" class="screenshot" src="/images/screen_crooks.png" loading="lazy">
      </div>
    </section>

    <div class="section-divider" style="margin-top: 128px;"></div>

    <div class="container features-container" style="margin-top: 128px;">
        <section class="features-section text-center">
            <h2 class="section-title cc-font" style="font-size: 2rem">{@html $_('pro.title')}</h2>
            <p class="section-subtitle">{@html $_('pro.subtitle')}</p>
        <Features />
        </section>
    </div>

    <div class="container text-center">
      <p style="font-size: 1.4rem">
        {@html $_('pro.availableInApp')}
      </p>
    </div>

    <div class="section-divider" style="margin-top: 64px;"></div>
    <div class="container">

    <!-- Download Section -->
    <section class="hero-section">
      <div class="text-center">
        <img src="/images/crookcatcher_icon.svg" class="top-section-icon" alt="Crookcatcher icon" />
        <h2 class="hero-title cc-font">Crook<wbr>Catcher</h2>
        <p class="hero-subtitle">{$_('download.subtitle')}</p>
        <PlayStoreButton />
        <div class="social-link-box">
          <a href="https://x.com/CrookCatcherApp" target="_blank">{$_('download.follow')}</a>
        </div>
      </div>
    </section>
  </div>
</main>

<Footer />

<style>
  .feature-image {
    display: flex;
    justify-content: center;
  }

  .feature-image img {
    max-width: 380px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 840px) {
    .feature-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 32px !important;
    }

    .feature-text {
        order: 2 !important;
        text-align: center;
    }

    .feature-image {
        order: 1 !important;
    }
  }

  .social-link-box {
    margin-top: 32px;
  }

  .social-link-box a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 12px 24px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    transition: all 0.2s;
    font-size: 0.9rem;
  }

  .social-link-box a:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  #section_lockscreen {
    padding-bottom: 0;
    padding-top: 0;
    overflow: hidden;
  }

  #section_lockscreen .feature-image{
        margin-top: 20px;
        transform: scale(1.2) translateY(20px);
  }

/* Features */
.feature-section {
    padding: calc(var(--section-spacing) * 0.8) 16px;
    background: var(--color-cc-dark-bg);
    border-radius: var(--border-radius);
    /* box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); */
    margin-bottom: 32px;
    border: 2px solid rgba(255, 255, 255, 0.15);   
}

.feature-section h2 {
    font-size: 26px;
}

.feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
}

.feature-text h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 400;
    color: #fff;
}

/* Screenshots */
.screenshots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px 0;
  margin: 0 auto;
  overflow-x: auto;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}

.screenshots::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

.screenshot {
  height: auto;
  width: 25%;
  border-radius: var(--border-radius);
  /* box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); */
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.15);   
}

/* Common Images */
.top-section-icon {
    width: 180px;
    height: 180px;
    margin: 0 auto 32px;
    display: block;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
}

#section_CC {
    
}

.section-title {
    font-size: 32px;
    margin-bottom: 8px;

}

.section-subtitle {
    font-size: 26px;
    line-height: 1.15;
}

.earth-icon {
    transform: translateY(50px);
    scale: 1;  /* Default for mobile */
}

@media (min-width: 841px) {
    .earth-icon {
        scale: 1.7;  /* Scale up only on desktop */
    }
}


    /* Media Queries */
    @media (max-width: 840px) {
    .section-title {
        font-size: 32px;
        margin-bottom: 8px;
    }

    .section-subtitle {
        font-size: 20px;
    }


    .feature-section {
        margin-bottom: 16px;
    }

    #section_CC {
        transform: none;
        scale: 1;
    }

    .screenshots {
        justify-content: flex-start;
        padding: 0px 16px;
        gap: 8px;
    }

    .screenshot {
        height: auto;
        width: 85%;
        flex-shrink: 0;
    }

    .feature-image img {
      max-width: 300px;
    }
    #section_lockscreen {
      padding-bottom: 10%;
      padding-top: 10%;
    }

    #section_lockscreen .feature-image{
        margin-top: -40px;
        transform: none;
    }
  }

  :global(.feature-image img) {
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
  }
  
  @media (max-width: 640px) {
    .features-container {
      padding: 0 !important;
    }
  }

  .email-section {
    max-height: 650px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: max-height 1s ease;
  }

  .email-section.expanded {
    max-height: 3000px;
  }

  .email-section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 350px;
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
    pointer-events: none;
    transition: opacity 0.2s ease;
    opacity: 1;
  }

  .email-section.expanded .expand-button {
    display: none;
  }

  .email-section.expanded::after {
    opacity: 0;
  }

  .email-preview {
    margin-top: 32px;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 32px;
  }

  @media (max-width: 841px) {
    .email-section {
      max-height: none;
    }

    .email-preview {
      max-width: 100%;
    }

    .expand-button{
      display: none;
    }

    .email-section::after{
      display: none;
    }
  }

  .expand-button {
    position: absolute;
    bottom: 24px;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: fit-content;
    background: var(--color-dark-green);
    color: var(--color-primary);
    font-weight: 700;
    padding: 8px 24px;
    border-radius: 20px;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

</style>
