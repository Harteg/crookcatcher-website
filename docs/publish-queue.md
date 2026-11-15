# Publish queue

A scheduled task ("Publish next approved guide") runs every day at 9:00 and publishes **one** guide from this table, in English and in every language it has a draft translation for: the first row, top to bottom, where **Approved** is `yes`, **Status** is `Draft`, and every guide under **Needs first** is already published. If no row qualifies, it publishes nothing and says so.

How to use it:

- **Approve a guide:** read the draft at `http://localhost:5173/blog/<slug>` (`npm run dev`), then change its **Approved** cell to `yes`. Committing is optional; the task reads the file as it is on disk.
- **Add a guide:** add a row at the position you want. Only guides listed here are ever published. Drafts that aren't listed (the old 2024 posts, for example) are never touched.
- **Change the order:** move rows.
- **Pause:** set **Approved** back to `no`, or switch the task off in the app.

| Slug | Approved | Status | Needs first | Check before approving |
| --- | --- | --- | --- | --- |
| theft-detection-lock | yes | Published 2026-11-14 | — | — |
| xiaomi-who-tried-to-unlock | yes | Published 2026-11-15 | theft-detection-lock | The "Manage battery settings" prompt appears during setup on a Xiaomi phone |
| signs-someone-went-through-your-phone | yes | Draft | — | WhatsApp "Linked devices" steps (taken from search snippets) |
| best-intruder-selfie-apps-android | yes | Draft | signs-someone-went-through-your-phone | Rating and download figures against Google Play; that Pro removes ads |
| lock-screen-message-android | yes | Draft | — | Setup steps and wording against the app |
| fake-home-screen-android | yes | Draft | lock-screen-message-android, signs-someone-went-through-your-phone | Setup steps and wording against the app |
| find-stolen-android-phone | no | Draft | — | Menu paths on a real phone: `Settings > Security > Find Hub` and `Find your offline devices` |
| samsung-find-stolen-phone | no | Draft | find-stolen-android-phone | The three Lost device protection switches on a Galaxy; that Lock and Lost mode are the same action |
| who-touched-my-phone | no | Draft | signs-someone-went-through-your-phone, best-intruder-selfie-apps-android | That WTMP is described fairly; its listing details against Google Play |
| lock-apps-android | no | Draft | fake-home-screen-android, signs-someone-went-through-your-phone | Whether Android 17's App lock has reached regular Pixels yet; the app pinning path; whether this topic is close enough to the app |

## Links to add once a guide is published

A published guide can't link to a draft, so these links are added on the day the target goes live:

- `find-stolen-android-phone`: link to it from `top_five_settings` (section 4, Find Hub) and from `theft-detection-lock` ("Find Hub shows the phone on a map").
- `samsung-find-stolen-phone`: link to it from `find-stolen-android-phone` ("On a Samsung Galaxy, also set up Samsung's own service") and from `samsung-who-tried-to-unlock`.
- `who-touched-my-phone`: link to it from `best-intruder-selfie-apps-android` (the WTMP section) and from `see-who-tried-to-unlock-your-phone`.
- `lock-apps-android`: link to it from `fake-home-screen-android` (Private space and Secure Folder) and from `signs-someone-went-through-your-phone`.

## Translations

A row covers the English guide and every draft translation of it (`src/blog/posts/<lang>/<slug>.svx`). When the task publishes a row, it publishes all of those languages on the same day, so setting Approved to `yes` approves every language. To keep a language back, delete its file or leave a note in the row and set Approved to `no` until it is sorted out.

The task holds back a single translation (and says so in its report) if its header image is missing or it links to a guide that isn't published in that language. It never translates or rewrites; it only flips `published`, sets the dates, and adds a related-guides entry in the same language.

`find-stolen-android-phone`, `samsung-find-stolen-phone`, `who-touched-my-phone` and `lock-apps-android` have draft translations in pt, fr, es, de, ar, id, it and ja. What to check in each language is in `docs/translation-review.md`. The earlier rows in the table have no translations and go out in English only.
