<script lang="ts">
  import type { PageData } from './$types';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import PlayStoreButton from '$lib/components/PlayStoreButton.svelte';
  import Hreflang from '$lib/components/Hreflang.svelte';
  import { responsiveImage } from '$lib/responsive-image';
  import { absoluteUrl, localizePath } from '$lib/i18n';

  export let data: PageData;

  $: t = data.ui.blog;
  $: pageTitle = t.metaTitle;
  $: pageDescription = t.metaDescription;
  $: canonical = absoluteUrl('/blog', data.locale);
  $: postHref = (slug: string) => localizePath(`/blog/${slug}`, data.locale);

  $: [featured, ...rest] = data.posts;
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={canonical} />

  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content="https://www.crookcatcher.app/images/og-share.png" />
  <meta property="og:type" content="blog" />
  <meta property="og:site_name" content="CrookCatcher" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content="https://www.crookcatcher.app/images/og-share.png" />
</svelte:head>

<Hreflang />

<header class="app-header">
  <Header />
</header>

<main>
  <div class="container blog-index">
    <PageHero
      eyebrow={t.eyebrow}
      title={t.title}
      lead={t.lead}
    />

    {#if featured}
      <article class="featured">
        <a href={postHref(featured.slug)} class="featured-link">
          {#if featured.image}
            <div class="featured-media">
              <img
                {...responsiveImage(featured.image)}
                sizes="(min-width: 900px) 640px, 100vw"
                alt={featured.imageAlt || ''}
                fetchpriority="high"
              />
            </div>
          {/if}
          <div class="featured-body">
            <p class="post-meta">
              <span class="latest">{t.latest}</span>
            </p>
            <h2 class="featured-title">{featured.title}</h2>
            <p class="post-description">{featured.description}</p>
            <span class="read-link">
              {t.readGuide}
              <span class="material-icons" aria-hidden="true">arrow_forward</span>
            </span>
          </div>
        </a>
      </article>
    {/if}

    {#if rest.length}
      <section class="more" aria-labelledby="more-title">
        <h2 id="more-title" class="more-title">{t.moreGuides}</h2>
        <div class="post-grid">
          {#each rest as post}
            <article class="post-card">
              <a href={postHref(post.slug)} class="post-link">
                <div class="post-media">
                  {#if post.image}
                    <img
                      {...responsiveImage(post.image)}
                      sizes="(min-width: 900px) 360px, (min-width: 640px) 50vw, 100vw"
                      alt={post.imageAlt || ''}
                      loading="lazy"
                    />
                  {/if}
                </div>
                <div class="post-body">
                  <h3 class="post-title">{post.title}</h3>
                  <p class="post-description clamp">{post.description}</p>
                  <span class="read-link">
                    {t.readGuide}
                    <span class="material-icons" aria-hidden="true">arrow_forward</span>
                  </span>
                </div>
              </a>
            </article>
          {/each}
        </div>
      </section>
    {/if}

    <aside class="cta-panel" aria-labelledby="blog-cta-title">
      <div>
        <h2 id="blog-cta-title" class="cta-title">{t.ctaTitle}</h2>
        <p class="cta-text">{t.ctaText}</p>
      </div>
      <PlayStoreButton utmSource="blog_index" position="blog_index" />
    </aside>
  </div>
</main>

<Footer />

<style>
  .blog-index {
    padding-bottom: 72px;
  }

  .featured,
  .post-card {
    overflow: hidden;
    border: 1px solid var(--color-card-border);
    border-radius: var(--border-radius);
    background: var(--color-card);
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .featured:hover,
  .post-card:hover {
    border-color: rgba(94, 224, 143, 0.35);
  }

  .post-card:hover {
    transform: translateY(-3px);
  }

  .featured-link,
  .post-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }

  .featured-link:hover,
  .post-link:hover {
    opacity: 1;
  }

  .featured-media,
  .post-media {
    aspect-ratio: 1.91 / 1;
    overflow: hidden;
    background: var(--color-dark-bg);
  }

  .featured-media img,
  .post-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .featured:hover img,
  .post-card:hover img {
    transform: scale(1.02);
  }

  .featured-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
  }

  .post-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin: 0 0 12px;
    font-size: 0.875rem;
    color: var(--color-secondary);
  }

  .latest {
    padding: 3px 10px;
    border: 1px solid rgba(94, 224, 143, 0.35);
    border-radius: 999px;
    background: rgba(94, 224, 143, 0.12);
    color: var(--color-primary);
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .featured-title {
    margin: 0 0 12px;
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 1.2;
    color: var(--color-body);
    text-wrap: balance;
  }

  .post-description {
    margin: 0 0 20px;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-secondary);
    text-wrap: pretty;
  }

  .clamp {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .read-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    font-weight: 600;
    color: var(--color-primary);
  }

  .read-link .material-icons {
    font-size: 18px;
    transition: transform 0.15s ease;
  }

  .featured:hover .read-link .material-icons,
  .post-card:hover .read-link .material-icons {
    transform: translateX(3px);
  }

  .more {
    margin-top: 56px;
  }

  .more-title {
    margin: 0 0 20px;
    font-size: 1.5rem;
    color: var(--color-body);
  }

  .post-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .post-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;
  }

  .post-title {
    margin: 0 0 10px;
    font-size: 1.15rem;
    line-height: 1.35;
    color: var(--color-body);
    text-wrap: balance;
  }

  .post-card .post-description {
    font-size: 0.9375rem;
    line-height: 1.55;
  }

  .cta-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 64px;
    padding: 28px 24px;
    overflow: hidden;
    border: 1px solid var(--color-card-border);
    border-radius: var(--border-radius);
    background:
      radial-gradient(ellipse at 100% 0%, rgba(94, 224, 143, 0.14), transparent 60%),
      var(--color-card);
  }

  .cta-title {
    margin: 0 0 8px;
    font-size: 1.5rem;
    color: var(--color-body);
  }

  .cta-text {
    max-width: 34em;
    margin: 0;
    line-height: 1.6;
    color: var(--color-secondary);
  }

  @media (min-width: 640px) {
    .post-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 900px) {
    .featured-link {
      display: grid;
      grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
      align-items: center;
      gap: 8px;
      padding: 16px;
    }

    .featured-media {
      border-radius: 12px;
    }

    .featured-body {
      padding: 16px 24px 16px 20px;
    }

    .post-grid {
      gap: 20px;
    }

    .cta-panel {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 36px 40px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .featured,
    .post-card,
    .featured-media img,
    .post-media img,
    .read-link .material-icons {
      transition: none;
    }

    .post-card:hover,
    .featured:hover img,
    .post-card:hover img {
      transform: none;
    }
  }
</style>
