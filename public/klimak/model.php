<?php
/** Nyilvános – egy modell részletes oldala. ?b=brand&m=slug */
require_once __DIR__ . '/includes/catalog.php';
cat_boot();

$bslug = isset($_GET['b']) ? preg_replace('/[^a-z0-9-]/', '', (string) $_GET['b']) : '';
$mslug = isset($_GET['m']) ? preg_replace('/[^a-z0-9-]/', '', (string) $_GET['m']) : '';
$b = $bslug !== '' ? brand_by_slug($bslug) : null;
$m = ($b && $mslug !== '') ? model_by_slug($bslug, $mslug) : null;

if (!$b || !$m || empty($m['published'])) {
    http_response_code(404);
    $pageTitle = 'A modell nem található – Kecskemét Klíma';
    require __DIR__ . '/includes/cat-header.php';
    echo '<div class="empty"><p>A keresett típus nem található.</p><p style="margin-top:16px"><a class="btn btn--ghost" href="/klimak/">← Összes márka</a></p></div>';
    require __DIR__ . '/includes/cat-footer.php';
    exit;
}

$accent = $b['accent'];
$others = array_values(array_filter(models_published($bslug), static fn($x) => ($x['slug'] ?? '') !== $mslug));

$jsonLd = [
    '@context' => 'https://schema.org', '@type' => 'Product',
    'name' => $b['name'] . ' ' . $m['name'],
    'category' => 'Klíma / légkondicionáló',
    'brand' => ['@type' => 'Brand', 'name' => $b['name']],
    'description' => $m['summary'] ?: mb_substr(strip_tags((string) $m['body']), 0, 155),
];
if (!empty($m['image'])) {
    $jsonLd['image'] = $m['image'];
}

$pageTitle = $b['name'] . ' ' . $m['name'] . ' klíma Kecskeméten – telepítés, ár, jellemzők | Kecskemét Klíma';
$pageDesc  = $m['summary'] ?: mb_substr(strip_tags((string) $m['body']), 0, 155);
$ogImage   = $m['image'] ?: $b['logo'];
require __DIR__ . '/includes/cat-header.php';
?>
<script type="application/ld+json"><?= json_encode($jsonLd, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?></script>

<nav class="breadcrumb">
    <a href="/">Főoldal</a> › <a href="/klimak/">Márkák</a> ›
    <a href="<?= e(brand_url($bslug)) ?>"><?= e($b['name']) ?></a> ›
    <span style="color: <?= e($accent) ?>"><?= e($m['name']) ?></span>
</nav>

<section class="brandhero">
    <div>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
            <span class="brandhero__logo" style="height:52px;margin:0"><img src="<?= e($b['logo']) ?>" alt="<?= e($b['name']) ?> logó" style="max-height:32px"></span>
            <?php if (!empty($m['positioning'])): ?>
                <span class="model-card__badge" style="color: <?= e($accent) ?>;background: <?= e($accent) ?>22"><?= e($m['positioning']) ?></span>
            <?php endif; ?>
        </div>
        <h1><?= e($b['name']) ?> <?= e($m['name']) ?> <span style="color:var(--muted)">klíma Kecskeméten</span></h1>
        <?php if (!empty($m['summary'])): ?><p class="brandhero__tagline" style="color: <?= e($accent) ?>"><?= e($m['summary']) ?></p><?php endif; ?>
        <?php if (!empty($m['features'])): ?>
            <div class="model-features"><?php foreach ($m['features'] as $f): ?><span>✓ <?= e($f) ?></span><?php endforeach; ?></div>
        <?php endif; ?>
        <div style="margin-top:26px;display:flex;gap:14px;flex-wrap:wrap">
            <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
            <a class="btn btn--ghost" href="/kapcsolat/">Ingyenes árajánlat →</a>
        </div>
    </div>
    <?php if (!empty($m['image'])): ?>
        <div><img src="<?= e($m['image']) ?>" alt="<?= e($b['name']) ?> <?= e($m['name']) ?> klíma" style="width:100%;border-radius:24px;border:1px solid var(--line)"></div>
    <?php else: ?>
        <div class="brandhero__visual" aria-hidden="true"></div>
    <?php endif; ?>
</section>

<article class="sec sec--divider">
    <div class="narrow article__body" style="margin:0 auto"><?= render_body((string) $m['body']) ?></div>
</article>

<div class="narrow" style="margin:0 auto">
    <div class="cta-brand">
        <h3>Kérjen ajánlatot a <?= e($b['name']) ?> <?= e($m['name']) ?> típusra</h3>
        <p>A pontos teljesítményt és konfigurációt a felmérésen közösen választjuk ki – a kiszállás díjmentes.</p>
        <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
        <a class="btn btn--ghost" href="/kapcsolat/">Kapcsolat & foglalás</a>
    </div>
</div>

<?php if (!empty($others)): ?>
<section class="sec">
    <div class="sec__head" style="text-align:left"><h2 style="font-size:24px">További <?= e($b['name']) ?> modellek</h2></div>
    <div class="mini-grid">
        <?php foreach ($others as $o): ?>
            <a class="mini-card" href="<?= e(model_url($bslug, $o)) ?>"><span><?= e($b['name']) ?> <?= e($o['name']) ?></span><span style="color: <?= e($accent) ?>">→</span></a>
        <?php endforeach; ?>
    </div>
    <p style="margin-top:20px"><a class="accent" style="color: <?= e($accent) ?>" href="<?= e(brand_url($bslug)) ?>">← Vissza az összes <?= e($b['name']) ?> modellhez</a></p>
</section>
<?php endif; ?>

<?php require __DIR__ . '/includes/cat-footer.php'; ?>
