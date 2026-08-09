<?php
/** Admin – bejegyzés mentése (létrehozás / frissítés). */
require_once __DIR__ . '/../includes/functions.php';
blog_boot();
require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect('/blog/admin/');
}
csrf_check();

$id = preg_replace('/[^A-Za-z0-9\-]/', '', (string) ($_POST['id'] ?? ''));
$existing = $id !== '' ? post_by_id($id) : null;

// Kép: új feltöltés, meglévő megtartása vagy eltávolítása.
$image = $existing['image'] ?? '';
$uploaded = handle_image_upload('image');
if ($uploaded !== '') {
    $image = $uploaded;
} elseif (!empty($_POST['remove_image'])) {
    $image = '';
}

$data = [
    'id'        => $id,
    'title'     => trim($_POST['title'] ?? ''),
    'slug'      => $existing['slug'] ?? '', // cím alapján generáljuk, ha üres
    'excerpt'   => trim($_POST['excerpt'] ?? ''),
    'body'      => (string) ($_POST['body'] ?? ''),
    'image'     => $image,
    'author'    => trim($_POST['author'] ?? ''),
    'published' => !empty($_POST['published']),
];

if ($data['title'] === '') {
    // Cím nélkül nincs mit menteni – vissza az űrlaphoz.
    redirect('/blog/admin/edit.php' . ($id !== '' ? '?id=' . $id : ''));
}

post_save($data);
redirect('/blog/admin/?msg=saved');
