/**
 * Central business content for Kecskemét Klíma.
 * Edit values here — every section reads from this file.
 *
 * NOTE: Contact details reuse the gas business (Polyák Zoltán) as requested.
 * The e-mail below is a placeholder for the klíma brand — swap it when ready.
 */

export const site = {
  brand: "Kecskemét Klíma",
  owner: "Polyák Zoltán",
  tagline: "Klímaszerelés, amire nyáron és télen is számíthat",
  phone: "+36 30 260 57 56",
  phoneHref: "tel:+36302605756",
  email: "info@kecskemetklima.hu", // placeholder — confirm/replace
  emailHref: "mailto:info@kecskemetklima.hu",
  address: "6000 Kecskemét, Számadó u. 25.",
  hours: "H–P 8:00–17:00 · Hétvégén zárva",
  serviceRadiusKm: 30,
} as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  icon: "install" | "maintain" | "repair" | "commission";
  // --- rich subpage content ---
  accent: string; // hex accent used on the subpage
  metaTitle: string;
  heroKicker: string;
  heroLead: string;
  overviewTitle: string;
  overview: string;
  benefits: { title: string; text: string }[];
  includedTitle: string;
  included: string[];
  steps: { title: string; text: string }[];
  signalsTitle: string;
  signals: string[];
  priceNote: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    id: "telepites",
    title: "Klíma telepítés",
    short: "Split és multi-split rendszerek",
    description:
      "Új klímaberendezés szakszerű telepítése lakásba, házba és irodába. Segítünk a megfelelő típus és teljesítmény kiválasztásában is.",
    points: [
      "Split és multi-split rendszerek",
      "A telepítés magában foglalja a beüzemelést is",
      "Máshol vett klíma felszerelése, meglévő klíma áthelyezése",
      "Esztétikus, rejtett vezetékezés – márkafüggetlenül",
    ],
    icon: "install",
    accent: "#38BDF8",
    metaTitle: "Klíma telepítés Kecskeméten – split és multi-split | Kecskemét Klíma",
    heroKicker: "Telepítés",
    heroLead:
      "Új klíma felszerelése lakásba, házba és irodába – pontosan méretezve, esztétikusan, rejtett vezetékkel. A felméréstől a próbaüzemig egy szakember végzi.",
    overviewTitle: "Kulcsrakész telepítés, az első felméréstől a hűs levegőig",
    overview:
      "A jó klíma a helyes típusválasztással és a precíz telepítéssel kezdődik. Felmérjük a helyiséget, kiszámoljuk a szükséges hűtőteljesítményt, és segítünk kiválasztani az igényeihez illő készüléket. A felszerelést tisztán, a lakását óvva végezzük, a vezetékeket pedig a lehető legesztétikusabban, rejtve vezetjük. A telepítés nem ér véget a felszereléssel: minden esetben tartalmazza a szakszerű beüzemelést is – vákuumozást, gáztöltést és szivárgásvizsgálatot –, hogy a klíma azonnal, minőségi kivitelben és sokáig működjön. Nem csak új készüléket szerelünk fel: a máshol (áruházban, interneten) vásárolt klímát is felszereljük és beüzemeljük, és költözésnél a meglévő klímát is áthelyezzük.",
    benefits: [
      {
        title: "Pontos méretezés",
        text: "A helyiség mérete és tájolása alapján számoljuk ki a megfelelő teljesítményt – se túl gyenge, se pazarló.",
      },
      {
        title: "Esztétikus kivitel",
        text: "Rejtett vezetékezés, gondos falátvezetés, tiszta munkaterület – a végeredmény szép és rendezett.",
      },
      {
        title: "Energiatakarékos működés",
        text: "A helyesen telepített és beüzemelt klíma kevesebbet fogyaszt és tovább bírja.",
      },
      {
        title: "Garancia + számla",
        text: "Minden telepítésre jótállást és számlát adunk – a gyári garancia megőrzésével.",
      },
    ],
    includedTitle: "Mit tartalmaz a telepítés?",
    included: [
      "Helyszíni felmérés és típusajánlás",
      "Beltéri és kültéri egység felszerelése",
      "Réz cső- és elektromos vezetékezés",
      "Falátfúrás és kondenzvíz-elvezetés",
      "Vákuumozás és rendszerfeltöltés",
      "Beüzemelés, próbaüzem és betanítás",
    ],
    steps: [
      { title: "Felmérés", text: "Helyszíni vagy telefonos felmérés, a megfelelő hely és típus kiválasztása." },
      { title: "Árajánlat", text: "Átlátható, tételes árajánlat – rejtett költségek nélkül." },
      { title: "Telepítés", text: "Tiszta, precíz kivitelezés a megbeszélt időpontban." },
      { title: "Beüzemelés & átadás", text: "Próbaüzem, a működés bemutatása, számla és jótállás." },
    ],
    signalsTitle: "Ideális, ha…",
    signals: [
      "Új lakásba vagy házba költözik",
      "Nyáron elviselhetetlen a hőség egy-egy helyiségben",
      "Fűtésre is használná a klímát (hőszivattyús üzem)",
      "Több helyiséget hűtene egy multi-split rendszerrel",
    ],
    priceNote:
      "A telepítés ára a készülék típusától, a beltéri és kültéri egység távolságától, valamint a helyszíni adottságoktól függ. Felmérés után pontos, tételes árajánlatot adunk.",
    faqs: [
      {
        q: "Kell-e engedély a klíma telepítéséhez?",
        a: "Társasházban általában a közös képviselő / társasház hozzájárulása szükséges a kültéri egység elhelyezéséhez. Ebben is szívesen adunk tanácsot.",
      },
      {
        q: "Mennyi ideig tart egy telepítés?",
        a: "Egy átlagos split klíma felszerelése jellemzően néhány óra, a helyszíni adottságoktól függően.",
      },
      {
        q: "Vásároljam meg én a klímát, vagy Önök hozzák?",
        a: "Mindkettő működik. Segítünk a típusválasztásban, és ha kéri, a készülék beszerzését is intézzük. Ha máshol (áruházban, interneten) vásárolta a klímát, azt is szívesen felszereljük és beüzemeljük.",
      },
      {
        q: "A telepítés magában foglalja a beüzemelést is?",
        a: "Igen. A telepítés része a szakszerű beüzemelés: vákuumozás, a gyári előírás szerinti gáztöltés, szivárgás- és tömörségvizsgálat, majd hűtés-fűtés próbaüzem. A klímát üzemkész, kipróbált állapotban, számlával és jótállással adjuk át.",
      },
      {
        q: "Áthelyezik a meglévő klímámat, ha költözünk vagy átalakítunk?",
        a: "Igen. A már felszerelt klímát szakszerűen leszereljük, az új helyszínen újra felszereljük, majd vákuumozzuk, feltöltjük és szivárgásvizsgálattal ellenőrizzük – hogy az áthelyezett készülék is hibátlanul működjön.",
      },
    ],
  },
  {
    id: "karbantartas",
    title: "Karbantartás & tisztítás",
    short: "Higiénikus, hatékony működés",
    description:
      "Rendszeres karbantartás a hosszú élettartamért és a tiszta, egészséges levegőért. Fertőtlenítés és szűrőcsere egy menetben.",
    points: [
      "Klíma tisztítás és fertőtlenítés",
      "Szűrők ellenőrzése és cseréje",
      "Hűtőközeg-szint ellenőrzés",
      "Penész- és baktériummentesítés",
    ],
    icon: "maintain",
    accent: "#22D3EE",
    metaTitle: "Klíma karbantartás és tisztítás Kecskeméten | Kecskemét Klíma",
    heroKicker: "Karbantartás",
    heroLead:
      "A koszos klíma nem csak kellemetlen – egészségügyi kockázat is. A lepenészedett, elhanyagolt klíma baktériumot és penészspórát fúj a levegőbe, ráadásul sokkal többet fogyaszt. Professzionális klímatisztítás, fertőtlenítés és teljes átvizsgálás – szezon előtt kifejezetten ajánlott.",
    overviewTitle: "A klímatisztítás nem luxus – egészség és pénztárca kérdése",
    overview:
      "A klíma folyamatosan visszaforgatja a szoba levegőjét, a nedves párologtatón és a szűrőkben pedig ideális körülmények között por, penész, baktérium és gomba telepszik meg. Ha a klíma lepenészedik, ezeket a kórokozókat egyenesen a lakótérbe fújja – ami légúti panaszokat, allergiát, fejfájást és kellemetlen, dohos szagot okozhat. Ráadásul az eltömődött, koszos rendszernek sokkal többet kell dolgoznia ugyanazért a hűtésért, így jelentősen többet fogyaszt. A rendszeres, szakszerű klímatisztítás és fertőtlenítés mindkettőt megelőzi: a levegő újra friss és egészséges lesz, a klíma pedig kevesebb árammal, hatékonyan működik.",
    benefits: [
      { title: "Egészséges levegő, penész nélkül", text: "Penész-, gomba- és baktériummentesítés – különösen fontos allergiásoknak, légúti betegeknek és kisgyermekes családoknak." },
      { title: "Alacsonyabb áramszámla", text: "A lepenészedett, eltömődött klíma jóval többet fogyaszt. A tiszta rendszer ugyanazt a hűtést kevesebb árammal adja." },
      { title: "Hosszabb élettartam", text: "A rendszeres ápolás megelőzi a drága meghibásodásokat, és tovább élteti a klímát." },
      { title: "Vége a dohos szagnak", text: "Megszűnik a bekapcsoláskor érezhető penészes, savanyú szag – a klíma újra frissen fúj." },
    ],
    includedTitle: "Mit tartalmaz a karbantartás?",
    included: [
      "Beltéri egység tisztítása és fertőtlenítése",
      "Szűrők ellenőrzése, tisztítása vagy cseréje",
      "Párologtató és ventilátor átmosása",
      "Kondenzvíz-elvezetés ellenőrzése",
      "Hűtőközeg-szint és tömörség ellenőrzése",
      "Általános működés-ellenőrzés",
    ],
    steps: [
      { title: "Időpont", text: "Egyeztetünk egy Önnek megfelelő időpontot, lehetőleg szezon előtt." },
      { title: "Átvizsgálás", text: "Végigmegyünk a rendszeren és feltárjuk az esetleges problémákat." },
      { title: "Tisztítás & fertőtlenítés", text: "Mélytisztítás, szűrőkezelés és fertőtlenítés." },
      { title: "Ellenőrzés & átadás", text: "Próbaüzem, tanácsok a használathoz, számla." },
    ],
    signalsTitle: "Itt az ideje, ha…",
    signals: [
      "Bekapcsoláskor kellemetlen, dohos, penészes szagot érez",
      "Allergiás tüneteket, tüsszögést vagy légúti panaszt tapasztal, amikor megy a klíma",
      "Gyengébben hűt, mint korábban, vagy megnőtt a villanyszámla",
      "Több mint egy éve nem volt tisztítva a klíma",
      "Csöpög vagy folyik a beltéri egységből a víz",
    ],
    priceNote:
      "A karbantartás ára a készülék típusától és a rendszer állapotától függ. Több beltéri egységre kedvezményt adunk – kérjen ajánlatot!",
    faqs: [
      {
        q: "Tényleg egészségtelen lehet a koszos klíma?",
        a: "Igen. A klíma nedves, sötét belsejében penész, gomba és baktérium szaporodhat el, amit a készülék bekapcsoláskor a lakótérbe fúj. Ez allergiát, tüsszögést, légúti panaszokat, fejfájást és kellemetlen szagot okozhat – kisgyermekes és allergiás családoknál különösen fontos a rendszeres fertőtlenítés.",
      },
      {
        q: "Igaz, hogy a piszkos klíma többet fogyaszt?",
        a: "Igen. A lepenészedett szűrő és az eltömődött párologtató akadályozza a légáramlást, így a klímának sokkal többet kell dolgoznia ugyanazért a hűtésért – ez érezhetően megnöveli az áramfogyasztást. Egy alapos tisztítás sok esetben visszahozza az eredeti, gazdaságos működést.",
      },
      {
        q: "Milyen gyakran kell karbantartani a klímát?",
        a: "Évente legalább egyszer, ideálisan a hűtési szezon előtt (tavasszal). Intenzív használatnál évi kétszer is ajánlott.",
      },
      {
        q: "Elég, ha én kimosom a szűrőt?",
        a: "A szűrő rendszeres tisztítása hasznos, de a párologtató és a belső részek szakszerű mélytisztítását és fertőtlenítését csak megfelelő eszközökkel lehet elvégezni.",
      },
      {
        q: "Mennyi ideig tart a karbantartás?",
        a: "Egy beltéri egység átfogó tisztítása jellemzően 45–90 perc, a szennyezettségtől függően.",
      },
    ],
  },
  {
    id: "javitas",
    title: "Javítás & hibakeresés",
    short: "Gyors, pontos diagnosztika",
    description:
      "Nem hűt vagy furcsa hangot ad a klíma? Bármely márka hibáját feltárjuk és szakszerűen elhárítjuk – garanciával.",
    points: [
      "Minden márka hibakódjának diagnosztikája",
      "Hűtőközeg-utántöltés, szivárgás-keresés",
      "Alkatrészcsere garanciával",
      "Átlátható árajánlat munka előtt",
    ],
    icon: "repair",
    accent: "#6366F1",
    metaTitle: "Klíma javítás és hibakeresés Kecskeméten – minden márka | Kecskemét Klíma",
    heroKicker: "Javítás",
    heroLead:
      "Nem hűt a klíma, jégként áll a beltéri egység, csöpög vagy hibakódot ír ki? Pontos diagnosztikával és profi szivárgásvizsgálattal feltárjuk az okot, és szakszerűen elhárítjuk – bármely klímamárkán.",
    overviewTitle: "Megkeressük a hiba okát – nem csak a tünetet kezeljük",
    overview:
      "A hibakeresés nagy része két problémára vezethető vissza. Az egyik, amikor nem folyik le rendesen a kondenzvíz: az elvezető eltömődik, mert a klíma régóta nincs rendesen karbantartva, és a felgyűlt víz a beltéri egységből a falra vagy a padlóra csöpög. A másik, amikor lassan elszökik a hűtőközeg (a „gáz”) a rendszerből egy szivárgáson keresztül – ilyenkor a klíma egyre gyengébben, végül alig hűt. Emellett persze előfordul elektronikai hiba, eltömődött szűrő vagy elhasználódott alkatrész is. A szivárgást elektronikus szivárgásvizsgálattal és nyomáspróbával pontosan behatároljuk, mielőtt drágán, feleslegesen töltenénk fel a rendszert. Modern diagnosztikával, minőségi munkával megkeressük a valódi okot, elmagyarázzuk mi történt, és a javítás előtt átlátható árajánlatot adunk – hogy ne érje meglepetés.",
    benefits: [
      { title: "Precíz szivárgásvizsgálat", text: "Elektronikus szivárgáskeresés és nyomáspróba – megtaláljuk, hol szökik a hűtőközeg, nem csak utántöltünk." },
      { title: "Pontos diagnosztika", text: "Hibakód-olvasás és mérés alapján a valódi okot keressük meg, minden klímamárkán." },
      { title: "Ár a munka előtt", text: "A javítás megkezdése előtt tudja, mennyibe kerül – rejtett költség nélkül." },
      { title: "Garancia az alkatrészre", text: "A cserélt alkatrészekre és a munkára jótállást adunk." },
    ],
    includedTitle: "Mit tartalmaz a javítás?",
    included: [
      "Teljes körű hibafeltárás és hibakód-diagnosztika",
      "Szivárgásvizsgálat és tömörség-ellenőrzés",
      "Eldugult kondenzvíz-elvezetés átmosása, csöpögés megszüntetése",
      "Hűtőközeg-utántöltés a szivárgás megszüntetése után",
      "Elektromos és elektronikai ellenőrzés",
      "Alkatrészcsere (ventilátor, panel, érzékelők)",
      "Javítás utáni próbaüzem és ellenőrzés",
    ],
    steps: [
      { title: "Hibabejelentés", text: "Elmondja a tüneteket, mi pedig időpontot egyeztetünk." },
      { title: "Diagnosztika", text: "Helyszíni bevizsgálás, a hiba okának pontos behatárolása." },
      { title: "Árajánlat", text: "Átlátható ajánlat a javításra – döntés az Ön kezében." },
      { title: "Javítás & teszt", text: "Elvégezzük a javítást és próbaüzemmel ellenőrizzük." },
    ],
    signalsTitle: "Hívjon minket, ha a klíma…",
    signals: [
      "Nem hűt vagy nem fűt megfelelően",
      "Hűt ugyan, de nem eléggé – gyengült a hűtés az előző évekhez képest",
      "Vizet csöpög vagy folyik a beltéri egységből (eldugult kondenzvíz-elvezetés)",
      "Jeges, dér képződik a beltéri vagy kültéri egységen",
      "Szokatlan zajt, zörgést vagy búgást ad",
      "Hibakódot villog vagy magától kikapcsol",
      "Kellemetlen, égett vagy dohos szagot áraszt",
    ],
    priceNote:
      "A javítás ára a hiba jellegétől és a szükséges alkatrészektől függ. A kiszállás és a bevizsgálás után minden esetben előre közöljük a javítás árát.",
    faqs: [
      {
        q: "Bármely márkát javítanak?",
        a: "Igen, márkafüggetlenül dolgozunk – a legnépszerűbb gyártók (Daikin, Mitsubishi, Toshiba, Panasonic, LG, Samsung, Gree stb.) készülékeit is javítjuk.",
      },
      {
        q: "Miért nem hűt a klímám?",
        a: "Gyakori ok a hűtőközeg-hiány (szivárgás miatt), az eltömődött szűrő, vagy elektronikai hiba. Pontos okot a helyszíni diagnosztika mutat meg.",
      },
      {
        q: "Miért nem hűt eléggé a klíma?",
        a: "Ha a klíma megy, de nem hűt eléggé, annak leggyakoribb oka, hogy lassan elszivárgott a hűtőközeg egy része (kevés a „gáz”), vagy hogy az eltömődött, koszos szűrő és párologtató akadályozza a légáramlást. Emellett a rosszul (alul)méretezett készülék, a nyitva hagyott ajtók-ablakok vagy az erős napsütés is okozhatja. A helyszíni bevizsgálás és a nyomásmérés pontosan megmutatja, melyikről van szó – és a szivárgás megszüntetése után újra rendesen hűt.",
      },
      {
        q: "Miből tudom, hogy elfogyott / kevés a klíma gáza?",
        a: "Árulkodó jel, ha a klíma egyre gyengébben hűt, hosszabb ideig kell mennie ugyanahhoz a hőmérséklethez, dér vagy jég jelenik meg a beltéri egység csövein, sziszegő-bugyborékoló hangot ad, vagy hibakódot ír ki. Biztosat viszont csak nyomásméréssel lehet mondani. Fontos: a gáz nem „fogy el” magától – ha kevés, az szinte mindig szivárgást jelent, ezért utántöltés előtt mindig szivárgásvizsgálatot végzünk.",
      },
      {
        q: "Meg tudom-e javítani a klímát házilag?",
        a: "A szűrők kivétele és kimosása, illetve a beltéri egység elérhető felületeinek finom letörlése nyugodtan elvégezhető otthon – ez sokat segít. A hűtőközeggel járó munka (szivárgáskeresés, gáztöltés, vákuumozás) viszont zárt rendszert, F-gáz képesítést és speciális műszereket igényel, ezért jogszabály szerint is csak szakember végezheti. A kondenzvíz-elvezetés eldugulását szintén jobb szakemberre bízni, mert a nem megfelelő bontás kárt okozhat a készülékben.",
      },
      {
        q: "Mit tehetek, ha folyik / csöpög a beltéri egységből a kondenzvíz?",
        a: "A csöpögés legtöbbször azt jelenti, hogy eldugult a kondenzvíz-elvezető cső vagy a csepptálca – jellemzően algásodás, por és elmaradt karbantartás miatt. Első lépésként kapcsolja ki a klímát, hogy ne folyjon tovább a víz a falra vagy a bútorra. A szűrők kimosása néha segít, de a valódi megoldás az elvezető szakszerű átmosása/kitisztítása és a lejtés ellenőrzése. Ezt egy karbantartás keretében gyorsan megoldjuk, és utána nem csöpög tovább.",
      },
      {
        q: "Elszökött a gáz a klímából – elég csak utántölteni?",
        a: "Önmagában a hűtőközeg utántöltése csak tüneti kezelés: ha szivárog a rendszer, a gáz újra elszökik. Ezért először mindig szivárgásvizsgálatot végzünk (elektronikus szivárgáskeresés + nyomáspróba), megkeressük és megszüntetjük a szivárgás okát, és csak utána töltjük fel szabályosan – így tartós lesz a javítás.",
      },
      {
        q: "Megéri javítani, vagy inkább cseréljem?",
        a: "A bevizsgálás után őszintén megmondjuk. Ha a javítás nem gazdaságos, elmondjuk, és segítünk az új készülék kiválasztásában is.",
      },
    ],
  },
  {
    id: "beuzemeles",
    title: "Beüzemelés & szivárgáskezelés",
    short: "Szakszerű üzembe helyezés és tömörség",
    description:
      "Megvette vagy máshol vásárolta a klímát, esetleg költözésnél áthelyezné? Szakszerűen beüzemeljük: vákuumozás, gáztöltés, valamint alapos szivárgásvizsgálat és -kezelés a teljes rendszeren.",
    points: [
      "Vákuumozás és pontos gáztöltés",
      "Szivárgásvizsgálat és szivárgáskezelés",
      "Máshol vett vagy áthelyezett klíma beüzemelése",
      "Számla és jótállás minden munkára",
    ],
    icon: "commission",
    accent: "#2DD4BF",
    metaTitle: "Klíma beüzemelés és szivárgáskezelés Kecskeméten | Kecskemét Klíma",
    heroKicker: "Beüzemelés",
    heroLead:
      "Már megvan a klíma és a csövezés, máshol vásárolta, vagy költözésnél áthelyezné? Szakszerűen beüzemeljük: vákuumozás, pontos gáztöltés, tömörség- és működésteszt, és ha kell, szivárgásvizsgálat és -kezelés – hogy a rendszer hibátlanul és sokáig, minőségi munkával működjön.",
    overviewTitle: "A helyes beüzemelés és a tömör rendszer dönti el a klíma élettartamát",
    overview:
      "A beüzemelés nem csupán a bekapcsolás. A rendszer megfelelő vákuumozása, a pontos hűtőközeg-mennyiség és a tömörség ellenőrzése nélkül a klíma gyengén hűt, sokat fogyaszt, és idő előtt tönkremehet. A leggyakoribb rejtett hiba a szivárgás: ha a hűtőközeg lassan elszökik a rendszerből, a klíma egyre gyengébben hűt. Ezért a beüzemeléshez minden esetben szivárgásvizsgálat is tartozik – megkeressük és megszüntetjük a szivárgás okát, és csak tömör rendszert töltünk fel. Ugyanígy szakszerűen beüzemeljük a máshol vásárolt, vagy a költözésnél áthelyezett klímát is. Mindent szabályosan, mérésekkel dokumentálva, minőségi kivitelben végzünk el – itt nem érdemes kockáztatni.",
    benefits: [
      { title: "Szabályos vákuumozás", text: "A nedvesség és levegő eltávolítása a rendszerből – ez alapozza meg a hosszú élettartamot." },
      { title: "Pontos gáztöltés", text: "A gyári előírás szerinti hűtőközeg-mennyiség a hatékony hűtésért." },
      { title: "Szivárgásvizsgálat és -kezelés", text: "Elektronikus szivárgáskereséssel és nyomáspróbával megkeressük, hol szökik a hűtőközeg, és megszüntetjük a szivárgást – nem csak feltöltjük a rendszert." },
      { title: "Máshol vett & áthelyezett klíma", text: "A nem tőlünk vásárolt, vagy költözésnél áthelyezett készüléket is szakszerűen beüzemeljük és dokumentáljuk." },
    ],
    includedTitle: "Mit tartalmaz a beüzemelés?",
    included: [
      "A csatlakozások és a csövezés ellenőrzése",
      "Rendszer-vákuumozás",
      "Hűtőközeg-feltöltés / -kiegészítés",
      "Szivárgásvizsgálat és tömörség-ellenőrzés",
      "Szivárgás esetén a hiba behatárolása és kezelése",
      "Teljes működésteszt hűtés és fűtés módban",
      "Betanítás, számla és jótállás",
    ],
    steps: [
      { title: "Egyeztetés", text: "Átnézzük, milyen készülék és milyen csövezés van már kész, vagy honnan helyeznénk át a klímát." },
      { title: "Ellenőrzés", text: "Megvizsgáljuk a csatlakozásokat, a rendszer állapotát és a tömörséget." },
      { title: "Beüzemelés", text: "Vákuumozás, gáztöltés, szivárgásvizsgálat és működésteszt." },
      { title: "Átadás", text: "Bemutatjuk a működést, átadjuk a számlát és a jótállást." },
    ],
    signalsTitle: "Erre van szüksége, ha…",
    signals: [
      "Megvette a klímát, de telepítés/beüzemelés kell hozzá",
      "Máshol (pl. áruházban, interneten) vásárolta a klímát, és keres valakit, aki felszereli és beüzemeli",
      "Elkészült a csövezés, csak a szakszerű indítás hiányzik",
      "Költözésnél egy meglévő klímát kell leszerelni és új helyen újra beüzemelni (áthelyezés)",
      "Gyanítja, hogy szivárog a rendszer, vagy bizonytalan benne, hogy szabályosan lett-e feltöltve",
    ],
    priceNote:
      "A beüzemelés és a szivárgáskezelés ára a rendszer típusától és a helyszíni adottságoktól függ. Kérjen ajánlatot – a munka előtt pontos árat mondunk.",
    faqs: [
      {
        q: "Miért fontos a vákuumozás?",
        a: "A vákuumozás eltávolítja a nedvességet és a levegőt a rendszerből. Enélkül a hűtőközeg elszennyeződik, a klíma rosszul hűt és idő előtt meghibásodhat.",
      },
      {
        q: "Beüzemelik a máshol vagy általam vásárolt klímát is?",
        a: "Igen. Nem baj, ha nem tőlünk vette a készüléket – ha megvan a klíma és a szükséges kiépítés, szakszerűen felszereljük, beüzemeljük, elvégezzük a szivárgásvizsgálatot, és dokumentáljuk a munkát.",
      },
      {
        q: "Áthelyezik a meglévő, máshol felszerelt klímámat?",
        a: "Igen. Költözésnél vagy átalakításnál a már felszerelt klímát szakszerűen leszereljük, az új helyszínen újra felszereljük, majd vákuumozzuk, feltöltjük és szivárgásvizsgálattal ellenőrizzük – hogy az áthelyezett készülék is hibátlanul működjön.",
      },
      {
        q: "Mit jelent a szivárgáskezelés a beüzemelésnél?",
        a: "Mielőtt feltöltenénk a rendszert, elektronikus szivárgáskereséssel és nyomáspróbával ellenőrizzük a tömörséget. Ha szivárgást találunk, megkeressük és megszüntetjük az okát, és csak ezután töltjük fel szabályosan – így nem szökik el újra a drága hűtőközeg.",
      },
      {
        q: "Kapok jótállást a beüzemelésre?",
        a: "Természetesen. Minden elvégzett munkára számlát és jótállást adunk.",
      },
    ],
  },
];

export const stats = [
  { value: "500+", label: "Telepített és javított klíma" },
  { value: "4.8★", label: "Google értékelés" },
  { value: "15+", label: "Év szakmai tapasztalat" },
  { value: "30 km", label: "Kecskemét körzetében" },
];

export const differentiators = [
  {
    title: "Akár 10 év garancia",
    text: "Válasszon olyan prémium klímát, amelyre akár 10 év garanciát is adunk – hosszú távú nyugalom, nem csak egy szezonra.",
  },
  {
    title: "Garancia + számla",
    text: "Minden elvégzett munkára jótállást és számlát adunk – nálunk nincs rejtett költség.",
  },
  {
    title: "Gyors kiszállás",
    text: "Kecskeméten és 30 km-es körzetében rövid határidővel, megbízható időpontokkal szereljük a klímát.",
  },
  {
    title: "Átlátható ár",
    text: "A munka megkezdése előtt pontos, világos árajánlatot kap a klímára – meglepetések nélkül.",
  },
  {
    title: "Prémium, márkafüggetlen szerviz",
    text: "A legnépszerűbb prémium klímamárkák (Daikin, Mitsubishi, Gree, LG, Panasonic és társai) készülékeit telepítjük, karbantartjuk és javítjuk.",
  },
  {
    title: "Precíz szivárgásvizsgálat",
    text: "Elektronikus szivárgáskereséssel és nyomáspróbával megtaláljuk, hol szökik a hűtőközeg – nem csak utántöltünk, hanem megszüntetjük a szivárgás okát.",
  },
  {
    title: "Minőség, amivel nem kockáztat",
    text: "Egy klíma évekre szól – a hibás szereléssel a készülék és a fala bánja. Ne kockáztasson: válasszon tapasztalt, precíz szakembert, aki minőségi, dokumentált munkát ad.",
  },
  {
    title: "Tiszta, egészséges levegő",
    text: "Professzionális klímatisztítás és fertőtlenítés az allergénmentes, penészmentes, friss otthonért.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Kapcsolatfelvétel",
    text: "Hívjon vagy írjon – megbeszéljük az igényeit és időpontot egyeztetünk.",
  },
  {
    step: "02",
    title: "Felmérés & árajánlat",
    text: "Helyszíni felmérés után pontos, átlátható árajánlatot adunk.",
  },
  {
    step: "03",
    title: "Kivitelezés",
    text: "Szakszerű, tiszta munkavégzés a megbeszélt időpontban, precízen.",
  },
  {
    step: "04",
    title: "Átadás & garancia",
    text: "Bemutatjuk a működést, átadjuk a számlát és a jótállást.",
  },
];

export const brands = [
  "Daikin",
  "Mitsubishi Electric",
  "Toshiba",
  "Panasonic",
  "LG",
  "Samsung",
  "Gree",
  "Fujitsu",
  "Midea",
  "AUX",
  "Polár",
];

/**
 * Brand logos for the marquee / logo walls. The PNG-ket a public/brands
 * mappában tároljuk (világos háttéren jelennek meg, fehér csempén).
 */
export const brandLogos = [
  { name: "Daikin", src: "/brands/daikin.png" },
  { name: "Mitsubishi Electric", src: "/brands/mitsubishi.png" },
  { name: "Toshiba", src: "/brands/toshiba.png" },
  { name: "Panasonic", src: "/brands/panasonic.png" },
  { name: "LG", src: "/brands/lg.png" },
  { name: "Samsung", src: "/brands/samsung.png" },
  { name: "Gree", src: "/brands/gree.png" },
  { name: "Fujitsu", src: "/brands/fujitsu.png" },
  { name: "Midea", src: "/brands/midea.png" },
  { name: "AUX", src: "/brands/aux-brand.png" },
  { name: "Polár", src: "/brands/polar.png" },
] as const;

export const serviceAreas = [
  "Kecskemét",
  "Lajosmizse",
  "Kerekegyháza",
  "Helvécia",
  "Ballószög",
  "Nyárlőrinc",
  "Kiskunfélegyháza",
  "Városföld",
  "Kadafalva",
];

export const faqs = [
  {
    q: "Ingyenes a helyszíni felmérés?",
    a: "Igen, a helyszíni felmérés teljesen ingyenes és kötelezettségmentes. Kimegyünk, felmérjük a helyiséget és az adottságokat, majd pontos, tételes árajánlatot adunk a klímára – Önnek pedig semmilyen kötelezettsége nem keletkezik.",
  },
  {
    q: "Hány év garanciát adnak a klímára?",
    a: "A munkánkra minden esetben jótállást és számlát adunk. Emellett bizonyos prémium klímákra a gyártói feltételek teljesülése esetén akár 10 év garancia is igényelhető – a felmérésnél szívesen megmutatjuk, melyik típussal érhető el a leghosszabb garancia.",
  },
  {
    q: "Milyen klímamárkákkal dolgoznak?",
    a: "Márkafüggetlenek vagyunk: telepítjük, karbantartjuk és javítjuk a legnépszerűbb prémium klímamárkákat, többek között a Daikin, Mitsubishi Electric, Toshiba, Panasonic, LG, Samsung, Gree, Fujitsu, Midea, AUX és Polár készülékeket is.",
  },
  {
    q: "Mennyi ideig tart egy klíma telepítése?",
    a: "Egy átlagos split klíma szakszerű telepítése jellemzően néhány óra – a pontos idő a helyszíni adottságoktól és a cső­vezeték hosszától függ. Multi-split rendszereknél ez több is lehet. A felméréskor reális időpontot tudunk mondani.",
  },
  {
    q: "Mennyibe kerül egy klíma telepítése?",
    a: "Az ár a klíma típusától, a beltéri és kültéri egység távolságától és a helyszíni adottságoktól függ. Az ingyenes helyszíni vagy telefonos felmérés után pontos, átlátható árajánlatot adunk – a munka megkezdése előtt.",
  },
  {
    q: "Milyen gyakran kell karbantartani a klímát?",
    a: "Ajánlott évente legalább egyszer, a szezon előtt elvégeztetni a tisztítást és fertőtlenítést. Ez biztosítja a higiénikus levegőt, az alacsonyabb áramfogyasztást és a hosszú élettartamot.",
  },
  {
    q: "Bármely márkát javítanak?",
    a: "Igen, márkafüggetlenül dolgozunk. A legnépszerűbb gyártók (Daikin, Mitsubishi, Toshiba, Panasonic, LG, Samsung, Gree és mások) készülékeit telepítjük, karbantartjuk és javítjuk.",
  },
  {
    q: "Miért nem hűt eléggé a klíma?",
    a: "Ha a klíma megy, de nem hűt eléggé, annak leggyakoribb oka, hogy lassan elszivárgott a hűtőközeg egy része (kevés a „gáz”), vagy hogy az eltömődött, koszos szűrő és párologtató akadályozza a légáramlást. A helyszíni bevizsgálás és a nyomásmérés pontosan megmutatja az okot, a szivárgás megszüntetése után pedig újra rendesen hűt.",
  },
  {
    q: "Miből tudom, hogy elfogyott vagy kevés a klíma gáza?",
    a: "Árulkodó jel, ha a klíma egyre gyengébben hűt, dér vagy jég jelenik meg a beltéri egység csövein, sziszegő hangot ad, vagy hibakódot ír ki. Biztosat csak nyomásméréssel lehet mondani. A gáz nem fogy el magától – ha kevés, az szinte mindig szivárgást jelent, ezért utántöltés előtt mindig szivárgásvizsgálatot végzünk.",
  },
  {
    q: "Meg tudom-e javítani a klímát házilag?",
    a: "A szűrők kimosása és a beltéri egység letörlése nyugodtan elvégezhető otthon. A hűtőközeggel járó munka (szivárgáskeresés, gáztöltés, vákuumozás) viszont F-gáz képesítést és speciális műszereket igényel, ezért jogszabály szerint is csak szakember végezheti – ahogy az eldugult kondenzvíz-elvezetés szakszerű tisztítását is.",
  },
  {
    q: "Mit tehetek, ha folyik vagy csöpög a klímából a víz?",
    a: "A csöpögés legtöbbször eldugult kondenzvíz-elvezetést jelent (alga, por, elmaradt karbantartás miatt). Kapcsolja ki a klímát, hogy ne folyjon tovább a víz, majd hívjon minket: egy karbantartás keretében átmossuk az elvezetőt és a csepptálcát, ellenőrizzük a lejtést, és utána nem csöpög tovább.",
  },
  {
    q: "Felszerelik a máshol vásárolt klímát? Áthelyezik a meglévőt?",
    a: "Igen. Ha máshol (áruházban, interneten) vásárolta a készüléket, szívesen felszereljük és beüzemeljük. Költözésnél vagy átalakításnál a már felszerelt klímát is áthelyezzük: leszereljük, új helyen felszereljük, majd vákuumozzuk, feltöltjük és szivárgásvizsgálattal ellenőrizzük.",
  },
  {
    q: "Végeznek szivárgásvizsgálatot?",
    a: "Igen, ez a munkánk fontos része. Elektronikus szivárgáskereséssel és nyomáspróbával pontosan behatároljuk, hol szökik a hűtőközeg. Így nem feleslegesen töltjük fel a rendszert: előbb megszüntetjük a szivárgás okát, és csak tömör rendszert töltünk fel – így tartós a javítás.",
  },
  {
    q: "Ad garanciát és számlát a munkára?",
    a: "Természetesen. Minden elvégzett munkára jótállást és számlát biztosítunk – ez nálunk alapvető.",
  },
  {
    q: "Mennyi idő alatt tudnak kijönni?",
    a: "Kecskeméten és 30 km-es körzetében rövid határidővel vállaljuk a kiszállást. Hívjon a pontos időpontért!",
  },
];

// SAMPLE reviews — replace with the real Google értékelések before launch.
export const testimonials = [
  {
    quote:
      "Daikin split klímát szereltek fel a nappaliba. Zoltán pontosan, a megbeszélt időben érkezett, a rézcsövet szépen, rejtve vezette el a falban, és utána kitakarított maga után. Az előre adott árajánlathoz képest egy forinttal sem lett drágább.",
    name: "Kovács Zoltán",
    location: "Kecskemét, Széchenyiváros",
    initials: "KZ",
  },
  {
    quote:
      "Sokáig halogattam a klíma miatti falfúrást, teljesen feleslegesen. Reggel 8-ra jöttek, délre már ment a Mitsubishi a hálóban. Nem a legdrágábbat akarták rám sózni, hanem a szoba méretéhez ajánlottak típust.",
    name: "Nagy Andrea",
    location: "Kecskemét, Katonatelep",
    initials: "NA",
  },
  {
    quote:
      "Harmadik éve velük karbantartatom a két beltéri egységet. Mindig ők szólnak, mikor esedékes, a szűrő- és kondenzcső-tisztítás után érezhetően jobban hűt és nincs az a dohos szag. Végre egy szakember, akire lehet számítani.",
    name: "Szabó Péter",
    location: "Lajosmizse",
    initials: "SZP",
  },
  {
    quote:
      "A júliusi hőségben hívtam őket, és a nagy dömping ellenére két napon belül kijöttek. A magam vásárolta Gree klímát üzemelték be – levákuumozták, feltöltötték, és előttem tesztelték le a hűtést és a tömörséget. Számlát és jótállást is kaptam.",
    name: "Tóth Gábor",
    location: "Kerekegyháza",
    initials: "TG",
  },
  {
    quote:
      "A 8 éves klímánk csöpögött és büdös volt. Zoltán megtalálta, hogy eldugult a kondenzvíz-elvezető, kitisztította és lefertőtlenítette az egész beltérit. Nagyjából fél óra volt az egész, és teljesen korrekt árat kért érte.",
    name: "Kiss Mónika",
    location: "Kecskemét, Széchenyivárosi ltp.",
    initials: "KM",
  },
  {
    quote:
      "Multi-split rendszert kértünk három szobába, egy kültéri egységgel. Előtte kijött felmérni, mindent nyugodtan végigbeszéltünk, és a megbeszélt határidőre pontosan elkészült. Nem hagyott maga után koszt, a régi kartondobozokat is elvitte.",
    name: "Varga László",
    location: "Helvécia",
    initials: "VL",
  },
  {
    quote:
      "A klímánk hibakódot dobott, más cég csak hetek múlvára adott időpontot. Ők másnap kijöttek, kiderült, hogy csak egy érzékelő ment tönkre – kicserélték garanciával, nem akartak új gépet eladni. Ez a hozzáállás ma ritka.",
    name: "Fekete István",
    location: "Kecskemét, Műkertváros",
    initials: "FI",
  },
  {
    quote:
      "Panasonic klímát ajánlott a lakás mérete és a tájolás alapján, végig türelmesen elmagyarázta, miért azt. Az árajánlatban tételesen benne volt anyag és munkadíj, semmi rejtett költség. Azóta is halkan, tökéletesen működik.",
    name: "Balogh Krisztina",
    location: "Nagykőrös",
    initials: "BK",
  },
];

export const navLinks = [
  { href: "/szolgaltatasok/", label: "Szolgáltatások" },
  { href: "/klimak/", label: "Márkák" },
  { href: "/rolunk/", label: "Rólunk" },
  { href: "/hol-dolgozunk/", label: "Hol dolgozunk" },
  { href: "/gyik/", label: "GYIK" },
  { href: "/idopontfoglalas/", label: "Időpontfoglalás" },
  { href: "/kapcsolat/", label: "Kapcsolat" },
];
