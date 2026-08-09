<?php
/** Katalógus admin – egy márka modelljei. ?b=slug */
require_once __DIR__ . '/../includes/catalog.php';
cat_boot();
require_login();

$bslug = isset($_GET['b']) ? preg_replace('/[^a-z0-9-]/', '', (string) $_GET['b']) : '';
$b = $bslug !== '' ? brand_by_slug($bslug) : null;
if (!$b) {
    redirect('/klimak/admin/');
}
$models = load_models($bslug);
$flash = $_GET['msg'] ?? '';

$adminTitle = $b['name'] . ' modellek';
require __DIR__ . '/../includes/cat-admin-header.php';
?>
<div class="panel">
    <nav class="breadcrumb"><a href="/klimak/admin/">← Márkák</a></nav>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:22px">
        <h1 style="font-size:26px;margin:0"><?= e($b['name']) ?> modellek</h1>
        <a class="btn btn--primary" href="/klimak/admin/edit.php?b=<?= e($bslug) ?>">＋ Új modell</a>
    </div>

    <?php if ($flash === 'saved'): ?><div class="flash flash--ok">A modell elmentve.</div>
    <?php elseif ($flash === 'deleted'): ?><div class="flash flash--ok">A modell törölve.</div><?php endif; ?>

    <?php if (empty($models)): ?>
        <div class="empty"><p>Ehhez a márkához még nincs modell.</p>
            <p style="margin-top:16px"><a class="btn btn--primary" href="/klimak/admin/edit.php?b=<?= e($bslug) ?>">Vegye fel az elsőt →</a></p>
        </div>
    <?php else: ?>
        <ul class="post-list">
            <?php foreach ($models as $m): ?>
                <li>
                    <div>
                        <div class="post-list__title"><?= e($b['name']) ?> <?= e($m['name']) ?></div>
                        <div class="post-list__meta">
                            <?= e($m['positioning'] ?: '—') ?>
                            <?php if (!empty($m['published'])): ?> · <span class="badge badge--pub">Közzétéve</span>
                            <?php else: ?> · <span class="badge badge--draft">Piszkozat</span><?php endif; ?>
                        </div>
                    </div>
                    <div class="post-list__actions">
                        <?php if (!empty($m['published'])): ?><a class="btn btn--ghost" href="<?= e(model_url($bslug, $m)) ?>" target="_blank" rel="noopener">Megnéz</a><?php endif; ?>
                        <a class="btn btn--ghost" href="/klimak/admin/edit.php?b=<?= e($bslug) ?>&id=<?= e($m['id']) ?>">Szerkeszt</a>
                        <form class="inline-form" method="post" action="/klimak/admin/delete.php" onsubmit="return confirm('Biztosan törli ezt a modellt?');">
                            <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
                            <input type="hidden" name="b" value="<?= e($bslug) ?>">
                            <input type="hidden" name="id" value="<?= e($m['id']) ?>">
                            <button class="btn btn--danger" type="submit">Töröl</button>
                        </form>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</div>
</body>
</html>
