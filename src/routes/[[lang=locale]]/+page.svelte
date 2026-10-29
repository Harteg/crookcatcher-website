<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import RecentPosts from '$lib/components/RecentPosts.svelte';
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import SpotlightSection from '$lib/components/home/SpotlightSection.svelte';
  import TimelineBand from '$lib/components/home/TimelineBand.svelte';
  import PrivacySection from '$lib/components/home/PrivacySection.svelte';
  import PlansSection from '$lib/components/home/PlansSection.svelte';
  import TestimonialsSection from '$lib/components/home/TestimonialsSection.svelte';
  import FaqSection from '$lib/components/home/FaqSection.svelte';
  import FinalCta from '$lib/components/home/FinalCta.svelte';
  import Hreflang from '$lib/components/Hreflang.svelte';

  export let data;

  // Reactive: switching language client-side reuses this component with new data.
  $: home = data.home;
  $: reviews = data.reviews;

  $: faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: home.faq.items.map((item: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
</script>

<svelte:head>
  <title>{home.meta.title}</title>
  <meta name="description" content={home.meta.description} />
  <link rel="canonical" href={home.meta.canonical} />

  <meta property="og:title" content={home.meta.title} />
  <meta property="og:description" content={home.meta.description} />
  <meta property="og:url" content={home.meta.canonical} />
  <meta property="og:image" content={home.meta.ogImage} />
  <meta property="og:image:width" content="1024" />
  <meta property="og:image:height" content="500" />
  <meta property="og:image:alt" content={home.meta.ogImageAlt} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="CrookCatcher" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={home.meta.title} />
  <meta name="twitter:description" content={home.meta.description} />
  <meta name="twitter:image" content={home.meta.ogImage} />

  <link rel="preload" href="/fonts/Nexa-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous" />

  {@html `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: data.ui.breadcrumbHome,
        item: home.meta.canonical
      }
    ]
  })}</script>`}

  {@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`}
</svelte:head>

<Hreflang />

<header class="app-header">
  <Header overlay />
</header>

<main class="home">
  <HeroSection content={home.hero} qr={data.qr.hero} />
  <SpotlightSection content={home.spotlight} />
  <TimelineBand content={home.timeline} />
  <PrivacySection content={home.privacy} />
  <PlansSection content={home.plans} />
  <TestimonialsSection content={home.testimonials} {reviews} />
  <FaqSection content={home.faq} />
  {#if data.posts.length}
    <div class="container recent-wrap">
      <RecentPosts posts={data.posts} />
    </div>
  {/if}
  <FinalCta content={home.finalCta} qr={data.qr.final} />
</main>

<Footer />

<style>
  .home {
    background: var(--color-cc-dark-bg);
  }

  /* Shared section rhythm and headings for the homepage sections. */
  .home :global(.home-section) {
    padding: 64px 0;
  }

  .home :global(.home-section-header) {
    max-width: 36em;
    margin-bottom: 40px;
  }

  .home :global(.home-section-header h2) {
    margin: 0;
    font-size: clamp(1.75rem, 3.6vw, 2.5rem);
    line-height: 1.12;
    letter-spacing: -0.015em;
    text-wrap: balance;
  }

  .home :global(.home-section-header p) {
    margin: 14px 0 0;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-secondary);
    text-wrap: pretty;
  }

  .recent-wrap {
    padding-bottom: 64px;
  }

  @media (min-width: 900px) {
    .home :global(.home-section) {
      padding: 112px 0;
    }

    .home :global(.home-section-header) {
      margin-bottom: 56px;
    }
  }
</style>
