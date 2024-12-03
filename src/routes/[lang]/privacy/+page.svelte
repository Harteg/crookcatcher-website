<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import { _ } from 'svelte-i18n';
</script>

<svelte:head>
    <title>{$_('privacy.pageTitle')} • CrookCatcher Android App</title>
    <meta name="description" content={$_('privacy.metaDescription')}>
</svelte:head>

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container">
        <section class="hero-section">
            <div class="text-center">
                <h1 class="hero-title cc-font">{$_('privacy.title')}</h1>
                <p class="hero-subtitle">{$_('privacy.subtitle')}</p>
            </div>
        </section>

        <section class="privacy-section">
            <div class="policy-item">
                <h2>{$_('privacy.camera.title')}</h2>
                <ul>
                    {#each $_('privacy.camera.items') as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </div>

            <div class="policy-item">
                <h2>{$_('privacy.location.title')}</h2>
                <ul>
                    {#each $_('privacy.location.items') as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </div>

            <div class="policy-item">
                <h2>{$_('privacy.microphone.title')}</h2>
                <ul>
                    {#each $_('privacy.microphone.items') as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </div>

            <div class="policy-item">
                <h2>{$_('privacy.email.title')}</h2>
                <ul>
                    {#each $_('privacy.email.items') as item}
                        {@html item}
                    {/each}
                </ul>
            </div>

            <div class="policy-item">
                <h2>{$_('privacy.analytics.title')}</h2>
                <ul>
                    <li>{$_('privacy.analytics.content')}</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>{$_('privacy.dataSecurity.title')}</h2>
                <ul>
                    <li>{$_('privacy.dataSecurity.content')}</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>{$_('privacy.changes.title')}</h2>
                <ul>
                    <li>{$_('privacy.changes.content')}</li>
                </ul>
            </div>

            <div class="policy-item">
                <p>{$_('privacy.footer.dataUsage')}</p>
                <p>{@html $_('privacy.footer.compliance')}</p>
            </div>
        </section>
    </div>
</main>

<Footer/>

<style>
    .privacy-section {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 16px;
    }

    .policy-item {
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 32px;
        margin-bottom: 24px;
    }

    .policy-item h2 {
        font-size: 22px;
        margin: 0 0 16px 0;
        color: var(--color-primary);
    }

    .policy-item p:last-child {
        margin-bottom: 0;
    }

    .policy-item ul {
        list-style-type: disc;
        padding-left: 20px;
        margin: 0;
    }

    .policy-item li {
        font-size: 16px;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 8px;
    }

    .policy-item li:last-child {
        margin-bottom: 0;
    }

    .policy-item :global(a) {
        color: var(--color-primary);
        text-decoration: none;
        transition: opacity 0.2s ease;
    }

    .policy-item :global(a:hover) {
        opacity: 0.8;
    }

    @media (max-width: 640px) {
        .policy-item {
            padding: 24px;
        }

        .policy-item h2 {
            font-size: 20px;
        }

        .policy-item p, 
        .policy-item li {
            font-size: 16px;
        }
    }
</style>
