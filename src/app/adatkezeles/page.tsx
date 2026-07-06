import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Adatkezelési tájékoztató | Kecskemét Klíma" },
  description:
    "Tájékoztató a Kecskemét Klíma weboldalon megadott személyes adatok kezeléséről (GDPR).",
  robots: { index: true, follow: true },
};

const sections: { h: string; body: string[] }[] = [
  {
    h: "1. Az adatkezelő",
    body: [
      `Adatkezelő: ${site.owner} (${site.brand}), székhely: ${site.address}.`,
      `Elérhetőség: ${site.phone}, ${site.email}.`,
    ],
  },
  {
    h: "2. Kezelt adatok és cél",
    body: [
      "A kapcsolatfelvételi űrlap kitöltésekor a következő adatokat kezeljük: név, telefonszám, e-mail cím és az üzenet tartalma.",
      "Az adatkezelés célja: az Ön megkeresésének megválaszolása, árajánlat adása és a szolgáltatás előkészítése.",
    ],
  },
  {
    h: "3. Az adatkezelés jogalapja",
    body: [
      "Az adatkezelés jogalapja az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) a) pont), illetve a szerződés megkötését megelőző lépések megtétele (GDPR 6. cikk (1) b) pont).",
    ],
  },
  {
    h: "4. Megőrzési idő",
    body: [
      "A megadott adatokat a megkeresés megválaszolásához, illetve a szerződéses kapcsolat fennállásáig, ezt követően a jogszabályi kötelezettségek (pl. számviteli előírások) által meghatározott ideig kezeljük.",
    ],
  },
  {
    h: "5. Térkép és sütik (cookie-k)",
    body: [
      "A Kapcsolat oldalon a helyszín megjelenítéséhez a Google Maps beágyazott térképét használjuk, amely a Google saját sütijeit használhatja. A weboldal a működéséhez szükséges technikai sütiket használ.",
      "A böngészőjében bármikor letilthatja vagy törölheti a sütiket.",
    ],
  },
  {
    h: "6. Adatfeldolgozók",
    body: [
      "Tárhelyszolgáltató: a weboldalt kiszolgáló tárhelyszolgáltató. Térkép: Google (Google Maps). [A pontos adatfeldolgozói adatok kitöltendők.]",
    ],
  },
  {
    h: "7. Az Ön jogai",
    body: [
      "Ön jogosult tájékoztatást kérni a kezelt adatairól, kérheti azok helyesbítését, törlését vagy kezelésük korlátozását, valamint tiltakozhat az adatkezelés ellen és bármikor visszavonhatja hozzájárulását.",
      `Kérelmét a ${site.email} címen vagy a ${site.phone} telefonszámon jelezheti. Jogorvoslatért a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat.`,
    ],
  },
];

export default function AdatkezelesPage() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted">
            <a href="/" className="transition-colors hover:text-white">Főoldal</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-300">Adatkezelési tájékoztató</span>
          </nav>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white">
            Adatkezelési tájékoztató
          </h1>
          <p className="mt-4 text-muted">
            Ez a tájékoztató bemutatja, hogyan kezeljük a weboldalon megadott
            személyes adatokat. (Sablon – jogi ellenőrzés javasolt.)
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-xl font-bold text-white">{s.h}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-brand-100/85">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
