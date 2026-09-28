<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
import PageHero from '$lib/components/PageHero.svelte';
</script>

<svelte:head>
    <title>Terms of Use • CrookCatcher Android App</title>
    <meta name="description" content="Terms of use for CrookCatcher, the Android app that takes pictures when wrong passwords are entered.">
    <link rel="canonical" href="https://www.crookcatcher.app/terms" />

    <!-- Open Graph -->
    <meta property="og:title" content="Terms of Use • CrookCatcher Android App" />
    <meta property="og:description" content="Terms of use for CrookCatcher, the Android app that takes pictures when wrong passwords are entered." />
    <meta property="og:url" content="https://www.crookcatcher.app/terms" />
    <meta property="og:image" content="https://www.crookcatcher.app/images/og-share.png" />
    <meta name="twitter:image" content="https://www.crookcatcher.app/images/og-share.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="CrookCatcher" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Terms of Use • CrookCatcher Android App" />
    <meta name="twitter:description" content="Terms of use for CrookCatcher, the Android app that takes pictures when wrong passwords are entered." />
</svelte:head>

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container doc-page">
        <PageHero
            eyebrow="Legal"
            title="Terms of Use"
            lead="By downloading and using CrookCatcher, you agree to the following terms and conditions. Please read them carefully."
        />

        <div class="doc-card">
            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">1</span>
                <div class="doc-body">
                    <h2>Use of the App</h2>
                    <p>CrookCatcher is intended for personal, non-commercial use only. You agree to use CrookCatcher in compliance with all applicable laws and regulations. You may not modify or copy the materials in this app or use them for any commercial purpose. Attempting to decompile or reverse engineer any software contained in the app is prohibited.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">2</span>
                <div class="doc-body">
                    <h2>Ownership and Intellectual Property</h2>
                    <p>All materials in CrookCatcher, including intellectual property rights, are either owned by Jakob Harteg or licensed to him. You may not use any content from this app without express written permission from Jakob Harteg.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">3</span>
                <div class="doc-body">
                    <h2>Data Collection</h2>
                    <p>CrookCatcher collects anonymous user data unless you opt out in the app settings. This includes standard tracking metrics with Google Analytics and Firebase, such as when an email is sent and how you navigate through the app. No private or sensitive information is collected, stored, or shared. Please refer to our <a href="/privacy">Privacy Policy</a> for more details.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">4</span>
                <div class="doc-body">
                    <h2>Disclaimers</h2>
                    <p>CrookCatcher is provided "as is" without any warranties, expressed or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Jakob Harteg makes no representations regarding the accuracy or reliability of the app's content or functionality.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">5</span>
                <div class="doc-body">
                    <h2>Limitation of Liability</h2>
                    <p>In no event shall Jakob Harteg be liable for any damages arising from the use or inability to use CrookCatcher, including but not limited to direct, indirect, incidental, special, or consequential damages, or loss of data, devices, or profits.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">6</span>
                <div class="doc-body">
                    <h2>Governing Law</h2>
                    <p>Any claim or dispute relating to CrookCatcher will be governed by the laws of Germany, without regard to its conflict of law provisions.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">7</span>
                <div class="doc-body">
                    <h2>Changes to the Terms of Use</h2>
                    <p>Jakob Harteg reserves the right to update or change these terms at any time without prior notice. By continuing to use CrookCatcher after changes are made, you agree to be bound by the updated terms.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">8</span>
                <div class="doc-body">
                    <h2>Entire Agreement</h2>
                    <p>These terms constitute the entire agreement between you and Jakob Harteg regarding CrookCatcher and supersede any prior agreements.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">9</span>
                <div class="doc-body">
                    <h2>Severability</h2>
                    <p>If any provision of these terms is found to be unenforceable, the remaining provisions will remain in effect.</p>
                </div>
            </section>

            <section class="doc-section">
                <span class="doc-icon doc-number" aria-hidden="true">10</span>
                <div class="doc-body">
                    <h2>Paid plans and refunds</h2>
                    <p>Some CrookCatcher features may be paid—a subscription or a one-time unlock. The company that actually charges you is whoever you checked out with: usually Google Play for purchases inside the Android app, or Paddle (or a similar partner) if you pay on the web. Their terms apply to that payment as well.</p>
                    <p>If you’d like a refund, how that works and how long you have depend on that same company. Please use their help center or refund flow first—that’s usually the quickest path. You can also contact CrookCatcher support with your receipt or order details; we’ll help however we can, but only the payment provider can approve or deny the refund.</p>
                    <p>After you already have access to what you bought, we don’t offer refunds on our own, except where Google Play, Paddle, or the law says otherwise.</p>
                </div>
            </section>
        </div>
    </div>
</main>

<Footer/>
