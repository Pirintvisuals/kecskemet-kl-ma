<?php
/**
 * Kecskemét Klíma – Katalógus (márkák/modellek) adat- és segédréteg.
 *
 * A blog segédfüggvényeit (escape, slug, markdown-render, hitelesítés, CSRF,
 * mbstring fallback) újrahasznosítjuk – így a bloghoz és a katalógushoz is
 * UGYANAZ a bejelentkezés tartozik (közös session). A márkaszintű tartalom fix
 * (brands.json), a modelleket Zoltán szerkeszti (models/<brand>.json).
 */

require_once __DIR__ . '/../../blog/includes/functions.php';

define('CAT_BASE',       dirname(__DIR__));
define('CAT_DATA',       CAT_BASE . '/data');
define('CAT_MODELS_DIR', CAT_DATA . '/models');
define('CAT_UPLOADS',    CAT_BASE . '/uploads');
const CAT_UPLOADS_URL = '/klimak/uploads';
const CAT_BASE_URL    = '/klimak';

function cat_boot(): void
{
    blog_boot();
    if (!is_dir(CAT_UPLOADS)) {
        @mkdir(CAT_UPLOADS, 0775, true);
    }
}

/* ---------------- Márkák (fix) ---------------- */

function load_brands(): array
{
    $f = CAT_DATA . '/brands.json';
    $j = is_file($f) ? json_decode((string) file_get_contents($f), true) : [];
    return is_array($j) ? $j : [];
}

function brand_by_slug(string $slug): ?array
{
    foreach (load_brands() as $b) {
        if (($b['slug'] ?? '') === $slug) {
            return $b;
        }
    }
    return null;
}

function brand_url(string $slug): string
{
    return CAT_BASE_URL . '/' . rawurlencode($slug) . '/';
}

/* ---------------- Modellek (szerkeszthető) ---------------- */

/**
 * A márka modelljeit tároló JSON fájl útvonala. A Windows fenntartott
 * eszköznevek (con, prn, AUX, nul, com1-9, lpt1-9) nem lehetnek fájlnevek,
 * ezért ezeket „_” utótaggal mentjük (pl. aux -> aux_.json).
 */
function cat_models_file(string $brandSlug): string
{
    $name = basename($brandSlug);
    static $reserved = [
        'con', 'prn', 'aux', 'nul',
        'com1', 'com2', 'com3', 'com4', 'com5', 'com6', 'com7', 'com8', 'com9',
        'lpt1', 'lpt2', 'lpt3', 'lpt4', 'lpt5', 'lpt6', 'lpt7', 'lpt8', 'lpt9',
    ];
    if (in_array(strtolower($name), $reserved, true)) {
        $name .= '_';
    }
    return CAT_MODELS_DIR . '/' . $name . '.json';
}

function load_models(string $brandSlug): array
{
    $f = cat_models_file($brandSlug);
    $j = is_file($f) ? json_decode((string) file_get_contents($f), true) : [];
    if (!is_array($j)) {
        $j = [];
    }
    usort($j, static fn($a, $b) => ($a['order'] ?? 0) <=> ($b['order'] ?? 0));
    return $j;
}

function models_published(string $brandSlug): array
{
    return array_values(array_filter(load_models($brandSlug), static fn($m) => !empty($m['published'])));
}

function model_index(array $models, string $id): int
{
    foreach ($models as $i => $m) {
        if (($m['id'] ?? '') === $id) {
            return $i;
        }
    }
    return -1;
}

function model_get(string $brandSlug, string $id): ?array
{
    foreach (load_models($brandSlug) as $m) {
        if (($m['id'] ?? '') === $id) {
            return $m;
        }
    }
    return null;
}

function model_by_slug(string $brandSlug, string $slug): ?array
{
    foreach (load_models($brandSlug) as $m) {
        if (($m['slug'] ?? '') === $slug) {
            return $m;
        }
    }
    return null;
}

function cat_unique_slug(string $brandSlug, string $slug, string $excludeId): string
{
    $base = $slug;
    $i = 2;
    while (($m = model_by_slug($brandSlug, $slug)) && ($m['id'] ?? '') !== $excludeId) {
        $slug = $base . '-' . $i;
        $i++;
    }
    return $slug;
}

function save_models(string $brandSlug, array $models): bool
{
    if (!is_dir(CAT_MODELS_DIR)) {
        @mkdir(CAT_MODELS_DIR, 0775, true);
    }
    $json = json_encode(
        array_values($models),
        JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_INVALID_UTF8_SUBSTITUTE
    );
    // Ha a kódolás elbukna, INKÁBB ne írjunk semmit – nehogy üresre töröljük a
    // meglévő adatot (adatvesztés-védelem).
    if ($json === false) {
        return false;
    }
    return file_put_contents(cat_models_file($brandSlug), $json) !== false;
}

/** Létrehoz vagy frissít egy modellt egy márkán belül. @return string id */
function model_save(string $brandSlug, array $data): string
{
    $models = load_models($brandSlug);
    $id = $data['id'] ?? '';

    if ($id === '') {
        $id = slugify($data['name'] ?? 'modell');
        $base = $id;
        $i = 2;
        while (model_index($models, $id) !== -1) {
            $id = $base . '-' . $i;
            $i++;
        }
        $order = count($models);
    } else {
        $idx = model_index($models, $id);
        $order = $idx !== -1 ? ($models[$idx]['order'] ?? $idx) : count($models);
    }

    $slugSource = ($data['slug'] ?? '') !== '' ? $data['slug'] : (($data['name'] ?? '') !== '' ? $data['name'] : $id);
    $slug = cat_unique_slug($brandSlug, slugify($slugSource), $id);

    $model = [
        'id'          => $id,
        'slug'        => $slug,
        'name'        => trim($data['name'] ?? ''),
        'positioning' => trim($data['positioning'] ?? ''),
        'summary'     => trim($data['summary'] ?? ''),
        'features'    => $data['features'] ?? [],
        'image'       => $data['image'] ?? '',
        'body'        => (string) ($data['body'] ?? ''),
        'order'       => $order,
        'published'   => !empty($data['published']),
    ];

    $idx = model_index($models, $id);
    if ($idx !== -1) {
        $models[$idx] = $model;
    } else {
        $models[] = $model;
    }
    save_models($brandSlug, $models);
    return $id;
}

function model_delete(string $brandSlug, string $id): void
{
    $models = load_models($brandSlug);
    $models = array_values(array_filter($models, static fn($m) => ($m['id'] ?? '') !== $id));
    save_models($brandSlug, $models);
}

function model_url(string $brandSlug, array $m): string
{
    return CAT_BASE_URL . '/' . rawurlencode($brandSlug) . '/' . rawurlencode($m['slug']) . '/';
}

/** Vesszővel elválasztott jellemzők -> tömb. */
function parse_features(string $raw): array
{
    $parts = preg_split('/[\n,]+/', $raw) ?: [];
    $parts = array_map('trim', $parts);
    return array_values(array_filter($parts, static fn($p) => $p !== ''));
}

/* ---------------- Képfeltöltés (katalógus mappa) ---------------- */

function cat_upload_image(string $field = 'image'): string
{
    if (empty($_FILES[$field]) || ($_FILES[$field]['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) {
        return '';
    }
    $f = $_FILES[$field];
    if ($f['error'] !== UPLOAD_ERR_OK || $f['size'] <= 0 || $f['size'] > BLOG_MAX_UPLOAD_BYTES) {
        return '';
    }
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($f['tmp_name']);
    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
    if (!isset($allowed[$mime])) {
        return '';
    }
    if (!is_dir(CAT_UPLOADS)) {
        @mkdir(CAT_UPLOADS, 0775, true);
    }
    $name = date('YmdHis') . '-' . substr(bin2hex(random_bytes(4)), 0, 8) . '.' . $allowed[$mime];
    if (!move_uploaded_file($f['tmp_name'], CAT_UPLOADS . '/' . $name)) {
        return '';
    }
    return CAT_UPLOADS_URL . '/' . $name;
}
