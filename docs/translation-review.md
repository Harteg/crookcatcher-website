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

## Italian (`it`) and Japanese (`ja`), added 2026-11-13

Site pages, interface text, reviews and six guides (the same set as German) were translated into Italian and Japanese. **All 12 guides are drafts (`published: false`)**, so `/it/blog` and `/ja/blog` stay `noindex` and out of the sitemap until they're published. Have a native speaker read them, then set `published: true` (keep the Pixel guide a draft like its English original) and run `npm run optimize-images`.

### Italian

- Confirmed on Google's Italian pages (`hl=it`, which Google marks as machine-translated): Impostazioni > Google > Tutti i servizi > Protezione dai furti; Blocco per furto; Blocco dispositivo offline; Blocco per autenticazione fallita; Verifica dell'identità; Blocco remoto; Domanda di sicurezza; Find Hub (not translated); Sicurezza e privacy; Blocco schermo; Altre impostazioni di sicurezza > Blocco SIM / Notifiche su schermata di blocco; Modalità Recovery.
- Not confirmed: the Pixel path segment **Sblocco del dispositivo** (Device unlock); **amministratore del dispositivo**, **Modalità aereo**, **Impostazioni rapide**; every Samsung name: Protezione dispositivo smarrito, Impostazioni blocco sicuro, Blocca rete e sicurezza, Ripristino automatico, Ritardo di sicurezza, Batteria > Limiti utilizzo in background > App mai in sospensione, Assistenza dispositivo e batteria. Samsung's Italian support pages returned 404, so the guides add the English label in brackets at the first mention.
- FAQ entries use `D:` / `R:` (domanda / risposta) instead of `Q:` / `A:`.

### Japanese

- Confirmed on Google's Japanese pages (`hl=ja`): 設定 > Google > すべてのサービス > 盗難保護; 盗難検出ロック; オフライン デバイスロック; 認証失敗時のロック; ID チェック; リモートロック; セキュリティ保護用の質問; Find Hub (kept in Latin script); セキュリティとプライバシー; 画面ロック; セキュリティの詳細設定 > SIM ロック / ロック画面上の通知; リカバリモード.
- Confirmed on Samsung Japan (factory reset page): 設定 > ロック画面とAOD > 安全ロック設定; 自動初期化. 機内モード from Samsung Japan's glossary.
- Not confirmed: the Pixel path segment **デバイスのロック解除**; **デバイス管理アプリ**, **クイック設定**; Samsung's 紛失したデバイスの保護 > 盗難防止 (Google's own page uses 紛失したデバイスの保護 → 盗難保護), ネットワークとセキュリティをロック, セキュリティの遅延, バッテリー > バックグラウンドでの使用制限 > スリープしないアプリ, バッテリーとデバイスケア. The guides add the English label in brackets for the unconfirmed Samsung ones.
- The headline headers use 「ロック解除を試みた人がわかる」, close to the Japanese Play listing's former title.

### Images

- `email-alert-it.webp` / `email-alert-ja.webp` and the three headers per language (`failed-unlock-attempts-android`, `samsung-who-tried-to-unlock`, `pixel-who-tried-to-unlock`) were rebuilt as HTML from the German versions' layout, using the existing pixelated photos. The other three guides reuse the shared headers, as the other translations do (`who-tried-to-unlock-header.png` has English text).
- Screenshots inside `top_five_settings` are in English; the captions say so.
