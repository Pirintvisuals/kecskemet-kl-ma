<?php
/** Nyilvános – egy klímamárka oldala. ?b=slug */
require_once __DIR__ . '/includes/catalog.php';
cat_boot();

$slug = isset($_GET['b']) ? preg_replace('/[^a-z0-9-]/', '', (string) $_GET['b']) : '';
$b = $slug !== '' ? brand_by_slug($slug) : null;

if (!$b) {
    http_response_code(404);
    $pageTitle = 'A márka nem található – Kecskemét Klíma';
    require __DIR__ . '/includes/cat-header.php';
    echo '<div class="empty"><p>A keresett márka nem található.</p><p style="margin-top:16px"><a class="btn btn--ghost" href="/klimak/">← Összes márka</a></p></div>';
    require __DIR__ . '/includes/cat-footer.php';
    exit;
}

$accent = $b['accent'];
$models = models_published($slug);
$others = array_values(array_filter(load_brands(), static fn($x) => ($x['slug'] ?? '') !== $slug));

/** Ikonkulcs -> emoji (a React lucide ikonok helyett). */
function cat_icon(string $key): string
{
    static $map = [
        'wifi' => '📶', 'flame' => '🔥', 'leaf' => '🌿', 'wind' => '🌬️',
        'thermometer' => '🌡️', 'volume' => '🔊', 'globe' => '🌍', 'shield' => '🛡️',
        'piggybank' => '💰', 'gauge' => '⏱️', 'sparkles' => '✨', 'snowflake' => '❄️',
    ];
    return $map[$key] ?? '❄️';
}

$services = [
    ['telepites', 'Klíma telepítés'],
    ['karbantartas', 'Karbantartás & tisztítás'],
    ['javitas', 'Javítás & hibakeresés'],
    ['beuzemeles', 'Beüzemelés & szivárgás'],
];

$faqJsonLd = null;
if (!empty($b['faq'])) {
    $faqJsonLd = [
        '@context' => 'https://schema.org', '@type' => 'FAQPage',
        'mainEntity' => array_map(static fn($f) => [
            '@type' => 'Question', 'name' => $f['q'],
            'acceptedAnswer' => ['@type' => 'Answer', 'text' => $f['a']],
        ], $b['faq']),
    ];
}

$pageTitle = $b['metaTitle'];
$pageDesc  = mb_substr((string) $b['intro'], 0, 155);
$ogImage   = $b['logo'];
require __DIR__ . '/includes/cat-header.php';
?>
<?php if ($faqJsonLd): ?>
<script type="application/ld+json"><?= json_encode($faqJsonLd, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?></script>
<?php endif; ?>

<nav class="breadcrumb">
    <a href="/">Főoldal</a> › <a href="/klimak/">Márkák</a> › <span style="color: <?= e($accent) ?>"><?= e($b['name']) ?></span>
</nav>

<!-- HERO -->
<section class="brandhero">
    <div>
        <span class="brandhero__logo"><img src="<?= e($b['logo']) ?>" alt="<?= e($b['name']) ?> logó"></span>
        <h1><?= e($b['name']) ?> klímák <span style="color:var(--muted)">Kecskeméten</span></h1>
        <p class="brandhero__tagline" style="color: <?= e($accent) ?>"><?= e($b['tagline']) ?></p>
        <p class="brandhero__intro"><?= e($b['intro']) ?></p>

        <?php if (!empty($b['highlight'])): ?>
            <div class="hl-note"><span class="num">10</span><p style="margin:0"><?= e($b['highlight']) ?></p></div>
        <?php endif; ?>

        <div style="margin-top:26px;display:flex;gap:14px;flex-wrap:wrap">
            <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
            <a class="btn btn--ghost" href="/kapcsolat/">Ingyenes árajánlat →</a>
        </div>
    </div>
    <div class="brandhero__visual" aria-hidden="true"></div>
</section>

<!-- STRENGTHS -->
<?php if (!empty($b['strengths'])): ?>
<section class="sec">
    <div class="sec__head"><h2>Miért jó választás a <span style="color: <?= e($accent) ?>"><?= e($b['name']) ?></span>?</h2></div>
    <div class="strengths">
        <?php foreach ($b['strengths'] as $s): ?>
            <div class="strength"><span class="tick">✓</span><span><?= e($s) ?></span></div>
        <?php endforeach; ?>
    </div>
</section>
<?php endif; ?>

<!-- VIDEO -->
<?php if (!empty($b['video']['id'])): ?>
<section class="sec sec--divider">
    <div class="sec__head">
        <span class="kicker kicker--accent">▶ Videó</span>
        <h2><?= e($b['video']['title']) ?></h2>
        <?php if (!empty($b['video']['text'])): ?><p><?= e($b['video']['text']) ?></p><?php endif; ?>
    </div>
    <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/<?= e($b['video']['id']) ?>?rel=0"
                title="<?= e($b['video']['title']) ?>" loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</section>
<?php endif; ?>

<!-- INFO SECTIONS -->
<?php if (!empty($b['infoSections'])): ?>
<section class="sec sec--divider">
    <div class="sec__head">
        <span class="kicker kicker--accent">Jó tudni</span>
        <h2>Amiért érdemes <?= e($b['name']) ?> klímát választani</h2>
    </div>
    <div class="info-grid">
        <?php foreach ($b['infoSections'] as $info): ?>
            <div class="info-card">
                <span class="ic" style="color: <?= e($accent) ?>"><?= cat_icon($info['icon'] ?? '') ?></span>
                <h3><?= e($info['title']) ?></h3>
                <p class="lead"><?= e($info['lead'] ?? '') ?></p>
                <?php if (!empty($info['points'])): ?>
                    <ul><?php foreach ($info['points'] as $pt): ?><li><?= e($pt) ?></li><?php endforeach; ?></ul>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</section>
<?php endif; ?>

<!-- FEATURED SERIES -->
<?php if (!empty($b['featuredSeries'])): $fs = $b['featuredSeries']; ?>
<section class="sec sec--divider">
    <div class="sec__head">
        <span class="kicker kicker--accent">❄ Kiemelt széria</span>
        <h2><?= e($b['name']) ?> <?= e($fs['name']) ?></h2>
        <p style="color: <?= e($accent) ?>;font-weight:600"><?= e($fs['tagline'] ?? '') ?></p>
        <p><?= e($fs['intro'] ?? '') ?></p>
    </div>
    <?php if (!empty($fs['capacities'])): ?>
    <div class="model-grid" style="margin-top:28px">
        <?php foreach ($fs['capacities'] as $c): ?>
            <div class="info-card" style="text-align:center">
                <div style="font-family:'Sora';font-weight:800;font-size:28px;color:#fff"><?= e($c['power']) ?></div>
                <div style="color: <?= e($accent) ?>;font-weight:600;margin-top:4px"><?= e($c['room']) ?></div>
                <div style="margin-top:12px;font-family:monospace;font-size:11px;color:var(--muted)"><?= e($c['model']) ?></div>
            </div>
        <?php endforeach; ?>
    </div>
    <?php endif; ?>
    <?php if (!empty($fs['technologies'])): ?>
    <div class="info-grid">
        <?php foreach ($fs['technologies'] as $t): ?>
            <div class="info-card">
                <span class="ic" style="color: <?= e($accent) ?>"><?= cat_icon($t['icon'] ?? '') ?></span>
                <h3><?= e($t['title']) ?></h3>
                <p class="lead" style="font-weight:400;color:var(--muted)"><?= e($t['text']) ?></p>
            </div>
        <?php endforeach; ?>
    </div>
    <?php endif; ?>
    <?php if (!empty($fs['specs'])): ?>
    <dl class="spec-strip">
        <?php foreach ($fs['specs'] as $s): ?>
            <div class="spec-strip__row"><dt><?= e($s['label']) ?></dt><dd><?= e($s['value']) ?></dd></div>
        <?php endforeach; ?>
    </dl>
    <?php endif; ?>
</section>
<?php endif; ?>

<!-- MODELS -->
<section class="sec sec--divider">
    <div class="sec__head">
        <span class="kicker kicker--accent">Típusok</span>
        <h2><?= e($b['name']) ?> modellek, amiket telepítünk</h2>
        <p>Segítünk kiválasztani az igényeihez és költségvetéséhez legjobban illő típust – majd szakszerűen telepítjük és karbantartjuk.</p>
    </div>
    <?php if (empty($models)): ?>
        <div class="empty">Hamarosan feltöltjük a <?= e($b['name']) ?> típusokat. Addig is <a class="accent" href="<?= e(SITE_PHONE_HREF) ?>">hívjon minket</a>!</div>
    <?php else: ?>
    <div class="model-grid">
        <?php foreach ($models as $m): ?>
            <a class="model-card" href="<?= e(model_url($slug, $m)) ?>">
                <div class="model-card__top">
                    <h3><?= e($b['name']) ?> <?= e($m['name']) ?></h3>
                    <?php if (!empty($m['positioning'])): ?><span class="model-card__badge" style="color: <?= e($accent) ?>;background: <?= e($accent) ?>22"><?= e($m['positioning']) ?></span><?php endif; ?>
                </div>
                <?php if (!empty($m['summary'])): ?><p class="model-card__summary"><?= e($m['summary']) ?></p><?php endif; ?>
                <?php if (!empty($m['features'])): ?>
                    <div class="model-card__tags"><?php foreach ($m['features'] as $f): ?><span><?= e($f) ?></span><?php endforeach; ?></div>
                <?php endif; ?>
                <span class="model-card__more" style="color: <?= e($accent) ?>">Részletek erről a típusról →</span>
            </a>
        <?php endforeach; ?>
    </div>
    <?php endif; ?>
</section>

<!-- FAQ -->
<?php if (!empty($b['faq'])): ?>
<section class="sec sec--divider">
    <div class="sec__head">
        <span class="kicker kicker--accent">GYIK</span>
        <h2>Gyakori kérdések a <?= e($b['name']) ?> klímákról</h2>
    </div>
    <div class="faq">
        <?php foreach ($b['faq'] as $f): ?>
            <details><summary><?= e($f['q']) ?></summary><p><?= e($f['a']) ?></p></details>
        <?php endforeach; ?>
    </div>
</section>
<?php endif; ?>

<!-- SERVICES -->
<section class="sec sec--divider">
    <div class="sec__head"><h2>Teljes körű <?= e($b['name']) ?> szerviz egy helyen</h2></div>
    <div class="mini-grid">
        <?php foreach ($services as [$sid, $stitle]): ?>
            <a class="mini-card" href="/szolgaltatasok/<?= e($sid) ?>/"><span><?= e($stitle) ?></span><span style="color: <?= e($accent) ?>">→</span></a>
        <?php endforeach; ?>
    </div>
</section>

<!-- CTA -->
<div class="cta-brand">
    <h3>Kérjen ajánlatot <?= e($b['name']) ?> klímára</h3>
    <p>Ingyenes felmérés, pontos árajánlat – a kiszállás díjmentes.</p>
    <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
    <a class="btn btn--ghost" href="/kapcsolat/">Kapcsolat & foglalás</a>
</div>

<!-- OTHER BRANDS -->
<section class="sec">
    <div class="sec__head" style="text-align:left"><h2 style="font-size:24px">További márkák</h2></div>
    <div class="mini-grid">
        <?php foreach ($others as $o): ?>
            <a class="mini-card" href="<?= e(brand_url($o['slug'])) ?>"><span><?= e($o['name']) ?></span><span style="color: <?= e($o['accent']) ?>">→</span></a>
        <?php endforeach; ?>
    </div>
</section>

<?php require __DIR__ . '/includes/cat-footer.php'; ?>
