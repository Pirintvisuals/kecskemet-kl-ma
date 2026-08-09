# Márkák & modellek kezelése (PHP katalógus)

A márka- és modelloldalak (`/klimak/…`) mostantól **PHP-ban futnak** (mint a blog),
így **Zoltán bejelentkezés után maga vehet fel, szerkeszthet és törölhet
modelleket** – kódmódosítás és újraépítés nélkül. A 7 márka fix; márkánként
tetszőleges számú modell kezelhető. Nincs adatbázis: minden JSON-fájlokban van.

## Belépés (közös a bloggal)

Ugyanaz a felhasználónév/jelszó, mint a blognál – **egy belépés mindkettőhöz**
(közös munkamenet). A jelszót a `public/blog/includes/config.local.php` állítja be
(lásd `BLOG-BEALLITAS.md`).

- Kezelő: `kecskemetklima.hu/klimak/admin`
- A blogkezelőből átléphet ide („Blog kezelése” gomb és fordítva).

## Használat

1. `/klimak/admin` → válasszon márkát → „Modellek kezelése”.
2. „＋ Új modell”, kitölti: **név** (a márkanév automatikusan elé kerül),
   **kategória** (pl. „Prémium”), **rövid összegző**, **jellemző-címkék**
   (vesszővel), **leírás** (formázható), opcionális **kép**.
3. **Közzététel** pipa → megjelenik a nyilvános oldalon. Pipa nélkül piszkozat.
4. Meglévő modell bármikor szerkeszthető/törölhető.

### Szövegformázás (leírás)
Üres sor = új bekezdés · `## Alcím` · `### Kisebb alcím` · sor elején `- ` =
felsorolás · `**félkövér**`.

## Adatok és fájlok

- Márkaszintű tartalom (fix): `public/klimak/data/brands.json`
- Modellek (Zoltán szerkeszti): `public/klimak/data/models/<márka>.json`
- Modellképek: `public/klimak/uploads/`

**FONTOS – újratöltéskor:** ahogy a blognál, a teljes `out/` feltöltésekor
**NE írd felül a szerveren a `klimak/data` és `klimak/uploads` mappákat** – ott
vannak Zoltán modelljei és a képek. (A `klimak/data/brands.json` márkaszintű, azt
biztonságosan frissítheted, de a `models/` és `uploads/` maradjon érintetlen.)

Írási jog: a `klimak/data/models` és `klimak/uploads` mappáknak írhatónak kell
lenniük a PHP számára.

## Migráció / seed

Az induló tartalmat (7 márka + 28 modell) a `scripts/export-brands.ts` állította
elő a `src/lib/brands.ts`-ből. Újrafuttatás **felülírja** a baseline JSON-t
(a szerkesztéseket nem!), ezért élesben ne futtasd újra:

```
npx tsx scripts/export-brands.ts
```

## Technikai megjegyzések

- Útválasztás: `/klimak/{márka}/` és `/klimak/{márka}/{modell}/` `.htaccess`-szel.
- SEO: márkaoldalon `FAQPage`, modelloldalon `Product` JSON-LD séma + saját meta.
- A `src/lib/brands.ts` megmaradt (a Next `sitemap.xml` baseline URL-jeihez). Az
  új, Zoltán által felvett modellek nem kerülnek automatikusan a sitemapbe.
- A blog helper-eit újrahasznosítjuk (`public/blog/includes/functions.php`), ezért
  a két rendszer együtt települ.
