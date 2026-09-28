<script lang="ts">
  export let content: {
    title: string;
    titleHighlight: string;
    subtitle?: string;
    image: { src: string; alt: string };
    callouts: { icon?: string; label: string; description?: string }[];
  };

  function titleHtml(title: string, highlight: string) {
    if (!highlight || !title.includes(highlight)) return title;
    return title.replace(highlight, `<span class="accent">${highlight}</span>`);
  }
</script>

<section class="app-gallery section" aria-labelledby="gallery-title">
  <div class="container">
    <div class="gallery-panel">
      <div class="gallery-copy">
        <h2 id="gallery-title" class="section-title">
          {@html titleHtml(content.title, content.titleHighlight)}
        </h2>
        {#if content.subtitle}
          <p class="gallery-subtitle">{content.subtitle}</p>
        {/if}

        <ul class="callouts">
          {#each content.callouts as callout}
            <li class="callout">
              <span class="callout-icon" aria-hidden="true">
                <span class="material-icons">{callout.icon ?? 'check'}</span>
              </span>
              <div>
                <h3 class="callout-label">{callout.label}</h3>
                {#if callout.description}
                  <p class="callout-description">{callout.description}</p>
                {/if}
              </div>
            </li>
          {/each}
        </ul>
      </div>

      <div class="gallery-visual">
        <div class="phone">
          <img
            src={content.image.src}
            alt={content.image.alt}
            width="456"
            height="1024"
            loading="lazy"
            class="phone-screen"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .gallery-panel {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    border: 1px solid var(--color-card-border);
    border-radius: 24px;
    background:
      radial-gradient(ellipse 60% 70% at 78% 60%, rgba(94, 224, 143, 0.14), transparent 70%),
      var(--color-card);
  }

  .gallery-copy {
    padding: 32px 24px 8px;
  }

  .section-title {
    margin: 0;
    text-wrap: balance;
  }

  .gallery-subtitle {
    margin: 12px 0 0;
    max-width: 30em;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-secondary);
    text-wrap: pretty;
  }

  .callouts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 28px 0 0;
    padding: 0;
    list-style: none;
  }

  .callout {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin: 0;
  }

  .callout-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(94, 224, 143, 0.12);
    color: var(--color-primary);
  }

  .callout-icon .material-icons {
    font-size: 22px;
  }

  .callout-label {
    margin: 2px 0 4px;
    font-size: 1.05rem;
    line-height: 1.3;
    color: var(--color-body);
  }

  .callout-description {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--color-secondary);
  }

  .gallery-visual {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 420px;
    padding-top: 32px;
  }

  .phone {
    width: 250px;
    padding: 10px 10px 0;
    border: 1px solid #2f3b33;
    border-bottom: none;
    border-radius: 36px 36px 0 0;
    background: #0b0f0c;
    box-shadow:
      0 0 0 6px rgba(255, 255, 255, 0.02),
      0 30px 80px rgba(0, 0, 0, 0.55);
  }

  .phone-screen {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 26px 26px 0 0;
  }

  @media (min-width: 900px) {
    .gallery-panel {
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
      align-items: center;
    }

    .gallery-copy {
      padding: 56px 0 56px 56px;
    }

    .callouts {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 28px 32px;
      margin-top: 36px;
    }

    .gallery-visual {
      align-self: stretch;
      height: auto;
      min-height: 520px;
      padding-top: 56px;
      position: relative;
    }

    .phone {
      position: absolute;
      top: 56px;
      width: 290px;
    }
  }
</style>
