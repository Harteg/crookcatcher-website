<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import { _ } from 'svelte-i18n';

let showEmail = false;

const faqKeys = [
    'notTakingPictures',
    'eraseData',
    'gmailAccess',
    'forgotPassword',
    'purchasedPro',
    'revokeAccess',
    'reboot',
    'payment',
    'internet'
];
</script>

<svelte:head>
    <title>{$_('help.meta.title')}</title>
    <meta name="description" content={$_('help.meta.description')}>
</svelte:head>

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container">
        <section class="hero-section">
            <div class="text-center">
                <h1 class="hero-title cc-font">{$_('help.hero.title')}</h1>
                <p class="hero-subtitle">{$_('help.hero.subtitle')}</p>
            </div>
        </section>

        <section class="faq-section">
            {#each faqKeys as key}
                <div class="faq-item">
                    <h2>{$_(`help.faqs.${key}.question`)}</h2>
                    <p>{@html $_(`help.faqs.${key}.answer`)}</p>
                </div>
            {/each}

            <div class="support-box">
                <button 
                    class="support-header"
                    on:click={() => showEmail = !showEmail}
                    aria-expanded={showEmail}
                >
                    <h2>{$_('help.support.title')}</h2>
                    <svg 
                        class="arrow-icon" 
                        class:rotated={showEmail}
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M7 10L12 15L17 10" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                {#if showEmail}
                    <div class="email-content">
                        <p class="email-reveal">
                            {@html $_('help.support.emailText')}
                        </p>
                    </div>
                {/if}
            </div>
        </section>
    </div>
</main>

<Footer/>

<style>
    .faq-section {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 16px;
    }

    .faq-item {
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 32px;
        margin-bottom: 24px;
        transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .faq-item h2 {
        font-size: 1.25rem;
        margin: 0 0 16px 0;
    }

    .faq-item p {
        margin: 0;
    }

    .support-box {
        text-align: center;
        padding: 0;
        /* background: var(--color-cc-dark-bg); */
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        overflow: hidden;
    }

    .support-box h2 {
        font-size: 1.25rem;
        margin: 0;
    }

    .support-box p {
        margin: 0;
    }

    .support-box :global(a) {
        color: var(--color-primary);
        text-decoration: none;
        transition: opacity 0.2s ease;
        display: inline-block;
    }

    .support-box :global(a:hover) {
        text-decoration: underline;
    }


    .support-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 32px;
        background: none;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .support-header:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

    .arrow-icon {
        transition: transform 0.3s ease;
    }

    .arrow-icon.rotated {
        transform: rotate(180deg);
    }

    .email-content {
        border-top: 2px solid rgba(255, 255, 255, 0.15);
        padding: 24px 32px;
        animation: expandDown 0.3s ease;
    }

    .email-reveal {
        animation: fadeIn 0.3s ease;
        line-height: 1.8;
    }

    @keyframes expandDown {
        from {
            max-height: 0;
            opacity: 0;
        }
        to {
            max-height: 200px;
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 640px) {
        .faq-item {
            padding: 24px;
        }

        .faq-item h2 {
            font-size: 20px;
        }

        .support-box h2 {
            font-size: 20px;
        }

        .faq-item p {
            font-size: 16px;
        }
    }

    .faq-item p :global(a) {
        color: var(--color-primary);
        text-decoration: none;
        transition: opacity 0.2s ease;
    }

    .faq-item p :global(a:hover) {
        text-decoration: underline;
    }
</style>

