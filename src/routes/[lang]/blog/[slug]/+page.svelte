<script lang="ts">
  import type { PageData } from './$types';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { _ } from 'svelte-i18n';
  import { page } from '$app/stores';
  
  export let data: PageData;

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Add translations for the fallback message
  const fallbackMsg = {
    en: "This post is only available in English",
    fr: "Cet article n'est disponible qu'en anglais"
  } as const;
</script>

<svelte:head>
  <title>{data.post.title} - {data.post.subtitle}</title>
  <meta name="description" content={data.post.description}>
  
  <!-- Social Tags -->
  <meta property="og:title" content={data.post.title}>
  <meta property="og:description" content={data.post.description}>
  <meta property="og:image" content={data.post.image}>
  <meta property="og:type" content="article">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={data.post.title}>
  <meta name="twitter:description" content={data.post.description}>
  <meta name="twitter:image" content={data.post.image}>
  
  <!-- Article Schema -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${data.post.title || 'CrookCatcher Blog Article'}",
    "description": "${data.post.description || 'Learn more about CrookCatcher.'}",
    "image": "${data.post.image || 'https://www.crookcatcher.app/images/feature_graphic_en.png'}",
    "datePublished": "${data.post.datePublished || '2024-01-01'}",
    "dateModified": "${data.post.dateUpdated || '2024-01-01'}",
    "author": {
      "@type": "Person",
      "name": "Jakob Harteg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CrookCatcher",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.crookcatcher.app/images/ic_launcher_512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "{$page.url.href}"
    },
    "url": "{$page.url.href}"
  }
</script>`}
</svelte:head>

<header class="app-header">
  <Header />
</header>

<main>

  <article class="blog-post">

    {#if data.fallback}
      <div class="fallback-notice">
        {fallbackMsg[data.lang as keyof typeof fallbackMsg]}
      </div>
    {/if}

    <header class="post-header">
      {#if data.post.image}
        <img src={data.post.image} alt={data.post.imageAlt} class="post-image" />
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
      <time datetime={data.post.dateUpdated}>
        {$_('Last updated')}: {new Date(data.post.dateUpdated).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
    </div>
  </article>

</main>

<Footer />

<style>
  .blog-post {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    margin-top: 128px;
  }

  @media (max-width: 900px) {
    .blog-post {
      margin-top: 16px;
    }
  }

  .post-header {
    margin-bottom: 48px;
  }

  .post-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 96px;
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

  .fallback-notice {
    color: #fff;
    font-weight: 600;
    margin-bottom: 1rem;
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
    height: 6rem;
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

  .post-footer time {
    opacity: 0.5;
    font-weight: 600;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    .post-footer {
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
  }
</style> 