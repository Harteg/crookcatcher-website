<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import PageHero from '$lib/components/PageHero.svelte';
import FAQItem from '$lib/components/FAQItem.svelte';
import Hreflang from '$lib/components/Hreflang.svelte';

export let data;

$: help = data.help;

let showEmail = false;
</script>

<svelte:head>
    <title>{help.meta.title}</title>
    <meta name="description" content={help.meta.description}>
    <link rel="canonical" href={help.meta.canonical} />

    <!-- Open Graph -->
    <meta property="og:title" content={help.meta.title} />
    <meta property="og:description" content={help.meta.description} />
    <meta property="og:url" content={help.meta.canonical} />
    <meta property="og:image" content={help.meta.ogImage} />
    <meta name="twitter:image" content={help.meta.ogImage} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="CrookCatcher" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={help.meta.title} />
    <meta name="twitter:description" content={help.meta.description} />
</svelte:head>

<Hreflang />

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container doc-page">
        <PageHero
            eyebrow={help.hero.eyebrow}
            title={help.hero.title}
            lead={help.hero.lead}
        />

        <div class="help-list">
            {#each help.items as item (item.id)}
                <FAQItem headingLevel={2} id={item.id} question={item.question}>
                    {@html item.answer}
                </FAQItem>
            {/each}
        </div>

        <section class="contact-card" aria-labelledby="contact-title">
            <span class="doc-icon" aria-hidden="true"><span class="material-icons">support_agent</span></span>
            <div class="contact-body">
                <h2 id="contact-title">{help.contact.title}</h2>
                <p>{help.contact.text}</p>
                {#if showEmail}
                    <a class="contact-email" href="mailto:contact@crookcatcher.app">contact@crookcatcher.app</a>
                {:else}
                    <button type="button" class="contact-button" on:click={() => (showEmail = true)}>
                        {help.contact.showEmail}
                    </button>
                {/if}
            </div>
        </section>
    </div>
</main>

<Footer/>

<style>
    .help-list {
        overflow: hidden;
        border: 1px solid var(--color-card-border);
        border-radius: var(--border-radius);
        background: var(--color-card);
    }

    .help-list :global(.faq-item + .faq-item) {
        border-top: 1px solid var(--color-card-border);
    }

    .contact-card {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 24px;
        padding: 24px;
        border: 1px solid rgba(94, 224, 143, 0.25);
        border-radius: var(--border-radius);
        background:
            radial-gradient(ellipse 60% 100% at 0% 0%, rgba(94, 224, 143, 0.12), transparent 70%),
            var(--color-card);
    }

    .contact-body h2 {
        margin: 6px 0 6px;
        font-size: 1.2rem;
        color: var(--color-body);
    }

    .contact-body p {
        margin: 0 0 16px;
        color: var(--color-secondary);
    }

    .contact-button {
        padding: 10px 18px;
        border: none;
        border-radius: 999px;
        background: var(--color-primary);
        color: var(--color-on-primary);
        font-size: 0.9375rem;
        font-weight: 700;
        cursor: pointer;
        transition: filter 0.15s ease;
    }

    .contact-button:hover {
        filter: brightness(1.08);
    }

    .contact-email {
        font-size: 1.05rem;
        font-weight: 600;
        overflow-wrap: anywhere;
    }

    @media (min-width: 768px) {
        .contact-card {
            flex-direction: row;
            gap: 20px;
            padding: 32px;
        }
    }
</style>
