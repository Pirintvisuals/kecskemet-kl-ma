<?php
/**
 * Nyilvános blog fejléc (a főoldal dizájnjához illeszkedő navigáció).
 * A hívó oldal beállíthatja: $pageTitle, $pageDesc, $ogImage.
 */
require_once __DIR__ . '/functions.php';

$pageTitle = $pageTitle ?? BLOG_TITLE;
$pageDesc  = $pageDesc  ?? BLOG_TAGLINE;
$navLinks = [
    ['/szolgaltatasok/', 'Szolgáltatások'],
    ['/klimak/', 'Márkák'],
    ['/rolunk/', 'Rólunk'],
    ['/gyik/', 'GYIK'],
    ['/blog/', 'Blog'],
    ['/kapcsolat/', 'Kapcsolat & foglalás'],
];
?><!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= e($pageTitle) ?></title>
    <meta name="description" content="<?= e($pageDesc) ?>">
    <meta property="og:title" content="<?= e($pageTitle) ?>">
    <meta property="og:description" content="<?= e($pageDesc) ?>">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="hu_HU">
    <?php if (!empty($ogImage)): ?>
    <meta property="og:image" content="<?= e($ogImage) ?>">
    <?php endif; ?>
    <link rel="icon" href="/icon.png" sizes="any">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/blog/assets/blog.css">
</head>
<body>
<header class="nav">
    <div class="nav__inner">
        <a class="nav__brand" href="/">
            <img src="/logo.png" alt="Kecskemét Klíma logó" width="36" height="36">
            <span>Kecskemét <span class="accent">Klíma</span></span>
        </a>
        <nav class="nav__links">
            <?php foreach ($navLinks as [$href, $label]): ?>
                <a href="<?= e($href) ?>"<?= $href === '/blog/' ? ' class="is-active"' : '' ?>><?= e($label) ?></a>
            <?php endforeach; ?>
        </nav>
        <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
    </div>
</header>
<main class="wrap">
