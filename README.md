# Kecskemét Klíma

Prémium, statikusan exportált weboldal egy kecskeméti klímaszerelő
vállalkozás (Polyák Zoltán) számára. Next.js 16 + Tailwind CSS v4 +
Framer Motion, magyar nyelven.

## Oldalak

- `/` – főoldal (animált hero, szolgáltatások, folyamat, GYIK, kapcsolat)
- `/szolgaltatasok/[slug]/` – szolgáltatás aloldalak (telepítés, karbantartás, javítás, beüzemelés)
- `/klimak/` – klímamárkák + `/klimak/[brand]/` márkaoldalak (Daikin, Mitsubishi Electric, Gree, LG, Panasonic)
- `/rolunk/` – rólunk
- `/kapcsolat/` – kapcsolat

## Fejlesztés

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build és statikus export

```bash
npm run build    # a kész statikus oldal az `out/` mappába kerül
```

Az `out/` mappa tartalma tetszőleges statikus tárhelyre feltölthető
(pl. cPanel / FTP – webhelye.hu), nincs szükség Node.js szerverre.

## Fontos

- A kontaktadatok és a márka-/típuslisták szerkeszthetők: `src/lib/site.ts`, `src/lib/brands.ts`.
- Az `info@kecskemetklima.hu` e-mail egyelőre helykitöltő – cserélni kell.
- A statisztikák és a típusleírások megerősítendők a megrendelővel.
