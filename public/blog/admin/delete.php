<?php
/** Admin – bejegyzés törlése. */
require_once __DIR__ . '/../includes/functions.php';
blog_boot();
require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect('/blog/admin/');
}
csrf_check();

$id = preg_replace('/[^A-Za-z0-9\-]/', '', (string) ($_POST['id'] ?? ''));
if ($id !== '') {
    post_delete($id);
}
redirect('/blog/admin/?msg=deleted');
