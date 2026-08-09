<?php
/** Nyilvános – klímamárkák listája. */
require_once __DIR__ . '/includes/catalog.php';
cat_boot();

$brands = load_brands();

$pageTitle = 'Klímamárkák Kecskeméten – Daikin, Mitsubishi, Gree, LG, Panasonic, AUX, Polár | Kecskemét Klíma';
$pageDesc  = 'Márkafüggetlen prémium klímaszerelés Kecskeméten. Ismerje meg a telepített klímamárkákat és típusaikat.';
require __DIR__ . '/includes/cat-header.php';
?>
<nav class="breadcrumb"><a href="/">Főoldal</a> › <span class="accent">Márkák</span></nav>

<section class="hero">
    <span class="kicker">Klímamárkák</span>
    <h1>Márkafüggetlen szerviz – az Ön kedvenc márkája</h1>
    <p>A legnépszerűbb gyártók készülékeit telepítjük, karbantartjuk és javítjuk. Válassza ki a márkát, és nézze meg, milyen típusokkal dolgozunk.</p>
</section>

<div class="brand-grid">
    <?php foreach ($brands as $b):
        $models = models_published($b['slug']);
        $chips = array_slice($models, 0, 4);
        $rest = max(0, count($models) - count($chips));
    ?>
        <a class="brand-card" href="<?= e(brand_url($b['slug'])) ?>">
            <span class="brand-card__logo"><img src="<?= e($b['logo']) ?>" alt="<?= e($b['name']) ?> logó" loading="lazy"></span>
            <h2><?= e($b['name']) ?></h2>
            <p class="brand-card__tagline accent-c" style="color: <?= e($b['accent']) ?>"><?= e($b['tagline']) ?></p>
            <p class="brand-card__intro"><?= e(explode('.', (string) $b['intro'])[0]) ?>.</p>
            <div class="brand-card__chips">
                <?php foreach ($chips as $m): ?><span><?= e($m['name']) ?></span><?php endforeach; ?>
                <?php if ($rest > 0): ?><span>+<?= $rest ?></span><?php endif; ?>
            </div>
        </a>
    <?php endforeach; ?>
</div>

<div class="cta-brand">
    <h3>Nem tudja, melyik márkát válassza?</h3>
    <p>Hívjon, és segítünk kiválasztani az igényeihez és költségvetéséhez legjobban illő klímát.</p>
    <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
</div>

<?php require __DIR__ . '/includes/cat-footer.php'; ?>
