<?php
/** Katalógus admin fejléc (bejelentkezett oldalakhoz). $adminTitle opcionális. */
require_once __DIR__ . '/catalog.php';
$adminTitle = $adminTitle ?? 'Márkák & modellek';
?><!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title><?= e($adminTitle) ?> – Kecskemét Klíma</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/blog/assets/blog.css">
    <link rel="stylesheet" href="/klimak/assets/catalog.css">
</head>
<body>
<div class="admin-top">
    <div class="admin-top__inner">
        <div class="admin-top__brand">Kecskemét Klíma<small>Márkák &amp; modellek</small></div>
        <div class="admin-actions">
            <a class="btn btn--ghost" href="/klimak/" target="_blank" rel="noopener">Megtekintés ↗</a>
            <a class="btn btn--ghost" href="/blog/admin/">Blog kezelése</a>
            <a class="btn btn--ghost" href="/blog/admin/logout.php">Kilépés</a>
        </div>
    </div>
</div>
