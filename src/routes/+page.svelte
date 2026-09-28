<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import RecentPosts from '$lib/components/RecentPosts.svelte';
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import HowItWorks from '$lib/components/home/HowItWorks.svelte';
  import AppGallery from '$lib/components/home/AppGallery.svelte';
  import FeaturesFreePro from '$lib/components/home/FeaturesFreePro.svelte';
  import TestimonialsSection from '$lib/components/home/TestimonialsSection.svelte';
  import FaqSection from '$lib/components/home/FaqSection.svelte';
  import FinalCta from '$lib/components/home/FinalCta.svelte';

  export let data;

  const home = data.home;
  const reviews = data.reviews;

  const faqJsonLd = {
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

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How CrookCatcher works',
    description: home.howItWorks.subtitle,
    step: home.howItWorks.steps.map(
      (step: { title: string; description: string; image: { src?: string } }, i: number) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.title,
        text: step.description,
        ...(step.image.src && { image: `https://www.crookcatcher.app${step.image.src}` })
      })
    )
  };
</script>

<svelte:head>
  <title>{home.meta.title}</title>
  <meta name="description" content={home.meta.description} />
  <link rel="canonical" href={home.meta.canonical} />

  <link rel="alternate" hreflang="en" href="https://www.crookcatcher.app/" />
  <link rel="alternate" hreflang="x-default" href="https://www.crookcatcher.app/" />

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
  <link rel="preload" href="/fonts/Nexa-Bold.woff" as="font" type="font/woff" crossorigin="anonymous" />

  {@html `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.crookcatcher.app/'
      }
    ]
  })}</script>`}

  {@html `<script type="application/ld+json">${JSON.stringify(howToJsonLd)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`}
</svelte:head>

<header class="app-header">
  <Header />
</header>

<main>
  <HeroSection content={home.hero} />
  <HowItWorks content={home.howItWorks} />
  <AppGallery content={home.appGallery} />
  <FeaturesFreePro content={home.features} />
  <TestimonialsSection content={home.testimonials} reviews={reviews} />
  <FaqSection content={home.faq} />
  <FinalCta content={home.finalCta} trust={home.trust} />
  <div class="container recent-wrap">
    <RecentPosts posts={data.posts} />
  </div>
</main>

<Footer />

<style>
  .recent-wrap {
    padding-top: 8px;
    padding-bottom: 56px;
  }
</style>
