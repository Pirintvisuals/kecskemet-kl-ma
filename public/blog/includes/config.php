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
 *   1. Írd át a BLOG_ADMIN_USER és BLOG_ADMIN_PASSWORD értékét egy saját,
 *      erős felhasználónévre és jelszóra. (Ezzel lép be Zoltán a /blog/admin
 *      felületre.)
 *   2. FONTOS: újratöltéskor (a teljes out/ mappa feltöltésekor) NE írd felül
 *      a szerveren a blog/data és blog/uploads mappákat – ott vannak Zoltán
 *      bejegyzései és a feltöltött képek!
 * ---------------------------------------------------------------------------
 */

// --- Oldal / márka adatok (a fejléchez, lábléchez, SEO-hoz) ---
const SITE_BRAND      = 'Kecskemét Klíma';
const BLOG_TITLE      = 'Blog – Kecskemét Klíma';
const BLOG_TAGLINE    = 'Tippek, tanácsok és hírek a klímákról';
const SITE_PHONE      = '+36 30 260 57 56';
const SITE_PHONE_HREF = 'tel:+36302605756';

// --- Admin belépés (>>> CSERÉLD LE <<<) ---
const BLOG_ADMIN_USER     = 'zoltan';
const BLOG_ADMIN_PASSWORD = 'klima-admin-2026';

// --- URL-ek (a domain gyökeréhez képest) ---
const BLOG_BASE_URL    = '/blog';
const BLOG_UPLOADS_URL = '/blog/uploads';

// --- Fájlrendszer útvonalak ---
define('BLOG_BASE',    dirname(__DIR__));            // .../blog
define('BLOG_DATA',    BLOG_BASE . '/data/posts');   // JSON bejegyzések
define('BLOG_UPLOADS', BLOG_BASE . '/uploads');      // feltöltött képek

// --- Feltöltés korlátok ---
const BLOG_MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5 MB
