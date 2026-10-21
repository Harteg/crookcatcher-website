# Guide images

Every guide has a header image, and some also have an in-article graphic. Who makes it depends on whether it contains text:

| Image | Made by | Examples |
|---|---|---|
| **Graphic with text or info** (headline, steps, checklist, alert mockup) | Claude Code, as HTML rendered to PNG | `phone-stolen-uk-header.png`, `phone-stolen-uk-checklist.png` |
| **Image without text** (photo-style scene, illustration) | ChatGPT | `Digital_Solitude_Urban_Shadows.jpeg`, `stolen.jpg` |

Image models still misspell text, and HTML gets the brand font, colours and layout exactly right. Use ChatGPT only when the image has no words in it.

All files go in `static/images/blog/`.

## Sizes

| Use | Size | Ratio |
|---|---|---|
| Header (`image:` in front matter, also the social share image) | 1600×840 | 1.91:1 |
| In-article checklist / infographic | 1080×1350 | 4:5 |

The post page shows the header cropped to 16:9, which cuts about 50px off each side, so keep text at least 80px from the left and right edges.

## Graphics with text (Claude Code)

Build the graphic as a standalone HTML file at the exact pixel size, then render it with Chrome. Match the existing graphics (open the UK header and checklist as reference).

**Brand:**
- Background `#0E1310`. Cards `#18201B` with a 1px `#243029` border and about 16px rounded corners.
- Accent (highlighted words, numbered circles, "CrookCatcher" wordmark) `#5EE08F`, with dark `#0E1310` text inside the green circles.
- Headline and labels white `#F2F5F2`; secondary text grey `#A3B2A8`.
- Font: Nexa Bold for headlines and labels, loaded from `static/fonts/Nexa-Bold.woff2` with `@font-face` and a `file://` URL. Small descriptive text can use a plain sans-serif.
- Layout: generous margins, a short headline (2 lines max) with 1–3 words highlighted in green, the wordmark "CrookCatcher" in green, and `crookcatcher.app` in grey on checklists.
- Optional small flag or icon above the headline (e.g. country guides). No Google, Samsung or carrier logos.

**Render** (set `html, body` to the exact size with `margin: 0`; write the HTML in a scratch folder, not the repo):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --hide-scrollbars --force-device-scale-factor=1 --window-size=1600,840 \
  --screenshot=static/images/blog/<slug>-header.png "file:///path/to/header.html"
```

Use `--window-size=1080,1350` for a checklist. Look at the PNG before using it, and check every word against the guide text.

## Images without text (ChatGPT)

Attach an existing example (e.g. `Digital_Solitude_Urban_Shadows.jpeg`) as a style reference, then use:

```
Create a landscape image, 1536x1024, for a blog article about <TOPIC, e.g. "someone trying to unlock a phone that isn't theirs">.

Scene: <WHAT HAPPENS, e.g. "a hand reaching for a smartphone left face-down on a café table, seen from behind">.

Style: cinematic, moody, low-key lighting, dark near-black background with a subtle mint green (#5EE08F) accent light. Photographic but slightly stylized. Generic modern Android-style phone without any logo.

Strict rules: absolutely NO text, letters, numbers, signs, screens with readable content, logos or watermarks. No recognizable faces: people are seen from behind, in shadow or out of focus. Keep the main subject in the middle 80% of the height; the top and bottom will be cropped.
```

Crop the 1536×1024 result to the header ratio, keeping the centre:

```bash
sips -c 806 1536 ~/Downloads/<chatgpt-image>.png --out static/images/blog/<slug>-header.png
```

Check it before using it: no text crept in, no recognizable faces, no brand logos, and nothing that suggests watching someone else's phone.

## Add it to the guide

```yaml
image: '/images/blog/<slug>-header.png'
imageAlt: '<what the image shows, including any text in it>'
```

In-article graphics go in the guide body like the existing ones:

```html
<figure class="blog-figure" style="max-width: 540px;">
  <img src="/images/blog/<slug>-checklist.png" alt="<the checklist text>" />
  <figcaption><caption></figcaption>
</figure>
```

Then generate the fast WebP versions of the header (needs `brew install webp` once):

```bash
npm run optimize-images
```
