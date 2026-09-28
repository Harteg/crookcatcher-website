<script lang="ts">
  type FeatureItem = {
    icon: string;
    title: string;
    description: string;
  };

  export let content: {
    title: string;
    titleHighlight: string;
    subtitle?: string;
    free: {
      badge: string;
      title: string;
      items: FeatureItem[];
    };
    pro: {
      badge: string;
      title?: string;
      groups: {
        title: string;
        items: FeatureItem[];
      }[];
    };
  };

  function titleHtml(title: string, highlight: string) {
    if (!highlight || !title.includes(highlight)) return title;
    return title.replace(highlight, `<span class="accent">${highlight}</span>`);
  }
</script>

<section class="features section" aria-labelledby="features-title">
  <div class="container">
    <header class="features-header">
      <h2 id="features-title" class="section-title">
        {@html titleHtml(content.title, content.titleHighlight)}
      </h2>
      {#if content.subtitle}
        <p class="features-subtitle">{content.subtitle}</p>
      {/if}
    </header>

    <div class="free-block">
      <div class="block-head">
        <span class="badge free-badge">{content.free.badge}</span>
        <h3 class="block-title">{content.free.title}</h3>
      </div>
      <ul class="feature-list free-items">
        {#each content.free.items as item}
          <li class="feature">
            <span class="feature-icon" aria-hidden="true">
              <span class="material-icons">{item.icon}</span>
            </span>
            <div>
              <p class="feature-title">{item.title}</p>
              <p class="feature-description">{item.description}</p>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <div class="pro-head">
      <span class="badge pro-badge">{content.pro.badge}</span>
      {#if content.pro.title}
        <h3 class="block-title">{content.pro.title}</h3>
      {/if}
      <span class="pro-rule" aria-hidden="true"></span>
    </div>

    <div class="pro-groups">
      {#each content.pro.groups as group}
        <div class="pro-group">
          <h4 class="group-title">{group.title}</h4>
          <ul class="feature-list">
            {#each group.items as item}
              <li class="feature">
                <span class="feature-icon" aria-hidden="true">
                  <span class="material-icons">{item.icon}</span>
                </span>
                <div>
                  <p class="feature-title">{item.title}</p>
                  <p class="feature-description">{item.description}</p>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .features-header {
    margin-bottom: 32px;
  }

  .section-title {
    margin: 0;
    text-wrap: balance;
  }

  .features-subtitle {
    margin: 12px 0 0;
    max-width: 36em;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-secondary);
    text-wrap: pretty;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 0.8125rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    line-height: 1.3;
  }

  .free-badge {
    border: 1px solid rgba(94, 224, 143, 0.5);
    color: var(--color-primary);
  }

  .pro-badge {
    background: var(--color-primary);
    color: var(--color-on-primary);
  }

  .block-head,
  .pro-head {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .block-title {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.3;
    color: var(--color-body);
  }

  .free-block {
    padding: 24px;
    border: 1px solid var(--color-card-border);
    border-radius: var(--border-radius);
    background:
      linear-gradient(135deg, rgba(94, 224, 143, 0.07), transparent 55%),
      var(--color-card);
  }

  .free-block .block-head {
    margin-bottom: 20px;
  }

  .pro-head {
    margin: 40px 0 16px;
  }

  .pro-rule {
    flex: 1;
    height: 1px;
    background: var(--color-card-border);
  }

  .pro-groups {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .pro-group {
    padding: 24px;
    border: 1px solid var(--color-card-border);
    border-radius: var(--border-radius);
    background: var(--color-card);
  }

  .group-title {
    margin: 0 0 20px;
    font-size: 1.1rem;
    line-height: 1.3;
    color: var(--color-body);
  }

  .feature-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .feature {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin: 0;
  }

  .feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(94, 224, 143, 0.12);
    color: var(--color-primary);
  }

  .feature-icon .material-icons {
    font-size: 20px;
  }

  .feature-title {
    margin: 0 0 2px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.35;
    color: var(--color-body);
  }

  .feature-description {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.45;
    color: var(--color-secondary);
  }

  @media (min-width: 768px) {
    .free-block {
      padding: 28px 32px;
    }

    .free-items {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }

    .pro-groups {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .pro-group {
      padding: 28px;
    }
  }
</style>
