<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';
  
  
  export let data: PageData;

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Guides and Tutorials • CrookCatcher Anti-Theft App</title>
  <meta name="description" content="A collection of articles showing you how to protect your phone from thieves and get the most out of CrookCatcher." />
  <meta property="og:type" content="blog" />
  <link rel="canonical" href={$page.url.href} />
</svelte:head>

<header class="app-header">
  <Header/>
</header>

<main>
  <div class="container">

    <section class="hero-section">
      <div class="text-center">
                <h1 class="hero-title cc-font">Guides and Tutorials</h1>
        <p class="hero-subtitle">A collection of articles showing you how to protect your phone from thieves and get the most out of CrookCatcher.</p>
      </div>
    </section>

    <section class="blog-list">
      {#each data.posts as post}
        <article class="blog-card">
            <a href="/blog/{post.slug}" class="card-link">
            <div class="card-content">
              <div class="meta">
                <span class="tag">BLOG</span>
                <time datetime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <h2>{post.title}</h2>
              <p class="description">{post.description}</p>
              <div class="read-more">
                <span>Read the post</span>
              </div>
            </div>
          </a>
        </article>
      {/each}
    </section>
  </div>
</main>

<Footer />

<style>
  .blog-list {
    max-width: 800px;
    margin: 64px auto;
    padding: 0 16px;
  }

  .blog-card {
    background: var(--color-cc-dark-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 24px;
  }

  .blog-card:hover a{
    /* override default opacity */
    opacity: 1;
  }


  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 32px;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .tag {
    background: rgba(255, 192, 203, 0.2);
    color: pink;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 500;
  }

  time {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .read-more {
    display: inline-block;
    background: var(--color-dark-green);
    color: var(--color-primary) !important;
    padding: 8px 48px;
    border-radius: 100px;
    font-weight: 500;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .blog-card:hover .read-more {
    background: var(--color-primary);
    color: var(--color-dark-green) !important;
  }

  @media (max-width: 600px) {
    .blog-list {
      margin: 32px auto;
    }

    .card-link {
      padding: 24px;
    }
  }
</style> 