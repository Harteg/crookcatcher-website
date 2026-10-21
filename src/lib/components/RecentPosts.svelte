<script lang="ts">
  import { page } from '$app/stores';
  import type { PostSummary } from '$lib/blog';
  import { localizePath, type Locale } from '$lib/i18n';

  export let posts: PostSummary[] = [];
  export let title: string | undefined = undefined;
  export let viewAllLabel: string | undefined = undefined;

  $: locale = $page.data.locale as Locale;
  $: t = $page.data.ui.recentPosts;
</script>

<section class="recent-posts-section" aria-labelledby="recent-posts-title">
  <header class="recent-header">
    <h2 id="recent-posts-title" class="section-title">{title ?? t.title}</h2>
    <a href={localizePath('/blog', locale)} class="view-all">
      {viewAllLabel ?? t.viewAll}
      <span class="material-icons" aria-hidden="true">arrow_forward</span>
    </a>
  </header>

  <div class="recent-posts">
    {#each posts?.slice(0, 3) || [] as post}
      <article class="blog-preview">
        <a href={localizePath(`/blog/${post.slug}`, locale)} class="blog-preview-link">
          {#if post.image}
            <div class="preview-image">
              <img src={post.image} alt={post.imageAlt || ''} loading="lazy">
            </div>
          {/if}
          <div class="preview-content">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </a>
      </article>
    {/each}
  </div>
</section>

<style>
  .recent-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px 24px;
    margin-bottom: 24px;
  }

  .section-title {
    margin: 0;
  }

  .view-all {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    color: var(--color-primary);
  }

  .view-all .material-icons {
    font-size: 18px;
    transition: transform 0.15s ease;
  }

  .view-all:hover {
    opacity: 1;
  }

  .view-all:hover .material-icons {
    transform: translateX(3px);
  }

  .recent-posts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .blog-preview {
    overflow: hidden;
    border: 1px solid var(--color-card-border);
    border-radius: var(--border-radius);
    background: var(--color-card);
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .blog-preview:hover {
    transform: translateY(-3px);
    border-color: rgba(94, 224, 143, 0.35);
  }

  .blog-preview-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .blog-preview-link:hover {
    opacity: 1;
  }

  .preview-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .preview-content {
    padding: 20px;
  }

  .preview-content h3 {
    margin: 0 0 8px;
    font-size: 1.1rem;
    line-height: 1.35;
    color: var(--color-body);
  }

  .preview-content p {
    display: -webkit-box;
    margin: 0;
    overflow: hidden;
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--color-secondary);
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 840px) {
    .recent-posts {
      grid-template-columns: 1fr;
    }
  }
</style>
