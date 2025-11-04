<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Features from '$lib/components/Features.svelte';
  import LandingFeatures from '$lib/components/LandingFeatures.svelte';
  import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
  import RecentPosts from '$lib/components/RecentPosts.svelte';

  export let data;
</script>

<svelte:head>
  <title>CrookCatcher • Protect Your Phone and Catch Intruders</title>
  <meta name="description" content="Protect your Android phone and catch intruders. Get instant photos and GPS location via email when someone tries to break into your phone—recover it quickly and catch the thief.">
  <link rel="canonical" href="https://www.crookcatcher.app/" />

  <!-- Open Graph -->
  <meta property="og:title" content="CrookCatcher - Recover stolen android phones" />
  <meta property="og:description" content="Secret intruder selfies + GPS emailed to you." />
  <meta property="og:url" content="https://www.crookcatcher.app/" />
  <meta property="og:image" content="https://www.crookcatcher.app/images/social_graphic.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CrookCatcher - Recover stolen android phones" />
  <meta name="twitter:description" content="Secret intruder selfies + GPS emailed to you." />
  <meta name="twitter:image" content="https://www.crookcatcher.app/images/social_graphic.png" />
  
  <!-- For faster font loading -->
  <link rel="preload" href="/fonts/Nexa-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/fonts/Nexa-Bold.woff" as="font" type="font/woff" crossorigin="anonymous">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

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
      <section class="section hero-section" id="section_CC" style="padding-bottom: 2rem; margin-bottom: 0;">
        <div class="text-center" >
          <p class="hero-title cc-font" style="margin-bottom: 32px;">Catch phone thieves.<br>Recover your phone.</p>
          <p class="hero-subtitle" style="margin-bottom: 32px;">CrookCatcher for Android captures intruder photos and GPS location after failed unlock attempts.</p>
          
          <!-- Stats Section -->
          <div class="hero-stats-minimal" style="margin: 0 auto 32px;">
            <div class="stat-item-minimal">
              <div class="stat-number-minimal">50K+</div>
              <div class="stat-label-minimal">5 Star Reviews</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item-minimal">
              <div class="stat-number-minimal">10M+</div>
              <div class="stat-label-minimal">Downloads</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item-minimal">
              <div class="stat-number-minimal">10+ Years</div>
              <div class="stat-label-minimal">Protecting Phones</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item-minimal">
              <div class="stat-number-minimal">1M+</div>
              <div class="stat-label-minimal">Alerts Sent Daily</div>
            </div>
          </div>
          
          <div class="text-center">
            <PlayStoreButton />
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="how-it-works-section">
        <div class="container how-it-works-container">
          <h2 class="section-title cc-font text-center" style="font-size: 2rem; margin-bottom: 8px;">How CrookCatcher Works</h2>
          <p class="section-subtitle text-center" style="margin-bottom: 48px; max-width: 600px; margin-left: auto; margin-right: auto;">Users recover their phones in three simple steps</p>
          
          <div class="how-it-works-steps">
            <div class="how-it-works-card step-1">
              <div class="step-number">STEP 1</div>
              <h3 class="step-title">Instant Photo Proof</h3>
              <p class="step-description">The moment someone enters the wrong password, CrookCatcher secretly captures their photo and exact location.</p>
              <div class="step-image">
                <img src="/images/screen_alert_event_shadow.png" alt="Photo capture" />
              </div>
            </div>
            
            <div class="how-it-works-card step-2">
              <div class="step-number">STEP 2</div>
              <h3 class="step-title">Get Instant Alert</h3>
              <p class="step-description">You'll receive the intruder's photo and location instantly in your email inbox — before they even realize it happened.</p>
              <div class="step-image step-2-email">
                <div class="email-header">
                  <span class="material-icons email-icon">email</span>
                  <span class="email-text">CrookCatcher Alert — <span class="email-date">Oct 22</span></span>
                </div>
                <img src="/images/email_preview.png" alt="Email alert" />
              </div>
            </div>
            
            <div class="how-it-works-card step-3">
              <div class="step-number">STEP 3</div>
              <h3 class="step-title">Recover Your Phone</h3>
              <p class="step-description">Share the evidence with your community or local authorities to help track down and recover your phone safely.</p>
              <div class="step-image">
                <img src="/images/ic_earth_dark.svg" alt="Recovery" class="earth-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- <div class="container text-center">
      <h2 style="margin-top: 64px; font-size: 26px;">
        CrookCatcher starts working silently in the backgorund when the wrong password is entered. Although receiving pictures by email is the most important feature
      </h2>
    </div> -->

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title cc-font text-center">Hear it from the users</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card testimonial-featured">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"Truly love this application, yesterday my handset was stolen but I had the picture of the thief so by the help of some friends I recognised the thief and today I have my phone."</p>
            <p class="testimonial-author">— Muhammad Bilal</p>
            <p class="testimonial-date">21 Feb, 2021</p>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"This is one of the best apps to catch anyone trying to steal your phone or the information in your phone without your authorization."</p>
            <p class="testimonial-author">— Robinson Elerubo</p>
            <p class="testimonial-date">29 Sep, 2024</p>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"Awesome application! Finally a real security anti thief app. Easy to install and use, and PRO version is perfect. Worth every penny!"</p>
            <p class="testimonial-author">— Eduard Vrhovec</p>
            <p class="testimonial-date">10 Dec, 2024</p>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" style="margin-top: 128px;"></div>

      <!-- Screenshots Section -->
      <section class="section" style="padding: 0;">
        <div class="screenshots center">
          <img alt="CrookCatcher settings" class="screenshot" src="/images/screen_config.png" loading="lazy">
          <img alt="Main screen of CrookCatcher" class="screenshot" src="/images/screen_home.png" loading="lazy">
          <img alt="List of captured pictures" class="screenshot" src="/images/screen_crooks.png" loading="lazy">
        </div>
      </section>
    

    <!-- Why Choose & Free Features Section -->
    <section class="why-choose-free-section">
      <div class="container">
        <div class="free-badge">ESSENTIAL FEATURES ARE FREE</div>
        <h2 class="section-title cc-font text-center">Start Protecting Your Phone Today</h2>
        <p class="section-subtitle text-center">No credit card required. Get started instantly with powerful protection.</p>
        
        <div class="unified-features-grid">
          <div class="unified-feature-card">
            <div class="unified-feature-icon">
              <span class="material-icons">security</span>
            </div>
            <h3>10+ Security Features</h3>
            <p>Comprehensive protection with photos, GPS, video, and stealth features</p>
          </div>
          <div class="unified-feature-card">
            <div class="unified-feature-icon">
              <span class="material-icons">person_off</span>
            </div>
            <h3>No Registration</h3>
            <p>Start protecting your phone immediately—no signup, no hassle</p>
          </div>
          <div class="unified-feature-card">
            <div class="unified-feature-icon">
              <span class="material-icons">favorite</span>
            </div>
            <h3>Free Forever</h3>
            <p>Essential features are free forever—upgrade to Pro anytime</p>
          </div>
          <div class="unified-feature-card">
            <div class="unified-feature-icon">
              <span class="material-icons">lock</span>
            </div>
            <h3>Privacy Protected</h3>
            <p>Your data stays local and private—we don't collect or store your personal information</p>
          </div>
          <div class="unified-feature-card">
            <div class="unified-feature-icon">
              <span class="material-icons">bolt</span>
            </div>
            <h3>Easy Setup</h3>
            <p>Get started in minutes with simple configuration</p>
          </div>
          <div class="unified-feature-card">
            <div class="unified-feature-icon">
              <span class="material-icons">battery_charging_full</span>
            </div>
            <h3>Battery Efficient</h3>
            <p>Minimal battery usage—only activates when wrong passwords are detected</p>
          </div>
        </div>
        
        <div class="text-center" style="margin-top: 56px;">
          <PlayStoreButton />
        </div>
      </div>
    </section>

    <div class="section-divider" style="margin-top: 128px;"></div>

    <div class="container features-container" style="margin-top: 128px;">
        <section class="features-section text-center">
            <h2 class="section-title cc-font" style="font-size: 2rem; margin-bottom: 16px;">All Features</h2>
            <p class="section-subtitle" style="margin-bottom: 48px;">Complete protection features—essential tools are free, Pro unlocks advanced security</p>
            <LandingFeatures />
        </section>
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
        <p class="hero-subtitle">Protect your phone now, before someone tries to break in...</p>
        <div class="trust-badges">
          <span class="trust-badge">✓ Free to Download</span>
          <span class="trust-badge">✓ No Credit Card</span>
          <span class="trust-badge">✓ Easy Setup</span>
        </div>
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

  .trust-badges {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin: 20px 0 28px;
  }

  .trust-badge {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  .hero-stats-minimal {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 14px 20px;
    width: fit-content;
    max-width: 100%;
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(56, 142, 60, 0.04) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(76, 175, 80, 0.25);
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(76, 175, 80, 0.15),
                0 0 0 1px rgba(76, 175, 80, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .stat-item-minimal {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 1 auto;
    min-width: 0;
  }

  .stat-number-minimal {
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.2;
    margin-bottom: 2px;
    white-space: nowrap;
  }

  .stat-label-minimal {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    line-height: 1.3;
    white-space: nowrap;
  }

  .stat-divider {
    width: 1px;
    height: 24px;
    background: rgba(255, 255, 255, 0.15);
    flex-shrink: 0;
  }

  .how-it-works-section {
    padding: 40px 0 24px;
    margin: 0;
  }

  .how-it-works-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .how-it-works-card {
    position: relative;
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(56, 142, 60, 0.04) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(76, 175, 80, 0.25);
    border-radius: 16px;
    padding: 36px 28px;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .step-number {
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 20px;
    color: rgba(76, 175, 80, 0.95);
    text-transform: uppercase;
    opacity: 0.9;
  }

  .step-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 16px;
    line-height: 1.25;
    letter-spacing: -0.02em;
  }

  .step-description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    margin: 0 0 28px;
    flex-grow: 1;
    font-weight: 400;
  }

  .step-image {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0;
    min-height: 200px;
  }

  .step-image img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    opacity: 0.98;
  }

  .step-1, .step-3 {
    padding-bottom: 0px;
  }

  .step-1 .step-image img {
    box-shadow: none;
    width: 150%;
    max-width: 340px;
    height: auto;
  }

  .step-2-email {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }

  .email-header {
    background: rgba(0, 21, 8, 0.222);
    border-radius: 8px;
    padding: 6px 12px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid  rgba(72, 91, 79, 0.464);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
  }

  .email-icon {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    opacity: 0.8;
  }

  .email-text {
    font-size: 0.65rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.4;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .email-date {
    color: rgba(255, 255, 255, 0.6);
  }

  .step-2-email img {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
    width: 100%;
    border-radius: 8px;
    margin-top: 0;
  }

  .step-3 .step-image img {
    box-shadow: none;
    width: 140%;
    max-width: none;
    filter: none;
    opacity: 0.95;
  }

  .stats-section {
    padding: 64px 0;
    margin: 0 0 80px;
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(56, 142, 60, 0.05) 100%);
    border-radius: var(--border-radius);
    border: 2px solid rgba(76, 175, 80, 0.3);
    position: relative;
    overflow: hidden;
  }

  .stats-section.hero-stats {
    padding: 16px 0;
    margin: 20px 0 28px;
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.06) 0%, rgba(56, 142, 60, 0.03) 100%);
    border: 1px solid rgba(76, 175, 80, 0.15);
    border-radius: 12px;
  }

  .stats-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.6), transparent);
  }

  .stats-section.hero-stats::before {
    display: none;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .hero-stats .stats-grid {
    gap: 12px;
    padding: 0;
  }

  .stat-item {
    text-align: center;
    padding: 32px 24px;
    position: relative;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .hero-stats .stat-item {
    padding: 12px 8px;
  }


  .stat-icon {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .hero-stats .stat-icon {
    margin-bottom: 8px;
    gap: 2px;
  }

  .stat-icon .material-icons {
    font-size: 48px;
    color: rgba(76, 175, 80, 0.9);
    opacity: 0.95;
    filter: drop-shadow(0 2px 8px rgba(76, 175, 80, 0.3));
  }

  .hero-stats .stat-icon .material-icons {
    font-size: 24px;
  }

  .stat-item:first-child .stat-icon .material-icons {
    font-size: 32px;
    color: rgba(255, 193, 7, 0.95);
    filter: drop-shadow(0 2px 8px rgba(255, 193, 7, 0.4));
  }

  .hero-stats .stat-item:first-child .stat-icon .material-icons {
    font-size: 18px;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 12px;
    line-height: 1.1;
    font-family: var(--font-family, sans-serif);
    letter-spacing: -0.02em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .hero-stats .stat-number {
    font-size: 1.5rem;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.01em;
  }

  .hero-stats .stat-label {
    font-size: 0.75rem;
    line-height: 1.3;
  }

  @media (max-width: 1024px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .hero-stats .stats-grid {
      gap: 8px;
    }

    .stat-number {
      font-size: 2.5rem;
    }

    .hero-stats .stat-number {
      font-size: 1.3rem;
    }

    .stat-icon .material-icons {
      font-size: 42px;
    }

    .hero-stats .stat-icon .material-icons {
      font-size: 20px;
    }

    .stat-item:first-child .stat-icon .material-icons {
      font-size: 30px;
    }

    .hero-stats .stat-item:first-child .stat-icon .material-icons {
      font-size: 16px;
    }
  }

  .why-choose-free-section {
    padding: 80px 0;
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(56, 142, 60, 0.04) 100%);
    border-radius: var(--border-radius);
    margin: 64px 0;
    border: 2px solid rgba(76, 175, 80, 0.25);
    position: relative;
    overflow: hidden;
  }

  .why-choose-free-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.5), transparent);
  }

  .unified-features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 56px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 16px;
  }

  .unified-feature-card {
    position: relative;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 32px 28px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .unified-feature-icon {
    margin-bottom: 20px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .unified-feature-icon .material-icons {
    font-size: 64px;
    font-weight: 400;
    color: #fff;
    opacity: 0.95;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
  }

  .unified-feature-card h3 {
    font-size: 1.15rem;
    color: #fff;
    margin: 0 0 12px;
    font-weight: 600;
    line-height: 1.3;
  }

  .unified-feature-card p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
  }

  .testimonials-section {
    padding: 24px 0 80px;
    margin: 0;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 48px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .testimonial-card {
    background: var(--color-cc-dark-bg);
    padding: 32px;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.15);
  }

  .testimonial-featured {
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.15) 0%, rgba(56, 142, 60, 0.15) 100%);
    border: 2px solid rgba(76, 175, 80, 0.4);
  }

  .testimonial-stars {
    color: #ffd700;
    font-size: 1.2rem;
    margin-bottom: 16px;
    letter-spacing: 2px;
  }

  .testimonial-text {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 20px;
    font-style: italic;
  }

  .testimonial-author {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 500;
    margin: 8px 0 0;
  }

  .testimonial-date {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    margin: 4px 0 0;
  }

  .free-badge {
    display: inline-block;
    background: linear-gradient(135deg, #66bb6a 0%, #4caf50 50%, #43a047 100%);
    color: #fff;
    padding: 12px 32px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 auto 24px;
    display: block;
    text-align: center;
    width: fit-content;
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4), 
                0 1px 3px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  .text-center {
    text-align: center;
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
    .how-it-works-container {
      padding: 0 8px !important;
    }

    .how-it-works-section {
      padding: 24px 0;
      margin: 8px 0;
    }

    .how-it-works-steps {
      grid-template-columns: 1fr;
      gap: 12px;
      padding: 0;
    }

    .how-it-works-card {
      min-height: auto;
      padding: 16px 12px;
      border-radius: 14px;
    }

    .step-number {
      font-size: 0.7rem;
      letter-spacing: 1.5px;
      margin-bottom: 14px;
    }

    .step-title {
      font-size: 1.25rem;
      margin-bottom: 10px;
      line-height: 1.3;
    }

    .step-description {
      font-size: 0.875rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .step-image {
      padding: 12px 0 0;
      min-height: 140px;
    }

    .step-1 .step-image img {
      max-width: 240px;
    }

    .step-2-email {
      max-width: 100%;
      padding: 0;
    }

    .email-header {
      padding: 5px 10px;
      border-radius: 6px;
      gap: 5px;
      margin-bottom: 6px;
    }

    .email-icon {
      font-size: 12px;
    }

    .email-text {
      font-size: 0.6rem;
    }

    .step-2-email img {
      border-radius: 6px;
    }

    .step-image .earth-icon {
      width: 200px;
      height: 200px;
    }

    .faq-section {
      margin: 32px 0;
      border-radius: 0;
      padding: 32px 16px;
    }

    .faq-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .trust-badges {
      gap: 8px;
      margin: 16px 0 24px;
    }

    .trust-badge {
      font-size: 0.75rem;
      padding: 4px 10px;
    }

    .stats-section {
      padding: 48px 12px;
      margin: 0 0 48px;
      border-radius: 0;
    }

    .hero-stats-minimal {
      gap: 12px 8px;
      margin: 12px auto 20px;
      padding: 12px 12px;
      max-width: calc(100% - 16px);
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .stat-item-minimal {
      flex: 0 0 calc(50% - 12px);
      min-width: 0;
      max-width: calc(50% - 12px);
    }

    .stat-number-minimal {
      font-size: 0.95rem;
      line-height: 1.1;
      white-space: normal;
      word-break: break-word;
    }

    .stat-label-minimal {
      font-size: 0.6rem;
      line-height: 1.2;
      white-space: normal;
      word-break: break-word;
    }

    .stat-divider {
      display: none;
    }

    .stats-section.hero-stats {
      padding: 12px 8px;
      margin: 16px 0 24px;
    }

    .stats-grid {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 0;
      max-width: 100%;
    }

    .hero-stats .stats-grid {
      gap: 8px;
    }

    .stat-item {
      padding: 32px 20px;
      min-height: auto;
    }

    .hero-stats .stat-item {
      padding: 10px 6px;
    }

    .why-choose-section {
      padding: 48px 16px;
      margin: 32px 0;
      border-radius: 0;
    }

    .unified-features-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .testimonials-section {
      padding: 48px 16px;
      margin: 32px 0;
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .testimonial-featured {
      order: -1;
    }

    .why-choose-free-section {
      padding: 48px 16px;
      margin: 32px 0;
      border-radius: 0;
    }

    .unified-features-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 40px;
      padding: 0;
    }

    .unified-feature-card {
      padding: 24px 20px;
    }

    .unified-feature-icon {
      margin-bottom: 16px;
    }

    .unified-feature-icon .material-icons {
      font-size: 56px;
    }

    .unified-feature-card h3 {
      font-size: 1.05rem;
      margin-bottom: 10px;
    }

    .unified-feature-card p {
      font-size: 0.875rem;
    }

    .free-badge {
      font-size: 0.9rem;
      padding: 10px 24px;
      margin-bottom: 20px;
    }
  }

</style>
