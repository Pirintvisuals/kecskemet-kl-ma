<?php
/** Admin – bejegyzés írása / szerkesztése (űrlap). */
require_once __DIR__ . '/../includes/functions.php';
blog_boot();
require_login();

$id = isset($_GET['id']) ? preg_replace('/[^A-Za-z0-9\-]/', '', (string) $_GET['id']) : '';
$post = $id !== '' ? post_by_id($id) : null;

$isNew = !$post;
$post = $post ?? [
    'id' => '', 'title' => '', 'slug' => '', 'excerpt' => '',
    'body' => '', 'image' => '', 'author' => 'Polyák Zoltán', 'published' => false,
];

$adminTitle = $isNew ? 'Új bejegyzés' : 'Bejegyzés szerkesztése';
require __DIR__ . '/../includes/admin-header.php';
?>
<div class="panel">
    <nav class="breadcrumb"><a href="/blog/admin/">← Bejegyzések</a></nav>
    <h1 style="font-size:26px;margin:0 0 20px"><?= $isNew ? 'Új bejegyzés' : 'Bejegyzés szerkesztése' ?></h1>

    <form method="post" action="/blog/admin/save.php" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
        <input type="hidden" name="id" value="<?= e($post['id']) ?>">

        <div class="card-box">
            <div class="field">
                <label for="title">Cím</label>
                <input type="text" id="title" name="title" value="<?= e($post['title']) ?>" required>
            </div>

            <div class="field">
                <label for="excerpt">Rövid összefoglaló <span class="hint">(a listában és a keresőben jelenik meg – ha üresen hagyja, a szövegből vesszük)</span></label>
                <input type="text" id="excerpt" name="excerpt" value="<?= e($post['excerpt']) ?>" maxlength="200">
            </div>

            <div class="field">
                <label for="body">Szöveg</label>
                <textarea id="body" name="body" required><?= e($post['body']) ?></textarea>
                <div class="help">
                    <strong>Formázás:</strong> üres sor = új bekezdés ·
                    <code>## Alcím</code> · <code>### Kisebb alcím</code> ·
                    sor elején <code>- </code> = felsorolás ·
                    <code>**félkövér**</code> = <strong>félkövér</strong>.
                </div>
            </div>

            <div class="field">
                <label for="image">Borítókép <span class="hint">(JPG, PNG vagy WEBP, max 5 MB – nem kötelező)</span></label>
                <input type="file" id="image" name="image" accept="image/jpeg,image/png,image/webp">
                <?php if (!empty($post['image'])): ?>
                    <div style="margin-top:12px">
                        <img src="<?= e($post['image']) ?>" alt="Jelenlegi borítókép" style="max-width:260px;border-radius:12px;border:1px solid var(--line)">
                        <label class="field--check" style="margin-top:10px">
                            <input type="checkbox" name="remove_image" value="1">
                            <span>Jelenlegi kép eltávolítása</span>
                        </label>
                    </div>
                <?php endif; ?>
            </div>

            <div class="field">
                <label for="author">Szerző</label>
                <input type="text" id="author" name="author" value="<?= e($post['author'] ?? 'Polyák Zoltán') ?>">
            </div>

            <div class="field field--check">
                <input type="checkbox" id="published" name="published" value="1" <?= !empty($post['published']) ? 'checked' : '' ?>>
                <label for="published">Közzététel (pipa nélkül piszkozatként menti, nem jelenik meg a nyilvános blogon)</label>
            </div>
        </div>

        <div class="form-actions">
            <button class="btn btn--primary" type="submit">Mentés</button>
            <a class="btn btn--ghost" href="/blog/admin/">Mégse</a>
        </div>
    </form>
</div>
<?php require __DIR__ . '/../includes/admin-footer.php'; ?>
