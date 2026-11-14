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

Site pages, interface text, reviews and six guides (the same set as German) were translated into Italian and Japanese. Five guides per language were published on 2026-11-13 at the owner's request, before a native-speaker review (the Pixel guide stays a draft, like its English original). Have a native speaker read them and check the menu names below on a phone set to that language.

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

- `email-alert-it.webp` / `email-alert-ja.webp` and the headers for `failed-unlock-attempts-android`, `samsung-who-tried-to-unlock`, `pixel-who-tried-to-unlock`, `see-who-tried-to-unlock-your-phone` and `top_five_settings` (`theft_settings_header-<lang>.png`) are HTML graphics built from the existing layouts and pixelated photos. `block-power-menu` uses the shared photo header, which has no text.
- In `top_five_settings`, the three English phone screenshots are replaced by brand-style graphics (`settings-theft-`, `settings-remote-lock-`, `find-hub-<lang>.webp`). They use only the menu names confirmed on Google's pages; the one-line descriptions under each setting are ours, not Google's on-screen text, so the captions don't call them screenshots.

### SEO pass for it/ja (2026-11-13)

Titles, descriptions, some H2s and FAQ questions were retuned to real search phrasing from Google autocomplete (google.it, google.co.jp). Body text is unchanged apart from two new FAQs per language.

- Japanese: "Galaxy" instead of "Samsung" in titles (Galaxy phones in Japan carry no Samsung logo); targets スマホ 勝手に見られた, ロック解除 履歴, 何回まで, スマホ 盗難 対策 設定, 盗まれた 電源切られた.
- Italian: targets foto a chi sblocca il telefono, come sapere se qualcuno ha usato il mio cellulare, troppi tentativi di sblocco (samsung), antifurto android, impedire spegnimento dalla schermata di blocco.
- The on-screen messages "Troppi tentativi di sblocco non validi" (Samsung, it) and 「ロック解除に何度も失敗しました」 (Galaxy, ja) come from autocomplete, not an official Samsung page. Worth confirming on a real device.

### Images and SEO pass for pt/fr/es/de/ar/id (2026-11-13)

- **Images:** the five shared English images are replaced in every language: the who-tried header, the top-5 header, and the Theft protection, Remote Lock and Find Hub graphics. The graphics use the menu names already in each guide. Their short descriptions, and the Find Hub action labels (ring, lock, erase), are our own wording, not Google's on-screen text. The Arabic versions are mirrored for right-to-left reading.
- **SEO:** titles and some H2s and FAQ questions now follow Google autocomplete phrasing in each country (google.com.br, .fr, .com.mx, .de, .com.eg, .co.id). The Samsung guide in each language now leads with the "too many unlock attempts" message people search for, and has a new FAQ explaining it.
- **To confirm on a real device:** these lockout messages come from autocomplete, not an official page.
  - pt: "Muitas tentativas incorretas de desbloqueio"
  - es: "Demasiados intentos de desbloqueo incorrectos"
  - fr: « Le nombre de tentatives de déverrouillage incorrectes est trop élevé »
  - de: „Zu viele falsche Entsperrungsversuche“
  - id: "Terlalu banyak percobaan buka kunci yang salah"

## Four new guides in all eight languages (2026-11-14)

`samsung-find-stolen-phone`, `find-stolen-android-phone`, `who-touched-my-phone` and `lock-apps-android` were translated into pt, fr, es, de, ar, id, it and ja on the same day the English drafts were written, before Jakob had reviewed the English. All 32 files are `published: false`. If the English text changes in review, the translations need the same change.

Translations link only to guides that already exist in that language, so they don't link to `theft-detection-lock`, `signs-someone-went-through-your-phone`, `best-intruder-selfie-apps-android` or `fake-home-screen-android`. The publishing task only publishes English guides; publish each translation by hand after its English guide is live, and `find-stolen-android-phone` before `samsung-find-stolen-phone` in every language.

### Local search phrasing (DataForSEO, Google Ads data, monthly searches per country)

Titles, descriptions, some H2s and FAQ questions use the local phrasing with the most searches. Arabic was checked in Egypt and Saudi Arabia, Spanish in Mexico and Spain.

| Language | Samsung Find | Find Hub | Who touched my phone | Lock apps |
| --- | --- | --- | --- | --- |
| pt (Brazil) | samsung find 9,900; find my mobile samsung 9,900; rastrear celular samsung 4,400 | rastrear celular 246,000; localizar celular 246,000; encontrar meu dispositivo 165,000; localizador google 110,000 | como saber se alguém mexeu no meu celular 260; wtmp 110 | como colocar senha no whatsapp 27,100; pasta segura 9,900; como colocar senha nos aplicativos 4,400 |
| fr (France) | samsung find 5,400; localiser samsung 1,900; localiser téléphone samsung 1,600 | localiser un téléphone 27,100; localiser mon appareil 27,100; localiser mon téléphone 14,800 | wtmp 260 | dossier sécurisé 2,900; verrouiller application 590; comment verrouiller une application 320 |
| es (Mexico / Spain) | samsung find 3,600 / 1,600; find my mobile samsung 1,900 / 1,300; localizar samsung 1,600 / 720 | encontrar mi dispositivo 673,000 / 110,000; localizar celular 110,000 (MX); localizar móvil 40,500 (ES); como rastrear un celular 60,500 (MX) | nothing above 40 | carpeta segura 5,400 / 1,600; como poner contraseña a las aplicaciones 2,900 / 390; como poner contraseña a whatsapp 3,600 (MX) |
| de (Germany) | samsung find my mobile 5,400; samsung find 4,400; samsung handy orten 3,600 | mein gerät finden 33,100; handy orten 22,200; handy orten kostenlos 9,900 | wtmp 140 | sicherer ordner 4,400; whatsapp sperren 1,900; apps sperren 1,300; app sperre 1,300 |
| it (Italy) | samsung find 3,600; find my mobile samsung 1,900; trova il mio samsung 1,600 | trova il mio dispositivo 110,000; find hub 33,100; trova il mio telefono 12,100 | wtmp 50 | area personale 5,400; bloccare whatsapp 1,300; come mettere la password alle app 880; blocco app 720 |
| id (Indonesia) | find my mobile samsung 9,900; samsung find 6,600; cara melacak hp samsung yang hilang 1,000 | temukan perangkat saya 823,000; hub pencari 246,000; cara melacak hp yang hilang 74,000; dalam keadaan mati 12,100 | wtmp 170 | cara mengunci aplikasi 9,900; cara mengunci aplikasi di hp samsung 6,600; cara mengunci whatsapp 5,400 |
| ja (Japan) | samsung find 1,000; smartthings find 880; 端末リモート追跡 140 | スマホを探す 60,500; デバイスを探す 60,500; find hub 40,500; スマホ 紛失 2,900 | wtmp 590; スマホ 覗き見 アプリ 90; スマホ 勝手に見られた 40 | アプリロック 2,900; セキュリティフォルダ 2,900; プライベートスペース 2,900; アプリロック android 1,600; line ロック 1,300 |
| ar (Egypt / Saudi Arabia) | samsung find 1,300 / 880; البحث عن هاتف سامسونج 210 (SA) | العثور على جهازي 27,100 / 14,800; العثور على هاتفي 1,600; تتبع الهاتف المسروق 590 (EG) | wtmp 170 / 210 | قفل التطبيقات 2,400 / 720; اخفاء التطبيقات 3,600 / 1,600; المجلد الآمن 1,900 / 880; قفل التطبيقات في سامسونج 590 (EG) |

"Who touched my phone" has almost no local-language search volume anywhere; people search the app's English name. The translations are worth having for the brand term (WTMP) and for the "how do I know if someone used my phone" searches, but expect little traffic from them.

In the Arabic guides the brand is written "سامسونج" in titles and FAQ questions (that is how people search) and "Samsung" elsewhere, as in the older Arabic guides.

### Menu names confirmed on official pages

Google's help pages in each language (`support.google.com`, answers 6160491, 3265955, 15341885, 9455138, and Photos 10694388): the Find Hub name (Localizador in pt and es, Localiser in fr, „Mein Gerät finden“ in de, Find Hub in it and ja, Hub Pencari in id, مركز العثور in ar), the `Security > Find Hub` switch, "Find your offline devices" and its four options, Play sound, Mark as lost, Sign in as guest, Private space and its path, App pinning and its path, and Photos' Locked Folder.

Samsung's "Samsung Find" page in each country (`samsung.com/<country>/apps/samsung-find/`; br, fr, es, mx, de, it, id, jp, ae_ar): the Lost device protection menu, "Send last location", Lost mode, and the names of the Ring, Extend battery life and Erase data features.

### Not confirmed (check on a phone set to that language)

- **Samsung "Allow this phone to be found" and "Offline finding":** confirmed for pt, fr, es, id and ja. For de, it and ar the guides give our translation with the English label in brackets.
- **Samsung's Lost device protection menu** has two spellings on Samsung's own pages in several languages (for example pt "Proteção de dispositivo perdido" and "Proteção contra perda do dispositivo"; ja 「紛失デバイスの保護」 and 「紛失したデバイスの保護」). The guides mention both where they differ.
- **Samsung Secure Folder path:** the folder's local name is the one people search for (Pasta Segura, Dossier sécurisé, Carpeta segura, Sicherer Ordner, Area personale, Folder Aman, セキュリティフォルダ, المجلد الآمن), but the menu above it ("More security settings") and the buttons inside the setup (Continue, Add apps) are our translations. Each guide tells the reader to search Settings for the folder's name if the path differs.
- **Xiaomi App lock** and **WhatsApp App lock:** only English pages were found, so the guides give a translated name with "(App lock)" in brackets.
- **Digital Wellbeing's local name** (Bem-estar digital, Bien-être numérique, Bienestar digital, Benessere digitale, Kesejahteraan Digital, الرفاهية الرقمية) is our translation, with the English name in brackets on first mention.
- **Find Hub's "Factory reset" button** in pt, fr, es, de, it, id and ar is described in words, not quoted as a button name.
- **LINE passcode lock** (Japanese lock-apps guide only): confirmed on LINE's English help page; the Japanese menu name `プライバシー管理 > パスコードロック` comes from LINE's Japanese guide.

### Images

32 headers (`<slug>-header-<lang>.png`), built from the same HTML layout as the English ones. Arabic is mirrored and uses the system Arabic font; Japanese uses Hiragino Sans. Run `npm run optimize-images` when a translation is published.

