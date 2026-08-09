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
        description:
          "Kedvező árú, megbízható választás azoknak, akik jó ár-érték arányú Daikin klímát keresnek. Inverteres kompresszor a gazdaságos üzemért, halk működés és a Daikin bevált minősége – a legkedvezőbb belépő a japán klímavilágba.",
        features: ["Kedvező ár", "Halk működés", "Inverteres", "Megbízható"],
      },
      {
        name: "Comfora",
        positioning: "Kényelmi",
        description:
          "Kiegyensúlyozott, mindennapi kényelmet nyújtó modell jó hatásfokkal és opcionális WiFi-vezérléssel. Stabil hűtés és fűtés, csendes üzem – ideális választás, ha a jó ár és a megbízható komfort a fontos.",
        features: ["Jó hatásfok", "WiFi opció", "Csendes", "Jó fűtés"],
      },
      {
        name: "Perfera",
        positioning: "Prémium",
        description:
          "Csúcskategóriás energiahatékonyság és kiváló fűtési teljesítmény alacsony külső hőmérsékleten is, beépített WiFi-vel. Kifinomult légterelés, nagyon halk üzem – a Daikin technológiai csúcsa a mindennapokra.",
        features: ["Csúcs energiaosztály", "Erős fűtés télen", "Beépített WiFi", "Nagyon halk"],
      },
      {
        name: "Emura",
        positioning: "Dizájn ikon",
        description:
          "Elegáns, fém hatású előlap és letisztult formavilág – a Daikin dizájn-zászlóshajója. A prémium megjelenés mögött magas hatásfok, intelligens érzékelők és teljes okosvezérlés áll.",
        features: ["Prémium dizájn", "Érzékelős légterelés", "Halk", "Magas hatásfok"],
      },
      {
        name: "Stylish",
        positioning: "Kompakt dizájn",
        description:
          "Vékony, modern forma kiváló légáramlással és intelligens érzékelőkkel, WiFi-vezérléssel. Kompakt kültéri egység, tiszta levegőt adó szűrés – dizájnos prémium egy meglepően kis helyen.",
        features: ["Kompakt forma", "Érzékelős", "WiFi vezérlés", "Magas hatásfok"],
      },
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
        description:
          "Megbízható alapfelszereltségű készülék azoknak, akik a Mitsubishi minőségét kedvező áron keresik. Inverteres, gazdaságos üzem és a gyártó ismert tartóssága – jó minőségű belépő, ami sokáig szolgál.",
        features: ["Megbízható", "Kedvező ár", "Inverteres", "Halk"],
      },
      {
        name: "MSZ-AY",
        positioning: "Kényelmi széria",
        description:
          "Kiegyensúlyozott hatásfok és komfort továbbfejlesztett működéssel, csendes üzemmel és jó fűtési teljesítménnyel. WiFi-vel vezérelhető, kifinomult légterelés – a mindennapok megbízható kényelme.",
        features: ["Jó hatásfok", "Csendes", "WiFi opció", "Jó téli fűtés"],
      },
      {
        name: "MSZ-LN Design",
        positioning: "Prémium dizájn",
        description:
          "Matt és fényes színekben elérhető dizájnmodell, érzékelővel vezérelt légtereléssel, fejlett szűréssel és csúcs energiaosztállyal. Ahol a klíma a lakberendezés része – prémium minőség és megjelenés együtt.",
        features: ["Dizájn színek", "Érzékelős légterelés", "Csúcs hatásfok", "Fejlett szűrés"],
      },
      {
        name: "MSZ-EF Kirigamine Zen",
        positioning: "Dizájn prémium",
        description:
          "Letisztult, lapos előlapú prémium modell, amely elegánsan illeszkedik a modern otthonokba. Nagyon halk üzem, magas energiaosztály és a Mitsubishi Electric precíz japán minősége – csendben, feltűnésmentesen a legjobb.",
        features: ["Elegáns lapos forma", "Nagyon halk", "Magas energiaosztály", "Japán minőség"],
      },
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
        description:
          "Népszerű alapmodell Dual Inverter kompresszorral – csendes, gazdaságos, megbízható. Gyorsan eléri a kívánt hőmérsékletet, WiFi-vel vezérelhető, és tartós LG minőséget ad kedvező áron.",
        features: ["Dual Inverter", "Csendes", "WiFi", "Jó ár-érték"],
      },
      {
        name: "Silence",
        positioning: "Halk működés",
        description:
          "Extra csendes üzemre optimalizált modell azoknak, akiknek a nyugalom a legfontosabb – hálószobába, gyerekszobába ideális. Dual Inverter kompresszor, energiatakarékos működés és beépített WiFi.",
        features: ["Extra halk", "Dual Inverter", "Energiatakarékos", "WiFi"],
      },
      {
        name: "Artcool",
        positioning: "Dizájn",
        description:
          "Prémium megjelenésű dizájnmodell, amely stílusos elemként illeszkedik a lakásba. A látvány mögött Dual Inverter teljesítmény, magas hatásfok és teljes okosvezérlés áll – dizájn és tudás egyben.",
        features: ["Prémium dizájn", "Dual Inverter", "WiFi", "Magas hatásfok"],
      },
      {
        name: "Dualcool Premium",
        positioning: "Prémium teljesítmény",
        description:
          "Erős hűtési és fűtési teljesítmény prémium felszereltséggel és tisztább levegőt adó megoldásokkal. Alacsony hőmérsékleten is hatékonyan fűt, halk és energiatakarékos – csúcskategóriás LG a mindennapokra.",
        features: ["Erős teljesítmény", "Erős téli fűtés", "Prémium", "Tiszta levegő"],
      },
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
        description:
          "Jó ár-értékű, megbízható belépő modell a mindennapi hűtéshez és fűtéshez. Inverteres, gazdaságos üzem, halk működés és WiFi-vel bővíthető vezérlés – a Panasonic minősége elérhető áron.",
        features: ["Jó ár-érték", "Inverteres", "Megbízható", "WiFi opció"],
      },
      {
        name: "Etherea (Z)",
        positioning: "Prémium, tiszta levegő",
        description:
          "Prémium modell nanoe™ X levegőtisztítással, amely frissebb, tisztább beltéri levegőt ad – ideális allergiásoknak. Csúcs energiaosztály, nagyon halk üzem és elegáns, lapos megjelenés.",
        features: ["nanoe™ X légtisztítás", "Csúcs hatásfok", "Nagyon halk", "Elegáns dizájn"],
      },
      {
        name: "PZ",
        positioning: "Kényelmi széria",
        description:
          "Kiegyensúlyozott középkategóriás modell, amely jó egyensúlyt teremt az ár és a tudás között. Csendes, energiatakarékos működés, jó fűtési teljesítmény és WiFi-vezérelhetőség – a megbízható közép­kategória.",
        features: ["Kiegyensúlyozott", "Csendes", "WiFi opció", "Jó fűtés"],
      },
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
        description:
          "Kedvező árú, jól felszerelt modell beépített WiFi-vel és jó hatásfokkal – a mindennapi kényelemért. Inverteres, R32-es működés, megbízható hűtés-fűtés hőszivattyús üzemben, verhetetlen ár-érték aránnyal.",
        features: ["Beépített WiFi", "Inverteres, R32", "Jó hatásfok", "Kedvező ár"],
      },
      {
        name: "Freedom",
        positioning: "Kényelmi széria",
        description:
          "Kiegyensúlyozott hűtés-fűtés megbízható inverteres működéssel és csendes üzemmel. Jó fűtési teljesítmény télen is, WiFi-vel bővíthető okosvezérlés – kényelmes és gazdaságos a mindennapokra.",
        features: ["Inverter", "Csendes", "Jó téli fűtés", "WiFi opció"],
      },
      {
        name: "J-Smart",
        positioning: "Dizájn kényelem",
        description:
          "Letisztult megjelenés, okos vezérlés és jó energiaosztály egy elérhető árú készülékben. Halk, energiatakarékos üzem és beépített WiFi – dizájnos okosklíma, ami nem terheli meg a pénztárcát.",
        features: ["Dizájnos", "Okos vezérlés, WiFi", "Energiatakarékos", "Halk"],
      },
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
        description:
          "Megfizethető, inverteres modell, amely gazdaságos hűtést és fűtést nyújt a mindennapokra. Halk működés, egyszerű kezelés és megbízható alaptechnika – kiváló belépő az inverteres klímák világába kedvező áron.",
        features: ["Inverter", "Gazdaságos", "Halk", "Kedvező ár"],
      },
      {
        name: "Standard",
        positioning: "Egyszerű belépő",
        description:
          "Letisztult, megbízható belépő klíma azoknak, akiknek a jó alapfunkciók a fontosak. Egyszerű, tartós felépítés és megfizethető ár – a leggyorsabb út egy hatékony, jó minőségű hűtéshez.",
        features: ["Egyszerű", "Megbízható", "Hatékony hűtés", "Kedvező ár"],
      },
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
