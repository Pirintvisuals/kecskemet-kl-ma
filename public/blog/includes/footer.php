<?php
/** Nyilvános blog lábléc. */
?>
</main>
<footer class="foot">
    <div class="foot__inner">
        <div>
            <div class="foot__brand">Kecskemét <span class="accent">Klíma</span></div>
            <p class="foot__muted"><?= e(BLOG_TAGLINE) ?></p>
        </div>
        <nav class="foot__links">
            <a href="/">Főoldal</a>
            <a href="/szolgaltatasok/">Szolgáltatások</a>
            <a href="/klimak/">Márkák</a>
            <a href="/blog/">Blog</a>
            <a href="/kapcsolat/">Kapcsolat</a>
        </nav>
        <a class="btn btn--phone" href="<?= e(SITE_PHONE_HREF) ?>">📞 <?= e(SITE_PHONE) ?></a>
    </div>
    <p class="foot__copy">© <?= date('Y') ?> <?= e(SITE_BRAND) ?>. Minden jog fenntartva.</p>
</footer>
</body>
</html>
