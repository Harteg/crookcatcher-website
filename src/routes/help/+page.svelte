<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import PageHero from '$lib/components/PageHero.svelte';
import FAQItem from '$lib/components/FAQItem.svelte';

let showEmail = false;
</script>

<svelte:head>
    <title>CrookCatcher Help & FAQ • Android Anti-Theft App</title>
    <meta name="description" content="Get help with CrookCatcher, the Android app that takes pictures when wrong passwords are entered. Frequently asked questions and support.">
    <link rel="canonical" href="https://www.crookcatcher.app/help" />

    <!-- Open Graph -->
    <meta property="og:title" content="CrookCatcher Help & FAQ • Android Anti-Theft App" />
    <meta property="og:description" content="Get help with CrookCatcher, the Android app that takes pictures when wrong passwords are entered. Frequently asked questions and support." />
    <meta property="og:url" content="https://www.crookcatcher.app/help" />
    <meta property="og:image" content="https://www.crookcatcher.app/images/og-share.png" />
    <meta name="twitter:image" content="https://www.crookcatcher.app/images/og-share.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="CrookCatcher" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="CrookCatcher Help & FAQ • Android Anti-Theft App" />
    <meta name="twitter:description" content="Get help with CrookCatcher, the Android app that takes pictures when wrong passwords are entered. Frequently asked questions and support." />
</svelte:head>

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container doc-page">
        <PageHero
            eyebrow="Support"
            title="Help & FAQ"
            lead="Answers to the most common questions about setting up and using CrookCatcher."
        />

        <div class="help-list">
            <FAQItem headingLevel={2} id="help-pictures" question="CrookCatcher is not taking pictures">
                <ul>
                    <li>If you are testing CrookCatcher, note that Android only detects a password or pattern as incorrect if it has at least 4 digits/characters or pattern dots.</li>
                    <li>Your phone manufacturer might have imposed further battery optimizing restrictions on CrookCatcher, preventing it from working in the background. To solve the issue please follow instructions for your device on <a href="https://dontkillmyapp.com">www.dontkillmyapp.com</a>.</li>
                </ul>
            </FAQItem>

            <FAQItem
                headingLevel={2}
                id="help-erase"
                question="Will CrookCatcher erase all my phone or tablet's data if too many incorrect passwords are typed?"
                answer="No. CrookCatcher will never erase your device's data."
            />

            <FAQItem
                headingLevel={2}
                id="help-gmail"
                question="Why does CrookCatcher need access to my Gmail account?"
                answer="Unlike other security applications, CrookCatcher does not rely on a third-party server for sending emails. Privacy is important, so CrookCatcher instead uses Google's authorization system OAuth2.0 to safely send emails directly from your device. This will not give CrookCatcher access to your email addresses or contacts. CrookCatcher will only use this permission to send security alert emails from your Gmail account to the email address defined by you from within the app."
            />

            <FAQItem
                headingLevel={2}
                id="help-forgot"
                question="I forgot my password, PIN code or pattern lock."
                answer="The lock screen, and the password that is associated with it, is not a part of CrookCatcher. If you have forgotten your password, PIN code or pattern, refer to your device's user manual."
            />

            <FAQItem
                headingLevel={2}
                id="help-pro"
                question="Already purchased Pro?"
                answer="If you already purchased Pro but it is not showing in the app, please make sure that you are logged into your device with the same Google account that you used for purchasing and then click the restore button on the config page of CrookCatcher."
            />

            <FAQItem headingLevel={2} id="help-revoke" question="How to revoke CrookCatcher's access to Gmail or Drive?">
                <p>Open <a href="https://myaccount.google.com/permissions">Google Account Settings</a> and select CrookCatcher from the list. Then scroll to the bottom and select delete connections.</p>
            </FAQItem>

            <FAQItem
                headingLevel={2}
                id="help-reboot"
                question="Not working after reboot?"
                answer="Due to Android security precautions, your phone must be unlocked once after reboot for CrookCatcher to access the camera. I wish I could fix this, but unfortunately there is nothing I can do about it."
            />

            <FAQItem headingLevel={2} id="help-payment" question="Payment problems">
                <p>Having payment issues? Many problems are addressed in the <a href="https://support.google.com/googleplay/answer/1267137">Google Play Payments Help Center</a>.</p>
            </FAQItem>

            <FAQItem
                headingLevel={2}
                id="help-internet"
                question="Does CrookCatcher need internet?"
                answer="CrookCatcher works offline to detect unauthorized unlock attempts and capture data. An internet connection is however required to send alert emails. Due to Android restrictions, CrookCatcher sadly cannot automatically turn on and off data or Wi-Fi when needed."
            />
        </div>

        <section class="contact-card" aria-labelledby="contact-title">
            <span class="doc-icon" aria-hidden="true"><span class="material-icons">support_agent</span></span>
            <div class="contact-body">
                <h2 id="contact-title">Still need help?</h2>
                <p>Send me an email and I'll get back to you as soon as I can.</p>
                {#if showEmail}
                    <a class="contact-email" href="mailto:contact@crookcatcher.app">contact@crookcatcher.app</a>
                {:else}
                    <button type="button" class="contact-button" on:click={() => (showEmail = true)}>
                        Show email address
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
