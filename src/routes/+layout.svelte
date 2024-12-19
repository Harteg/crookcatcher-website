<script>
	import '../app.css';
	import '$lib/i18n';
	import I18nLoader from '$lib/components/I18nLoader.svelte';
</script>

<I18nLoader>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<slot />
	</div>
</I18nLoader>

<svelte:head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta name="theme-color" content="#64DD91">
	<meta property="og:image" content="https://www.crookcatcher.app/images/social_graphic.png">
	<meta name="twitter:image" content="https://www.crookcatcher.app/images/social_graphic.png">

	<!-- Favicons -->
	<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
	<link rel="manifest" href="/favicons/manifest.json">
	<link rel="icon" type="image/png" sizes="512x512" href="/images/ic_launcher_512.png">

	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"name": "CrookCatcher",
		"operatingSystem": "ANDROID",
		"applicationCategory": "Utility",
		"offers": {
			"@type": "Offer",
			"priceCurrency": "USD",
			"price": "0",
			"seller": {
				"@type": "Organization",
				"name": "CrookCatcher"
			}
		},
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.3",
			"ratingCount": "67211"
		},
		"url": "https://www.crookcatcher.app",
		"image": "https://www.crookcatcher.app/images/ic_launcher_512.png",
		"description": "Protect your Android phone with CrookCatcher. The app takes secret selfies when someone enters the wrong password and sends them, along with the GPS location, to your email.",
		"sameAs": [
			"https://x.com/CrookCatcherApp"
		]
	}
	</script>
</svelte:head>
