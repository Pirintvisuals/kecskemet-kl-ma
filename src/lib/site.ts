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
      "Helyszíni felmérés és tanácsadás",
      "Esztétikus, rejtett vezetékezés",
      "Márkafüggetlen kivitelezés",
    ],
    icon: "install",
    accent: "#38BDF8",
    metaTitle: "Klíma telepítés Kecskeméten – split és multi-split | Kecskemét Klíma",
    heroKicker: "Telepítés",
    heroLead:
      "Új klíma felszerelése lakásba, házba és irodába – pontosan méretezve, esztétikusan, rejtett vezetékkel. A felméréstől a próbaüzemig egy szakember végzi.",
    overviewTitle: "Kulcsrakész telepítés, az első felméréstől a hűs levegőig",
    overview:
      "A jó klíma a helyes típusválasztással és a precíz telepítéssel kezdődik. Felmérjük a helyiséget, kiszámoljuk a szükséges hűtőteljesítményt, és segítünk kiválasztani az igényeihez illő készüléket. A felszerelést tisztán, a lakását óvva végezzük, a vezetékeket pedig a lehető legesztétikusabban, rejtve vezetjük.",
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
        a: "Mindkettő működik. Segítünk a típusválasztásban, és ha kéri, a készülék beszerzését is intézzük.",
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
      "Tiszta, egészséges levegő és alacsonyabb áramszámla. Professzionális tisztítás, fertőtlenítés és teljes átvizsgálás – szezon előtt ajánlott.",
    overviewTitle: "A klíma is megérdemel egy jó nagytakarítást",
    overview:
      "A klíma folyamatosan visszaforgatja a szoba levegőjét – a szűrőkben és a párologtatón por, penész és baktérium telepszik meg. Ez kellemetlen szagot, gyengébb hűtést és magasabb fogyasztást okoz. Rendszeres karbantartással mindezt megelőzzük, a levegő pedig újra friss és egészséges lesz.",
    benefits: [
      { title: "Egészséges levegő", text: "Penész- és baktériummentesítés – fontos allergiásoknak és kisgyermekes családoknak." },
      { title: "Alacsonyabb fogyasztás", text: "A tiszta rendszer hatékonyabban hűt, kevesebb árammal." },
      { title: "Hosszabb élettartam", text: "A rendszeres ápolás megelőzi a drága meghibásodásokat." },
      { title: "Kellemes, szagmentes lég", text: "Megszűnik a bekapcsoláskor érezhető dohos, savanyú szag." },
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
      "Bekapcsoláskor kellemetlen, dohos szagot érez",
      "Gyengébben hűt, mint korábban",
      "Több mint egy éve nem volt tisztítva",
      "Csöpög vagy folyik a beltéri egységből a víz",
    ],
    priceNote:
      "A karbantartás ára a készülék típusától és a rendszer állapotától függ. Több beltéri egységre kedvezményt adunk – kérjen ajánlatot!",
    faqs: [
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
      "Nem hűt, jégként áll a beltéri egység, csöpög vagy hibakódot ír ki? Pontos diagnosztikával feltárjuk az okot és szakszerűen elhárítjuk – bármely márkán.",
    overviewTitle: "Megkeressük a hiba okát – nem csak a tünetet kezeljük",
    overview:
      "A klímahibák mögött sokféle ok állhat: hűtőközeg-szivárgás, elektronikai hiba, eltömődött rendszer vagy elhasználódott alkatrész. Modern diagnosztikával pontosan behatároljuk a problémát, elmagyarázzuk mi történt, és a javítás előtt átlátható árajánlatot adunk – hogy ne érje meglepetés.",
    benefits: [
      { title: "Pontos diagnosztika", text: "Hibakód-olvasás és mérés alapján a valódi okot keressük meg." },
      { title: "Minden márka", text: "Márkafüggetlenül javítunk – Daikintől a Gree-ig." },
      { title: "Ár munka előtt", text: "A javítás megkezdése előtt tudja, mennyibe kerül." },
      { title: "Garancia az alkatrészre", text: "A cserélt alkatrészekre és a munkára jótállást adunk." },
    ],
    includedTitle: "Mit tartalmaz a javítás?",
    included: [
      "Teljes körű hibafeltárás és hibakód-diagnosztika",
      "Szivárgásvizsgálat és tömörség-ellenőrzés",
      "Hűtőközeg-utántöltés szükség szerint",
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
      "Jeges, dér képződik a beltéri vagy kültéri egységen",
      "Szokatlan zajt, zörgést vagy búgást ad",
      "Vizet csöpög a beltéri egységből",
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
        q: "Megéri javítani, vagy inkább cseréljem?",
        a: "A bevizsgálás után őszintén megmondjuk. Ha a javítás nem gazdaságos, elmondjuk, és segítünk az új készülék kiválasztásában is.",
      },
    ],
  },
  {
    id: "beuzemeles",
    title: "Beüzemelés & felülvizsgálat",
    short: "Szakszerű üzembe helyezés",
    description:
      "Megvette a klímát, de telepítés kell hozzá? Beüzemeljük, gáztöltést végzünk és leellenőrizzük a teljes rendszert.",
    points: [
      "Vákuumozás és gáztöltés",
      "Teljes rendszer-felülvizsgálat",
      "Működés- és tömörségi teszt",
      "Számla és jótállás minden munkára",
    ],
    icon: "commission",
    accent: "#2DD4BF",
    metaTitle: "Klíma beüzemelés és felülvizsgálat Kecskeméten | Kecskemét Klíma",
    heroKicker: "Beüzemelés",
    heroLead:
      "Már megvan a klíma és a csövezés? Szakszerűen beüzemeljük: vákuumozás, gáztöltés, tömörség- és működésteszt – hogy a rendszer hibátlanul és sokáig működjön.",
    overviewTitle: "A helyes beüzemelés dönti el a klíma élettartamát",
    overview:
      "A beüzemelés nem csupán a bekapcsolás. A rendszer megfelelő vákuumozása, a pontos hűtőközeg-mennyiség és a tömörség ellenőrzése nélkül a klíma gyengén hűt, sokat fogyaszt, és idő előtt tönkremehet. Mi mindent szabályosan, mérésekkel dokumentálva végzünk el.",
    benefits: [
      { title: "Szabályos vákuumozás", text: "A nedvesség és levegő eltávolítása a rendszerből – ez alapozza meg a hosszú élettartamot." },
      { title: "Pontos gáztöltés", text: "A gyári előírás szerinti hűtőközeg-mennyiség a hatékony hűtésért." },
      { title: "Tömörség-ellenőrzés", text: "Kiszűrjük a szivárgásokat, mielőtt gondot okoznának." },
      { title: "Dokumentált átadás", text: "Működésteszt, számla és jótállás – papíron is." },
    ],
    includedTitle: "Mit tartalmaz a beüzemelés?",
    included: [
      "A csatlakozások és a csövezés ellenőrzése",
      "Rendszer-vákuumozás",
      "Hűtőközeg-feltöltés / -kiegészítés",
      "Tömörségi (szivárgás-) vizsgálat",
      "Teljes működésteszt hűtés és fűtés módban",
      "Betanítás, számla és jótállás",
    ],
    steps: [
      { title: "Egyeztetés", text: "Átnézzük, milyen készülék és milyen csövezés van már kész." },
      { title: "Ellenőrzés", text: "Megvizsgáljuk a csatlakozásokat és a rendszer állapotát." },
      { title: "Beüzemelés", text: "Vákuumozás, gáztöltés, tömörség- és működésteszt." },
      { title: "Átadás", text: "Bemutatjuk a működést, átadjuk a számlát és a jótállást." },
    ],
    signalsTitle: "Erre van szüksége, ha…",
    signals: [
      "Megvette a klímát, de telepítés/beüzemelés kell hozzá",
      "Elkészült a csövezés, csak a szakszerű indítás hiányzik",
      "Költözésnél áthelyezett klímát kell újraindítani",
      "Bizonytalan benne, hogy a rendszer szabályosan lett feltöltve",
    ],
    priceNote:
      "A beüzemelés ára a rendszer típusától és a helyszíni adottságoktól függ. Kérjen ajánlatot – a munka előtt pontos árat mondunk.",
    faqs: [
      {
        q: "Miért fontos a vákuumozás?",
        a: "A vákuumozás eltávolítja a nedvességet és a levegőt a rendszerből. Enélkül a hűtőközeg elszennyeződik, a klíma rosszul hűt és idő előtt meghibásodhat.",
      },
      {
        q: "Beüzemelik a magam által vásárolt klímát is?",
        a: "Igen. Ha megvan a készülék és a szükséges kiépítés, szakszerűen beüzemeljük és dokumentáljuk a munkát.",
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
    title: "Garancia + számla",
    text: "Minden elvégzett munkára jótállást és számlát adunk – nálunk nincs rejtett költség.",
  },
  {
    title: "Gyors kiszállás",
    text: "Kecskeméten és 30 km-es körzetében rövid határidővel, megbízható időpontokkal dolgozunk.",
  },
  {
    title: "Átlátható ár",
    text: "A munka megkezdése előtt pontos, világos árajánlatot kap – meglepetések nélkül.",
  },
  {
    title: "Személyes felelősség",
    text: "„Személy szerint én állok a munkám mögött.” – Polyák Zoltán, klímaszerelő mester.",
  },
  {
    title: "Márkafüggetlen szerviz",
    text: "A legnépszerűbb gyártók készülékeit telepítjük, karbantartjuk és javítjuk.",
  },
  {
    title: "Tiszta, egészséges levegő",
    text: "Professzionális tisztítás és fertőtlenítés az allergénmentes, friss otthonért.",
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
  "Haier",
];

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
    q: "Mennyibe kerül egy klíma telepítése?",
    a: "Az ár a készülék típusától, a beltéri és kültéri egység távolságától és a helyszíni adottságoktól függ. Helyszíni vagy telefonos felmérés után pontos, átlátható árajánlatot adunk – a munka megkezdése előtt.",
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
      "Gyors és precíz munka. A klíma másnapra már működött, és minden tiszta maradt utána. Csak ajánlani tudom!",
    name: "Kovács Zoltán",
    location: "Kecskemét",
    initials: "KZ",
  },
  {
    quote:
      "Segítettek kiválasztani a lakásunkhoz illő megfelelő típust, korrekt áron. Az árajánlatban nem volt rejtett költség.",
    name: "Nagy Andrea",
    location: "Kecskemét",
    initials: "NA",
  },
  {
    quote:
      "Évek óta velük karbantartatom a klímámat. Megbízható, pontos és korrekt szakember – végre valaki, akire lehet számítani.",
    name: "Szabó Péter",
    location: "Lajosmizse",
    initials: "SZP",
  },
  {
    quote:
      "A nyári hőségben két napon belül kijöttek és beüzemelték a klímát. Profi, tiszta munka, korrekt áron.",
    name: "Tóth Gábor",
    location: "Kerekegyháza",
    initials: "TG",
  },
  {
    quote:
      "A régi klímánk folyton csöpögött – fél óra alatt megtalálta a hibát, azóta tökéletesen működik. Ajánlom mindenkinek!",
    name: "Kiss Mónika",
    location: "Kecskemét",
    initials: "KM",
  },
  {
    quote:
      "Multi-split rendszert telepítettek az egész házba. Végig egyeztettek velünk, minden határidőt tartottak.",
    name: "Varga László",
    location: "Helvécia",
    initials: "VL",
  },
];

export const navLinks = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/klimak/", label: "Márkák" },
  { href: "/rolunk/", label: "Rólunk" },
  { href: "/#terulet", label: "Hol dolgozunk" },
  { href: "/#gyik", label: "GYIK" },
  { href: "/kapcsolat/", label: "Kapcsolat" },
];
