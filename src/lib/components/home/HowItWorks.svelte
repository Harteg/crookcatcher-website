<script lang="ts">
  export let content: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: {
      label: string;
      title: string;
      description: string;
      image: { src?: string; alt: string };
      share?: {
        evidenceTitle: string;
        evidenceTime: string;
        evidenceLocation: string;
        targets: { icon: string; label: string; primary?: boolean }[];
      };
    }[];
  };

  function titleHtml(title: string, highlight: string) {
    if (!highlight || !title.includes(highlight)) return title;
    return title.replace(highlight, `<span class="accent">${highlight}</span>`);
  }
</script>

<section class="how section" aria-labelledby="how-title">
  <div class="container">
    <header class="how-header">
      <h2 id="how-title" class="section-title">
        {@html titleHtml(content.title, content.titleHighlight)}
      </h2>
      <p class="section-subtitle">{content.subtitle}</p>
    </header>

    <ol class="steps">
      {#each content.steps as step, i}
        <li class="step">
          <div class="step-media">
            <span class="step-num" aria-hidden="true">{i + 1}</span>
            {#if step.share}
              <div class="share-sheet" role="img" aria-label={step.image.alt}>
                <span class="sheet-handle"></span>
                <div class="sheet-evidence" aria-hidden="true">
                  <span class="evidence-thumb"></span>
                  <div class="evidence-text">
                    <span class="evidence-title">{step.share.evidenceTitle}</span>
                    <span class="evidence-meta">{step.share.evidenceTime}</span>
                    <span class="evidence-meta evidence-location">
                      <span class="material-icons">location_on</span>
                      {step.share.evidenceLocation}
                    </span>
                  </div>
                </div>
                <ul class="sheet-targets" aria-hidden="true">
                  {#each step.share.targets as target}
                    <li class:primary={target.primary}>
                      <span class="material-icons target-icon">{target.icon}</span>
                      <span class="target-label">{target.label}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            {:else if step.image.src}
              <img
                src={step.image.src}
                alt={step.image.alt}
                width="400"
                height="320"
                loading="lazy"
              />
            {/if}
          </div>
          <div class="step-copy">
            <h3 class="step-title">{step.title}</h3>
            <p class="step-description">{step.description}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>

<style>
  .how-header {
    max-width: 36em;
    margin-bottom: 36px;
  }

  .section-subtitle {
    margin-bottom: 0;
  }

  .steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .step {
    margin: 0;
    display: flex;
    flex-direction: column;
    background: var(--color-card);
    border: 1px solid var(--color-card-border);
    border-radius: 20px;
    overflow: hidden;
    height: 100%;
  }

  .step-media {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 240px;
    padding: 28px 24px 24px;
    background:
      radial-gradient(ellipse at 50% 0%, rgba(94, 224, 143, 0.08), transparent 60%),
      #121814;
    border-bottom: 1px solid var(--color-card-border);
  }

  .step-num {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--color-primary);
    color: var(--color-on-primary);
    font-family: 'NexaBold', sans-serif;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    z-index: 1;
  }

  .step-media img {
    width: auto;
    max-width: 100%;
    max-height: 188px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.35));
  }

  .share-sheet {
    width: 100%;
    max-width: 280px;
    padding: 10px 14px 16px;
    background: #1D2621;
    border: 1px solid #2C3A32;
    border-radius: 18px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  }

  .sheet-handle {
    display: block;
    width: 32px;
    height: 4px;
    margin: 0 auto 12px;
    border-radius: 2px;
    background: #3A4A41;
  }

  .sheet-evidence {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 12px;
    margin-bottom: 14px;
    border-bottom: 1px solid #2C3A32;
  }

  /* Crops the first intruder photo out of the hero alert image */
  .evidence-thumb {
    flex-shrink: 0;
    width: 44px;
    height: 54px;
    border-radius: 8px;
    background-image: url('/images/hero-alert.png');
    background-size: 98px auto;
    background-position: -3.5px -10px;
  }

  .evidence-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .evidence-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-body);
    line-height: 1.3;
  }

  .evidence-meta {
    font-size: 0.8125rem;
    color: var(--color-secondary);
    line-height: 1.3;
  }

  .evidence-location {
    display: flex;
    align-items: center;
    gap: 2px;
    color: var(--color-primary);
  }

  .evidence-location .material-icons {
    font-size: 14px;
  }

  .sheet-targets {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 4px;
  }

  .sheet-targets li {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .target-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    background: #2A3630;
    color: var(--color-body);
  }

  .primary .target-icon {
    background: var(--color-primary);
    color: var(--color-on-primary);
    box-shadow: 0 0 0 4px rgba(94, 224, 143, 0.18);
  }

  .target-label {
    font-size: 0.8125rem;
    color: var(--color-secondary);
    line-height: 1.2;
    text-align: center;
  }

  .primary .target-label {
    color: var(--color-body);
    font-weight: 600;
  }

  .step-copy {
    padding: 22px 22px 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .step-title {
    margin: 0 0 8px;
    font-size: 1.25rem;
    color: var(--color-body);
    line-height: 1.25;
  }

  .step-description {
    margin: 0;
    color: var(--color-secondary);
    font-size: 0.95rem;
    line-height: 1.55;
  }

  @media (min-width: 900px) {
    .how-header {
      margin-bottom: 40px;
    }

    .steps {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      align-items: stretch;
    }

    .step-media {
      height: 260px;
      padding: 32px 24px 28px;
    }

    .step-media img {
      max-height: 210px;
    }

    .step-copy {
      padding: 24px 26px 28px;
    }

    .step-title {
      font-size: 1.3rem;
    }

    .step-description {
      font-size: 1rem;
    }
  }
</style>
