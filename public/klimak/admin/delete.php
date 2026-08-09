<?php
/** Katalógus admin – modell törlése. */
require_once __DIR__ . '/../includes/catalog.php';
cat_boot();
require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect('/klimak/admin/');
}
csrf_check();

$bslug = preg_replace('/[^a-z0-9-]/', '', (string) ($_POST['b'] ?? ''));
$id = preg_replace('/[^a-z0-9-]/', '', (string) ($_POST['id'] ?? ''));
if ($bslug !== '' && $id !== '') {
    model_delete($bslug, $id);
}
redirect('/klimak/admin/models.php?b=' . $bslug . '&msg=deleted');
