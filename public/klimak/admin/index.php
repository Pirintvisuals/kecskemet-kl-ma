<?php
/** Katalógus admin – márkák (a modellek kezeléséhez). */
require_once __DIR__ . '/../includes/catalog.php';
cat_boot();
require_login();

$brands = load_brands();
$adminTitle = 'Márkák';
require __DIR__ . '/../includes/cat-admin-header.php';
?>
<div class="panel">
    <h1 style="font-size:26px;margin:0 0 6px">Márkák &amp; modellek</h1>
    <p style="color:var(--muted);margin:0 0 22px">Válasszon márkát, és kezelje a hozzá tartozó modelleket (hozzáadás, szerkesztés, törlés).</p>

    <ul class="post-list">
        <?php foreach ($brands as $b):
            $all = load_models($b['slug']);
            $pub = count(array_filter($all, static fn($m) => !empty($m['published'])));
        ?>
            <li>
                <div style="display:flex;align-items:center;gap:14px">
                    <span class="brand-card__logo" style="height:44px;width:96px"><img src="<?= e($b['logo']) ?>" alt="<?= e($b['name']) ?>" style="max-height:26px"></span>
                    <div>
                        <div class="post-list__title"><?= e($b['name']) ?></div>
                        <div class="post-list__meta"><?= count($all) ?> modell (<?= $pub ?> közzétéve)</div>
                    </div>
                </div>
                <div class="post-list__actions">
                    <a class="btn btn--primary" href="/klimak/admin/models.php?b=<?= e($b['slug']) ?>">Modellek kezelése</a>
                </div>
            </li>
        <?php endforeach; ?>
    </ul>

    <div class="help">
        <strong>Tipp:</strong> a márkák (7 db) fixek. Márkánként vehet fel új modellt,
        szerkesztheti vagy törölheti a meglévőket. A közzé nem tett modellek nem
        jelennek meg a nyilvános oldalon.
    </div>
</div>
</body>
</html>
