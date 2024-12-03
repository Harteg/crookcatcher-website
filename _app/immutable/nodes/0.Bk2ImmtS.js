import{s as h,a as m,w as g}from"../chunks/index.DTvoPbY1.js";import{r as d}from"../chunks/index.g5YcAAdQ.js";import{d as p,a as r,h as u,e as v,t as w}from"../chunks/disclose-version.ClcsAfVQ.js";import{i as x}from"../chunks/legacy.rClDfmsn.js";import{p as y,f as c,a as k,L as _,N as z,aa as C,w as S,c as L,r as b}from"../chunks/utils.DahspeCk.js";import{s as l}from"../chunks/slot.Db0rdiCY.js";import{i as A}from"../chunks/if.CGyDWAs_.js";import{o as $}from"../chunks/index-client.vjcglz3y.js";const j=async({url:t})=>{const o=["en","fr"],e=t.pathname.split("/")[1];if(!e||!o.includes(e)){const a=window.localStorage.getItem("preferred-locale")||window.navigator.language.split("-")[0],i=o.includes(a)?a:"en";throw d(307,`/${i}${t.pathname}`)}return await h(e),m.set(e),{url:t.pathname}},q=Object.freeze(Object.defineProperty({__proto__:null,load:j},Symbol.toStringTag,{value:"Module"}));function D(t,o){y(o,!1);let n=C(!1);$(async()=>{await g(),_(n,!0)}),x();var e=p(),a=c(e);A(a,()=>z(n),i=>{var s=p(),f=c(s);l(f,o,"default",{}),r(i,s)}),r(t,e),k()}var O=v(`<meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="theme-color" content="#64DD91"> <meta property="og:image" content="https:www.crookcatcher.app/images/social_graphic.png"> <meta name="twitter:image" content="https:www.crookcatcher.app/images/social_graphic.png"> <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"> <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"> <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"> <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"> <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"> <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"> <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"> <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"> <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"> <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png"> <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"> <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"> <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"> <link rel="manifest" href="/favicons/manifest.json"> <link rel="icon" type="image/png" sizes="512x512" href="/images/ic_launcher_512.png"> <script type="application/ld+json">
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
	<\/script>`,1),P=w('<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header"><!></div>');function B(t,o){u(n=>{var e=O();S(40),r(n,e)}),D(t,{children:(n,e)=>{var a=P(),i=L(a);l(i,o,"default",{}),b(a),r(n,a)},$$slots:{default:!0}})}export{B as component,q as universal};
