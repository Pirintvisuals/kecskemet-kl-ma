<?php
/**
 * Kecskemét Klíma – Blog konfiguráció
 * ---------------------------------------------------------------------------
 * A blog PHP-ben fut a tárhelyen (a statikus Next.js oldal mellett), így
 * Zoltán bejelentkezés után maga írhat és tehet közzé bejegyzéseket –
 * újraépítés nélkül. A bejegyzések egyszerű JSON-fájlokban tárolódnak a
 * data/posts mappában (nincs szükség adatbázisra).
 *
 * TEENDŐ ÉLESÍTÉS ELŐTT:
 *   1. Az admin felhasználónév és jelszó NEM ebben a fájlban van (ez a fájl
 *      publikus a repóban!). Hozz létre a szerveren egy
 *      includes/config.local.php fájlt a config.local.example.php alapján,
 *      és abban add meg a valódi, erős jelszót. Ez a fájl .gitignore-olt,
 *      így soha nem kerül fel a GitHubra.
 *   2. FONTOS: újratöltéskor (a teljes out/ mappa feltöltésekor) NE írd felül
 *      a szerveren a blog/data és blog/uploads mappákat – ott vannak Zoltán
 *      bejegyzései és a feltöltött képek! (Ugyanígy a config.local.php-t sem.)
 * ---------------------------------------------------------------------------
 */

// --- Oldal / márka adatok (a fejléchez, lábléchez, SEO-hoz) ---
const SITE_BRAND      = 'Kecskemét Klíma';
const BLOG_TITLE      = 'Blog – Kecskemét Klíma';
const BLOG_TAGLINE    = 'Tippek, tanácsok és hírek a klímákról';
const SITE_PHONE      = '+36 30 260 57 56';
const SITE_PHONE_HREF = 'tel:+36302605756';

// --- Admin belépés ---
// A VALÓDI jelszó NINCS ebben a (publikus) fájlban. A szerveren hozz létre egy
// includes/config.local.php fájlt (lásd config.local.example.php), ami megadja:
//   define('BLOG_ADMIN_USER', '...');  define('BLOG_ADMIN_PASSWORD', '...');
$blogLocalConfig = __DIR__ . '/config.local.php';
if (is_file($blogLocalConfig)) {
    require $blogLocalConfig;
}
// Biztonságos alapérték: ha nincs config.local.php, a belépés le van tiltva
// (senki sem tudja kitalálni ezt a véletlen jelszót).
if (!defined('BLOG_ADMIN_USER')) {
    define('BLOG_ADMIN_USER', 'admin');
}
if (!defined('BLOG_ADMIN_PASSWORD')) {
    define('BLOG_ADMIN_PASSWORD', bin2hex(random_bytes(32)));
}

// --- URL-ek (a domain gyökeréhez képest) ---
const BLOG_BASE_URL    = '/blog';
const BLOG_UPLOADS_URL = '/blog/uploads';

// --- Fájlrendszer útvonalak ---
define('BLOG_BASE',    dirname(__DIR__));            // .../blog
define('BLOG_DATA',    BLOG_BASE . '/data/posts');   // JSON bejegyzések
define('BLOG_UPLOADS', BLOG_BASE . '/uploads');      // feltöltött képek

// --- Feltöltés korlátok ---
const BLOG_MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5 MB
