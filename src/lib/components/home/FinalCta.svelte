<script lang="ts">
  import PlayStoreButton from '../PlayStoreButton.svelte';
  import PlayQr from './PlayQr.svelte';

  export let content: {
    title: string;
    subtitle: string;
    note: string;
    qrLabel: string;
  };
  /** Play Store QR code (inline SVG, built at prerender) for desktop visitors. */
  export let qr: string;
</script>

<section class="final-cta" aria-labelledby="final-cta-title">
  <div class="container">
    <!-- Dark panel with the same mint glow as the Pro price card -->
    <div class="panel theme-dark">
      <h2 id="final-cta-title" class="cta-title">{content.title}</h2>
      <p class="cta-subtitle">{content.subtitle}</p>

      <div class="cta-actions">
        <div class="cta-badge">
          <PlayStoreButton position="footer" />
          <p class="cta-note">{content.note}</p>
        </div>
        <PlayQr svg={qr} label={content.qrLabel} />
      </div>
    </div>
  </div>
</section>

<style>
  .final-cta {
    padding: 32px 0 8px;
  }

  .panel {
    padding: 64px 24px;
    border-radius: 32px;
    background:
      radial-gradient(ellipse 70% 80% at 50% 0%, rgba(94, 224, 143, 0.22), transparent 70%),
      #0e1310;
    text-align: center;
  }

  .cta-title {
    max-width: 11em;
    margin: 0 auto 20px;
    font-size: clamp(2.4rem, 6.4vw, 5rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    color: #fff;
    text-wrap: balance;
  }

  .cta-subtitle {
    margin: 0 auto 36px;
    font-size: 1.15rem;
    color: var(--color-body-soft);
  }

  .cta-actions {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
  }

  .cta-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .cta-note {
    margin: 0;
    font-size: 0.875rem;
    color: var(--color-secondary);
  }

  @media (min-width: 900px) {
    .final-cta {
      padding: 48px 0 24px;
    }

    .panel {
      padding: 112px 48px;
    }
  }
</style>
