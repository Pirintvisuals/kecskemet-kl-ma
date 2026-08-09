<?php
/** Admin – bejegyzések listája (irányítópult). */
require_once __DIR__ . '/../includes/functions.php';
blog_boot();
require_login();

$posts = posts_all();
$flash = $_GET['msg'] ?? '';

$adminTitle = 'Bejegyzések';
require __DIR__ . '/../includes/admin-header.php';
?>
<div class="panel">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:22px">
        <h1 style="font-size:26px;margin:0">Bejegyzések</h1>
        <a class="btn btn--primary" href="/blog/admin/edit.php">＋ Új bejegyzés</a>
    </div>

    <?php if ($flash === 'saved'): ?>
        <div class="flash flash--ok">A bejegyzés elmentve.</div>
    <?php elseif ($flash === 'deleted'): ?>
        <div class="flash flash--ok">A bejegyzés törölve.</div>
    <?php endif; ?>

    <?php if (empty($posts)): ?>
        <div class="empty">
            <p>Még nincs egyetlen bejegyzés sem.</p>
            <p style="margin-top:16px"><a class="btn btn--primary" href="/blog/admin/edit.php">Írja meg az elsőt →</a></p>
        </div>
    <?php else: ?>
        <ul class="post-list">
            <?php foreach ($posts as $p): ?>
                <li>
                    <div>
                        <div class="post-list__title"><?= e($p['title']) ?></div>
                        <div class="post-list__meta">
                            <?= e(format_date($p['created'])) ?>
                            <?php if (!empty($p['published'])): ?>
                                · <span class="badge badge--pub">Közzétéve</span>
                            <?php else: ?>
                                · <span class="badge badge--draft">Piszkozat</span>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="post-list__actions">
                        <?php if (!empty($p['published'])): ?>
                            <a class="btn btn--ghost" href="<?= e(post_url($p)) ?>" target="_blank" rel="noopener">Megnéz</a>
                        <?php endif; ?>
                        <a class="btn btn--ghost" href="/blog/admin/edit.php?id=<?= e($p['id']) ?>">Szerkeszt</a>
                        <form class="inline-form" method="post" action="/blog/admin/delete.php"
                              onsubmit="return confirm('Biztosan törli ezt a bejegyzést?');">
                            <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
                            <input type="hidden" name="id" value="<?= e($p['id']) ?>">
                            <button class="btn btn--danger" type="submit">Töröl</button>
                        </form>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</div>
<?php require __DIR__ . '/../includes/admin-footer.php'; ?>
