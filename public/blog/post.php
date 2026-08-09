<?php
/** Nyilvános blog – egyetlen bejegyzés. */
require_once __DIR__ . '/includes/functions.php';
blog_boot();

$slug = isset($_GET['slug']) ? preg_replace('/[^a-z0-9-]/', '', (string) $_GET['slug']) : '';
$post = $slug !== '' ? post_by_slug($slug) : null;

// Nem létező vagy nem közzétett bejegyzés -> 404
if (!$post || empty($post['published'])) {
    http_response_code(404);
    $pageTitle = 'A bejegyzés nem található – Kecskemét Klíma';
    require __DIR__ . '/includes/header.php';
    echo '<div class="empty"><p>A keresett bejegyzés nem található.</p>'
       . '<p style="margin-top:16px"><a class="btn btn--ghost" href="/blog/">← Vissza a bloghoz</a></p></div>';
    require __DIR__ . '/includes/footer.php';
    exit;
}

$pageTitle = $post['title'] . ' – Kecskemét Klíma Blog';
$pageDesc  = $post['excerpt'];
$ogImage   = !empty($post['image']) ? $post['image'] : '';

$jsonLd = [
    '@context' => 'https://schema.org',
    '@type'    => 'BlogPosting',
    'headline' => $post['title'],
    'datePublished' => $post['created'],
    'dateModified'  => $post['updated'] ?? $post['created'],
    'author'   => ['@type' => 'Person', 'name' => $post['author'] ?? 'Polyák Zoltán'],
    'publisher'=> ['@type' => 'Organization', 'name' => SITE_BRAND],
];
if (!empty($post['image'])) {
    $jsonLd['image'] = $post['image'];
}

require __DIR__ . '/includes/header.php';
?>
<script type="application/ld+json"><?= json_encode($jsonLd, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?></script>

<article class="narrow article" style="margin:0 auto">
    <nav class="breadcrumb">
        <a href="/">Főoldal</a> › <a href="/blog/">Blog</a> › <span class="accent"><?= e($post['title']) ?></span>
    </nav>

    <div class="article__meta"><?= e(format_date($post['created'])) ?> · <?= e($post['author'] ?? 'Polyák Zoltán') ?></div>
    <h1><?= e($post['title']) ?></h1>

    <?php if (!empty($post['image'])): ?>
        <img class="article__cover" src="<?= e($post['image']) ?>" alt="<?= e($post['title']) ?>">
    <?php endif; ?>

    <div class="article__body"><?= render_body($post['body']) ?></div>

    <div class="cta-band">
        <h3>Klímát telepítene vagy karbantartatna?</h3>
        <p>Kérjen ingyenes felmérést és pontos árajánlatot – a kiszállás díjmentes.</p>
        <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
        <a class="btn btn--ghost" href="/kapcsolat/">Kapcsolat &amp; foglalás</a>
    </div>

    <p style="margin-top:32px"><a class="accent" href="/blog/">← Vissza a bloghoz</a></p>
</article>

<?php require __DIR__ . '/includes/footer.php'; ?>
