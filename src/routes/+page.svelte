<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Features from '$lib/components/Features.svelte';
  import LandingFeatures from '$lib/components/LandingFeatures.svelte';
  import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
  import RecentPosts from '$lib/components/RecentPosts.svelte';
  import TestimonialCard from '$lib/components/TestimonialCard.svelte';
  import FAQItem from '$lib/components/FAQItem.svelte';

  export let data;
</script>

<svelte:head>
  <title>CrookCatcher • Protect Your Phone and Catch Intruders</title>
  <meta name="description" content="Protect your Android phone and catch intruders. Get instant photos and GPS location via email when someone tries to break into your phone—recover it quickly and catch the thief.">
  <meta name="keywords" content="anti-theft app, phone security, Android security, recover stolen phone, phone protection, intruder detection, GPS tracking, phone theft prevention, security app, catch phone thief">
  <link rel="canonical" href="https://www.crookcatcher.app/" />

  <!-- Open Graph -->
  <meta property="og:title" content="CrookCatcher - Recover Stolen Android Phones | Anti-Theft App" />
  <meta property="og:description" content="Protect your Android phone and catch intruders. Get instant photos and GPS location via email when someone tries to break into your phone—recover it quickly and catch the thief." />
  <meta property="og:url" content="https://www.crookcatcher.app/" />
  <meta property="og:image" content="https://www.crookcatcher.app/images/social_graphic.png" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="CrookCatcher" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CrookCatcher - Recover Stolen Android Phones | Anti-Theft App" />
  <meta name="twitter:description" content="Protect your Android phone and catch intruders. Get instant photos and GPS location via email when someone tries to break into your phone—recover it quickly and catch the thief." />
  <meta name="twitter:image" content="https://www.crookcatcher.app/images/social_graphic.png" />
  
  <!-- For faster font loading -->
  <link rel="preload" href="/fonts/Nexa-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/fonts/Nexa-Bold.woff" as="font" type="font/woff" crossorigin="anonymous">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=format_quote" />

  <!-- BreadcrumbList Schema for Home Page -->
  {@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.crookcatcher.app/"
    }
  ]
}
</script>`}

  <!-- HowTo Schema for "How It Works" -->
  {@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Recover Your Phone with CrookCatcher",
  "description": "Learn how to protect your Android phone and recover it if stolen using CrookCatcher's three-step process",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Capture Photo Proof",
      "text": "The moment someone enters the wrong password, CrookCatcher secretly captures their photo and exact location.",
      "image": "https://www.crookcatcher.app/images/screen_alert_event_shadow.png"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Get Instant Alert",
      "text": "You'll receive the intruder's photo and location instantly in your email inbox — before they even realize it happened.",
      "image": "https://www.crookcatcher.app/images/email_preview.png"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Recover Your Phone",
      "text": "Share the evidence with your community or local authorities to help track down and recover your phone safely."
    }
  ]
}
</script>`}

  <!-- Review Schema for Testimonials -->
  {@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "CrookCatcher",
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Muhammad Bilal"
      },
      "datePublished": "2021-02-21",
      "reviewBody": "Truly love this application. Yesterday my handset was stolen, but I had the picture of the thief, so with the help of some friends I recognized the thief and today I have my phone.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "FLAVIA INACIO"
      },
      "datePublished": "2025-01-10",
      "reviewBody": "Excellent app for protection and security! CrookCatcher exceeded my expectations. It is discreet, efficient and does exactly what it promises. I loved the functionality of taking photos of those who try to unlock their cell phone the wrong way.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Abhishek Chettri"
      },
      "datePublished": "2021-07-30",
      "reviewBody": "I am here just to say thank you to this app. I just recovered my phone, which was stolen from my workplace. I think this app should be downloaded to everyone's phone. It directly sends an alert message with a photo if anyone tries to open your lock. Wow... 5 out of 5!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}
</script>`}

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
          <h1 class="hero-title cc-font" style="margin-bottom: 0;">Catch phone thieves.</h1>
          <h2 class="hero-title cc-font" style="margin-bottom: 32px;">Recover your phone.</h2>
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
            <PlayStoreButton position="hero" />
          </div>
        </div>
      </section>
    </div>

    <!-- How It Works Section -->
    <section class="">
      <div class="container">
        <h2 class="section-title cc-font text-center" style="font-size: 2rem; margin-bottom: 8px;">How CrookCatcher Works</h2>
        <p class="section-subtitle text-center" style="margin-bottom: 48px; max-width: 600px; margin-left: auto; margin-right: auto;">Users recover their phones in three simple steps</p>
        
        <div class="how-it-works-steps">
          <div class="how-it-works-card step-1">
            <div class="step-number">STEP 1</div>
            <h3 class="step-title">Capture Photo Proof</h3>
            <p class="step-description">The moment someone enters the wrong password, CrookCatcher secretly captures their photo and exact location.</p>
            <div class="step-image">
              <img src="/images/screen_alert_event_shadow.png" alt="CrookCatcher captures intruder photo when wrong password is entered on Android phone" />
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
              <img src="/images/email_preview.png" alt="CrookCatcher email alert showing intruder photo and GPS location for phone recovery" />
            </div>
          </div>
          
          <div class="how-it-works-card step-3">
            <div class="step-number">STEP 3</div>
            <h3 class="step-title">Recover Your Phone</h3>
            <p class="step-description">Share the evidence with your community or local authorities to help track down and recover your phone safely.</p>
            <div class="step-image">
              <img src="/images/ic_earth_dark.svg" alt="Share CrookCatcher evidence with community or police to recover stolen Android phone" class="earth-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section>
      <div class="container">
        <h2 class="section-title cc-font text-center">It actually works, hear it from our users</h2>
        <p class="section-subtitle text-center" style="margin-bottom: 48px; max-width: 600px; margin-left: auto; margin-right: auto;">More than 50,000 five-star reviews</p>
        <div class="testimonials-layout">
          <!-- Left Side Cards -->
          <div class="testimonials-left">
            <TestimonialCard
              text="Truly love this application. Yesterday my handset was stolen, but I had the picture of the thief, so with the help of some friends I recognized the thief and today I have my phone. 🥰🥰🥰"
              author="Muhammad Bilal"
              date="21 Feb, 2021"
              highlighted={true}
            />
            
            <TestimonialCard
              text="Excellent app for protection and security! CrookCatcher exceeded my expectations. It is discreet, efficient and does exactly what it promises. I loved the functionality of taking photos of those who try to unlock their cell phone the wrong way. Furthermore, sending location information and a photo via email is a big plus, especially in cases where the device is lost or stolen. The app is easy to configure and works perfectly."
              author="FLAVIA INACIO"
              date="10 Jan, 2025"
              highlighted={false}
            />
            
            <TestimonialCard
              text="I can't say this enough—thank you for making such an amazing app! I truly am in love with this app. CrookCatcher has recovered my cell phone 3 times now. I can't express my appreciation to you all for the effort spent over so many days, weeks, and even years making this amazing app. I thank you from the bottom of my heart for making my life just a little bit easier. I recommend this app to everyone. Everyone should have CrookCatcher installed on their cell phones; it is a truly amazing app. 😘"
              author="Gloria Mancilla"
              date="20 Feb, 2024"
              highlighted={false}
            />
          </div>
          
          <!-- Right Side Cards -->
          <div class="testimonials-right">
            <TestimonialCard
              text="This is one of the best apps to catch anyone trying to steal your phone or the information in your phone without your authorization."
              author="Robinson Elerubo"
              date="29 Sep, 2024"
              highlighted={false}
            />
            
            <TestimonialCard
              text="Awesome application! Finally a real security anti-thief app. Easy to install and use, and the PRO version is perfect. Worth every penny!"
              author="Eduard Vrhovec"
              date="10 Dec, 2024"
              highlighted={false}
            />

            <TestimonialCard
              text="I am here just to say thank you to this app. I just recovered my phone, which was stolen from my workplace. I think this app should be downloaded to everyone's phone. It directly sends an alert message with a photo if anyone tries to open your lock. Wow... 5 out of 5!"
              author="Abhishek Chettri"
              date="30 Jul, 2021"
              highlighted={true}
            />
            
            <TestimonialCard
              text="A fantastic program; it helped me recover my phone from the thief."
              author="Djamel Milano"
              date="4 Nov, 2025"
              highlighted={false}
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose & Free Features Section -->
    <section class="container">
      <div class="why-choose-free-section">
        <h2 class="section-title cc-font text-center">Start Protecting Your Phone Today for Free</h2>
        <p class="section-subtitle text-center">Get started easily with powerful protection</p>
        
        <div class="unified-features-grid">
          <div class="unified-feature-card glass-card">
            <div class="unified-feature-icon">
              <span class="material-icons">bolt</span>
            </div>
            <h3>Easy Setup & No Registration</h3>
            <p>Get started in minutes with simple configuration—no signup, no hassle.</p>
          </div>
          <div class="unified-feature-card glass-card">
            <div class="unified-feature-icon">
              <span class="material-icons">lock</span>
            </div>
            <h3>Privacy Protected</h3>
            <p>Your data stays local and private—we don't collect or store your personal information. <a href="/privacy">Learn more</a></p>
          </div>
          <div class="unified-feature-card glass-card">
            <div class="unified-feature-icon">
              <span class="material-icons">battery_charging_full</span>
            </div>
            <h3>Battery Efficient</h3>
            <p>Minimal battery usage—only activates when wrong passwords are detected</p>
          </div>
        </div>
        
        <div class="download-section">
          <PlayStoreButton position="features" />
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section class="section" style="padding: 0;">
      <div class="screenshots center">
        <img alt="CrookCatcher Android app settings screen for configuring anti-theft protection" class="screenshot" src="/images/screen_config.png" loading="lazy">
        <img alt="CrookCatcher main screen showing anti-theft app dashboard" class="screenshot" src="/images/screen_home.png" loading="lazy">
        <img alt="CrookCatcher gallery showing captured intruder photos and GPS locations" class="screenshot" src="/images/screen_crooks.png" loading="lazy">
      </div>
    </section>
  
    <div class="section-divider" style="margin-top: 64px;"></div>

    <section>
      <div class="container">
          <h2 class="section-title cc-font text-center" style="font-size: 2rem; margin-bottom: 16px;">All Features</h2>
          <p class="section-subtitle text-center" style="margin-bottom: 48px; max-width: 600px; margin-left: auto; margin-right: auto;">Complete protection features—essential tools are free, Pro unlocks advanced security</p>
          <LandingFeatures />
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title cc-font text-center">Frequently Asked Questions</h2>
        <div class="faq-list">
          <FAQItem 
            question="What happens when someone tries to unlock my phone?"
            answer="CrookCatcher takes a photo using the front camera, records GPS location if available, and sends these to your email. With Pro, it can also record video, use the back camera, play alarms, and show a fake home screen."
          />
          <FAQItem 
            question="When does CrookCatcher take action?"
            answer="You can configure how many failed unlock attempts are required before CrookCatcher activates. Once that threshold is reached, it will take photos, record videos (Pro), and send alerts based on your settings."
          />
          <FAQItem 
            question="What features are included in the free version?"
            answer="The free version includes essential features like taking pictures when wrong passwords are entered, obtaining GPS location, and sending alert emails with photos and location data."
          />
          <FAQItem 
            question="What additional features does Pro offer?"
            answer="Pro includes video capture, Google Drive upload, back camera photos, custom alert messages, alarm sounds, fake home screen, app lock, app disguise, break-in detection, custom email subjects, hidden notifications and removes ads."
          />
          <FAQItem 
            question="How much does CrookCatcher Pro cost?"
            answer="The price of CrookCatcher Pro varies depending on your country of residence. You can see the exact price for your region directly inside the app."
          />
          <FAQItem 
            question="How do I access the captured photos and videos?"
            answer="All photos and videos are stored locally on your device and can be viewed directly in the app. They are also sent to your email automatically. Pro users can additionally have files uploaded to Google Drive for easy access from any device."
          />
          <FAQItem 
            question="Does it work without internet?"
            answer="Yes. CrookCatcher will take photos and store them locally, then send alerts once internet connection is restored."
          />
          <FAQItem 
            question="How does CrookCatcher stay discreet?"
            answer="Pro features help keep the app hidden from thieves by disguising the app icon, hiding notifications until unlock, customizing email subjects to avoid revealing alerts, and locking the app itself with a pattern code."
          />
          <FAQItem 
            question="How does the break-in detection work? (Pro)"
            answer="This Pro feature ensures that if someone fails password attempts but eventually guesses correctly, CrookCatcher still takes photos and sends alerts, helping catch thieves who manage to break in."
          />
          <FAQItem 
            question="Can I customize the alert notifications?"
            answer="Pro users can customize email subjects, hide notifications until the phone is unlocked, and display custom messages on the lock screen when photos are taken."
          />
          <FAQItem 
            question="Will CrookCatcher drain my battery?"
            answer="No. CrookCatcher only activates when wrong unlock attempts are detected, using minimal battery in standby. Even when active, it's optimized for efficient power usage."
          />
          <FAQItem 
            question="Is my privacy protected?"
            answer="Yes. CrookCatcher only captures photos/videos during wrong unlock attempts. All data is stored locally and only sent to your specified email/Drive. We don't collect or store any of your personal data."
          />
          <FAQItem 
            question="What if I factory reset my phone?"
            answer="CrookCatcher will be uninstalled with a factory reset. We recommend upgrading to Pro and enabling Google Drive backup to ensure your evidence is safely stored in the cloud."
          />
          <FAQItem 
            question="How does CrookCatcher handle my email permissions?"
            answer="CrookCatcher requests Gmail sign-in to send emails on your behalf, avoiding transmission through third-party servers. This permission is limited to sending emails only to your specified address and doesn't grant access to read emails or manage contacts. You can revoke this permission anytime through your Google Account settings."
          />
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="hero-section">
      <div class="container">
      <div class="text-center">
        <img src="/images/crookcatcher_icon.svg" class="top-section-icon" alt="CrookCatcher anti-theft app icon for Android phone security" />
        <h2 class="hero-title cc-font">Crook<wbr>Catcher</h2>
        <p class="hero-subtitle">Protect your phone now, before someone tries to break in...</p>
        <PlayStoreButton position="footer" />
        <div class="social-link-box">
          <a href="https://x.com/CrookCatcherApp" target="_blank">Follow CrookCatcher on X</a>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

    <div class="container">
      <RecentPosts posts={data.posts} />
    </div>

</main>

<Footer />

<style>
  @media (max-width: 840px) {


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
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.2;
    margin-bottom: 2px;
    white-space: nowrap;
  }

  .stat-label-minimal {
    font-size: 0.8rem;
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


  .how-it-works-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
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
    width: 125%;
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
  
  .testimonials-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 64px;
    align-items: start;
  }

  .testimonials-left {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .testimonials-right {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .download-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 56px;
  }

  .text-center {
    text-align: center;
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

.section-title {
    font-size: 2rem;
    margin-bottom: 8px;
    line-height: 2.2rem;
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
    background: var(--color-cc-dark-bg);
    padding: 64px 0;
  }

  .faq-list {
    max-width: 800px;
    margin: 48px auto 0;
  }

  @media (max-width: 840px) {
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
      font-size: 1rem;
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

    .faq-list {
      margin-top: 32px;
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
      white-space: normal;
      word-break: break-word;
    }

    .stat-label-minimal {
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
    }

    .unified-features-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .testimonials-layout {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-top: 40px;
    }

    .testimonials-left {
      gap: 20px;
    }

    .testimonials-right {
      gap: 20px;
    }

    .why-choose-free-section {
      padding: 48px 16px;
      margin: 32px 0;
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

    .download-section {
      margin-top: 40px;
      gap: 20px;
    }
  }

</style>
