<script lang="ts">
  export let content: {
    eyebrow: string;
    title: string;
    text: string;
    points: { title: string; text: string }[];
    link: { href: string; label: string };
  };

  const ICONS = ['no_accounts', 'send', 'photo_camera'];
</script>

<section class="privacy theme-dark" aria-labelledby="privacy-title">
  <div class="container privacy-grid">
    <div class="privacy-intro">
      <p class="eyebrow">{content.eyebrow}</p>
      <h2 id="privacy-title">{content.title}</h2>
      <p class="privacy-text">{content.text}</p>
      <a class="privacy-link" href={content.link.href}>
        {content.link.label}
        <span class="material-icons" aria-hidden="true">arrow_forward</span>
      </a>
    </div>

    <ul class="points">
      {#each content.points as point, i}
        <li class="point">
          <span class="material-icons point-icon" aria-hidden="true">{ICONS[i] ?? 'check'}</span>
          <div>
            <h3 class="point-title">{point.title}</h3>
            <p class="point-text">{point.text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .privacy {
    padding: 72px 0;
    background: var(--color-dark-bg);
  }

  .privacy-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .eyebrow {
    margin: 0 0 12px;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-primary);
  }

  h2 {
    margin: 0 0 20px;
    max-width: 12em;
    font-size: clamp(2.2rem, 5vw, 4rem);
    line-height: 1.04;
    letter-spacing: -0.03em;
    text-wrap: balance;
  }

  .privacy-text {
    margin: 0 0 24px;
    max-width: 28em;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-body-soft);
  }

  .privacy-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }

  .privacy-link .material-icons {
    font-size: 18px;
    transition: transform 0.15s ease;
  }

  .privacy-link:hover .material-icons {
    transform: translateX(3px);
  }

  .points {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .point {
    display: flex;
    gap: 16px;
    margin: 0;
    padding: 22px 0;
    border-top: 1px solid var(--color-divider);
  }

  .point:last-child {
    border-bottom: 1px solid var(--color-divider);
  }

  .point-icon {
    margin-top: 2px;
    font-size: 22px;
    color: var(--color-primary);
  }

  .point-title {
    margin: 0 0 4px;
    font-family: inherit;
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .point-text {
    margin: 0;
    font-size: 1rem;
    line-height: 1.55;
    color: var(--color-secondary);
  }

  @media (min-width: 900px) {
    .privacy {
      padding: 112px 0;
    }

    .privacy-grid {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 80px;
      align-items: center;
    }
  }
</style>
