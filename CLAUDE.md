# CrookCatcher website (crookcatcher.app)

This repo is the marketing site for CrookCatcher, an Android anti-theft app (since 2014, 12M+ downloads, 4.6★ from 90K+ ratings, ~1.2M intruder photos captured per day). The app takes an intruder selfie when someone enters a wrong PIN, pattern or password, records GPS location, and emails both to the owner. Pro adds video with sound, break-in detection, back camera, Google Drive backup, alarm, fake home screen, lock screen message, app lock, disguised icon, hidden notifications and custom email subject.

Power-menu and notification shade / quick-settings blocking were removed from the app. Never present them as features; recommend Android's and Samsung's built-in settings instead (see the `block-power-menu` guide).

Play Store: https://play.google.com/store/apps/details?id=com.harteg.crookcatcher

## Current goal

Grow app installs through SEO: publish genuinely useful guides on the blog that answer what Android users search for, then point them to CrookCatcher. The full topic list and priorities live in `docs/guide-plan.md`. Update the Status column there when a guide is published.

## Audience

- Android users, mainly in the US (the US produces most revenue).
- Best-converting searches are pre-theft or curiosity searches ("who tried to unlock my phone"), not "my phone is already stolen" (they can no longer install the app on that phone).
- Every guide targets Android, Samsung, Pixel or Xiaomi explicitly. Never target iPhone; the app is Android only.

## Guide template (follow for every new guide)

1. Title includes the device and, where it fits, the year: "How to See Who Tried to Unlock Your Samsung Phone (2026)".
2. Opening paragraph fully answers the question on its own (this is what search snippets and AI overviews quote).
3. Honest section on Android's / Samsung's built-in options, with real steps.
4. The gap: what built-in options can't do (typically no photo of the person, no email alert).
5. How CrookCatcher fills the gap: short, with the real email alert screenshot (`/images/hero-alert-800.webp` with its srcset in English, `/images/blog/email-alert-pt.webp` / `email-alert-fr.webp` in translations; copy the `<figure>` from an existing guide). End this section with `<AppCta position="guide_mid" />`, the download card, where the reader has just understood the gap.
6. FAQ with 4 to 6 real search questions, written as visible `### Q:` / `A:` markdown like the existing guides. Don't add FAQPage schema: since 2023 Google only shows FAQ rich results for government and health sites, so it gains nothing here. The visible Q&A is what helps (long-tail searches, AI overviews).
7. Sources: links to the official Google / Samsung support pages used.
8. Related guides: 2 to 3 internal links.
9. `<AppCta position="guide_end" />` as the last element. Together with the mid card and the always-visible header button, that's the guide's calls to action; don't add more. Don't use a bare `<PlayStoreButton />` in guides.

Look at the existing guides (for example `src/blog/posts/see-who-tried-to-unlock-your-phone.svx`) and match their layout, components and front matter. A guide goes live when its front matter has `published: true`; the blog index, homepage "Recent posts" and `sitemap.xml` pick it up automatically.

## Tracking

Every Play Store link in a guide uses:
`?id=com.harteg.crookcatcher&referrer=utm_source%3Dwebsite%26utm_medium%3Dguide%26utm_campaign%3D<guide-slug>`
so Play Console shows installs per guide. The referrer value must stay URL-encoded; an unencoded `&` cuts it short.

- `<AppCta />`, `<PlayStoreButton />` and the header button build this automatically from the page (`src/lib/play-store.ts`). Don't pass tracking props in guides beyond `AppCta`'s `position`.
- Click tracking (Google Analytics event `play_store_button_click`, DataFast goal `play_store_click`) records which link was clicked: `header`, `guide_mid`, `guide_end`, or `guide_text` for Play links written in the guide's text. Compare these in DataFast to see what converts.
- Hand-written links in a guide's text use the format above. Translated guides use the slug plus the language: `<slug>-pt`, `<slug>-fr`.
- Outside guides, buttons use `utm_medium=button` and their position as the campaign (`hero`, `header`, `testimonials`, `footer`, `blog_index`).

## Languages

The site is in English (root URLs), Brazilian Portuguese (`/pt`) and French (`/fr`). Settings live in `src/lib/i18n.ts`.

- Page text lives in `content/*.{en,pt,fr}.json`; interface text in `content/ui.*.json`. Keep the JSON structure identical across languages.
- Guides: English in `src/blog/posts/<slug>.svx`; translations in `src/blog/posts/pt/<slug>.svx` and `src/blog/posts/fr/<slug>.svx` with the **same filename**. That shared slug is what links the versions (hreflang, sitemap, language picker).
- A guide without a translation simply exists in English only. Never show English text under a `/pt` or `/fr` URL.
- Write new guides in English first. Translate only when asked. Inside translations, link to the translated versions of other pages (`/pt/help`, `/fr/blog/...`) when they exist.
- French uses non-breaking spaces before `? ! : ;` and inside « ».

## Images

- Follow `docs/guide-images.md`. Graphics with text or info (headline headers, checklists, alert mockups) are built by Claude Code as HTML and rendered to PNG with headless Chrome. Images without any text come from ChatGPT using the prompt in that doc.
- Headers are 1600×840 (`static/images/blog/<slug>-header.png`); in-article checklists 1080×1350.
- When the guide is published, run `npm run optimize-images` (needs `cwebp`, installed with `brew install webp`). It only processes published guides. It creates the WebP versions the site serves and updates `src/lib/responsive-images.json`; without it the image still works, but loads slower.
- No real intruder faces in images; use the owner's own photo or pixelate/blur faces.

## Workflow

- Draft guides in batches; the owner (Jakob) reviews every guide before it is published. Never publish unreviewed.
- Drafts have `published: false`. They're left out of the build, index and sitemap, but open at their URL in `npm run dev` (e.g. `http://localhost:5173/blog/<slug>`) for review.
- Publish about one guide per day, never a large batch at once.
- After adding a guide:
  - add internal links to it from 1 to 3 related existing guides;
  - make sure it appears in the sitemap and the blog index;
  - add its header image, and run `npm run optimize-images` once it's published;
  - run `npm run build` and `npm run check`.
- Verify every Android/Samsung/Google feature name and step against official support pages at the time of writing (names change, e.g. Find My Device is now Find Hub). Never invent steps.

## Writing style

- Plain, specific, calm. Short sentences. No hype, no filler intros ("In today's digital world...").
- Honest about free built-in alternatives; the app is presented as filling a real gap, not as the only option.
- Use CrookCatcher's real data where it helps (12M downloads, 1.2M intruder photos a day, since 2014).

## Rules

- No mass-produced pages; quality over volume.
- No topics that drift away from "someone has my phone or tried to get into it".
- Never frame the app as a way to monitor or spy on another person's phone (Play policy risk). Always "protect your own phone".
- No real intruder faces in images; use the owner's own photo or blur faces.
- No user reviews or stories without the person's permission.
- No iPhone-targeted content.
