<?php
/** Nyilvános blog – bejegyzések listája. */
require_once __DIR__ . '/includes/functions.php';
blog_boot();

$posts = posts_published();

$pageTitle = BLOG_TITLE;
$pageDesc  = BLOG_TAGLINE . ' – Kecskemét Klíma';
require __DIR__ . '/includes/header.php';
?>
<nav class="breadcrumb">
    <a href="/">Főoldal</a> › <span class="accent">Blog</span>
</nav>

<section class="hero">
    <span class="kicker">Blog</span>
    <h1>Klímás tippek, tanácsok és hírek</h1>
    <p>Hasznos cikkek a klímákról: karbantartás, energiatakarékosság, típusválasztás és minden, ami segít a döntésben.</p>
</section>

<?php if (empty($posts)): ?>
    <div class="empty">
        <p>Még nincsenek bejegyzések. Nézzen vissza hamarosan!</p>
    </div>
<?php else: ?>
    <div class="grid">
        <?php foreach ($posts as $p): ?>
            <a class="card" href="<?= e(post_url($p)) ?>">
                <?php if (!empty($p['image'])): ?>
                    <img class="card__img" src="<?= e($p['image']) ?>" alt="<?= e($p['title']) ?>" loading="lazy">
                <?php else: ?>
                    <div class="card__img card__img--placeholder">Kecskemét Klíma</div>
                <?php endif; ?>
                <div class="card__body">
                    <span class="card__date"><?= e(format_date($p['created'])) ?></span>
                    <h2><?= e($p['title']) ?></h2>
                    <p class="card__excerpt"><?= e($p['excerpt']) ?></p>
                    <span class="card__more">Tovább olvasom →</span>
                </div>
            </a>
        <?php endforeach; ?>
    </div>
<?php endif; ?>

<?php require __DIR__ . '/includes/footer.php'; ?>
