<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';

</script>

<svelte:head>
    <title>Privacy Policy • CrookCatcher Android App</title>
    <meta name="description" content="Privacy policy for CrookCatcher, the Android app that takes pictures when wrong passwords are entered.">
</svelte:head>

<header class="app-header">
    <Header/>
</header>

<main>
    <div class="container">
        <section class="hero-section">
            <div class="text-center">
                <h1 class="hero-title cc-font">Privacy Policy</h1>
                <p class="hero-subtitle">CrookCatcher is designed with your privacy in mind. Here's how we keep your data safe and private</p>
            </div>
        </section>

        <section class="privacy-section">
            <div class="policy-item">
                <h2>Camera</h2>
                <ul>
                    <li>CrookCatcher uses the camera permission to take pictures and record videos when a wrong password, PIN code, or lock pattern is entered, based on the number of attempts you specify in the app's settings under the 'Failed Unlock' preference.</li>
                    <li>CrookCatcher will not take pictures or record videos at any other times, unless other specific features have been enabled by you in the app.</li>
                    <li>Pictures and videos are emailed to you if the email function is enabled in CrookCatcher's settings. See the Email section below for more details. Pictures and videos may also be uploaded to Google Drive if enabled by you.</li>
                    <li>Otherwise, pictures and videos are stored only on your device and are not shared with the developer or any third party.</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>Location</h2>
                <ul>
                    <li>If enabled in the settings, CrookCatcher finds your device's location in the background when it takes a picture.</li>
                    <li>CrookCatcher will not access your location at any other time.</li>
                    <li>The location is saved with the picture and emailed to you if the email function is enabled.</li>
                    <li>Your location data is not shared with the developer or any third party.</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>Microphone</h2>
                <ul>
                    <li>When video recording is enabled, CrookCatcher will access the microphone to record videos.</li>
                    <li>Microphone access is only granted when you enable this feature and is only used for recording videos.</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>Email</h2>
                <ul>
                    <li>CrookCatcher asks you to sign in with your Gmail account and grant permission to 'send emails on your behalf'. This avoids sending sensitive data through third-party servers. To revoke this permission, visit <a href="https://myaccount.google.com/permissions">https://myaccount.google.com/permissions</a>.</li>
                    <li>This does not grant CrookCatcher access to read your emails, manage contacts, or perform other actions.</li>
                    <li>Emails are only sent to the address specified in the 'Send email to' setting and only when specific conditions are met, which you specify in the app.</li>
                    <li>You can always see in your Gmail account which emails CrookCatcher has sent.</li>
                    <li>Your email address is not shared with the developer or any third party.</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>Usage Statistics and Crash Reports</h2>
                <ul>
                    <li>CrookCatcher tracks anonymous usage data and crash reports using Firebase Analytics to improve performance and fix bugs. You can opt out by unticking an option at the bottom of the settings menu in CrookCatcher.</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>Data Security</h2>
                <ul>
                    <li>We value your trust and are committed to protecting your data. All collected data is stored securely on your device or sent directly to you via email if enabled. No personal data is transmitted to any third party for advertising or other purposes.</li>
                </ul>
            </div>

            <div class="policy-item">
                <h2>Changes to this Privacy Policy</h2>
                <ul>
                    <li>This privacy policy applies to the most recent version of CrookCatcher. We may update our Privacy Policy from time to time. You're advised to review this page periodically for any changes. Changes are effective immediately after they're posted on this page.</li>
                </ul>
            </div>

            <div class="footer-section">
                <p>Data is used solely to enable CrookCatcher to function and improve. No personal data is transmitted to any third party for advertising or any other purpose.</p>
                <p>CrookCatcher complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Official User Data Policy for Google API Services</a>.</p>
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
