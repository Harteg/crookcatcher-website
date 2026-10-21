<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import PageHero from '$lib/components/PageHero.svelte';
import Hreflang from '$lib/components/Hreflang.svelte';

/**
 * Terms of use / privacy policy, rendered from content/{terms,privacy}.{locale}.json.
 * Each section has either an `icon` (Material icon name) or a `number`, and an HTML `body`.
 */
export let doc;
</script>

<svelte:head>
    <title>{doc.meta.title}</title>
    <meta name="description" content={doc.meta.description}>
    <link rel="canonical" href={doc.meta.canonical} />

    <!-- Open Graph -->
    <meta property="og:title" content={doc.meta.title} />
    <meta property="og:description" content={doc.meta.description} />
    <meta property="og:url" content={doc.meta.canonical} />
    <meta property="og:image" content="https://www.crookcatcher.app/images/og-share.png" />
    <meta name="twitter:image" content="https://www.crookcatcher.app/images/og-share.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="CrookCatcher" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={doc.meta.title} />
    <meta name="twitter:description" content={doc.meta.description} />
</svelte:head>

<Hreflang />

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container doc-page">
        <PageHero
            eyebrow={doc.hero.eyebrow}
            title={doc.hero.title}
            lead={doc.hero.lead}
        />

        <div class="doc-card">
            {#each doc.sections as section}
                <section class="doc-section">
                    {#if section.number}
                        <span class="doc-icon doc-number" aria-hidden="true">{section.number}</span>
                    {:else}
                        <span class="doc-icon" aria-hidden="true"><span class="material-icons">{section.icon}</span></span>
                    {/if}
                    <div class="doc-body">
                        <h2>{section.title}</h2>
                        {@html section.body}
                    </div>
                </section>
            {/each}
        </div>

        {#if doc.note}
            <div class="doc-note">
                {@html doc.note}
            </div>
        {/if}
    </div>
</main>

<Footer/>
