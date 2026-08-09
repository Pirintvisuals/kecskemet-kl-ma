<?php
/** Admin belépés. */
require_once __DIR__ . '/../includes/functions.php';
blog_boot();

if (is_logged_in()) {
    redirect('/blog/admin/');
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    $user = trim($_POST['user'] ?? '');
    $pass = (string) ($_POST['pass'] ?? '');
    if (attempt_login($user, $pass)) {
        redirect('/blog/admin/');
    }
    $error = 'Hibás felhasználónév vagy jelszó.';
}
?><!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Belépés – Kecskemét Klíma Blogkezelő</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/blog/assets/blog.css">
</head>
<body>
<div class="panel panel--narrow" style="margin-top:80px">
    <div class="card-box">
        <h1 style="font-size:24px;margin:0 0 6px">Blogkezelő – Belépés</h1>
        <p style="color:var(--muted);margin:0 0 22px;font-size:14px">Kecskemét Klíma</p>

        <?php if ($error): ?>
            <div class="flash flash--err"><?= e($error) ?></div>
        <?php endif; ?>

        <form method="post" action="/blog/admin/login.php">
            <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
            <div class="field">
                <label for="user">Felhasználónév</label>
                <input type="text" id="user" name="user" autocomplete="username" required autofocus>
            </div>
            <div class="field">
                <label for="pass">Jelszó</label>
                <input type="password" id="pass" name="pass" autocomplete="current-password" required>
            </div>
            <button class="btn btn--primary" type="submit" style="width:100%;justify-content:center">Belépés</button>
        </form>
    </div>
    <p style="text-align:center;margin-top:18px"><a class="accent" href="/blog/">← Vissza a bloghoz</a></p>
</div>
</body>
</html>
