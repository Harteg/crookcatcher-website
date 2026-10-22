<script lang="ts">
  import type { PageData } from './$types';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import Hreflang from '$lib/components/Hreflang.svelte';
  import { responsiveImage } from '$lib/responsive-image';
  import { LOCALE_META, SITE_URL, absoluteUrl } from '$lib/i18n';

  import { page } from '$app/stores';

  export let data: PageData;

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const toIso = (dateString: string) => new Date(dateString).toISOString();

  $: t = data.ui.blog;
  $: slug = $page.params.slug;
  $: canonical = absoluteUrl(`/blog/${slug}`, data.locale);

  $: ogImage = !data.post.image
    ? `${SITE_URL}/images/og-share.png`
    : data.post.image.startsWith('http')
      ? data.post.image
      : `${SITE_URL}${data.post.image}`;

  $: articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.post.title || 'CrookCatcher Blog Article',
    description: data.post.description || 'Learn more about CrookCatcher.',
    image: ogImage,
    inLanguage: LOCALE_META[data.locale].htmlLang,
    datePublished: toIso(data.post.datePublished || '2024-01-01T00:00:00Z'),
    dateModified: toIso(data.post.dateUpdated || '2024-01-01T00:00:00Z'),
    author: { '@type': 'Person', name: 'Jakob Harteg' },
    publisher: {
      '@type': 'Organization',
      name: 'CrookCatcher',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/ic_launcher_512.png` }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    url: canonical
  };

  $: breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: data.ui.breadcrumbHome, item: absoluteUrl('/', data.locale) },
      { '@type': 'ListItem', position: 2, name: t.breadcrumb, item: absoluteUrl('/blog', data.locale) },
      { '@type': 'ListItem', position: 3, name: data.post.title, item: canonical }
    ]
  };
</script>

<svelte:head>
  <title>{data.post.title}</title>
  <meta name="description" content={data.post.description}>
  <link rel="canonical" href={canonical} />

  <!-- Social Tags -->
  <meta property="og:title" content={data.post.title}>
  <meta property="og:description" content={data.post.description}>
  <meta property="og:image" content={ogImage}>
  <meta property="og:type" content="article">
  <meta property="og:url" content={canonical} />
  <meta property="og:site_name" content="CrookCatcher" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={data.post.title}>
  <meta name="twitter:description" content={data.post.description}>
  <meta name="twitter:image" content={ogImage}>

  {@html `<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`}
</svelte:head>

<Hreflang />

<header class="app-header">
  <Header />
</header>

<main>

  <article class="blog-post">

    <header class="post-header">
      {#if data.post.image}
        <img
          {...responsiveImage(data.post.image)}
          sizes="(min-width: 1200px) 1120px, 100vw"
          alt={data.post.imageAlt}
          class="post-image"
          fetchpriority="high"
        />
      {/if}
      <div class="post-meta">
        <h1>{data.post.title}</h1>
        <p class="subtitle">{data.post.subtitle}</p>
      </div>
    </header>

    <div class="post-content">
      <svelte:component this={data.post.content} />
    </div>
    <div class="post-footer">
      <ShareButtons 
        title={data.post.title}
        description={data.post.description}
      />
    </div>
  </article>

</main>

<Footer />

<style>
  .blog-post {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    margin-top: 16px;
  }

  @media (min-width: 1200px) {
    .blog-post {
      margin-top: 128px;
      background: var(--color-cc-dark-bg);
      padding: 40px;
      border-radius: 40px;
      margin-bottom: 40px;
      border: 1px solid #ffffff24;
    }
  }
  .post-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 96px;
  }


  @media (max-width: 900px) {
    .blog-post {
      margin-top: 16px;
    }

    .post-image {
      margin-bottom: 16px;
    }
  }

  .post-header {
    margin-bottom: 48px;
  }


  .post-meta{
    margin-top: 32px;
    max-width: 800px;
    margin: 0 auto;
  }

  /* Post title */
  .post-meta h1 {
    font-size: 1.8rem;
    margin-top: 32px;
    margin-bottom: 16px;
    line-height: 2.5rem;
    color: #fff;
    text-align: center;
  }

  .subtitle {
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .post-content{
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 128px;
  }

  .post-content :global(p) {
    margin: 0 0 24px;
  }

  .post-content :global(pre) {
    background: var(--color-cc-dark-bg);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 24px 0;
  }

  .post-content :global(code) {
    font-family: monospace;
  }

  .post-content :global(a) {
    color: var(--color-primary);
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s ease;
  }

  .post-content :global(a):hover {
    opacity: 1.0;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
  }

  .post-content :global(a:hover) {
    text-decoration: underline;
  }

  .post-content :global(h1),
  .post-content :global(h2),
  .post-content :global(h3),
  .post-content :global(h4),
  .post-content :global(h5) {
    color: #fff;
    margin-bottom: 8px;
    margin-top: 3.5rem;
  }

  .post-content :global(h1) {
    font-size: 30px;
  }

  .post-content :global(h2) {
    font-size: 24px;
  }

  .post-content :global(h3) {
    font-size: 22px;
  }
  .post-content :global(ul) {
    margin: 0 0 24px;
    padding-left: 24px;
    list-style: disc;
    color: #fff;
  }

  .post-content :global(li) {
    margin-bottom: 8px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  .post-content :global(li:last-child) {
    margin-bottom: 0;
  }

  .post-content :global(ol) {
    margin: 0 0 24px;
    padding-left: 24px;
    list-style: decimal;
    color: #fff;
  }

  .post-content :global(ol li) {
    margin-bottom: 8px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    padding-left: 12px;
  }

  .post-content :global(ol li:last-child) {
    margin-bottom: 0;
  }

  .post-content :global(table) {
    width: 100%;
    margin: 24px 0 32px;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--color-card-border);
    border-radius: 12px;
    overflow: hidden;
    background: var(--color-card);
    font-size: 0.95rem;
  }

  .post-content :global(th),
  .post-content :global(td) {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--color-card-border);
  }

  .post-content :global(th) {
    color: var(--color-secondary);
    font-weight: 600;
  }

  .post-content :global(td) {
    color: rgba(255, 255, 255, 0.85);
  }

  .post-content :global(tr:last-child td) {
    border-bottom: none;
  }

  .post-content :global(.blog-figure) {
    margin: 32px 0;
    border-radius: 12px;
    overflow: hidden;
    background: var(--color-cc-dark-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .post-content :global(.blog-figure img) {
    width: 100%;
    height: auto;
    display: block;
  }

  .post-content :global(.blog-figure figcaption) {
    padding: 16px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  
  .post-content :global(em), .post-content :global(i) {
    color: var(--color-on-primary-container);
    font-weight: 700;
    background: var(--color-primary-container);
    padding: 0 4px;
    border-radius: 4px;
    font-style: normal;
  }

  .post-content :global(.play-badge){
    height: 4rem;
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 48px auto 0;
    padding-top: 24px;
    padding-bottom: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 600px) {
    .post-footer {
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
  }

  .faq-section {
    padding: 64px 0;
    background: var(--color-cc-dark-bg);
    margin: 64px 0;
    border-radius: var(--border-radius);
    border: 2px solid rgba(255, 255, 255, 0.15);
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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