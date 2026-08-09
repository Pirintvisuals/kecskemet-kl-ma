# Blog beállítása és használata

A blog PHP-ben fut a tárhelyen (a statikus Next.js oldal mellett), így **Zoltán
bejelentkezés után maga írhat és tehet közzé bejegyzéseket** – kódmódosítás vagy
újraépítés nélkül. Nincs szükség adatbázisra: a bejegyzések egyszerű JSON-fájlok
a `blog/data/posts` mappában, a képek a `blog/uploads` mappában.

## 1. Élesítés előtt – jelszó beállítása

Nyisd meg: `public/blog/includes/config.php`, és írd át:

```php
const BLOG_ADMIN_USER     = 'zoltan';            // belépési név
const BLOG_ADMIN_PASSWORD = 'klima-admin-2026';  // >>> CSERÉLD LE erős jelszóra <<<
```

Ezzel lép be Zoltán a blogkezelőbe.

## 2. Feltöltés a tárhelyre

`npm run build` után az egész blog bekerül az `out/blog/` mappába. Töltsd fel a
tárhely webgyökerébe úgy, hogy a `blog` mappa a `kecskemetklima.hu/blog`
címen legyen elérhető (a `book.php`-hoz hasonlóan).

**FONTOS – újratöltéskor:** ha később újra feltöltöd a teljes `out/` mappát,
**NE írd felül a szerveren a `blog/data` és a `blog/uploads` mappákat** – ott
vannak Zoltán bejegyzései és a feltöltött képek! (A legegyszerűbb: ezt a két
mappát kihagyni a szinkronból.)

Írási jog: a `blog/data` és `blog/uploads` mappáknak írhatónak kell lenniük a
PHP számára (cPanelen általában alapból jó; ha nem, 0755/0775 jogosultság).

## 3. Használat – Zoltán szemszögéből

1. Belépés: `kecskemetklima.hu/blog/admin`
2. „＋ Új bejegyzés”, kitölti a **címet** és a **szöveget**, opcionálisan feltölt
   egy **borítóképet**.
3. Ha bepipálja a **Közzététel**-t → megjelenik a nyilvános blogon.
   Pipa nélkül **piszkozat** marad (csak ő látja a kezelőben).
4. Bármikor szerkeszthet vagy törölhet a listából.

### Szövegformázás (egyszerű)
- Üres sor = új bekezdés
- `## Alcím` és `### Kisebb alcím`
- Sor elején `- ` = felsorolás
- `**félkövér**` = **félkövér**

## 4. Elérési utak

- Nyilvános lista: `/blog/`
- Egy bejegyzés: `/blog/bejegyzes/{url-slug}/` (szép URL, `.htaccess` kezeli)
- Admin: `/blog/admin/`

## Technikai megjegyzés

- A `blog/data` és `blog/includes` mappákat `.htaccess` védi a közvetlen
  eléréstől; a `blog/uploads`-ban nem futhat szkript.
- A bejegyzésekhez `BlogPosting` JSON-LD séma és saját meta-leírás készül (SEO).
- A blogbejegyzések **nem** kerülnek bele automatikusan a fő `sitemap.xml`-be
  (mert az a Next.js buildkor készül, a bejegyzések meg később születnek). Ha
  kell, később egy `blog/sitemap.php` külön megoldja.
