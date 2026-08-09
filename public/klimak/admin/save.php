<?php
/** Katalógus admin – modell mentése. */
require_once __DIR__ . '/../includes/catalog.php';
cat_boot();
require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect('/klimak/admin/');
}
csrf_check();

$bslug = preg_replace('/[^a-z0-9-]/', '', (string) ($_POST['b'] ?? ''));
$b = $bslug !== '' ? brand_by_slug($bslug) : null;
if (!$b) {
    redirect('/klimak/admin/');
}

$id = preg_replace('/[^a-z0-9-]/', '', (string) ($_POST['id'] ?? ''));
$existing = $id !== '' ? model_get($bslug, $id) : null;

// Kép: új feltöltés / megtartás / eltávolítás
$image = $existing['image'] ?? '';
$uploaded = cat_upload_image('image');
if ($uploaded !== '') {
    $image = $uploaded;
} elseif (!empty($_POST['remove_image'])) {
    $image = '';
}

$name = trim($_POST['name'] ?? '');
if ($name === '') {
    redirect('/klimak/admin/edit.php?b=' . $bslug . ($id !== '' ? '&id=' . $id : ''));
}

model_save($bslug, [
    'id'          => $id,
    'name'        => $name,
    'slug'        => $existing['slug'] ?? '',
    'positioning' => trim($_POST['positioning'] ?? ''),
    'summary'     => trim($_POST['summary'] ?? ''),
    'features'    => parse_features((string) ($_POST['features'] ?? '')),
    'image'       => $image,
    'body'        => (string) ($_POST['body'] ?? ''),
    'published'   => !empty($_POST['published']),
]);

redirect('/klimak/admin/models.php?b=' . $bslug . '&msg=saved');
