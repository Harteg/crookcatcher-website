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
  <link rel="canonical" href="https://www.crookcatcher.app/" />

  <!-- Open Graph -->
  <meta property="og:title" content="CrookCatcher – Android anti-theft app" />
  <meta property="og:description" content="Secret intruder selfies + GPS emailed to you." />
  <meta property="og:url" content="https://www.crookcatcher.app/" />
  <meta property="og:image" content="https://www.crookcatcher.app/images/social_graphic.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CrookCatcher – Android anti-theft app" />
  <meta name="twitter:description" content="Secret intruder selfies + GPS emailed to you." />
  <meta name="twitter:image" content="https://www.crookcatcher.app/images/social_graphic.png" />
  
  <!-- For faster font loading -->
  <link rel="preload" href="/fonts/Nexa-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/fonts/Nexa-Bold.woff" as="font" type="font/woff" crossorigin="anonymous">

  <!-- FAQPage JSON-LD -->
  {@html `<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"What happens when someone tries to unlock my phone?",
     "acceptedAnswer":{"@type":"Answer","text":"CrookCatcher takes a photo using the front camera, records GPS location if available, and sends these to your email. With Pro, it can also record video, use the back camera, play alarms, and show a fake home screen."}},
    {"@type":"Question","name":"When does CrookCatcher take action?",
     "acceptedAnswer":{"@type":"Answer","text":"You can configure how many failed unlock attempts are required before CrookCatcher activates. Once that threshold is reached, it will take photos, record videos (Pro), and send alerts based on your settings."}},
    {"@type":"Question","name":"What features are included in the free version?",
     "acceptedAnswer":{"@type":"Answer","text":"The free version includes essential features like taking pictures when wrong passwords are entered, obtaining GPS location, and sending alert emails with photos and location data."}},
    {"@type":"Question","name":"What additional features does Pro offer?",
     "acceptedAnswer":{"@type":"Answer","text":"Pro includes video capture, Google Drive upload, back camera photos, custom alert messages, alarm sounds, fake home screen, app lock, app disguise, break-in detection, custom email subjects, hidden notifications and removes ads."}},
    {"@type":"Question","name":"How much does CrookCatcher Pro cost?",
     "acceptedAnswer":{"@type":"Answer","text":"The price of CrookCatcher Pro varies depending on your country of residence. You can see the exact price for your region directly inside the app."}},
    {"@type":"Question","name":"How do I access the captured photos and videos?",
     "acceptedAnswer":{"@type":"Answer","text":"All photos and videos are stored locally on your device and can be viewed directly in the app. They are also sent to your email automatically. Pro users can additionally have files uploaded to Google Drive for easy access from any device."}},
    {"@type":"Question","name":"Does it work without internet?",
     "acceptedAnswer":{"@type":"Answer","text":"Yes. CrookCatcher will take photos and store them locally, then send alerts once internet connection is restored."}},
    {"@type":"Question","name":"How does CrookCatcher stay discreet?",
     "acceptedAnswer":{"@type":"Answer","text":"Pro features help keep the app hidden from thieves by disguising the app icon, hiding notifications until unlock, customizing email subjects to avoid revealing alerts, and locking the app itself with a pattern code."}},
    {"@type":"Question","name":"How does the break-in detection work?",
     "acceptedAnswer":{"@type":"Answer","text":"This Pro feature ensures that if someone fails password attempts but eventually guesses correctly, CrookCatcher still takes photos and sends alerts, helping catch thieves who manage to break in."}},
    {"@type":"Question","name":"Can I customize the alert notifications?",
     "acceptedAnswer":{"@type":"Answer","text":"Pro users can customize email subjects, hide notifications until the phone is unlocked, and display custom messages on the lock screen when photos are taken."}},
    {"@type":"Question","name":"Will CrookCatcher drain my battery?",
     "acceptedAnswer":{"@type":"Answer","text":"No. CrookCatcher only activates when wrong unlock attempts are detected, using minimal battery in standby. Even when active, it's optimized for efficient power usage."}},
    {"@type":"Question","name":"Is my privacy protected?",
     "acceptedAnswer":{"@type":"Answer","text":"Yes. CrookCatcher only captures photos/videos during wrong unlock attempts. All data is stored locally and only sent to your specified email/Drive. We don't collect or store any of your personal data."}},
    {"@type":"Question","name":"What if I factory reset my phone?",
     "acceptedAnswer":{"@type":"Answer","text":"CrookCatcher will be uninstalled with a factory reset. We recommend upgrading to Pro and enabling Google Drive backup to ensure your evidence is safely stored in the cloud."}},
    {"@type":"Question","name":"How does CrookCatcher handle my email permissions?",
     "acceptedAnswer":{"@type":"Answer","text":"CrookCatcher requests Gmail sign-in to send emails on your behalf, avoiding transmission through third-party servers. This permission is limited to sending emails only to your specified address and doesn't grant access to read emails or manage contacts. You can revoke this permission anytime through your Google Account settings."}}
  ]
}
</script>`}
</svelte:head>

<header class="app-header">
  <Header />
</header>

<main>
    <div class="container">
      <!-- Header Section -->
      <section class="section hero-section" id="section_CC" style="padding-bottom: 5rem;">
        <div class="text-center" >
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

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title cc-font">Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>What happens when someone tries to unlock my phone?</h3>
            <p>CrookCatcher takes a photo using the front camera, records GPS location if available, and sends these to your email. With Pro, it can also record video, use the back camera, play alarms, and show a fake home screen.</p>
          </div>
          <div class="faq-item">
            <h3>When does CrookCatcher take action?</h3>
            <p>You can configure how many failed unlock attempts are required before CrookCatcher activates. Once that threshold is reached, it will take photos, record videos (Pro), and send alerts based on your settings.</p>
          </div>
          <div class="faq-item">
            <h3>What features are included in the free version?</h3>
            <p>The free version includes essential features like taking pictures when wrong passwords are entered, obtaining GPS location, and sending alert emails with photos and location data.</p>
          </div>
          <div class="faq-item">
            <h3>What additional features does Pro offer?</h3>
            <p>Pro includes video capture, Google Drive upload, back camera photos, custom alert messages, alarm sounds, fake home screen, app lock, app disguise, break-in detection, custom email subjects, hidden notifications and removes ads.</p>
          </div>
          <div class="faq-item">
            <h3>How much does CrookCatcher Pro cost?</h3>
            <p>The price of CrookCatcher Pro varies depending on your country of residence. You can see the exact price for your region directly inside the app.</p>
          </div>
          <div class="faq-item">
            <h3>How do I access the captured photos and videos?</h3>
            <p>All photos and videos are stored locally on your device and can be viewed directly in the app. They are also sent to your email automatically. Pro users can additionally have files uploaded to Google Drive for easy access from any device.</p>
          </div>
          <div class="faq-item">
            <h3>Does it work without internet?</h3>
            <p>Yes. CrookCatcher will take photos and store them locally, then send alerts once internet connection is restored.</p>
          </div>
          <div class="faq-item">
            <h3>How does CrookCatcher stay discreet?</h3>
            <p>Pro features help keep the app hidden from thieves by disguising the app icon, hiding notifications until unlock, customizing email subjects to avoid revealing alerts, and locking the app itself with a pattern code.</p>
          </div>
          <div class="faq-item">
            <h3>How does the break-in detection work? (Pro)</h3>
            <p>This Pro feature ensures that if someone fails password attempts but eventually guesses correctly, CrookCatcher still takes photos and sends alerts, helping catch thieves who manage to break in.</p>
          </div>
          <div class="faq-item">
            <h3>Can I customize the alert notifications?</h3>
            <p>Pro users can customize email subjects, hide notifications until the phone is unlocked, and display custom messages on the lock screen when photos are taken.</p>
          </div>
          <div class="faq-item">
            <h3>Will CrookCatcher drain my battery?</h3>
            <p>No. CrookCatcher only activates when wrong unlock attempts are detected, using minimal battery in standby. Even when active, it's optimized for efficient power usage.</p>
          </div>
          <div class="faq-item">
            <h3>Is my privacy protected?</h3>
            <p>Yes. CrookCatcher only captures photos/videos during wrong unlock attempts. All data is stored locally and only sent to your specified email/Drive. We don't collect or store any of your personal data.</p>
          </div>
          <div class="faq-item">
            <h3>What if I factory reset my phone?</h3>
            <p>CrookCatcher will be uninstalled with a factory reset. We recommend upgrading to Pro and enabling Google Drive backup to ensure your evidence is safely stored in the cloud.</p>
          </div>
          <div class="faq-item">
            <h3>How does CrookCatcher handle my email permissions?</h3>
            <p>CrookCatcher requests Gmail sign-in to send emails on your behalf, avoiding transmission through third-party servers. This permission is limited to sending emails only to your specified address and doesn't grant access to read emails or manage contacts. You can revoke this permission anytime through your Google Account settings.</p>
          </div>
        </div>
      </div>
    </section>

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

  .faq-section {
    padding: 64px 0;
    background: var(--color-cc-dark-bg);
    margin: 64px 32px;
    border-radius: var(--border-radius);
    border: 2px solid rgba(255, 255, 255, 0.15);
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }

  .faq-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 24px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .faq-item h3 {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 12px;
    font-weight: 600;
  }

  .faq-item p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 840px) {
    .faq-section {
      margin: 32px 0;
      border-radius: 0;
      padding: 32px 16px;
    }

    .faq-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

</style>
