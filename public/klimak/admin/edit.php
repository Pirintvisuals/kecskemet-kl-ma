<?php
/** Katalógus admin – modell írása / szerkesztése. ?b=slug&id= */
require_once __DIR__ . '/../includes/catalog.php';
cat_boot();
require_login();

$bslug = isset($_GET['b']) ? preg_replace('/[^a-z0-9-]/', '', (string) $_GET['b']) : '';
$b = $bslug !== '' ? brand_by_slug($bslug) : null;
if (!$b) {
    redirect('/klimak/admin/');
}

$id = isset($_GET['id']) ? preg_replace('/[^a-z0-9-]/', '', (string) $_GET['id']) : '';
$m = $id !== '' ? model_get($bslug, $id) : null;
$isNew = !$m;
$m = $m ?? ['id' => '', 'name' => '', 'positioning' => '', 'summary' => '', 'features' => [], 'image' => '', 'body' => '', 'published' => true];

$adminTitle = $isNew ? 'Új modell' : 'Modell szerkesztése';
require __DIR__ . '/../includes/cat-admin-header.php';
?>
<div class="panel">
    <nav class="breadcrumb"><a href="/klimak/admin/models.php?b=<?= e($bslug) ?>">← <?= e($b['name']) ?> modellek</a></nav>
    <h1 style="font-size:26px;margin:0 0 20px"><?= $isNew ? 'Új' : 'Szerkesztés' ?> – <?= e($b['name']) ?> modell</h1>

    <form method="post" action="/klimak/admin/save.php" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
        <input type="hidden" name="b" value="<?= e($bslug) ?>">
        <input type="hidden" name="id" value="<?= e($m['id']) ?>">

        <div class="card-box">
            <div class="field">
                <label for="name">Modell neve <span class="hint">(a márkanév automatikusan elé kerül, pl. „<?= e($b['name']) ?> Pular”)</span></label>
                <input type="text" id="name" name="name" value="<?= e($m['name']) ?>" required>
            </div>

            <div class="field">
                <label for="positioning">Kategória <span class="hint">(rövid címke, pl. „Prémium”, „Belépőszint”)</span></label>
                <input type="text" id="positioning" name="positioning" value="<?= e($m['positioning']) ?>">
            </div>

            <div class="field">
                <label for="summary">Rövid összegző <span class="hint">(egy mondat, ez jelenik meg kiemelten a kártyán)</span></label>
                <input type="text" id="summary" name="summary" value="<?= e($m['summary']) ?>" maxlength="200">
            </div>

            <div class="field">
                <label for="features">Jellemző-címkék <span class="hint">(vesszővel elválasztva, pl. „Beépített WiFi, Inverteres, R32, Halk”)</span></label>
                <input type="text" id="features" name="features" value="<?= e(implode(', ', $m['features'] ?? [])) ?>">
            </div>

            <div class="field">
                <label for="body">Leírás</label>
                <textarea id="body" name="body"><?= e($m['body']) ?></textarea>
                <div class="help">
                    <strong>Formázás:</strong> üres sor = új bekezdés ·
                    <code>## Alcím</code> · <code>### Kisebb alcím</code> ·
                    sor elején <code>- </code> = felsorolás · <code>**félkövér**</code>.
                </div>
            </div>

            <div class="field">
                <label for="image">Kép <span class="hint">(JPG/PNG/WEBP, max 5 MB – nem kötelező)</span></label>
                <input type="file" id="image" name="image" accept="image/jpeg,image/png,image/webp">
                <?php if (!empty($m['image'])): ?>
                    <div style="margin-top:12px">
                        <img src="<?= e($m['image']) ?>" alt="Jelenlegi kép" style="max-width:260px;border-radius:12px;border:1px solid var(--line)">
                        <label class="field--check" style="margin-top:10px"><input type="checkbox" name="remove_image" value="1"><span>Jelenlegi kép eltávolítása</span></label>
                    </div>
                <?php endif; ?>
            </div>

            <div class="field field--check">
                <input type="checkbox" id="published" name="published" value="1" <?= !empty($m['published']) ? 'checked' : '' ?>>
                <label for="published">Közzététel (pipa nélkül piszkozat – nem jelenik meg a nyilvános oldalon)</label>
            </div>
        </div>

        <div class="form-actions">
            <button class="btn btn--primary" type="submit">Mentés</button>
            <a class="btn btn--ghost" href="/klimak/admin/models.php?b=<?= e($bslug) ?>">Mégse</a>
        </div>
    </form>
</div>
</body>
</html>
