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
| xiaomi-who-tried-to-unlock | no | Draft | theft-detection-lock | The "Manage battery settings" prompt appears during setup on a Xiaomi phone |
| signs-someone-went-through-your-phone | no | Draft | — | WhatsApp "Linked devices" steps (taken from search snippets) |
| best-intruder-selfie-apps-android | no | Draft | signs-someone-went-through-your-phone | Rating and download figures against Google Play; that Pro removes ads |
| lock-screen-message-android | no | Draft | — | Setup steps and wording against the app |
| fake-home-screen-android | no | Draft | lock-screen-message-android, signs-someone-went-through-your-phone | Setup steps and wording against the app |
