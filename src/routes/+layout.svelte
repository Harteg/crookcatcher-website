<script lang="ts">
	import '../app.css';
</script>

<slot />

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

	{@html `<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "CrookCatcher — Anti-Theft",
			"operatingSystem": "ANDROID",
			"applicationCategory": "Utility",
			"applicationSubCategory": "SecurityApplication",
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
			"author": {
				"@type": "Person",
				"name": "Jakob Harteg"
			},
			"featureList": ["Takes secret selfies of intruders","Sends pictures and GPS location to email","Works offline","Easy setup and intuitive interface","Record video of intruders","Show fake home screen to fool thieves","Upload all pictures and videos to Google Drive","Prevent thieves from turning on airplane mode"],
			"publisher": {
				"@type": "Organization",
				"name": "CrookCatcher",
				"logo": "https://www.crookcatcher.app/images/ic_launcher_512.png"
			},
			"isAccessibleForFree": true,
			"url": "https://www.crookcatcher.app",
			"image": "https://www.crookcatcher.app/images/ic_launcher_512.png",
			"description": "CrookCatcher is an anti-theft app that protects your Android phone by capturing secret selfies and GPS locations when someone tries to unlock your device with the wrong password, pin code or pattern. CrookCatcher can even prevent thieves from turning on airplane mode.",
			"downloadUrl": "https://play.google.com/store/apps/details?id=com.harteg.crookcatcher",
			"sameAs": [
				"https://x.com/CrookCatcherApp",
				"https://play.google.com/store/apps/details?id=com.harteg.crookcatcher"
			]
		}
	</script>`}
</svelte:head>
