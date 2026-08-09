<?php
/**
 * Kecskemét Klíma – Blog segédfüggvények (tárolás, auth, renderelés).
 */

require_once __DIR__ . '/config.php';

/* ------------------------------------------------------------------ */
/*  mbstring fallback (ha a tárhelyen nincs engedélyezve)              */
/* ------------------------------------------------------------------ */
if (!function_exists('mb_strtolower')) {
    function mb_strtolower($s, $enc = null) { return strtolower((string) $s); }
}
if (!function_exists('mb_strlen')) {
    function mb_strlen($s, $enc = null) { return strlen((string) $s); }
}
if (!function_exists('mb_substr')) {
    function mb_substr($s, $start, $length = null, $enc = null) {
        return $length === null ? substr((string) $s, $start) : substr((string) $s, $start, $length);
    }
}

/* ------------------------------------------------------------------ */
/*  Indítás                                                            */
/* ------------------------------------------------------------------ */

function blog_boot(): void
{
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    ensure_dirs();
}

function ensure_dirs(): void
{
    foreach ([BLOG_DATA, BLOG_UPLOADS] as $dir) {
        if (!is_dir($dir)) {
            @mkdir($dir, 0775, true);
        }
    }
}

/* ------------------------------------------------------------------ */
/*  Kis segédek                                                        */
/* ------------------------------------------------------------------ */

function e(?string $s): string
{
    return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
}

function redirect(string $url): void
{
    header('Location: ' . $url);
    exit;
}

/** Ékezetes, szóközös cím -> URL-barát slug. */
function slugify(string $text): string
{
    $map = [
        'á' => 'a', 'é' => 'e', 'í' => 'i', 'ó' => 'o', 'ö' => 'o', 'ő' => 'o',
        'ú' => 'u', 'ü' => 'u', 'ű' => 'u',
        'Á' => 'a', 'É' => 'e', 'Í' => 'i', 'Ó' => 'o', 'Ö' => 'o', 'Ő' => 'o',
        'Ú' => 'u', 'Ü' => 'u', 'Ű' => 'u',
    ];
    $text = strtr($text, $map);
    $text = mb_strtolower($text, 'UTF-8');
    $text = preg_replace('/[^a-z0-9]+/', '-', $text);
    $text = trim($text, '-');
    return $text !== '' ? $text : 'bejegyzes';
}

function unique_slug(string $slug, ?string $excludeId = null): string
{
    $base = $slug;
    $i = 2;
    while (($p = post_by_slug($slug)) && $p['id'] !== $excludeId) {
        $slug = $base . '-' . $i;
        $i++;
    }
    return $slug;
}

function post_url(array $post): string
{
    return BLOG_BASE_URL . '/bejegyzes/' . rawurlencode($post['slug']) . '/';
}

function format_date(string $iso): string
{
    $ts = strtotime($iso);
    if (!$ts) {
        return '';
    }
    $months = [
        1 => 'január', 'február', 'március', 'április', 'május', 'június',
        'július', 'augusztus', 'szeptember', 'október', 'november', 'december',
    ];
    return date('Y', $ts) . '. ' . $months[(int) date('n', $ts)] . ' ' . date('j', $ts) . '.';
}

/* ------------------------------------------------------------------ */
/*  Bejegyzések tárolása (JSON fájlonként)                             */
/* ------------------------------------------------------------------ */

/** @return array<int,array> minden bejegyzés, legújabb elöl */
function posts_all(): array
{
    ensure_dirs();
    $posts = [];
    foreach (glob(BLOG_DATA . '/*.json') ?: [] as $file) {
        $json = json_decode((string) file_get_contents($file), true);
        if (is_array($json) && isset($json['id'])) {
            $posts[] = $json;
        }
    }
    usort($posts, static fn($a, $b) => strcmp($b['created'] ?? '', $a['created'] ?? ''));
    return $posts;
}

/** @return array<int,array> csak a közzétett bejegyzések */
function posts_published(): array
{
    return array_values(array_filter(posts_all(), static fn($p) => !empty($p['published'])));
}

function post_by_id(string $id): ?array
{
    $file = BLOG_DATA . '/' . basename($id) . '.json';
    if (!is_file($file)) {
        return null;
    }
    $json = json_decode((string) file_get_contents($file), true);
    return is_array($json) ? $json : null;
}

function post_by_slug(string $slug): ?array
{
    foreach (posts_all() as $p) {
        if (($p['slug'] ?? '') === $slug) {
            return $p;
        }
    }
    return null;
}

/** Létrehoz vagy frissít egy bejegyzést. @return string a bejegyzés id-je */
function post_save(array $data): string
{
    ensure_dirs();
    $id = $data['id'] ?? '';
    if ($id === '') {
        $id = date('YmdHis') . '-' . substr(bin2hex(random_bytes(3)), 0, 6);
        $created = date('c');
    } else {
        $existing = post_by_id($id);
        $created = $existing['created'] ?? date('c');
    }

    $title = trim($data['title'] ?? '');
    $slug  = unique_slug(slugify($data['slug'] ?? $title), $id);
    $body  = (string) ($data['body'] ?? '');

    $post = [
        'id'        => $id,
        'slug'      => $slug,
        'title'     => $title,
        'excerpt'   => trim($data['excerpt'] ?? '') !== '' ? trim($data['excerpt']) : excerpt_from($body),
        'body'      => $body,
        'image'     => $data['image'] ?? '',
        'author'    => trim($data['author'] ?? '') !== '' ? trim($data['author']) : 'Polyák Zoltán',
        'published' => !empty($data['published']),
        'created'   => $created,
        'updated'   => date('c'),
    ];

    file_put_contents(
        BLOG_DATA . '/' . $id . '.json',
        json_encode($post, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
    );
    return $id;
}

function post_delete(string $id): void
{
    $file = BLOG_DATA . '/' . basename($id) . '.json';
    if (is_file($file)) {
        @unlink($file);
    }
}

/* ------------------------------------------------------------------ */
/*  Tartalom-renderelés (biztonságos, egyszerű markdown-lite)          */
/* ------------------------------------------------------------------ */

function excerpt_from(string $body, int $len = 160): string
{
    $text = $body;
    $text = preg_replace('/^#{2,3}\s+/m', '', $text); // alcím-jelek
    $text = preg_replace('/^\s*-\s+/m', '', $text);   // felsorolás-jelek
    $text = str_replace('**', '', $text);             // félkövér-jelek
    $text = trim(preg_replace('/\s+/', ' ', strip_tags($text)));
    if (mb_strlen($text) <= $len) {
        return $text;
    }
    return mb_substr($text, 0, $len - 1) . '…';
}

/**
 * Zoltán egyszerű szöveget ír. Biztonságosan (escape-elve) rendereljük:
 *   - üres sor = új bekezdés
 *   - "## " / "### " = alcím
 *   - "- " sorok = felsorolás
 *   - **félkövér** = <strong>
 *   - egy sortörés a bekezdésen belül = <br>
 */
function render_body(string $text): string
{
    $text = str_replace("\r\n", "\n", $text);
    $lines = explode("\n", $text);

    $html = '';
    $mode = null; // 'p' | 'ul' | null

    $close = static function () use (&$mode, &$html): void {
        if ($mode === 'p') {
            $html .= '</p>';
        } elseif ($mode === 'ul') {
            $html .= '</ul>';
        }
        $mode = null;
    };

    foreach ($lines as $line) {
        $trim = trim($line);

        if ($trim === '') {
            $close();
            continue;
        }
        if (preg_match('/^###\s+(.*)$/', $trim, $m)) {
            $close();
            $html .= '<h3>' . inline_format(e($m[1])) . '</h3>';
            continue;
        }
        if (preg_match('/^##\s+(.*)$/', $trim, $m)) {
            $close();
            $html .= '<h2>' . inline_format(e($m[1])) . '</h2>';
            continue;
        }
        if (preg_match('/^-\s+(.*)$/', $trim, $m)) {
            if ($mode !== 'ul') {
                $close();
                $html .= '<ul>';
                $mode = 'ul';
            }
            $html .= '<li>' . inline_format(e($m[1])) . '</li>';
            continue;
        }
        // Sima szövegsor
        if ($mode === 'p') {
            $html .= '<br>' . inline_format(e($trim));
        } else {
            $close();
            $html .= '<p>' . inline_format(e($trim));
            $mode = 'p';
        }
    }
    $close();

    return $html;
}

/** Inline **félkövér** az ESCAPE-elt szövegen. */
function inline_format(string $escaped): string
{
    return preg_replace('/\*\*(.+?)\*\*/s', '<strong>$1</strong>', $escaped);
}

/* ------------------------------------------------------------------ */
/*  Hitelesítés (admin)                                                */
/* ------------------------------------------------------------------ */

function is_logged_in(): bool
{
    return !empty($_SESSION['blog_auth']);
}

function require_login(): void
{
    if (!is_logged_in()) {
        redirect(BLOG_BASE_URL . '/admin/login.php');
    }
}

function attempt_login(string $user, string $pass): bool
{
    $okUser = hash_equals(BLOG_ADMIN_USER, $user);
    $okPass = hash_equals(BLOG_ADMIN_PASSWORD, $pass);
    if ($okUser && $okPass) {
        session_regenerate_id(true);
        $_SESSION['blog_auth'] = true;
        return true;
    }
    return false;
}

function logout(): void
{
    $_SESSION = [];
    if (session_status() === PHP_SESSION_ACTIVE) {
        session_destroy();
    }
}

/* ------------------------------------------------------------------ */
/*  CSRF                                                               */
/* ------------------------------------------------------------------ */

function csrf_token(): string
{
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(16));
    }
    return $_SESSION['csrf'];
}

function csrf_check(): void
{
    $token = $_POST['csrf'] ?? '';
    if (empty($_SESSION['csrf']) || !hash_equals($_SESSION['csrf'], (string) $token)) {
        http_response_code(400);
        exit('Érvénytelen kérés (CSRF).');
    }
}

/* ------------------------------------------------------------------ */
/*  Képfeltöltés                                                       */
/* ------------------------------------------------------------------ */

/** @return string a feltöltött kép nyilvános URL-je, vagy '' ha nem volt/hibás */
function handle_image_upload(string $field = 'image'): string
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
    $allowed = [
        'image/jpeg' => 'jpg',
        'image/png'  => 'png',
        'image/webp' => 'webp',
    ];
    if (!isset($allowed[$mime])) {
        return '';
    }

    ensure_dirs();
    $name = date('YmdHis') . '-' . substr(bin2hex(random_bytes(4)), 0, 8) . '.' . $allowed[$mime];
    $dest = BLOG_UPLOADS . '/' . $name;
    if (!move_uploaded_file($f['tmp_name'], $dest)) {
        return '';
    }
    return BLOG_UPLOADS_URL . '/' . $name;
}
