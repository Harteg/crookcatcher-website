# Publish queue

A scheduled task ("Publish next approved guide") runs every day at 9:00 and publishes **one** guide from this table: the first row, top to bottom, where **Approved** is `yes`, **Status** is `Draft`, and every guide under **Needs first** is already published. If no row qualifies, it publishes nothing and says so.

How to use it:

- **Approve a guide:** read the draft at `http://localhost:5173/blog/<slug>` (`npm run dev`), then change its **Approved** cell to `yes`. Committing is optional; the task reads the file as it is on disk.
- **Add a guide:** add a row at the position you want. Only guides listed here are ever published. Drafts that aren't listed (the old 2024 posts, for example) are never touched.
- **Change the order:** move rows.
- **Pause:** set **Approved** back to `no`, or switch the task off in the app.

| Slug | Approved | Status | Needs first | Check before approving |
| --- | --- | --- | --- | --- |
| theft-detection-lock | yes | Published 2026-11-14 | — | — |
| xiaomi-who-tried-to-unlock | yes | Draft | theft-detection-lock | The "Manage battery settings" prompt appears during setup on a Xiaomi phone |
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

## Translations of the four newest guides

`find-stolen-android-phone`, `samsung-find-stolen-phone`, `who-touched-my-phone` and `lock-apps-android` each have draft translations in pt, fr, es, de, ar, id, it and ja (`src/blog/posts/<lang>/<slug>.svx`, all `published: false`). The daily task publishes English guides only and never touches translations. Publish a translation by hand once its English guide is live: set `published: true` and today's dates, then run `npm run optimize-images`. In each language, publish `find-stolen-android-phone` before `samsung-find-stolen-phone`, because the Samsung guide links to it. What to check in each language is in `docs/translation-review.md`.

