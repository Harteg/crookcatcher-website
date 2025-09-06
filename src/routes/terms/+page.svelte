<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';

</script>

<svelte:head>
    <title>{$_('terms.pageTitle')} • CrookCatcher Android App</title>
    <meta name="description" content={$_('terms.metaDescription')}>
</svelte:head>

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container">
        <section class="hero-section">
            <div class="text-center">
                <h1 class="hero-title cc-font">{$_('terms.title')}</h1>
                <p class="hero-subtitle">{$_('terms.subtitle')}</p>
            </div>
        </section>

        <section class="terms-section">
            <div class="terms-item">
                <h2>{$_('terms.section1.title')}</h2>
                <p>{$_('terms.section1.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section2.title')}</h2>
                <p>{$_('terms.section2.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section3.title')}</h2>
                <p>{$_('terms.section3.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section4.title')}</h2>
                <p>{$_('terms.section4.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section5.title')}</h2>
                <p>{$_('terms.section5.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section6.title')}</h2>
                <p>{$_('terms.section6.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section7.title')}</h2>
                <p>{$_('terms.section7.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section8.title')}</h2>
                <p>{$_('terms.section8.content')}</p>
            </div>

            <div class="terms-item">
                <h2>{$_('terms.section9.title')}</h2>
                <p>{$_('terms.section9.content')}</p>
            </div>
        </section>
    </div>
</main>

<Footer/>

<style>
    .terms-section {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 16px;
    }

    .terms-item {
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 32px;
        margin-bottom: 24px;
    }

    .terms-item h2 {
        font-size: 22px;
        margin: 0 0 16px 0;
    }

    .terms-item p {
        font-size: 16px;
        line-height: 1.6;
        margin: 0;
        color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 640px) {
        .terms-item {
            padding: 24px;
        }

        .terms-item h2 {
            font-size: 20px;
        }

        .terms-item p {
            font-size: 16px;
        }
    }
</style>
