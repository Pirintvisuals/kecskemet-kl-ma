/**
 * Brand catalogue for Kecskemét Klíma.
 *
 * IMPORTANT: The model series below are real product lines, but the
 * descriptions are intentionally qualitative (no invented specs). The client
 * (Polyák Zoltán) should confirm/adjust exactly which brands & models he
 * installs — then this list is trivial to extend to every brand.
 */

/** Rich, standalone detail page content for a single model. */
export type ModelDetail = {
  tagline: string;
  overview: string;
  highlights: { icon: string; title: string; text: string }[];
  bestFor: string[];
  specs: { label: string; value: string }[];
  faq?: { q: string; a: string }[];
};

export type BrandModel = {
  name: string;
  positioning: string;
  /** Optional bold one-liner takeaway ("Kinek jó") shown kiemelten. */
  summary?: string;
  description: string;
  features: string[];
  /** If present (with `detail`), the model gets its own subpage at /klimak/<brand>/<slug>/. */
  slug?: string;
  detail?: ModelDetail;
};

/** A highlighted product line shown in a rich, catalogue-style block. */
export type FeaturedSeries = {
  name: string; // e.g. "Comfort Pro"
  tagline: string; // short marketing headline
  intro: string; // 2–3 sentence description
  /** Real photo slot – drop the image path here when supplied. */
  image?: string;
  /** Capacity variants (kW). Room size is an approximate rule-of-thumb guide. */
  capacities: { power: string; model: string; room: string }[];
  /** Feature / technology blocks with an icon key (see techIcon map on the page). */
  technologies: { icon: string; title: string; text: string }[];
  /** Compact key–value spec strip. */
  specs: { label: string; value: string }[];
};

export type Brand = {
  slug: string;
  name: string;
  logo: string; // /brands/*.png
  accent: string;
  tagline: string;
  metaTitle: string;
  intro: string;
  strengths: string[];
  models: BrandModel[];
  /** Optional highlighted note (e.g. hosszú garancia) shown kiemelten. */
  highlight?: string;
  /** Optional rich showcase of one flagship series (currently Gree Comfort Pro). */
  featuredSeries?: FeaturedSeries;
  /** Optional real reference photos of this brand's installed units. */
  photos?: { src: string; alt: string }[];
  /** Optional embedded YouTube presentation video (id = the ?v= part). */
  video?: { id: string; title: string; text?: string };
  /** Optional in-depth explainer blocks (e.g. R32 hűtőközeg, H-tarifa). */
  infoSections?: { icon: string; title: string; lead: string; points: string[] }[];
  /** Optional brand-specific FAQ. */
  faq?: { q: string; a: string }[];
};

export const brandPages: Brand[] = [
  {
    slug: "daikin",
    name: "Daikin",
    logo: "/brands/daikin.png",
    accent: "#0A6CD4",
    tagline: "A klímatechnika japán etalonja",
    metaTitle: "Daikin klímák Kecskeméten – telepítés és szerviz | Kecskemét Klíma",
    intro:
      "A Daikin a világ egyik vezető klímagyártója, amely a megbízhatóságáról, halk működéséről és kimagasló energiahatékonyságáról ismert. A belépő szintű készülékektől a prémium, dizájnos modellekig minden igényre kínál megoldást – mi pedig szakszerűen telepítjük és karbantartjuk mindegyiket.",
    strengths: [
      "Kiváló energiahatékonyság, alacsony üzemeltetési költség",
      "Rendkívül halk beltéri egységek",
      "Hatékony fűtés hőszivattyús üzemben, télen is",
      "Széles kínálat a belépőtől a prémium dizájnig",
    ],
    models: [
      {
        name: "Sensira",
        positioning: "Belépőszint",
        summary: "Kedvező árú, megbízható belépő a Daikin világába.",
        description:
          "Inverteres kompresszor a gazdaságos üzemért, halk működés és a Daikin bevált minősége – a legkedvezőbb áron.",
        features: ["Kedvező ár", "Halk működés", "Inverteres", "Megbízható"],
        slug: "sensira",
        detail: {
          tagline: "A legkedvezőbb belépő a japán Daikin minőségbe",
          overview:
            "A Sensira a Daikin belépő modellje: kedvező árú, megbízható választás azoknak, akik jó ár-érték arányt keresnek. Inverteres kompresszorral gazdaságosan hűt és fűt, halkan üzemel, és a Daikin bevált minőségét adja a legkedvezőbb áron.",
          highlights: [
            { icon: "piggybank", title: "Kedvező ár", text: "A legjobb belépő a japán Daikin minőségbe." },
            { icon: "gauge", title: "Inverteres, gazdaságos", text: "Alacsony fogyasztás, kiszámítható üzem." },
            { icon: "volume", title: "Halk működés", text: "Csendes beltéri egység a mindennapokra." },
            { icon: "shield", title: "Daikin megbízhatóság", text: "A világ egyik vezető gyártójának minősége." },
          ],
          bestFor: ["Első klíma kedvező áron", "Lakás, hálószoba", "Aki bevált japán minőséget keres olcsón"],
          specs: [
            { label: "Kategória", value: "Belépőszint" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként (adapterrel)" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Comfora",
        positioning: "Kényelmi",
        summary: "Kiegyensúlyozott mindennapi komfort, WiFi-opcióval.",
        description:
          "Jó hatásfok, stabil hűtés-fűtés és csendes üzem, opcionális WiFi-vezérléssel.",
        features: ["Jó hatásfok", "WiFi opció", "Csendes", "Jó fűtés"],
        slug: "comfora",
        detail: {
          tagline: "Kiegyensúlyozott kényelmi modell jó hatásfokkal",
          overview:
            "A Comfora a Daikin kiegyensúlyozott kényelmi modellje: jó hatásfok, stabil hűtés és fűtés, csendes üzem és opcionális WiFi-vezérlés. Ideális választás, ha a megbízható mindennapi komfort és a jó ár a fontos.",
          highlights: [
            { icon: "gauge", title: "Jó hatásfok", text: "Gazdaságos, kiegyensúlyozott üzem egész évben." },
            { icon: "wifi", title: "WiFi opció", text: "A Daikin Onecta alkalmazással bővíthető vezérlés." },
            { icon: "volume", title: "Csendes üzem", text: "Halk működés nappaliba és hálószobába." },
            { icon: "flame", title: "Jó téli fűtés", text: "Megbízható hőszivattyús fűtés a hidegben is." },
          ],
          bestFor: ["Nappali, hálószoba", "Mindennapi kiegyensúlyozott komfort", "Aki jó ár-értéket keres"],
          specs: [
            { label: "Kategória", value: "Kényelmi" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként (adapterrel)" },
            { label: "Fűtés", value: "hőszivattyús üzem, jó teljesítmény" },
            { label: "Energiaosztály", value: "jó (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Perfera",
        positioning: "Prémium",
        summary: "Csúcs energiahatékonyság és erős téli fűtés.",
        description:
          "Csúcskategóriás hatásfok, erős fűtés alacsony hőmérsékleten is, beépített WiFi-vel és Flash Streamer légtisztítással.",
        features: ["Csúcs energiaosztály", "Erős fűtés télen", "Beépített WiFi", "Nagyon halk"],
        slug: "perfera",
        detail: {
          tagline: "A Daikin technológiai csúcsa – erős fűtés, beépített WiFi",
          overview:
            "A Perfera a Daikin prémium modellje: csúcskategóriás energiahatékonyság, kiváló fűtési teljesítmény alacsony külső hőmérsékleten is, beépített WiFi-vel és Flash Streamer légtisztítással. Kifinomult légterelés, nagyon halk üzem – a Daikin legjobbja a mindennapokra.",
          highlights: [
            { icon: "flame", title: "Erős fűtés télen", text: "Alacsony külső hőmérsékleten is hatékony hőszivattyús fűtés." },
            { icon: "gauge", title: "Csúcs energiaosztály", text: "Kiemelkedő hatásfok – gazdaságos üzem egész évben." },
            { icon: "sparkles", title: "Flash Streamer légtisztítás", text: "Lebontja a szagokat, allergéneket, szennyeződéseket." },
            { icon: "wifi", title: "Beépített WiFi", text: "Daikin Onecta app, okosotthon-integrációval." },
          ],
          bestFor: ["Klímafűtés fő vagy kiegészítő fűtésként", "Aki a legjobb hatásfokot keresi", "Egész éves prémium komfort"],
          specs: [
            { label: "Kategória", value: "Prémium" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Fűtés", value: "kiváló, alacsony hőmérsékleten is stabil" },
            { label: "Légtisztítás", value: "Flash Streamer" },
            { label: "Energiaosztály", value: "csúcskategóriás" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
          faq: [
            { q: "Jó a Perfera téli fűtésre?", a: "Igen, kifejezetten erős fűtésre optimalizált: alacsony külső hőmérsékleten is hatékonyan fűt hőszivattyús üzemben, magas energiaosztállyal." },
          ],
        },
      },
      {
        name: "Emura",
        positioning: "Dizájn ikon",
        summary: "A Daikin dizájn-zászlóshajója.",
        description:
          "Elegáns, fém hatású előlap prémium tudással: magas hatásfok, intelligens érzékelők és teljes okosvezérlés.",
        features: ["Prémium dizájn", "Érzékelős légterelés", "Halk", "Magas hatásfok"],
        slug: "emura",
        detail: {
          tagline: "Elegáns fém hatású előlap, prémium tudással",
          overview:
            "Az Emura a Daikin dizájn-zászlóshajója: elegáns, fém hatású előlap és letisztult formavilág. A prémium megjelenés mögött magas hatásfok, intelligens érzékelők, Flash Streamer légtisztítás és teljes okosvezérlés áll.",
          highlights: [
            { icon: "sparkles", title: "Prémium dizájn", text: "Fém hatású, elegáns előlap – dizájnelem a lakásban." },
            { icon: "thermometer", title: "Érzékelős légterelés", text: "Oda irányítja a levegőt, ahol valóban tartózkodik." },
            { icon: "volume", title: "Nagyon halk", text: "Kifinomult, csendes működés éjszaka is." },
            { icon: "wifi", title: "Teljes okosvezérlés", text: "Daikin Onecta app és okosotthon-integráció." },
          ],
          bestFor: ["Reprezentatív nappali", "Ahol a klíma dizájnelem is", "Igényes otthon"],
          specs: [
            { label: "Kategória", value: "Dizájn ikon" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Kivitel", value: "fém hatású, prémium előlap" },
            { label: "Energiaosztály", value: "magas (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Stylish",
        positioning: "Kompakt dizájn",
        summary: "Dizájnos prémium meglepően kis helyen.",
        description:
          "Vékony, modern forma kiváló légáramlással, intelligens érzékelőkkel és WiFi-vezérléssel, kompakt kültéri egységgel.",
        features: ["Kompakt forma", "Érzékelős", "WiFi vezérlés", "Magas hatásfok"],
        slug: "stylish",
        detail: {
          tagline: "Vékony, modern forma kiváló légáramlással",
          overview:
            "A Stylish vékony, modern formájú prémium modell kiváló légáramlással, intelligens érzékelőkkel és WiFi-vezérléssel. Kompakt kültéri egység, tiszta levegőt adó szűrés – prémium tudás egy meglepően kis helyen.",
          highlights: [
            { icon: "sparkles", title: "Kompakt dizájn", text: "Vékony, modern beltéri egység kis helyre is." },
            { icon: "wind", title: "Kiváló légáramlás", text: "Erős, egyenletes légterelés a kompakt méret ellenére." },
            { icon: "thermometer", title: "Intelligens érzékelők", text: "Célzott, energiatakarékos légterelés." },
            { icon: "wifi", title: "WiFi vezérlés", text: "Daikin Onecta app, bárhonnan irányítható." },
          ],
          bestFor: ["Kisebb helyiségek", "Ahol kompakt kültéri egység kell", "Dizájnigényes, kisebb terek"],
          specs: [
            { label: "Kategória", value: "Kompakt dizájn" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Kivitel", value: "vékony, kompakt beltéri és kültéri" },
            { label: "Energiaosztály", value: "magas (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
    ],
    video: {
      id: "fu3_vt14sKE",
      title: "Ismerje meg a Daikin Emura dizájnklímát",
      text: "A Daikin hivatalos termékvideója a dizájnról és a technológiáról. Kérdése van egy adott modellről? Hívjon, segítünk a választásban.",
    },
    infoSections: [
      {
        icon: "gauge",
        title: "Csúcskategóriás energiahatékonyság",
        lead: "Alacsony rezsi, környezetbarát üzem.",
        points: [
          "Környezetbarát R32 hűtőközeg",
          "Kiemelkedő energiahatékonyság a prémium modelleknél",
          "Inverteres kompresszor a gazdaságos üzemért",
        ],
      },
      {
        icon: "wind",
        title: "Coandă-effektus légterelés",
        lead: "Huzatmentes, egyenletes komfort.",
        points: [
          "A levegőt a plafon mentén tereli szét",
          "Nincs közvetlen, hideg légáram",
          "Egyenletes hőmérséklet az egész szobában",
        ],
      },
      {
        icon: "sparkles",
        title: "Flash Streamer légtisztítás",
        lead: "Tisztább beltéri levegő a prémium modelleknél.",
        points: [
          "Lebontja a szagokat és szennyeződéseket",
          "Allergéneket, penészt is kezel",
          "Frissebb levegő egész évben",
        ],
      },
      {
        icon: "wifi",
        title: "Daikin Onecta app + okosvezérlés",
        lead: "Vezérelje a klímát telefonról, bárhonnan.",
        points: [
          "Ki-be, hőmérséklet, időzítés az appból",
          "Okosotthon- és hangvezérlés-integráció",
          "Energiafogyasztás követése",
        ],
      },
      {
        icon: "volume",
        title: "Rendkívül halk üzem",
        lead: "Alig hallható működés éjszaka is.",
        points: [
          "Kiemelkedően csendes beltéri egység",
          "Halk kültéri működés",
          "Hálószobába, gyerekszobába is ideális",
        ],
      },
    ],
    faq: [
      { q: "Melyik Daikin modell a legjobb fűtésre?", a: "A Perfera kifejezetten erős fűtésre optimalizált: alacsony külső hőmérsékleten is hatékonyan fűt hőszivattyús üzemben. A pontos választást a felmérésen segítünk." },
      { q: "Vezérelhető a Daikin klíma telefonról?", a: "Igen, a Daikin Onecta alkalmazással a WiFi-s modellek bárhonnan vezérelhetők, és okosotthon-rendszerbe is integrálhatók." },
      { q: "Mi az a Flash Streamer?", a: "A Daikin saját légtisztító technológiája, amely lebontja a szagokat, allergéneket és szennyeződéseket – frissebb, tisztább beltéri levegőt adva." },
      { q: "Milyen hűtőközeggel működnek a Daikin klímák?", a: "A jelenlegi Daikin készülékek a környezetbarát R32 hűtőközeggel üzemelnek." },
      { q: "Mennyibe kerül egy Daikin klíma beszerelve?", a: "Az ár a modelltől, teljesítménytől és a beszerelés körülményeitől függ. Kérjen ingyenes felmérést és pontos árajánlatot – a kiszállás díjmentes." },
    ],
  },
  {
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    logo: "/brands/mitsubishi.png",
    accent: "#E0483B",
    tagline: "Prémium japán minőség, hosszú élettartam",
    metaTitle: "Mitsubishi Electric klímák Kecskeméten – telepítés | Kecskemét Klíma",
    intro:
      "A Mitsubishi Electric klímák a tartósságukról, precíz gyártásukról és kiemelkedően halk működésükről híresek. A gyártó a megbízhatóságot a fejlett légterelési és szűrési megoldásokkal ötvözi – ideális választás, ha hosszú távra tervez.",
    strengths: [
      "Kiemelkedő gyártási minőség és élettartam",
      "Nagyon halk, kifinomult működés",
      "Fejlett légterelés és szűrés",
      "Elegáns, dizájnos prémium modellek",
    ],
    models: [
      {
        name: "MSZ-HR",
        positioning: "Belépő modell",
        summary: "Japán minőség kedvező áron.",
        description:
          "Megbízható alapfelszereltség, inverteres gazdaságos üzem és a gyártó ismert tartóssága – jó minőségű belépő, ami sokáig szolgál.",
        features: ["Megbízható", "Kedvező ár", "Inverteres", "Halk"],
        slug: "msz-hr",
        detail: {
          tagline: "Megbízható belépő a Mitsubishi Electric minőségbe",
          overview:
            "Az MSZ-HR a Mitsubishi Electric belépő modellje: megbízható alapfelszereltség azoknak, akik a japán minőséget kedvező áron keresik. Inverteres, gazdaságos üzem és a gyártó ismert tartóssága – jó minőségű belépő, ami sokáig szolgál.",
          highlights: [
            { icon: "piggybank", title: "Kedvező ár", text: "Japán minőség a legkedvezőbb belépő szinten." },
            { icon: "shield", title: "Japán tartósság", text: "Precíz gyártás, hosszú, problémamentes élettartam." },
            { icon: "gauge", title: "Inverteres, gazdaságos", text: "Alacsony fogyasztás, kiszámítható üzem." },
            { icon: "volume", title: "Halk működés", text: "Csendes beltéri egység a mindennapokra." },
          ],
          bestFor: ["Első klíma megbízható minőséggel", "Lakás, hálószoba", "Aki tartós, halk klímát keres kedvező áron"],
          specs: [
            { label: "Kategória", value: "Belépő modell" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként (MELCloud)" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "MSZ-AY",
        positioning: "Kényelmi széria",
        summary: "Kiegyensúlyozott kényelem, jó téli fűtéssel.",
        description:
          "Kiegyensúlyozott hatásfok és komfort csendes üzemmel, jó fűtési teljesítménnyel és WiFi-vezérléssel.",
        features: ["Jó hatásfok", "Csendes", "WiFi opció", "Jó téli fűtés"],
        slug: "msz-ay",
        detail: {
          tagline: "A mindennapok megbízható kényelme, WiFi-vel",
          overview:
            "Az MSZ-AY kiegyensúlyozott hatásfokot és komfortot ad továbbfejlesztett működéssel, csendes üzemmel és jó fűtési teljesítménnyel. WiFi-vel vezérelhető, kifinomult légterelés – a mindennapok megbízható kényelme.",
          highlights: [
            { icon: "gauge", title: "Jó hatásfok", text: "Gazdaságos, kiegyensúlyozott üzem egész évben." },
            { icon: "volume", title: "Csendes üzem", text: "Halk működés nappaliba és hálószobába." },
            { icon: "wifi", title: "WiFi vezérlés", text: "MELCloud alkalmazás, bárhonnan irányítható." },
            { icon: "flame", title: "Jó téli fűtés", text: "Megbízható hőszivattyús fűtés a hidegben is." },
          ],
          bestFor: ["Nappali, hálószoba", "Mindennapi kiegyensúlyozott komfort", "Aki jó fűtési teljesítményt is vár"],
          specs: [
            { label: "Kategória", value: "Kényelmi széria" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "vezérelhető (MELCloud)" },
            { label: "Fűtés", value: "hőszivattyús, jó teljesítmény" },
            { label: "Energiaosztály", value: "jó (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "MSZ-LN Design",
        positioning: "Prémium dizájn",
        summary: "Ahol a klíma a lakberendezés része.",
        description:
          "Matt és fényes színekben elérhető dizájnmodell érzékelős légtereléssel, Plasma Quad Plus szűréssel és csúcs energiaosztállyal.",
        features: ["Dizájn színek", "Érzékelős légterelés", "Csúcs hatásfok", "Fejlett szűrés"],
        slug: "msz-ln",
        detail: {
          tagline: "Prémium dizájn színek, érzékelős légterelés, csúcs hatásfok",
          overview:
            "Az MSZ-LN Design a Mitsubishi Electric dizájn-zászlóshajója: matt és fényes színekben elérhető, érzékelővel vezérelt légtereléssel, Plasma Quad Plus szűréssel és csúcs energiaosztállyal. Ahol a klíma a lakberendezés része – prémium minőség és megjelenés együtt.",
          highlights: [
            { icon: "sparkles", title: "Prémium dizájn színek", text: "Matt és fényes kivitel, ami illeszkedik az otthonhoz." },
            { icon: "thermometer", title: "Érzékelős légterelés", text: "A 3D érzékelő oda irányítja a levegőt, ahol vagy." },
            { icon: "gauge", title: "Csúcs hatásfok", text: "Kiemelkedő energiaosztály, gazdaságos üzem." },
            { icon: "flame", title: "Erős fűtés", text: "Alacsony hőmérsékleten is stabil hőszivattyús fűtés." },
          ],
          bestFor: ["Reprezentatív nappali", "Ahol a klíma dizájnelem is", "Aki csúcstudást és megjelenést is akar"],
          specs: [
            { label: "Kategória", value: "Prémium dizájn" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített (MELCloud)" },
            { label: "Szűrés", value: "Plasma Quad Plus" },
            { label: "Energiaosztály", value: "csúcskategóriás" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
          faq: [
            { q: "Milyen színekben kapható az MSZ-LN?", a: "Matt és fényes kivitelben is elérhető, több színben, hogy dizájnelemként illeszkedjen az otthonához. A pontos elérhető színekben segítünk." },
          ],
        },
      },
      {
        name: "MSZ-EF Kirigamine Zen",
        positioning: "Dizájn prémium",
        summary: "Csendben, feltűnésmentesen a legjobb.",
        description:
          "Letisztult, lapos előlapú prémium modell, nagyon halk üzemmel, magas energiaosztállyal és precíz japán minőséggel.",
        features: ["Elegáns lapos forma", "Nagyon halk", "Magas energiaosztály", "Japán minőség"],
        slug: "msz-ef",
        detail: {
          tagline: "Letisztult, lapos prémium előlap, nagyon halk üzemmel",
          overview:
            "Az MSZ-EF Kirigamine Zen letisztult, lapos előlapú prémium modell, amely elegánsan illeszkedik a modern otthonokba. Nagyon halk üzem, magas energiaosztály és a Mitsubishi Electric precíz japán minősége – csendben, feltűnésmentesen a legjobb.",
          highlights: [
            { icon: "sparkles", title: "Elegáns lapos forma", text: "Letisztult előlap, ami észrevétlenül illeszkedik." },
            { icon: "volume", title: "Nagyon halk", text: "A piac egyik legcsendesebb beltéri egysége." },
            { icon: "gauge", title: "Magas energiaosztály", text: "Gazdaságos, kiemelkedő hatásfokú üzem." },
            { icon: "shield", title: "Japán minőség", text: "Precíz gyártás, hosszú élettartam." },
          ],
          bestFor: ["Modern, letisztult otthon", "Hálószoba, ahol a csend fontos", "Aki elegáns, feltűnésmentes prémiumot keres"],
          specs: [
            { label: "Kategória", value: "Dizájn prémium" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként (MELCloud)" },
            { label: "Kivitel", value: "lapos, elegáns előlap" },
            { label: "Energiaosztály", value: "magas (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
    ],
    video: {
      id: "jWfVjeJ3TNI",
      title: "Mitsubishi Electric Kirigamine – prémium japán klíma",
      text: "A Mitsubishi Electric hivatalos videója a Kirigamine dizájnszériáról és technológiáról. Kérdése van? Hívjon, segítünk a választásban.",
    },
    infoSections: [
      {
        icon: "shield",
        title: "Precíz japán minőség",
        lead: "Hosszú élettartam, kiszámítható működés.",
        points: [
          "Kiemelkedő gyártási minőség és tartósság",
          "Megbízható, sok éves problémamentes üzem",
          "Prémium anyagok, gondos összeszerelés",
        ],
      },
      {
        icon: "flame",
        title: "Erős téli fűtés",
        lead: "Hatékony hőszivattyús fűtés a hidegben is.",
        points: [
          "Alacsony külső hőmérsékleten is stabil",
          "Gyors felfűtés",
          "Klímafűtésre is kiválóan alkalmas",
        ],
      },
      {
        icon: "sparkles",
        title: "Plasma Quad Plus szűrés",
        lead: "Tisztább, egészségesebb beltéri levegő.",
        points: [
          "Port, pollent, baktériumot is megköt",
          "Allergiásoknak jó választás",
          "Frissebb levegő egész évben",
        ],
      },
      {
        icon: "thermometer",
        title: "3D i-see érzékelő",
        lead: "Érzékeli, hol tartózkodnak a lakók.",
        points: [
          "Célzott vagy kímélő légterelés",
          "Energiatakarékos, ha üres a szoba",
          "Egyenletes, huzatmentes hőérzet",
        ],
      },
      {
        icon: "wifi",
        title: "MELCloud okosvezérlés",
        lead: "Vezérelje a klímát telefonról, bárhonnan.",
        points: [
          "Ki-be, hőmérséklet, időzítés az appból",
          "Okosotthon-integráció",
          "Több egység egy alkalmazásban",
        ],
      },
    ],
    faq: [
      { q: "Miért prémium árú a Mitsubishi Electric?", a: "A magasabb ár a precíz japán gyártásból és a hosszú élettartamból fakad – cserébe az egyik legmegbízhatóbb és legcsendesebb klímát adja, hosszú távon kiszámítható üzemmel." },
      { q: "Alkalmas téli fűtésre?", a: "Igen, több modellje erős, alacsony külső hőmérsékleten is stabil fűtést ad hőszivattyús üzemben – klímafűtésre is kiválóan használható." },
      { q: "Vezérelhető telefonról?", a: "Igen, a MELCloud alkalmazással a WiFi-s modellek bárhonnan vezérelhetők, és okosotthon-rendszerbe is integrálhatók." },
      { q: "Mi az a Plasma Quad Plus?", a: "A Mitsubishi Electric fejlett légszűrő rendszere, amely port, pollent és baktériumokat is megköt – tisztább beltéri levegőért." },
      { q: "Mennyibe kerül beszerelve?", a: "Az ár a modelltől, teljesítménytől és a beszerelés körülményeitől függ. Kérjen ingyenes felmérést és pontos árajánlatot – a kiszállás díjmentes." },
    ],
  },
  {
    slug: "gree",
    name: "Gree",
    logo: "/brands/gree.png",
    accent: "#16A34A",
    tagline: "Kiváló ár-érték, erős fűtés – akár 10 év garanciával",
    metaTitle: "Gree klímák Kecskeméten – telepítés, szerviz, akár 10 év garancia | Kecskemét Klíma",
    highlight:
      "A Gree prémium klímákra – a gyártói regisztráció és a feltételek teljesülése esetén – akár 10 év garancia is igényelhető. Hosszú távú nyugalom, nem csak egy szezonra.",
    featuredSeries: {
      name: "Comfort Pro",
      tagline: "Stílusra tervezve",
      image: "/photos/klima-belteri-szoba.jpg",
      intro:
        "A Gree egyik legnépszerűbb lakossági szériája: téliesített kivitel, erős fűtés akár -25 °C-ig, gyárilag beépített WiFi-vezérlés és hideg plazma légtisztítás – kiváló ár-érték arányban. Ideális választás lakásba és házba, ha megbízható, energiatakarékos, egész évben használható klímát keres.",
      capacities: [
        { power: "2,7 kW", model: "GWH09ACCXB-K6DNA1G", room: "kb. 25 m²-ig" },
        { power: "3,5 kW", model: "GWH12ACCXD-K6DNA1D", room: "kb. 35 m²-ig" },
        { power: "5,3 kW", model: "GWH18ACDXF-K6DNA1D", room: "kb. 50 m²-ig" },
        { power: "7,1 kW", model: "GWH24ACEXF-K6DNA1A", room: "kb. 70 m²-ig" },
      ],
      technologies: [
        {
          icon: "wifi",
          title: "Gyári WiFi + okosvezérlés",
          text: "Beépített WiFi (2,4 GHz) és a GREE+ mobilapp – vezérelje bárhonnan. Google Home és Amazon Alexa hangvezérléssel is kompatibilis.",
        },
        {
          icon: "flame",
          title: "Erős fűtés akár -25 °C-ig",
          text: "Téliesített kivitel kompresszorház- és csepptálca-fűtéssel, így hőszivattyús üzemben a hidegebb téli napokon is hatékonyan fűt.",
        },
        {
          icon: "leaf",
          title: "Hideg plazma légtisztítás",
          text: "A Cold Plasma szűrő megköti a port, pollent és a szennyeződéseket – frissebb, tisztább beltéri levegő, allergiásoknak is jó választás.",
        },
        {
          icon: "wind",
          title: "3D légáramlás",
          text: "Automata fel-le és jobbra-balra lamellamozgás egyenletesen, huzatmentesen teríti szét a levegőt a teljes helyiségben.",
        },
        {
          icon: "thermometer",
          title: "I FEEL funkció",
          text: "A távirányítóba épített hőmérő alapján a klíma az Ön közelében mért hőmérséklethez igazítja a működést – ott legyen kellemes, ahol Ön van.",
        },
        {
          icon: "volume",
          title: "Extra halk üzem",
          text: "Kifejezetten csendes működésre tervezve – hálószobába és gyerekszobába is ideális, éjszaka sem zavaró.",
        },
      ],
      specs: [
        { label: "Energiaosztály", value: "akár A++" },
        { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
        { label: "Technológia", value: "inverteres" },
        { label: "Fűtés", value: "-25 °C külső hőmérsékletig" },
        { label: "WiFi", value: "gyárilag beépített (2,4 GHz)" },
        { label: "Fagyvédelem", value: "8 °C-os alapfűtés funkció" },
        { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
        { label: "H-tarifa", value: "igényelhető" },
      ],
    },
    intro:
      "A Gree a világ legnagyobb klímagyártója: kedvező árú, mégis kiválóan felszerelt modelljei miatt itthon is az egyik legnépszerűbb választás. Több modellje kimagasló hőszivattyús fűtést ad, így egész évben gazdaságos – mi pedig hivatalos szakszervizként a telepítéstől a garanciális ügyintézésig végig a partnerei maradunk.",
    strengths: [
      "Akár 10 év garancia a prémium Gree klímákra (a feltételek teljesülése esetén)",
      "Kiváló ár-érték arány – prémium tudás elérhető áron",
      "Erős fűtési teljesítmény hőszivattyús modelleknél, télen is",
      "Fejlett inverteres kompresszor, halk és energiatakarékos működés",
      "WiFi-vezérlés és okos funkciók a legtöbb modellnél",
      "Széles kínálat: belépőtől a prémium dizájn készülékekig",
    ],
    models: [
      {
        name: "Pular",
        positioning: "Népszerű kényelmi",
        summary: "Megbízható mindenes lakásba és házba.",
        description:
          "Erős hőszivattyús fűtés, beépített WiFi és halk, energiatakarékos inverter – R32 hűtőközeggel.",
        features: ["Beépített WiFi", "Erős téli fűtés", "Inverteres, R32", "Jó ár-érték"],
        slug: "pular",
        detail: {
          tagline: "A legnépszerűbb Gree mindenes – erős fűtés, gyári WiFi, kiváló ár-érték",
          overview:
            "A Pular az egyik legkedveltebb Gree modell Magyarországon, és nem véletlenül: mindent tud, amit egy otthoni klímától elvárhat, mégis kedvező áron. Modern inverteres kompresszorral halkan és energiatakarékosan hűt, hőszivattyús üzemben pedig a hidegebb napokon is erős fűtést ad. Gyárilag beépített WiFi-vel telefonról bárhonnan vezérelhető, és a környezetbarát R32 hűtőközeggel dolgozik – ideális első klíma lakásba és házba egyaránt.",
          highlights: [
            { icon: "wifi", title: "Gyári WiFi + GREE+ app", text: "Telefonról, a világ bármely pontjáról vezérelhető; Google Home és Alexa kompatibilis." },
            { icon: "flame", title: "Erős téli fűtés", text: "Hőszivattyús üzemben a hidegebb napokon is hatékonyan fűt – kiegészítheti vagy kiválthatja a fűtést." },
            { icon: "leaf", title: "R32 hűtőközeg", text: "Környezetbarát gáz, jobb energiahatékonyság, alacsonyabb üzemköltség." },
            { icon: "volume", title: "Halk, energiatakarékos", text: "Inverteres kompresszor – csendes működés és alacsony fogyasztás." },
          ],
          bestFor: [
            "Lakás vagy családi ház fő helyisége (nappali, hálószoba)",
            "Aki egyszerre keres jó hűtést és erős téli fűtést",
            "Aki megbízható, jó ár-értékű „mindenest” szeretne",
          ],
          specs: [
            { label: "Kategória", value: "Népszerű kényelmi" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Fűtés", value: "erős, hőszivattyús üzem" },
            { label: "Energiaosztály", value: "akár A++" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
          ],
          faq: [
            { q: "Alkalmas a Pular téli fűtésre?", a: "Igen. Hőszivattyús üzemben a hidegebb téli napokon is hatékonyan fűt, így a fűtési szezon nagy részében kiválthatja vagy kiegészítheti a hagyományos fűtést." },
            { q: "Vezérelhető telefonról?", a: "Igen, gyárilag beépített WiFi-vel a GREE+ ingyenes alkalmazásból bárhonnan irányítható, és okosotthon-rendszerbe is integrálható." },
          ],
        },
      },
      {
        name: "Fairy",
        positioning: "Modern dizájn",
        summary: "Ha a klíma megjelenése is számít.",
        description:
          "Letisztult, lapos előlap és kifejezetten halk üzem, beépített WiFi-vel – prémium hangulat prémium ár nélkül.",
        features: ["Dizájnos, lapos forma", "Beépített WiFi", "Halk, inverteres üzem", "Jó hatásfok"],
        slug: "fairy",
        detail: {
          tagline: "Letisztult dizájn és extra halk üzem – prémium hangulat prémium ár nélkül",
          overview:
            "A Fairy azoknak készült, akiknek a klíma megjelenése is fontos. Letisztult, lapos előlapja elegánsan illeszkedik a modern otthonokba, működése pedig kifejezetten halk – hálószobába és nappaliba egyaránt ideális. A dizájn mögött energiatakarékos inverteres technológia, jó fűtési teljesítmény és gyári WiFi áll, mindezt a prémium modelleknél kedvezőbb áron.",
          highlights: [
            { icon: "sparkles", title: "Letisztult dizájn", text: "Lapos, elegáns előlap, ami illeszkedik a modern otthon berendezéséhez." },
            { icon: "volume", title: "Extra halk üzem", text: "Kifejezetten csendes működés – hálószobába, gyerekszobába is ideális." },
            { icon: "wifi", title: "Gyári WiFi", text: "GREE+ alkalmazással bárhonnan vezérelhető, hangvezérléssel is." },
            { icon: "leaf", title: "Energiatakarékos, R32", text: "Inverteres, gazdaságos üzem környezetbarát hűtőközeggel." },
          ],
          bestFor: [
            "Nappali vagy hálószoba, ahol számít a megjelenés",
            "Aki halk, dizájnos klímát szeretne",
            "Aki prémium hangulatot keres, de nem prémium áron",
          ],
          specs: [
            { label: "Kategória", value: "Modern dizájn" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Üzem", value: "kifejezetten halk" },
            { label: "Energiaosztály", value: "akár A++" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
          ],
          faq: [
            { q: "Mennyire halk a Fairy?", a: "Kifejezetten csendes működésre tervezték, ezért hálószobába és gyerekszobába is jó választás – éjszaka sem zavaró." },
            { q: "Illik a modern lakásba?", a: "Igen, letisztult, lapos előlapja pont azért készült, hogy dizájnelemként illeszkedjen a modern otthonokba." },
          ],
        },
      },
      {
        name: "Amber",
        positioning: "Prémium hőszivattyú",
        summary: "Ha télen komolyan fűtene a klímával.",
        description:
          "Alacsony külső hőmérsékleten is stabil, erős fűtés magas energiaosztállyal – a Gree fűtési csúcsragadozója.",
        features: ["Kiváló téli fűtés", "Magas energiaosztály", "Beépített WiFi", "Prémium"],
        slug: "amber",
        detail: {
          tagline: "Fűtésre optimalizált prémium modell – a Gree csúcsragadozója télre",
          overview:
            "Az Amber a Gree fűtési zászlóshajója: kifejezetten arra tervezték, hogy alacsony külső hőmérsékleten is stabil, erős fűtést adjon. Ha a klímát télen komolyan használná fűtésre – akár a fő fűtési rendszer kiváltására vagy kiegészítésére –, ez a legjobb választás a kínálatból. Magas energiaosztály, gyári WiFi és a Gree teljes okostudása jár hozzá.",
          highlights: [
            { icon: "flame", title: "Kiváló téli fűtés", text: "Alacsony külső hőmérsékleten is stabil, erős fűtési teljesítmény." },
            { icon: "gauge", title: "Magas energiaosztály", text: "Csúcskategóriás hatásfok – gazdaságos üzem egész évben." },
            { icon: "wifi", title: "Gyári WiFi + okosvezérlés", text: "GREE+ app, Google Home és Alexa támogatással." },
            { icon: "shield", title: "Akár 10 év garancia", text: "Prémium modell – a feltételek teljesülése esetén hosszú garanciával." },
          ],
          bestFor: [
            "Klímafűtés fő vagy kiegészítő fűtésként",
            "Rosszabbul szigetelt vagy hidegebb helyiségek",
            "Aki télen is maximális fűtési teljesítményt vár",
          ],
          specs: [
            { label: "Kategória", value: "Prémium hőszivattyú" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Fűtés", value: "kiváló, alacsony hőmérsékleten is stabil" },
            { label: "Energiaosztály", value: "csúcskategóriás (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
          ],
          faq: [
            { q: "Kiválthatja az Amber a gázfűtést?", a: "Sok otthonban igen, vagy jelentősen kiegészítheti. Az Ambert kifejezetten erős, alacsony hőmérsékleten is stabil fűtésre tervezték – a pontos megtérülést a felmérésen mondjuk meg." },
            { q: "Miben több, mint az alapmodellek?", a: "Az Amber fűtésre optimalizált prémium modell: alacsony külső hőmérsékleten is erősebb, stabilabb fűtést ad, magasabb energiaosztállyal." },
          ],
        },
      },
      {
        name: "Comfort X",
        positioning: "Kiegyensúlyozott kényelmi",
        summary: "Kiváló belépő a prémium Gree világába.",
        description:
          "Kiegyensúlyozott hűtés-fűtés, inverteres R32-es működés és jó hatásfok, megfizethető áron.",
        features: ["Inverteres, R32", "WiFi-vezérelhető", "Jó energiaosztály", "Kedvező ár"],
        slug: "comfort-x",
        detail: {
          tagline: "Kiegyensúlyozott kényelmi modell – kiváló belépő a prémium Gree világába",
          overview:
            "A Comfort X a klasszikus Gree kényelmi széria: kiegyensúlyozott hűtés és fűtés, inverteres R32-es működés és jó energiahatékonyság megfizethető áron. Halk beltéri egység, WiFi-vezérelhetőség és bevált, megbízható technika – ideális első klíma, ha jó minőséget szeretne felár nélkül.",
          highlights: [
            { icon: "snowflake", title: "Kiegyensúlyozott hűtés-fűtés", text: "Stabil teljesítmény a mindennapokra, minden évszakban." },
            { icon: "leaf", title: "Inverteres, R32", text: "Gazdaságos üzem környezetbarát hűtőközeggel." },
            { icon: "wifi", title: "WiFi-vezérelhető", text: "GREE+ alkalmazással kényelmesen irányítható." },
            { icon: "piggybank", title: "Kedvező ár", text: "Prémium Gree tudás megfizethető belépő áron." },
          ],
          bestFor: [
            "Első klíma lakásba vagy házba",
            "Aki jó ár-érték arányt keres",
            "Mindennapi, kiegyensúlyozott komfort",
          ],
          specs: [
            { label: "Kategória", value: "Kiegyensúlyozott kényelmi" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "vezérelhető (opció)" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
          ],
          faq: [
            { q: "Jó első klímának?", a: "Igen, a Comfort X kifejezetten kiváló belépő: kiegyensúlyozott hűtés-fűtés, bevált technika és jó ár-érték arány – felesleges felár nélkül." },
          ],
        },
      },
      {
        name: "Bora",
        positioning: "Megbízható klasszikus",
        summary: "A jól bevált, problémamentes megoldás.",
        description:
          "Egyszerű, tartós, gazdaságos hűtés-fűtés, WiFi-vel bővíthető vezérléssel.",
        features: ["Gazdaságos", "Megbízható", "Inverteres", "WiFi opció"],
        slug: "bora",
        detail: {
          tagline: "Bevált, gazdaságos klasszikus – a problémamentes megoldás",
          overview:
            "A Bora annak készült, aki a jól bevált, egyszerű és megbízható megoldást keresi. Gazdaságos hűtést és fűtést nyújt kedvező áron, egyszerű, tartós felépítéssel és inverteres működéssel. WiFi-vel bővíthető vezérlés és R32 hűtőközeg – minden, ami a mindennapokhoz kell, felesleges bonyolítás nélkül.",
          highlights: [
            { icon: "gauge", title: "Gazdaságos üzem", text: "Inverteres technológia – alacsony fogyasztás, kiszámítható rezsi." },
            { icon: "shield", title: "Megbízható, tartós", text: "Egyszerű, bevált felépítés, hosszú élettartam." },
            { icon: "wifi", title: "WiFi-vel bővíthető", text: "Okosvezérlés a GREE+ alkalmazással, igény esetén." },
            { icon: "leaf", title: "R32 hűtőközeg", text: "Környezetbarát gáz, jó energiahatékonyság." },
          ],
          bestFor: [
            "Aki egyszerű, problémamentes klímát szeretne",
            "Másodlagos helyiségek, dolgozószoba",
            "Kedvező árú, megbízható alapfelszereltség",
          ],
          specs: [
            { label: "Kategória", value: "Megbízható klasszikus" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként bővíthető" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
          ],
        },
      },
      {
        name: "Lomo",
        positioning: "Kedvező belépő",
        summary: "A legkedvezőbb út egy jó minőségű klímához.",
        description:
          "Kedvező árú, inverteres belépő modell letisztult megjelenéssel és bevált Gree megbízhatósággal.",
        features: ["Kedvező ár", "Inverteres", "Egyszerű", "Megbízható"],
        slug: "lomo",
        detail: {
          tagline: "Kedvező belépő modell – a legjobb út egy jó minőségű klímához",
          overview:
            "A Lomo a legkedvezőbb belépő a Gree világába: egyszerű, megbízható modell azoknak, akiknek a jó alapfunkciók és a kedvező ár a legfontosabb. Inverteres kompresszorral gazdaságosan üzemel, letisztult megjelenésű, és mögötte ott a Gree bevált megbízhatósága – jó minőség a legkedvezőbb áron.",
          highlights: [
            { icon: "piggybank", title: "Legkedvezőbb ár", text: "A legjobb belépő egy jó minőségű klímához." },
            { icon: "gauge", title: "Inverteres, gazdaságos", text: "Alacsony fogyasztás, kiszámítható üzem." },
            { icon: "snowflake", title: "Jó alapfunkciók", text: "Mindent tud, ami a mindennapi komforthoz kell." },
            { icon: "shield", title: "Bevált Gree megbízhatóság", text: "A világ legnagyobb klímagyártójának minősége." },
          ],
          bestFor: [
            "Kisebb helyiségek, hálószoba",
            "Aki a legkedvezőbb áron szeretne klímát",
            "Első klíma szűkebb büdzsével",
          ],
          specs: [
            { label: "Kategória", value: "Kedvező belépő" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként bővíthető" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
          ],
        },
      },
      {
        name: "Clivia",
        positioning: "Prémium dizájn",
        summary: "Ha a klíma dizájnelem is a lakásban.",
        description:
          "Fém hatású, exkluzív előlap, csúcskategóriás anyaghasználat és erős teljesítmény – a Gree dizájn-zászlóshajója.",
        features: ["Prémium fém dizájn", "Erős teljesítmény", "Csúcs energiaosztály", "Okosvezérlés WiFi-vel"],
        slug: "clivia",
        detail: {
          tagline: "Fém hatású prémium dizájn erős teljesítménnyel – a Gree zászlóshajója",
          overview:
            "A Clivia a Gree kínálatának dizájn-zászlóshajója: exkluzív, fém hatású előlap, csúcskategóriás anyaghasználat és erős teljesítmény egyben. Kifinomult, halk működés, magas energiaosztály és teljes okosvezérlés WiFi-n keresztül – ha a klíma egyben dizájnelem is a lakásban, ez a legjobb választás.",
          highlights: [
            { icon: "sparkles", title: "Prémium fém dizájn", text: "Exkluzív, fém hatású előlap – dizájnelem a lakásban." },
            { icon: "gauge", title: "Erős teljesítmény", text: "Csúcskategóriás hűtés-fűtés, magas energiaosztállyal." },
            { icon: "wifi", title: "Teljes okosvezérlés", text: "GREE+ app, Google Home és Alexa támogatással." },
            { icon: "shield", title: "Akár 10 év garancia", text: "Prémium modell, hosszú távú nyugalommal." },
          ],
          bestFor: [
            "Reprezentatív nappali, ahol számít a megjelenés",
            "Aki prémium dizájnt és erős tudást keres egyben",
            "Igényes otthon, ahol a klíma is lakberendezési elem",
          ],
          specs: [
            { label: "Kategória", value: "Prémium dizájn" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Kivitel", value: "fém hatású, exkluzív előlap" },
            { label: "Energiaosztály", value: "csúcskategóriás (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "a feltételek teljesülése esetén akár 10 év" },
          ],
        },
      },
    ],
    video: {
      id: "uNRCooqHTes",
      title: "Ismerje meg a Gree klímákat működés közben",
      text: "A gyártó bemutatóvideója a Gree technológiáról és a lakossági szériákról. Ha kérdése van egy adott modellel kapcsolatban, hívjon – készséggel segítünk a választásban.",
    },
    infoSections: [
      {
        icon: "leaf",
        title: "Környezetbarát R32 hűtőközeg",
        lead: "Jövőálló, környezetbarát gáz – kevesebb terhelés, jobb hatásfok.",
        points: [
          "Nincs ózonkárosító hatása (ODP = 0)",
          "GWP 675 – az R410a 2088-as értékének harmada",
          "Hatékonyabb hőátadás, jobb energiahatékonyság",
        ],
      },
      {
        icon: "piggybank",
        title: "H-tarifa: télen akár feleannyi rezsi",
        lead: "Kedvezményes fűtési áram a fűtési szezonra.",
        points: [
          "Akár 50% megtakarítás a fűtési áram költségén",
          "Október 15. – április 15. között érvényes",
          "Az igénylésben és ügyintézésben segítünk",
        ],
      },
      {
        icon: "wifi",
        title: "GREE+ okosalkalmazás és hangvezérlés",
        lead: "Vezérelje a klímát telefonról, bárhonnan a világon.",
        points: [
          "Ingyenes GREE+ app: ki-be, hőmérséklet, időzítés",
          "Google Home és Amazon Alexa kompatibilis",
          "Akár hangparanccsal is irányítható",
        ],
      },
      {
        icon: "globe",
        title: "A világ legnagyobb klímagyártója",
        lead: "Stabil, kiszámítható minőség kedvező áron.",
        points: [
          "Évente több tízmillió legyártott készülék",
          "Számos más ismert márkának is beszállítója",
          "Saját fejlesztésű inverteres kompresszorok",
        ],
      },
      {
        icon: "shield",
        title: "Akár 10 év garancia",
        lead: "Nyugalom hosszú távra, nem csak egy szezonra.",
        points: [
          "Gyártói regisztráció + feltételek teljesülése esetén",
          "Hivatalos szakszervizként mi intézzük",
          "Beszereléstől a karbantartásig végig Ön mellett",
        ],
      },
      {
        icon: "thermometer",
        title: "I FEEL komfortérzékelés",
        lead: "Ott legyen kellemes, ahol Ön van – nem a fal mellett.",
        points: [
          "A távirányítóba épített hőmérő méri a hőmérsékletet",
          "A klíma az Ön közelében mért értékhez igazít",
          "Egyenletes, huzatmentes hőérzet",
        ],
      },
    ],
    faq: [
      {
        q: "Alkalmas-e a Gree klíma téli fűtésre?",
        a:
          "Igen. A téliesített modellek kompresszorház- és csepptálca-fűtéssel készülnek, így hőszivattyús üzemben akár -25 °C-os külső hőmérsékletig is hatékonyan fűtenek. A fűtési szezon nagy részében kiválthatják vagy kiegészíthetik a hagyományos fűtést.",
      },
      {
        q: "Tényleg igényelhető 10 év garancia?",
        a:
          "A prémium Gree modellekre a gyártói regisztráció elvégzése és a feltételek – például a rendszeres szakszervizes karbantartás – teljesülése esetén akár 10 év garancia is igényelhető. Ebben teljes körűen segítünk.",
      },
      {
        q: "Mi az a H-tarifa, és mennyit spórolhatok vele?",
        a:
          "A H-tarifa egy kedvezményes elektromos áramtarifa fűtési célra. A megfelelő, feltételeknek megfelelő Gree modellekkel október 15. és április 15. között akár 50%-kal is csökkenthető a fűtésre fordított áram költsége.",
      },
      {
        q: "Vezérelhető a Gree klíma telefonról?",
        a:
          "Igen. A WiFi-s modellek az ingyenes GREE+ alkalmazással a világ bármely pontjáról vezérelhetők, és Google Home vagy Amazon Alexa okosotthon-rendszerbe is integrálhatók.",
      },
      {
        q: "Milyen hűtőközeggel működnek a Gree klímák?",
        a:
          "A jelenlegi Gree készülékek a környezetbarát, ózonbarát (ODP = 0) R32 hűtőközeggel üzemelnek, amelynek a globális felmelegedési potenciálja is jóval alacsonyabb a korábbi R410a gázénál.",
      },
      {
        q: "Mennyibe kerül egy Gree klíma beszerelve?",
        a:
          "Az ár a kiválasztott modelltől, a szükséges teljesítménytől és a beszerelés körülményeitől függ. Kérjen ingyenes helyszíni felmérést és pontos árajánlatot – a kiszállás és a felmérés díjmentes.",
      },
    ],
  },
  {
    slug: "lg",
    name: "LG",
    logo: "/brands/lg.png",
    accent: "#C2185B",
    tagline: "Dual Inverter technológia, halk működés",
    metaTitle: "LG klímák Kecskeméten – telepítés és szerviz | Kecskemét Klíma",
    intro:
      "Az LG klímák a Dual Inverter kompresszoruknak köszönhetően csendesek, energiatakarékosak és gyorsan elérik a kívánt hőmérsékletet. A kínálat a kiváló ár-értékű alapmodellektől a dizájnos prémium készülékekig terjed.",
    strengths: [
      "Dual Inverter – csendes és energiatakarékos",
      "Gyors hűtés és fűtés",
      "Tartós, jó minőségű kompresszor",
      "Dizájnos prémium modellek (Artcool)",
    ],
    models: [
      {
        name: "Standard Plus",
        positioning: "Kiváló ár-érték",
        summary: "Népszerű, csendes, jó ár-értékű alapmodell.",
        description:
          "Dual Inverter kompresszor – csendes, gazdaságos, megbízható. Gyors hűtés, WiFi-vezérlés, tartós LG minőség kedvező áron.",
        features: ["Dual Inverter", "Csendes", "WiFi", "Jó ár-érték"],
        slug: "standard-plus",
        detail: {
          tagline: "Dual Inverter kompresszor kedvező áron",
          overview:
            "Az LG Standard Plus népszerű alapmodell Dual Inverter kompresszorral: csendes, gazdaságos, megbízható. Gyorsan eléri a kívánt hőmérsékletet, WiFi-vel vezérelhető, és tartós LG minőséget ad kedvező áron.",
          highlights: [
            { icon: "gauge", title: "Dual Inverter", text: "Csendes, energiatakarékos, gyors hűtés – akár 10 év kompresszor garancia." },
            { icon: "volume", title: "Csendes üzem", text: "Halk működés nappaliba és hálószobába." },
            { icon: "wifi", title: "WiFi vezérlés", text: "LG ThinQ alkalmazás, bárhonnan irányítható." },
            { icon: "piggybank", title: "Jó ár-érték", text: "Tartós LG minőség kedvező belépő áron." },
          ],
          bestFor: ["Első klíma jó ár-értékkel", "Lakás, nappali, hálószoba", "Aki csendes, gazdaságos klímát keres"],
          specs: [
            { label: "Kategória", value: "Kiváló ár-érték" },
            { label: "Technológia", value: "Dual Inverter" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített (ThinQ)" },
            { label: "Kompresszor garancia", value: "akár 10 év (gyártói feltételek szerint)" },
            { label: "Energiaosztály", value: "jó (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Silence",
        positioning: "Halk működés",
        summary: "A nyugalom bajnoka – hálószobába ideális.",
        description:
          "Extra csendes üzemre optimalizált Dual Inverter modell, energiatakarékos működéssel és beépített WiFi-vel.",
        features: ["Extra halk", "Dual Inverter", "Energiatakarékos", "WiFi"],
        slug: "silence",
        detail: {
          tagline: "Extra halk üzem Dual Inverterrel",
          overview:
            "Az LG Silence extra csendes üzemre optimalizált modell azoknak, akiknek a nyugalom a legfontosabb – hálószobába, gyerekszobába ideális. Dual Inverter kompresszor, energiatakarékos működés és beépített WiFi.",
          highlights: [
            { icon: "volume", title: "Extra halk", text: "Kifejezetten csendes üzem – éjszaka sem zavaró." },
            { icon: "gauge", title: "Energiatakarékos", text: "Dual Inverter kompresszor – alacsony fogyasztás." },
            { icon: "wifi", title: "Beépített WiFi", text: "LG ThinQ alkalmazás, bárhonnan irányítható." },
            { icon: "snowflake", title: "Gyors hűtés", text: "Gyorsan eléri a kívánt hőmérsékletet." },
          ],
          bestFor: ["Hálószoba, gyerekszoba", "Ahol a csend a legfontosabb", "Aki halk, gazdaságos klímát keres"],
          specs: [
            { label: "Kategória", value: "Halk működés" },
            { label: "Technológia", value: "Dual Inverter" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített (ThinQ)" },
            { label: "Üzem", value: "extra halk" },
            { label: "Kompresszor garancia", value: "akár 10 év (gyártói feltételek szerint)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Artcool",
        positioning: "Dizájn",
        summary: "Dizájn és Dual Inverter tudás egyben.",
        description:
          "Prémium megjelenésű dizájnmodell Dual Inverter teljesítménnyel, magas hatásfokkal és teljes okosvezérléssel.",
        features: ["Prémium dizájn", "Dual Inverter", "WiFi", "Magas hatásfok"],
        slug: "artcool",
        detail: {
          tagline: "Prémium dizájnmodell teljes okosvezérléssel",
          overview:
            "Az LG Artcool prémium megjelenésű dizájnmodell, amely stílusos elemként illeszkedik a lakásba. A látvány mögött Dual Inverter teljesítmény, magas hatásfok és teljes okosvezérlés áll – dizájn és tudás egyben.",
          highlights: [
            { icon: "sparkles", title: "Prémium dizájn", text: "Stílusos elem, ami illeszkedik a lakás berendezéséhez." },
            { icon: "gauge", title: "Dual Inverter", text: "Magas hatásfok, csendes, tartós működés." },
            { icon: "wifi", title: "Teljes okosvezérlés", text: "LG ThinQ app és okosotthon-integráció." },
            { icon: "snowflake", title: "Gyors hűtés", text: "Gyorsan eléri a kívánt hőmérsékletet." },
          ],
          bestFor: ["Reprezentatív nappali", "Ahol a klíma dizájnelem is", "Aki dizájnt és tudást is akar"],
          specs: [
            { label: "Kategória", value: "Dizájn" },
            { label: "Technológia", value: "Dual Inverter" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített (ThinQ)" },
            { label: "Kivitel", value: "prémium dizájn előlap" },
            { label: "Kompresszor garancia", value: "akár 10 év (gyártói feltételek szerint)" },
            { label: "Energiaosztály", value: "magas (akár A++)" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Dualcool Premium",
        positioning: "Prémium teljesítmény",
        summary: "Csúcskategóriás LG erős fűtéssel, tiszta levegővel.",
        description:
          "Erős hűtés-fűtés prémium felszereltséggel és tisztább levegőt adó megoldásokkal, alacsony hőmérsékleten is hatékony fűtéssel.",
        features: ["Erős teljesítmény", "Erős téli fűtés", "Prémium", "Tiszta levegő"],
        slug: "dualcool-premium",
        detail: {
          tagline: "Erős hűtés-fűtés, tisztább levegő, prémium felszereltség",
          overview:
            "Az LG Dualcool Premium erős hűtési és fűtési teljesítményt ad prémium felszereltséggel és tisztább levegőt adó megoldásokkal. Alacsony hőmérsékleten is hatékonyan fűt, halk és energiatakarékos – csúcskategóriás LG a mindennapokra.",
          highlights: [
            { icon: "flame", title: "Erős téli fűtés", text: "Alacsony külső hőmérsékleten is hatékony fűtés." },
            { icon: "gauge", title: "Dual Inverter, csúcs hatásfok", text: "Erős teljesítmény, gazdaságos üzem." },
            { icon: "sparkles", title: "Tisztább levegő", text: "Ionizátoros/légtisztító megoldások a prémium modellben." },
            { icon: "wifi", title: "Okosvezérlés", text: "LG ThinQ app, bárhonnan irányítható." },
          ],
          bestFor: ["Klímafűtés fő vagy kiegészítő fűtésként", "Nagyobb terek", "Aki csúcstudást és tiszta levegőt akar"],
          specs: [
            { label: "Kategória", value: "Prémium teljesítmény" },
            { label: "Technológia", value: "Dual Inverter" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített (ThinQ)" },
            { label: "Fűtés", value: "erős, alacsony hőmérsékleten is stabil" },
            { label: "Kompresszor garancia", value: "akár 10 év (gyártói feltételek szerint)" },
            { label: "Energiaosztály", value: "csúcskategóriás" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
          faq: [
            { q: "Jó a Dualcool Premium téli fűtésre?", a: "Igen, erős, alacsony külső hőmérsékleten is stabil fűtést ad hőszivattyús üzemben – klímafűtésre is kiválóan használható." },
          ],
        },
      },
    ],
    video: {
      id: "eD1eVl8pv74",
      title: "LG DUALCOOL – intelligens hűtés Dual Inverterrel",
      text: "Az LG hivatalos videója a DUALCOOL szériáról és a Dual Inverter technológiáról. Kérdése van? Hívjon, segítünk a választásban.",
    },
    infoSections: [
      {
        icon: "gauge",
        title: "Dual Inverter kompresszor",
        lead: "Csendes, energiatakarékos, tartós.",
        points: [
          "Akár 10 év garancia a kompresszorra (gyártói feltételek szerint)",
          "Jelentős energiamegtakarítás az inverter nélküli klímákhoz képest",
          "Gyors hűtés és gyors felfűtés",
        ],
      },
      {
        icon: "volume",
        title: "Halk működés",
        lead: "Kifejezetten csendes üzem.",
        points: [
          "Alacsony zajszintre optimalizált beltéri egység",
          "A Silence modell extra halk",
          "Hálószobába, gyerekszobába is ideális",
        ],
      },
      {
        icon: "sparkles",
        title: "Tisztább beltéri levegő",
        lead: "Légtisztító megoldások a prémium modelleknél.",
        points: [
          "Megköti a port és szennyeződéseket",
          "Frissebb, egészségesebb levegő",
          "Allergiásoknak is jó választás",
        ],
      },
      {
        icon: "wifi",
        title: "LG ThinQ okosvezérlés",
        lead: "Vezérelje a klímát telefonról, bárhonnan.",
        points: [
          "Ki-be, hőmérséklet, időzítés az appból",
          "Okosotthon- és hangvezérlés-integráció",
          "Energiafogyasztás követése",
        ],
      },
      {
        icon: "flame",
        title: "Hatékony téli fűtés",
        lead: "Gazdaságos hőszivattyús fűtés a hidegben.",
        points: [
          "Alacsony külső hőmérsékleten is működik",
          "Gyors felfűtés",
          "A prémium modellek erős fűtésre optimalizáltak",
        ],
      },
    ],
    faq: [
      { q: "Igaz, hogy 10 év garancia van a kompresszorra?", a: "Igen, az LG a Dual Inverter kompresszorra akár 10 év garanciát ad (a gyártói feltételek szerint) – ez a technológia tartósságát jelzi. A készülék többi részére a gyártói jótállás vonatkozik." },
      { q: "Mit jelent a Dual Inverter?", a: "Az LG saját kompresszortechnológiája, amely a hőmérséklethez igazítja a fordulatszámot – így csendesebb, energiatakarékosabb, és gyorsabban éri el a kívánt hőmérsékletet." },
      { q: "Melyik LG a legcsendesebb?", a: "A Silence modell kifejezetten extra halk üzemre optimalizált – hálószobába, gyerekszobába ideális." },
      { q: "Vezérelhető telefonról?", a: "Igen, az LG ThinQ alkalmazással a WiFi-s modellek bárhonnan vezérelhetők, és okosotthon-rendszerbe is integrálhatók." },
      { q: "Mennyibe kerül beszerelve?", a: "Az ár a modelltől, teljesítménytől és a beszerelés körülményeitől függ. Kérjen ingyenes felmérést és pontos árajánlatot – a kiszállás díjmentes." },
    ],
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    logo: "/brands/panasonic.png",
    accent: "#4F46E5",
    tagline: "Tiszta levegő nanoe™ technológiával",
    metaTitle: "Panasonic klímák Kecskeméten – telepítés és szerviz | Kecskemét Klíma",
    intro:
      "A Panasonic klímák megbízhatóságukról és a levegőtisztító megoldásaikról ismertek. A prémium modellek nanoe™ X technológiája segít frissebb, tisztább beltéri levegőt biztosítani – ideális allergiásoknak és egészségtudatos családoknak.",
    strengths: [
      "nanoe™ X levegőtisztítás a prémium modelleknél",
      "Megbízható, tartós működés",
      "Jó energiahatékonyság",
      "Kiegyensúlyozott ár-érték kínálat",
    ],
    models: [
      {
        name: "TZ Compact",
        positioning: "Kedvező belépő",
        summary: "A Panasonic minősége elérhető áron.",
        description:
          "Jó ár-értékű, megbízható belépő inverteres működéssel, halk üzemmel és WiFi-vel bővíthető vezérléssel.",
        features: ["Jó ár-érték", "Inverteres", "Megbízható", "WiFi opció"],
        slug: "tz-compact",
        detail: {
          tagline: "Jó ár-értékű, megbízható belépő",
          overview:
            "A Panasonic TZ Compact jó ár-értékű, megbízható belépő modell a mindennapi hűtéshez és fűtéshez. Inverteres, gazdaságos üzem, halk működés és WiFi-vel bővíthető vezérlés – a Panasonic minősége elérhető áron.",
          highlights: [
            { icon: "piggybank", title: "Jó ár-érték", text: "A Panasonic bevált minősége kedvező belépő áron." },
            { icon: "gauge", title: "Inverteres, gazdaságos", text: "Alacsony fogyasztás, kiszámítható üzem." },
            { icon: "volume", title: "Halk működés", text: "Csendes beltéri egység a mindennapokra." },
            { icon: "wifi", title: "WiFi opció", text: "Comfort Cloud alkalmazással bővíthető vezérlés." },
          ],
          bestFor: ["Első klíma kedvező áron", "Lakás, hálószoba", "Aki megbízható belépőt keres"],
          specs: [
            { label: "Kategória", value: "Kedvező belépő" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként (Comfort Cloud)" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Etherea (Z)",
        positioning: "Prémium, tiszta levegő",
        summary: "Prémium csúcs nanoe™ X légtisztítással.",
        description:
          "Prémium modell nanoe™ X levegőtisztítással, csúcs energiaosztállyal, nagyon halk üzemmel és elegáns, lapos megjelenéssel.",
        features: ["nanoe™ X légtisztítás", "Csúcs hatásfok", "Nagyon halk", "Elegáns dizájn"],
        slug: "etherea",
        detail: {
          tagline: "Tiszta levegő, csúcs hatásfok, elegáns dizájn",
          overview:
            "A Panasonic Etherea (Z) prémium modell nanoe™ X levegőtisztítással, amely frissebb, tisztább beltéri levegőt ad – ideális allergiásoknak. Csúcs energiaosztály, nagyon halk üzem és elegáns, lapos megjelenés.",
          highlights: [
            { icon: "sparkles", title: "nanoe™ X légtisztítás", text: "Folyamatosan tisztább, egészségesebb beltéri levegő." },
            { icon: "gauge", title: "Csúcs hatásfok", text: "Kiemelkedő energiaosztály, gazdaságos üzem." },
            { icon: "volume", title: "Nagyon halk", text: "Kifinomult, csendes működés éjszaka is." },
            { icon: "wind", title: "Aerowings légterelés", text: "Pontos, huzatmentes légáram a szobában." },
          ],
          bestFor: ["Allergiás vagy egészségtudatos családok", "Reprezentatív nappali, hálószoba", "Aki tiszta levegőt és csúcstudást akar"],
          specs: [
            { label: "Kategória", value: "Prémium, tiszta levegő" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített (Comfort Cloud)" },
            { label: "Légtisztítás", value: "nanoe™ X" },
            { label: "Energiaosztály", value: "csúcskategóriás" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
          faq: [
            { q: "Miért jó allergiásoknak az Etherea?", a: "A nanoe™ X légtisztítás folyamatosan semlegesíti a szagokat, és kezeli az allergéneket, baktériumokat, penészt – tisztább, egészségesebb beltéri levegőt adva." },
          ],
        },
      },
      {
        name: "PZ",
        positioning: "Kényelmi széria",
        summary: "Megbízható középkategória, jó fűtéssel.",
        description:
          "Kiegyensúlyozott középkategóriás modell csendes, energiatakarékos működéssel, jó fűtéssel és WiFi-vezérléssel.",
        features: ["Kiegyensúlyozott", "Csendes", "WiFi opció", "Jó fűtés"],
        slug: "pz",
        detail: {
          tagline: "Kiegyensúlyozott ár és tudás",
          overview:
            "A Panasonic PZ kiegyensúlyozott középkategóriás modell, amely jó egyensúlyt teremt az ár és a tudás között. Csendes, energiatakarékos működés, jó fűtési teljesítmény és WiFi-vezérelhetőség – a megbízható középkategória.",
          highlights: [
            { icon: "gauge", title: "Jó hatásfok", text: "Gazdaságos, kiegyensúlyozott üzem egész évben." },
            { icon: "volume", title: "Csendes üzem", text: "Halk működés nappaliba és hálószobába." },
            { icon: "wifi", title: "WiFi vezérlés", text: "Comfort Cloud alkalmazás, bárhonnan irányítható." },
            { icon: "flame", title: "Jó téli fűtés", text: "Megbízható hőszivattyús fűtés a hidegben is." },
          ],
          bestFor: ["Nappali, hálószoba", "Aki jó ár-tudás egyensúlyt keres", "Mindennapi megbízható komfort"],
          specs: [
            { label: "Kategória", value: "Kényelmi széria" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "vezérelhető (Comfort Cloud)" },
            { label: "Fűtés", value: "hőszivattyús, jó teljesítmény" },
            { label: "Energiaosztály", value: "jó (akár A++)" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
    ],
    video: {
      id: "wufrW8NXEFs",
      title: "Panasonic Etherea – nanoe™ X légtisztítás",
      text: "A Panasonic hivatalos videója az Etherea szériáról és a nanoe™ X levegőtisztító technológiáról. Kérdése van? Hívjon, segítünk a választásban.",
    },
    infoSections: [
      {
        icon: "sparkles",
        title: "nanoe™ X légtisztítás",
        lead: "Folyamatosan tisztább beltéri levegő.",
        points: [
          "Semlegesíti a szagokat és allergéneket",
          "Baktériumokat, penészt is kezel",
          "Akkor is működik, ha a klíma nem hűt vagy fűt",
        ],
      },
      {
        icon: "wind",
        title: "Aerowings kettős légterelő",
        lead: "Pontos, huzatmentes légáram.",
        points: [
          "Két külön mozgó lamella",
          "A levegőt oda irányítja, ahová kell",
          "Nincs közvetlen hideg légáram",
        ],
      },
      {
        icon: "thermometer",
        title: "Okos, energiatakarékos érzékelés",
        lead: "Automatikusan spórol, ha nincs terhelés.",
        points: [
          "Érzékeli a mozgást és a napfényt",
          "Visszaszabályoz, ha üres a szoba",
          "Alacsonyabb rezsi",
        ],
      },
      {
        icon: "wifi",
        title: "Comfort Cloud okosvezérlés",
        lead: "Vezérelje a klímát telefonról, bárhonnan.",
        points: [
          "Ki-be, hőmérséklet, időzítés az appból",
          "Okosotthon-integráció",
          "Több egység egy alkalmazásban",
        ],
      },
      {
        icon: "leaf",
        title: "R32 + jó hatásfok",
        lead: "Környezetbarát, gazdaságos üzem.",
        points: [
          "Környezetbarát R32 hűtőközeg",
          "Inverteres kompresszor a gazdaságos üzemért",
          "Alacsony üzemköltség",
        ],
      },
    ],
    faq: [
      { q: "Mi az a nanoe™ X?", a: "A Panasonic szabadalmaztatott légtisztító technológiája, amely hidroxil-gyököket használva folyamatosan tisztítja a levegőt: semlegesíti a szagokat, kezeli a baktériumokat, allergéneket, penészt – akkor is, ha a klíma épp nem hűt vagy fűt." },
      { q: "Jó a Panasonic allergiásoknak?", a: "Igen, a nanoe™ X-es modellek kifejezetten ajánlottak allergiásoknak és egészségtudatos családoknak a tisztább beltéri levegő miatt." },
      { q: "Vezérelhető telefonról?", a: "Igen, a Panasonic Comfort Cloud alkalmazással a WiFi-s modellek bárhonnan vezérelhetők, és okosotthon-rendszerbe is integrálhatók." },
      { q: "Melyik a legjobb Panasonic modell?", a: "Az Etherea (Z) a prémium csúcs: nanoe™ X légtisztítás, csúcs energiaosztály és nagyon halk üzem. A pontos választást a felmérésen segítjük." },
      { q: "Mennyibe kerül beszerelve?", a: "Az ár a modelltől, teljesítménytől és a beszerelés körülményeitől függ. Kérjen ingyenes felmérést és pontos árajánlatot – a kiszállás díjmentes." },
    ],
  },
  {
    slug: "aux",
    name: "AUX",
    logo: "/brands/aux-brand.png",
    accent: "#0EA5E9",
    tagline: "Okos klímák verhetetlen ár-érték aránnyal",
    metaTitle: "AUX klímák Kecskeméten – telepítés és szerviz | Kecskemét Klíma",
    intro:
      "Az AUX a világ egyik legnagyobb klímagyártója, amely számos ismert márkának is beszállítója. Saját készülékei kifejezetten kedvező áron kínálnak modern, inverteres technológiát, WiFi-vezérlést és megbízható hűtés-fűtés teljesítményt – ideális választás, ha jó ár-értékű, okos klímát keres.",
    strengths: [
      "Kimagasló ár-érték arány",
      "Modern inverteres technológia, energiatakarékos üzem",
      "WiFi-vezérlés és okos funkciók több modellnél",
      "Megbízható hűtés és fűtés hőszivattyús üzemben",
    ],
    models: [
      {
        name: "Q-Smart Plus",
        positioning: "Népszerű okos modell",
        summary: "Verhetetlen ár-értékű okosklíma.",
        description:
          "Beépített WiFi, jó hatásfok, inverteres R32-es működés és megbízható hűtés-fűtés hőszivattyús üzemben – kedvező áron.",
        features: ["Beépített WiFi", "Inverteres, R32", "Jó hatásfok", "Kedvező ár"],
        slug: "q-smart-plus",
        detail: {
          tagline: "Beépített WiFi, jó hatásfok, kedvező ár",
          overview:
            "Az AUX Q-Smart Plus kedvező árú, jól felszerelt modell beépített WiFi-vel és jó hatásfokkal. Inverteres, R32-es működés, megbízható hűtés-fűtés hőszivattyús üzemben, verhetetlen ár-érték aránnyal – a mindennapi kényelemért.",
          highlights: [
            { icon: "wifi", title: "Beépített WiFi", text: "Okostelefonról, ingyenes alkalmazással vezérelhető." },
            { icon: "leaf", title: "Inverteres, R32", text: "Környezetbarát hűtőközeg, gazdaságos üzem." },
            { icon: "gauge", title: "Jó hatásfok", text: "Energiatakarékos működés, alacsony rezsi." },
            { icon: "piggybank", title: "Kedvező ár", text: "Modern felszereltség verhetetlen ár-érték aránnyal." },
          ],
          bestFor: ["Első okosklíma kedvező áron", "Lakás, nappali, hálószoba", "Aki modern felszereltséget akar olcsón"],
          specs: [
            { label: "Kategória", value: "Népszerű okos modell" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Freedom",
        positioning: "Kényelmi széria",
        summary: "Kiegyensúlyozott komfort, jó téli fűtéssel.",
        description:
          "Kiegyensúlyozott hűtés-fűtés megbízható inverteres működéssel, csendes üzemmel és WiFi-vel bővíthető okosvezérléssel.",
        features: ["Inverter", "Csendes", "Jó téli fűtés", "WiFi opció"],
        slug: "freedom",
        detail: {
          tagline: "Megbízható kényelem, WiFi-vel bővíthető",
          overview:
            "Az AUX Freedom kiegyensúlyozott hűtés-fűtést ad megbízható inverteres működéssel és csendes üzemmel. Jó fűtési teljesítmény télen is, WiFi-vel bővíthető okosvezérlés – kényelmes és gazdaságos a mindennapokra.",
          highlights: [
            { icon: "gauge", title: "Inverteres, gazdaságos", text: "Alacsony fogyasztás, kiszámítható üzem." },
            { icon: "volume", title: "Csendes üzem", text: "Halk működés nappaliba és hálószobába." },
            { icon: "flame", title: "Jó téli fűtés", text: "Megbízható hőszivattyús fűtés a hidegben is." },
            { icon: "wifi", title: "WiFi opció", text: "Okosvezérléssel bővíthető, bárhonnan irányítható." },
          ],
          bestFor: ["Nappali, hálószoba", "Mindennapi kiegyensúlyozott komfort", "Aki jó téli fűtést is vár"],
          specs: [
            { label: "Kategória", value: "Kényelmi széria" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként bővíthető" },
            { label: "Fűtés", value: "hőszivattyús, jó teljesítmény" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "J-Smart",
        positioning: "Dizájn kényelem",
        summary: "Dizájnos okosklíma, ami nem terheli a pénztárcát.",
        description:
          "Letisztult megjelenés, okos vezérlés és jó energiaosztály elérhető áron, halk üzemmel és beépített WiFi-vel.",
        features: ["Dizájnos", "Okos vezérlés, WiFi", "Energiatakarékos", "Halk"],
        slug: "j-smart",
        detail: {
          tagline: "Letisztult dizájn, okos vezérlés, jó energiaosztály",
          overview:
            "Az AUX J-Smart letisztult megjelenést, okos vezérlést és jó energiaosztályt ad egy elérhető árú készülékben. Halk, energiatakarékos üzem és beépített WiFi – dizájnos okosklíma, ami nem terheli meg a pénztárcát.",
          highlights: [
            { icon: "sparkles", title: "Dizájnos megjelenés", text: "Letisztult előlap, ami illeszkedik a modern otthonhoz." },
            { icon: "wifi", title: "Okos vezérlés, WiFi", text: "Beépített WiFi, telefonról bárhonnan irányítható." },
            { icon: "gauge", title: "Energiatakarékos", text: "Jó energiaosztály, gazdaságos üzem." },
            { icon: "volume", title: "Halk működés", text: "Csendes beltéri egység a mindennapokra." },
          ],
          bestFor: ["Ahol a megjelenés is számít", "Modern lakás, hálószoba", "Aki dizájnt és okos funkciókat akar olcsón"],
          specs: [
            { label: "Kategória", value: "Dizájn kényelem" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "gyárilag beépített" },
            { label: "Kivitel", value: "letisztult, dizájnos előlap" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
    ],
    video: {
      id: "u_sA544tosI",
      title: "AUX Delta – H-tarifás okosklíma bemutató",
      text: "Bemutatóvideó az AUX Delta szériáról és a H-tarifás fűtési megtakarításról. Kérdése van? Hívjon, segítünk a választásban.",
    },
    infoSections: [
      {
        icon: "piggybank",
        title: "Verhetetlen ár-érték",
        lead: "Prémium tudás a legkedvezőbb áron.",
        points: [
          "A világ egyik legnagyobb klímagyártója",
          "Számos ismert márka OEM-beszállítója",
          "Modern felszereltség márkafelár nélkül",
        ],
      },
      {
        icon: "flame",
        title: "H-tarifás modellek – téli megtakarítás",
        lead: "Kedvezményes fűtési árammal olcsóbb fűtés.",
        points: [
          "H-tarifás készülékek elérhetők",
          "Kedvezményes áram a fűtési szezonban",
          "Az igénylésben és ügyintézésben segítünk",
        ],
      },
      {
        icon: "wifi",
        title: "Okosvezérlés alkalmazással",
        lead: "Vezérelje a klímát telefonról, bárhonnan.",
        points: [
          "Beépített WiFi a legtöbb modellnél",
          "Ki-be, hőmérséklet, időzítés az appból",
          "Okosotthon-integráció",
        ],
      },
      {
        icon: "leaf",
        title: "Inverteres, R32",
        lead: "Környezetbarát, gazdaságos üzem.",
        points: [
          "Környezetbarát R32 hűtőközeg",
          "Inverteres kompresszor a gazdaságos üzemért",
          "Megbízható hűtés és fűtés hőszivattyús üzemben",
        ],
      },
    ],
    faq: [
      { q: "Miért ilyen kedvező az AUX ára?", a: "Az AUX a világ egyik legnagyobb klímagyártója, amely számos ismert márkának is beszállítója. A saját készülékei ugyanazt a modern, inverteres technológiát adják, csak márkafelár nélkül – ezért verhetetlen az ár-érték arányuk." },
      { q: "Mi az a H-tarifa?", a: "Kedvezményes elektromos fűtési tarifa. A H-tarifás AUX modellekkel a fűtési szezonban jelentősen csökkenthető a fűtésre fordított áram költsége – az igénylésben segítünk." },
      { q: "Vezérelhető telefonról?", a: "Igen, a WiFi-s AUX modellek okostelefonról, ingyenes alkalmazással bárhonnan vezérelhetők, és okosotthon-rendszerbe is integrálhatók." },
      { q: "Megbízhatók az AUX klímák?", a: "Igen. Az AUX hatalmas gyártói háttérrel és modern, inverteres technológiával dolgozik – mi pedig szakszerűen telepítjük és karbantartjuk, garanciával és számlával." },
      { q: "Mennyibe kerül beszerelve?", a: "Az ár a modelltől, teljesítménytől és a beszerelés körülményeitől függ. Kérjen ingyenes felmérést és pontos árajánlatot – a kiszállás díjmentes." },
    ],
    photos: [
      { src: "/photos/belteri-aux-halo.jpg", alt: "Beszerelt AUX beltéri klíma egység hálószobában" },
      { src: "/photos/kulteri-aux-oldal.jpg", alt: "AUX kültéri klíma egység homlokzati rögzítéssel" },
    ],
  },
  {
    slug: "polar",
    name: "Polár",
    logo: "/brands/polar.png",
    accent: "#2563EB",
    tagline: "Elérhető árú, megbízható klímák a mindennapokra",
    metaTitle: "Polár klímák Kecskeméten – telepítés és szerviz | Kecskemét Klíma",
    intro:
      "A Polár klímák a jó ár-érték arányukról és egyszerű, megbízható működésükről ismertek. Kiváló választás, ha megfizethető áron szeretne hatékony hűtést és fűtést – mi pedig szakszerűen telepítjük, beüzemeljük és karbantartjuk a készülékeket, garanciával és számlával.",
    strengths: [
      "Elérhető ár, kedvező belépő a klímavilágba",
      "Egyszerű, megbízható működés",
      "Inverteres modellek energiatakarékos üzemmel",
      "Teljes körű helyi szerviz és garancia",
    ],
    models: [
      {
        name: "Comfort Inverter",
        positioning: "Kedvező kényelmi",
        summary: "Kiváló belépő az inverteres klímákhoz.",
        description:
          "Megfizethető inverteres modell, gazdaságos hűtés-fűtéssel, halk működéssel és egyszerű kezeléssel.",
        features: ["Inverter", "Gazdaságos", "Halk", "Kedvező ár"],
        slug: "comfort-inverter",
        detail: {
          tagline: "Megfizethető inverteres hűtés-fűtés a mindennapokra",
          overview:
            "A Polár Comfort Inverter megfizethető, inverteres modell, amely gazdaságos hűtést és fűtést nyújt a mindennapokra. Halk működés, egyszerű kezelés és megbízható alaptechnika – kiváló belépő az inverteres klímák világába kedvező áron.",
          highlights: [
            { icon: "gauge", title: "Inverteres, gazdaságos", text: "Alacsony fogyasztás, kiszámítható üzem." },
            { icon: "volume", title: "Halk működés", text: "Csendes beltéri egység a mindennapokra." },
            { icon: "leaf", title: "R32 hűtőközeg", text: "Környezetbarát gáz, jó energiahatékonyság." },
            { icon: "piggybank", title: "Kedvező ár", text: "Kiváló belépő az inverteres klímák világába." },
          ],
          bestFor: ["Első inverteres klíma kedvező áron", "Lakás, hálószoba", "Aki gazdaságos, egyszerű klímát keres"],
          specs: [
            { label: "Kategória", value: "Kedvező kényelmi" },
            { label: "Technológia", value: "inverteres" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként" },
            { label: "Fűtés", value: "hőszivattyús üzem" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
      {
        name: "Standard",
        positioning: "Egyszerű belépő",
        summary: "A leggyorsabb út egy jó minőségű hűtéshez.",
        description:
          "Letisztult, megbízható belépő klíma jó alapfunkciókkal, egyszerű, tartós felépítéssel és megfizethető árral.",
        features: ["Egyszerű", "Megbízható", "Hatékony hűtés", "Kedvező ár"],
        slug: "standard",
        detail: {
          tagline: "Egyszerű, megbízható belépő klíma",
          overview:
            "A Polár Standard letisztult, megbízható belépő klíma azoknak, akiknek a jó alapfunkciók a fontosak. Egyszerű, tartós felépítés és megfizethető ár – a leggyorsabb út egy hatékony, jó minőségű hűtéshez.",
          highlights: [
            { icon: "piggybank", title: "Legkedvezőbb ár", text: "A leggyorsabb út egy jó minőségű klímához." },
            { icon: "shield", title: "Megbízható, tartós", text: "Egyszerű, bevált felépítés, hosszú élettartam." },
            { icon: "snowflake", title: "Hatékony hűtés", text: "Gyors, megbízható hűtés a mindennapokra." },
            { icon: "volume", title: "Egyszerű kezelés", text: "Letisztult, könnyen kezelhető működés." },
          ],
          bestFor: ["Kisebb helyiségek, hálószoba", "Aki a legkedvezőbb áron akar klímát", "Egyszerű, problémamentes megoldás"],
          specs: [
            { label: "Kategória", value: "Egyszerű belépő" },
            { label: "Technológia", value: "egyszerű, bevált alaptechnika" },
            { label: "Hűtőközeg", value: "R32 (környezetbarát)" },
            { label: "WiFi", value: "opcióként" },
            { label: "Hűtés-fűtés", value: "hatékony, megbízható" },
            { label: "Energiaosztály", value: "jó" },
            { label: "Teljesítmény", value: "több méretben – a felmérésen választjuk ki" },
            { label: "Garancia", value: "gyártói jótállás + teljes körű helyi szerviz" },
          ],
        },
      },
    ],
    video: {
      id: "wj-wMRKPvq0",
      title: "Ismerd meg a POLAR klímákat",
      text: "A Polár hivatalos bemutatóvideója a klímákról. Kérdése van egy modellel kapcsolatban? Hívjon, segítünk a választásban.",
    },
    infoSections: [
      {
        icon: "piggybank",
        title: "Elérhető ár, kedvező belépő",
        lead: "A legjobb út egy jó klímához olcsón.",
        points: [
          "Megfizethető inverteres modellek",
          "Jó minőség márkafelár nélkül",
          "Gyors, egyszerű beszerelés",
        ],
      },
      {
        icon: "leaf",
        title: "Inverteres, R32",
        lead: "Gazdaságos, környezetbarát üzem.",
        points: [
          "Környezetbarát R32 hűtőközeg",
          "Inverteres kompresszor a spórolásért",
          "Alacsony üzemköltség",
        ],
      },
      {
        icon: "volume",
        title: "Halk, egyszerű kezelés",
        lead: "Csendes működés, könnyű vezérlés.",
        points: [
          "Halk beltéri egység",
          "Egyszerű, letisztult kezelés",
          "WiFi-vel bővíthető több modellnél",
        ],
      },
      {
        icon: "shield",
        title: "Teljes körű helyi szerviz és garancia",
        lead: "Telepítés, karbantartás, garancia egy helyen.",
        points: [
          "Szakszerű beszerelés és beüzemelés",
          "Rendszeres karbantartás",
          "Garanciális ügyintézés helyben",
        ],
      },
    ],
    faq: [
      { q: "Megbízhatók a Polár klímák?", a: "Igen. A Polár klímák egyszerű, bevált technikára épülnek, és jó ár-érték arányt adnak. Mi pedig szakszerűen telepítjük, beüzemeljük és karbantartjuk őket, garanciával és számlával." },
      { q: "Van inverteres Polár modell?", a: "Igen, a Comfort Inverter gazdaságos inverteres hűtést és fűtést ad – kiváló belépő az inverteres klímák világába kedvező áron." },
      { q: "Milyen hűtőközeggel működnek?", a: "A jelenlegi Polár készülékek a környezetbarát R32 hűtőközeggel üzemelnek." },
      { q: "Mennyibe kerül beszerelve?", a: "Az ár a modelltől, teljesítménytől és a beszerelés körülményeitől függ. Kérjen ingyenes felmérést és pontos árajánlatot – a kiszállás díjmentes." },
    ],
    photos: [
      { src: "/photos/belteri-polar-nappali.jpg", alt: "Beszerelt Polár beltéri klíma egység nappaliban" },
      { src: "/photos/kulteri-polar-kozeli.jpg", alt: "Polár kültéri klíma egység közeli nézetben" },
    ],
  },
];

export const brandBySlug = (slug: string) =>
  brandPages.find((b) => b.slug === slug);

/** Look up a single model (and its brand) by brand + model slug. */
export const modelBySlug = (brandSlug: string, modelSlug: string) => {
  const brand = brandBySlug(brandSlug);
  if (!brand) return undefined;
  const model = brand.models.find((m) => m.slug === modelSlug);
  if (!model || !model.detail) return undefined;
  return { brand, model };
};

/** All (brand, model) pairs that have a standalone detail page. */
export const modelPages = brandPages.flatMap((b) =>
  b.models
    .filter((m) => m.slug && m.detail)
    .map((m) => ({ brand: b.slug, model: m.slug as string })),
);
