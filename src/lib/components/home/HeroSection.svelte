<script lang="ts">
  import { page } from '$app/stores';
  import PlayStoreButton from '../PlayStoreButton.svelte';
  import PlayQr from './PlayQr.svelte';

  export let content: {
    headline: string;
    subline: string;
    playNote: string;
    ratingValue: string;
    rating: string;
    downloads: string;
    qrLabel: string;
    notification: { app: string; when: string; title: string; text: string };
    imageAlt: string;
  };
  /** Play Store QR code (inline SVG, built at prerender) for desktop visitors. */
  export let qr: string;
</script>

<section class="hero theme-dark" id="section_CC">
  <div class="container hero-grid">
    <div class="hero-copy">
      <h1 class="hero-title">{content.headline}</h1>
      <p class="hero-subline">{content.subline}</p>

      <div class="hero-cta">
        <div class="hero-badge">
          <PlayStoreButton position="hero" />
          <p class="play-note">{content.playNote}</p>
        </div>
        <PlayQr svg={qr} label={content.qrLabel} />
      </div>

      <p class="hero-proof">
        <span class="proof-star" aria-hidden="true">★</span>
        <strong>{content.ratingValue}</strong>
        <span class="sr-only">{$page.data.ui.stars}</span>
        {content.rating}
        <span class="proof-sep" aria-hidden="true"></span>
        {content.downloads}
      </p>
    </div>

    <!-- The theft, and what lands in your inbox because of it -->
    <div class="hero-visual">
      <div class="photo-frame">
        <img
          src="/images/hero-pickpocket-1200.webp"
          srcset="/images/hero-pickpocket-800.webp 800w, /images/hero-pickpocket-1200.webp 1200w, /images/hero-pickpocket-1672.webp 1672w"
          sizes="(min-width: 900px) 1200px, 100vw"
          alt={content.imageAlt}
          width="1672"
          height="941"
          fetchpriority="high"
        />
      </div>

      <div class="notification" aria-hidden="true">
        <div class="n-head">
          <span class="n-icon"><span class="material-icons">mail</span></span>
          <span>{content.notification.app}</span>
          <span class="n-dot">·</span>
          <span>{content.notification.when}</span>
        </div>
        <p class="n-title">{content.notification.title}</p>
        <p class="n-sub">{content.notification.text}</p>
        <div class="n-tiles">
          <span class="tile face left"></span>
          <span class="tile face right"></span>
          <span class="tile map"></span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    margin-top: -64px;
    padding: 112px 0 72px;
    overflow: hidden;
    background:
      radial-gradient(ellipse 50% 60% at 85% 40%, rgba(94, 224, 143, 0.14), transparent 70%),
      #0b100d;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
  }

  .hero-title {
    margin: 0 0 20px;
    max-width: 10em;
    font-size: clamp(2.6rem, 5.4vw, 4.75rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    color: #fff;
    text-wrap: balance;
  }

  .hero-subline {
    margin: 0 0 32px;
    max-width: 28em;
    font-size: 1.15rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.78);
    text-wrap: pretty;
  }

  .hero-cta {
    display: flex;
    align-items: flex-start;
    gap: 28px;
  }

  .hero-badge {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .play-note {
    margin: 0;
    white-space: nowrap;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.65);
  }

  .hero-proof {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin: 36px 0 0;
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .hero-proof strong {
    font-family: inherit;
    color: #fff;
  }

  .proof-star {
    color: #e8c04a;
  }

  .proof-sep {
    width: 1px;
    height: 14px;
    margin: 0 10px;
    background: rgba(255, 255, 255, 0.25);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .hero-visual {
    position: relative;
  }

  /* Cropped to the hand and the pocket */
  .photo-frame {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 28px;
    background: #1b1f1d;
  }

  .photo-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 34% 62%;
  }

  /* An expanded Android email notification: the focal point of the hero */
  .notification {
    position: relative;
    z-index: 1;
    width: calc(100% - 32px);
    max-width: 400px;
    margin: -24px auto 0;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    background: rgba(22, 30, 26, 0.82);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 30px 70px -20px rgba(0, 0, 0, 0.7);
    color: #fff;
  }

  .n-head {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .n-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #5ee08f;
    color: #0e1310;
  }

  .n-icon .material-icons {
    font-size: 14px;
  }

  .n-dot {
    opacity: 0.6;
  }

  .n-title {
    margin: 10px 0 4px;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
    color: #fff;
  }

  .n-sub {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.72);
  }

  .n-tiles {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-top: 14px;
  }

  .tile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 76px;
    overflow: hidden;
    border-radius: 12px;
    background: #1b1f1d;
  }

  /* The two intruder photos from the alert image, softly blurred (no real faces) */
  .face::before {
    content: '';
    position: absolute;
    inset: -8px;
    background-image: url('/images/hero-alert-480.webp');
    background-size: 300px auto;
    background-position: -15px -66px;
    filter: blur(4px);
  }

  .face.right::before {
    background-position: -159px -66px;
  }

  /* Map crop from the bottom of the alert image, around its pin and below the text above it */
  .map {
    background: #1b1f1d url('/images/hero-alert-480.webp') no-repeat;
    background-size: 380px auto;
    background-position: -135px -298px;
  }

  @media (min-width: 900px) {
    .hero {
      padding: 152px 0 112px;
    }

    .hero-grid {
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
      gap: 64px;
    }

    .photo-frame {
      aspect-ratio: 4 / 5;
    }

    /* Overlaps the photo's top-right corner, clear of the hand and the pocket below */
    .notification {
      position: absolute;
      top: 40px;
      right: -40px;
      width: 380px;
      margin: 0;
    }
  }
</style>
