# German, Arabic and Indonesian guides: what to check before publishing

The guides in `src/blog/posts/de/`, `src/blog/posts/ar/` and `src/blog/posts/id/` were published on 2026-11-08 at the owner's request, before a native-speaker review (the Pixel guide stays a draft in all three, like its English original). Have a native speaker read them and check the menu names below on a phone set to that language, then fix anything that is wrong. The German notes are below; Arabic and Indonesian follow at the end.

## Confirmed on official German pages

Google (support.google.com, `hl=de`): Einstellungen > Google > Alle Dienste > Diebstahlschutz; Diebstahl-Displaysperre; Offline-Gerätesperre; Displaysperre bei fehlgeschlagener Authentifizierung; Identitätsüberprüfung; Sperren per Fernzugriff; Sicherheitsfrage; Sicherheit & Datenschutz > Geräteentsperrung > Displaysperre; Sicherheit & Datenschutz > Weitere Sicherheitseinstellungen > SIM-Lock / Benachrichtigungen auf Sperrbildschirm.

Samsung (samsung.com/de, One UI 7 page): Einstellungen > Sicherheit und Datenschutz > Schutz für verlorene Geräte > Diebstahlschutz; Diebstahlerkennungssperre; Offline-Gerätesperre; Identitätsüberprüfung; Sicherheitsverzögerung.

## Not confirmed (best guess, check on a German Galaxy / Pixel)

- Samsung: **Sperrbildschirm > Einstellungen für sichere Sperre** (Secure lock settings), **Netzwerk und Sicherheit sperren** (Lock network and security), **Automatisches Zurücksetzen auf Werkseinstellungen** (Auto factory reset).
- Samsung: **Akku > Grenzen der Hintergrundnutzung > Nie in den Ruhezustand** (Never sleeping apps). The path comes from a third-party German site (techbone.de, One UI 6); the older path with "Akku und Gerätewartung" is also unverified.
- Android: **Geräteadministrator** (Device admin), **Flugmodus**, **Schnelleinstellungen**.
- Find Hub: Google's German help pages still say "Mein Gerät finden". The guides say "Find Hub (früher / in der Hilfe „Mein Gerät finden“)". Update once Google's German pages use "Find Hub".
- The Pixel path `Sicherheit & Datenschutz > Geräteentsperrung > Diebstahlschutz` was not found on any German page, so the guides use only `Einstellungen > Google > Alle Dienste > Diebstahlschutz`.

## Images

- `email-alert-de.webp` and the three headers (`*-header-de.png`) are built from the existing pixelated photos.
- `see-who-tried-to-unlock-your-phone`, `top_five_settings` and `block-power-menu` reuse the shared header images (as the other translations do). The first one has English text in it.
- When a guide is published, run `npm run optimize-images`.

## Arabic (`ar`, right to left)

- Site pages and guides are translated in Modern Standard Arabic. The layout is mirrored with `dir="rtl"` (set per language in `LOCALE_META`) and the components use logical CSS properties. Check each page type in a browser before publishing, especially the blog post page and the language picker.
- Confirmed on Google's Arabic pages (`hl=ar`): الإعدادات ← Google ← جميع الخدمات ← الحماية من السرقة; القفل عند رصد سرقة; القفل عند انقطاع الإنترنت; القفل عند تعذّر المصادقة; التحقّق من الهوية; القفل عن بُعد; سؤال الأمان; مركز العثور (Find Hub); الأمان والخصوصية; قفل الشاشة; قفل شريحة SIM; الإشعارات على شاشة القفل.
- Confirmed on Samsung's older Arabic page: الإعدادات ← العناية بالبطارية والجهاز ← حدود استخدام الخلفية ← التطبيقات التي ليست في وضع السكون (2023, may be outdated).
- Not confirmed: Samsung's Arabic names for الأمان والخصوصية ← الحماية من فقدان الجهاز, إعدادات القفل الآمن, قفل الشبكة والأمان, إعادة ضبط المصنع التلقائية, the newer الإعدادات ← البطارية path, مشرف الجهاز (Device admin), وضع الطيران, الإعدادات السريعة, and Samsung's reuse of Google's feature names.
- The Pixel Tablet help page has no Arabic version, so the top-five guide links to its English page.
- The headers use Nexa for Latin text and the system Arabic font for Arabic; check them on a second machine.

## Indonesian (`id`)

- Confirmed on Google's Indonesian pages (`hl=id`): Setelan > Google > Semua layanan > Perlindungan dari pencurian; Kunci Deteksi Pencurian; Kunci Perangkat Offline; Kunci Autentikasi Gagal; Cek Identitas; Kunci Jarak Jauh; Pertanyaan keamanan; Hub Pencari (Find Hub); Keamanan & Privasi; Kunci SIM; Notifikasi di layar kunci; Mode Pemulihan; Hapus ponsel.
- Not confirmed: all Samsung menu names except the lock-screen policy page (Keamanan dan privasi > Perlindungan perangkat hilang, Pengaturan kunci aman, Kunci jaringan dan keamanan, Reset pabrik otomatis, Batas penggunaan di latar belakang > Aplikasi yang tidak pernah tidur, Penundaan keamanan), plus Admin perangkat, Mode pesawat and Setelan Cepat. The guides add the English label in brackets at the first mention of the Samsung ones.
- The Pixel Tablet help page has no Indonesian version, so the top-five guide links to its English page.
