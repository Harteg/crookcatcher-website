<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';

</script>

<svelte:head>
    <title>Terms of Use • CrookCatcher Android App</title>
    <meta name="description" content="Terms of use for CrookCatcher, the Android app that takes pictures when wrong passwords are entered.">
    <link rel="canonical" href="https://www.crookcatcher.app/terms" />

    <!-- Open Graph -->
    <meta property="og:title" content="Terms of Use • CrookCatcher Android App" />
    <meta property="og:description" content="Terms of use for CrookCatcher, the Android app that takes pictures when wrong passwords are entered." />
    <meta property="og:url" content="https://www.crookcatcher.app/terms" />
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
    <div class="container">
        <section class="hero-section">
            <div class="text-center">
                <h1 class="hero-title cc-font">Terms of Use</h1>
                <p class="hero-subtitle">By downloading and using CrookCatcher, you agree to the following terms and conditions. Please read them carefully.</p>
            </div>
        </section>

        <section class="terms-section">
            <div class="terms-item">
                <h2>1. Use of the App</h2>
                <p>CrookCatcher is intended for personal, non-commercial use only. You agree to use CrookCatcher in compliance with all applicable laws and regulations. You may not modify or copy the materials in this app or use them for any commercial purpose. Attempting to decompile or reverse engineer any software contained in the app is prohibited.</p>
            </div>

            <div class="terms-item">
                <h2>2. Ownership and Intellectual Property</h2>
                <p>All materials in CrookCatcher, including intellectual property rights, are either owned by Jakob Harteg or licensed to him. You may not use any content from this app without express written permission from Jakob Harteg.</p>
            </div>

            <div class="terms-item">
                <h2>3. Data Collection</h2>
                <p>CrookCatcher collects anonymous user data unless you opt out in the app settings. This includes standard tracking metrics with Google Analytics and Firebase, such as when an email is sent and how you navigate through the app. No private or sensitive information is collected, stored, or shared. Please refer to our Privacy Policy for more details.</p>
            </div>

            <div class="terms-item">
                <h2>4. Disclaimers</h2>
                <p>CrookCatcher is provided "as is" without any warranties, expressed or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Jakob Harteg makes no representations regarding the accuracy or reliability of the app's content or functionality.</p>
            </div>

            <div class="terms-item">
                <h2>5. Limitation of Liability</h2>
                <p>In no event shall Jakob Harteg be liable for any damages arising from the use or inability to use CrookCatcher, including but not limited to direct, indirect, incidental, special, or consequential damages, or loss of data, devices, or profits.</p>
            </div>

            <div class="terms-item">
                <h2>6. Governing Law</h2>
                <p>Any claim or dispute relating to CrookCatcher will be governed by the laws of Germany, without regard to its conflict of law provisions.</p>
            </div>

            <div class="terms-item">
                <h2>7. Changes to the Terms of Use</h2>
                <p>Jakob Harteg reserves the right to update or change these terms at any time without prior notice. By continuing to use CrookCatcher after changes are made, you agree to be bound by the updated terms.</p>
            </div>

            <div class="terms-item">
                <h2>8. Entire Agreement</h2>
                <p>These terms constitute the entire agreement between you and Jakob Harteg regarding CrookCatcher and supersede any prior agreements.</p>
            </div>

            <div class="terms-item">
                <h2>9. Severability</h2>
                <p>If any provision of these terms is found to be unenforceable, the remaining provisions will remain in effect.</p>
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
