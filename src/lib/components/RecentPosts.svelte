<script lang="ts">
  
  
  import type { Post } from '$lib/types/blog';

  export let posts: Post[] = [];
</script>

<section class="recent-posts-section">
  <h2 class="section-title cc-font text-center" style="font-size: 2rem">
        Recent Posts
  </h2>
  
  <div class="recent-posts">
    {#each posts?.slice(0, 3) || [] as post}
      <article class="blog-preview">
        <a href="/blog/{post.slug}" class="blog-preview-link">
          {#if post.image}
            <div class="preview-image">
              <img src={post.image} alt={post.imageAlt || ''} loading="lazy">
            </div>
          {/if}
          <div class="preview-content">
            <time datetime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString('en', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </a>
      </article>
    {/each}
  </div>

  <div class="text-center" style="margin-top: 48px;">
    <a href="/blog" class="social-link">
        View all posts →
    </a>
  </div>
</section>

<style>
  .recent-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 48px;
  }

  .blog-preview {
    background: var(--color-cc-dark-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  .blog-preview:hover {
    transform: translateY(-4px);
  }

  .blog-preview-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .preview-image {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .preview-content {
    padding: 24px;
  }

  .preview-content time {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    display: block;
    margin-bottom: 12px;
  }

  .preview-content h3 {
    font-size: 20px;
    line-height: 1.4;
    margin: 0 0 12px;
    color: #fff;
  }

  .preview-content p {
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .social-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 12px 24px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    transition: all 0.2s;
    font-size: 0.9rem;
  }

  .social-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 840px) {
    .recent-posts {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
</style> 