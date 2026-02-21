<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';


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
    <title>CrookCatcher Help & FAQ • Android Anti-Theft App</title>
    <meta name="description" content="Get help with CrookCatcher, the Android app that takes pictures when wrong passwords are entered. Frequently asked questions and support.">
    <link rel="canonical" href="https://www.crookcatcher.app/help" />

    <!-- Open Graph -->
    <meta property="og:title" content="CrookCatcher Help & FAQ • Android Anti-Theft App" />
    <meta property="og:description" content="Get help with CrookCatcher, the Android app that takes pictures when wrong passwords are entered. Frequently asked questions and support." />
    <meta property="og:url" content="https://www.crookcatcher.app/help" />
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
    <div class="container">
        <section class="hero-section">
            <div class="text-center">
                <h1 class="hero-title cc-font">Help & FAQ</h1>
                <p class="hero-subtitle">Everything you need to know about CrookCatcher</p>
            </div>
        </section>

        <section class="faq-section">
            <div class="faq-item">
                <h2>CrookCatcher is not taking pictures</h2>
                <div class="faq-answer">
                    <ul style='list-style-type: disc'>
                        <li>If you are testing CrookCatcher, note that android only detects a password or pattern as incorrect if it has at least 4 digits/characters or pattern dots.</li>
                        <li>Your phone manufacturer might have imposed further battery optimizing restrictions on CrookCatcher, preventing it from working in the background. To solve the issue please follow instructions for your device on <a href='https://dontkillmyapp.com'>www.dontkillmyapp.com</a>.</li>
                    </ul>
                </div>
            </div>
            
            <div class="faq-item">
                <h2>Will CrookCatcher erase all my phone or tablet's data if too many incorrect passwords are typed?</h2>
                <div class="faq-answer">
                    <p>No. CrookCatcher will never erase your device's data.</p>
                </div>
            </div>

            <div class="faq-item">
                <h2>Why does CrookCatcher need access to my gmail account?</h2>
                <div class="faq-answer">
                    <p>Unlike other security applications, CrookCatcher does not rely on a third-party server for sending emails. Privacy is important, so CrookCatcher instead uses Google's authorization system OAuth2.0 to safely send emails directly from your device. This will not give CrookCatcher access to your email addresses or contacts. CrookCatcher will only use this permission to send security alert emails from your Gmail account to the email address defined by you from within the app.</p>
                </div>
            </div>

            <div class="faq-item">
                <h2>I forgot my password, pin code or pattern lock.</h2>
                <div class="faq-answer">
                    <p>The lock screen, and the password that is associated with, is not a part of CrookCatcher. If you have forgotten your password, pin code or pattern refer to your device's user manual.</p>
                </div>
            </div>

            <div class="faq-item">
                <h2>Already purchased pro?</h2>
                <div class="faq-answer">
                    <p>If you already purchased pro but it is not showing in the app, please make sure that you are logged into your device with the same google account that you used for purchasing and then click the restore button on the config page of CrookCatcher.</p>
                </div>
            </div>

            <div class="faq-item">
                <h2>How to revoke CrookCatcher's access to gmail or drive?</h2>
                <div class="faq-answer">
                    <p>Open <a href='https://myaccount.google.com/permissions'>Google Account Settings</a> and select CrookCatcher from the list. Then scroll to the bottom and select delete connections.</p>
                </div>
            </div>

            <div class="faq-item">
                <h2>Not working after reboot?</h2>
                <div class="faq-answer">
                    <p>Due to Android security precautions, your phone must be unlocked once after reboot for CrookCatcher to access the camera. I wish I could fix this, but unfortunately there is nothing I can do about it.</p>
                </div>
            </div>

            <div class="faq-item">
                <h2>Payment problems</h2>
                <div class="faq-answer">
                    <p>Having payment issues? Many problems are addressed in the <a href='https://support.google.com/googleplay/answer/1267137'>Google Play Payments Help Center</a>.</p>
                </div>
            </div>

            <div class="faq-item">
                <h2>Does CrookCatcher need internet?</h2>
                <div class="faq-answer">
                    <p>CrookCatcher works offline to detect unauthorized unlock attempts and capture data. An internet connection is however required to send alert emails. Due to Android restrictions, CrookCatcher sadly cannot automatically turn on and off data or Wi-Fi when needed.</p>
                </div>
            </div>

            <div class="support-box">
                <button 
                    class="support-header"
                    on:click={() => showEmail = !showEmail}
                    aria-expanded={showEmail}
                >
                    <h2>Still need help?</h2>
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
                            Send me an email at: <a href="mailto:contact@crookcatcher.app">contact@crookcatcher.app</a>
                        </p>
                    </div>
                {/if}
            </div>

            <!-- <div class="support-box">
                <h2>Still need help?</h2>
                <p>Send me an email at: <a href="mailto:contact@crookcatcher.app">contact@crookcatcher.app</a></p>
            </div> -->
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

