<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Features from '$lib/components/Features.svelte';
  import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
  import RecentPosts from '$lib/components/RecentPosts.svelte';

  export let data;
</script>

<svelte:head>
  <title>CrookCatcher • Protect Your Phone and Catch Intruders</title>
  <meta name="description" content="Find out who's using or snooping on your Android! CrookCatcher snaps a photo of anyone trying to unlock your phone with the wrong password or pattern. Receive their picture and GPS location instantly via email to protect your phone from theft or recover it if stolen.">
  
  <!-- For faster font loading -->
  <link rel="preload" href="/fonts/Nexa-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/fonts/Nexa-Bold.woff" as="font" type="font/woff" crossorigin="anonymous">
</svelte:head>

<header class="app-header">
  <Header />
</header>

<main>
    <div class="container">
      <!-- Header Section -->
      <section class="section hero-section" id="section_CC" style="padding-bottom: 5rem;">
        <div class="text-center" >
          <!-- <img src="/images/crookcatcher_icon.svg" class="top-section-icon" alt="Crookcatcher icon" /> -->
          <!-- <h1 class="hero-title cc-font">Crook<wbr>Catcher</h1> -->

          <p class="hero-title">👋</p>
          <p class="hero-title cc-font">hi there,</p>
          <p class="hero-subtitle">Meet <span class='cc-font'>CrookCatcher</span>, the Android app that takes secret selfies of phone thieves and emails you their picture and location 🤟</p>
          <PlayStoreButton />
        </div>
      </section>

      <!-- Lockscreen Section -->
      <section class="section feature-section" id="section_lockscreen" >
        <div class="feature-grid">
          <div class="section_text_right feature-text">
            <h2>Enter a wrong pin, pattern or password and <strong>CrookCatcher</strong> takes a secret selfie</h2>
          </div>
          <div class="feature-image">
            <img src="/images/screen_alert_event_shadow.png" 
                alt="Take pictures when the lock pattern is wrong" />
          </div>
        </div>
      </section>

      <!-- GPS Section -->
      <section class="section feature-section" style='overflow: hidden'>
        <div class="feature-grid">
          <div class="section_text_left feature-text">
            <h2><strong>CrookCatcher</strong> then locates your phone with GPS</h2>
          </div>
          <div class="feature-image">
            <img src="/images/ic_earth_dark.svg" 
                alt="Globe showing GPS location tracking capabilities" 
                class="earth-icon" />
          </div>
        </div>
      </section>

      <!-- Email Section -->
      <section class="section feature-section email-section" >
        <div class="feature-grid">
          <div class="section_text_left feature-text">
            <h2>Finally, <strong>CrookCatcher</strong> sends pictures and location to your email</h2>
          </div>
          <div class="feature-image">
            <img src="/images/email_preview.png" style="" alt="Email illustration">
          </div>
        </div>
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
            <h2 class="section-title cc-font" style="font-size: 2rem">Catch more intruders with CrookCatcher Pro</h2>
            <p class="section-subtitle">Essential features are free, but Pro contains more than 10 features to further protect your phone and privacy.</p>
        <Features />
        </section>
    </div>

    <div class="container text-center">
      <p style="font-size: 1.4rem">
        <strong>CrookCatcher Pro</strong> is available for purchase inside the app.
      </p>
    </div>

    <div class="section-divider" style="margin-top: 64px;"></div>

    <div class="container">
      <RecentPosts posts={data.posts} />
    </div>

    <div class="section-divider" style="margin-top: 64px;"></div>
    <div class="container">

    <!-- Download Section -->
    <section class="hero-section">
      <div class="text-center">
        <img src="/images/crookcatcher_icon.svg" class="top-section-icon" alt="Crookcatcher icon" />
        <h2 class="hero-title cc-font">Crook<wbr>Catcher</h2>
        <p class="hero-subtitle">Download now, before it's too late...</p>
        <PlayStoreButton />
        <div class="social-link-box">
          <a href="https://x.com/CrookCatcherApp" target="_blank">Follow CrookCatcher on X</a>
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
    min-height: 400px;
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
    padding: 16px 16px;
    background: var(--color-cc-dark-bg);
    border-radius: var(--border-radius);
    margin-bottom: 32px;
    border: 2px solid rgba(255, 255, 255, 0.15);   
    height: 500px;
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
    scale: 1;  /* Default for mobile */
}

@media (min-width: 841px) {
    .earth-icon {
        transform: translateY(50px);
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


  @media (min-width: 841px) {
    .email-section img{
      transform: scale(1.1) translateY(20px);
    }
  }

  @media (max-width: 841px) {
    .email-section {
      max-height: none;
    }
    .email-section::after{
      display: none;
    }
  }


  @media (max-width: 840px) {
    .feature-section {
      height: auto;
    }
    .feature-image img {
      max-width: none;
    }
  }

  .recent-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 48px;
  }

  .blog-preview {
    background: var(--color-cc-dark-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  .blog-preview:hover {
    transform: translateY(-4px);
  }

  .blog-preview-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .preview-image {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .preview-content {
    padding: 24px;
  }

  .preview-content time {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    display: block;
    margin-bottom: 12px;
  }

  .preview-content h3 {
    font-size: 20px;
    line-height: 1.4;
    margin: 0 0 12px;
    color: #fff;
  }

  .preview-content p {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .view-all-link {
    display: inline-block;
    color: var(--color-primary);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .view-all-link:hover {
    opacity: 0.8;
  }

  @media (max-width: 840px) {
    .recent-posts {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

</style>
