/**
 * Brand catalogue for Kecskemét Klíma.
 *
 * IMPORTANT: The model series below are real product lines, but the
 * descriptions are intentionally qualitative (no invented specs). The client
 * (Polyák Zoltán) should confirm/adjust exactly which brands & models he
 * installs — then this list is trivial to extend to every brand.
 */

export type BrandModel = {
  name: string;
  positioning: string;
  description: string;
  features: string[];
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
      image: "/photos/stock-nappali-2.jpg",
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
      "A Gree a világ legnagyobb klímagyártója, amely évente több tízmillió készüléket állít elő – a kedvező árú, mégis kiválóan felszerelt modelljei miatt Magyarországon is az egyik legnépszerűbb választás. Több modellje kimagasló fűtési teljesítményt nyújt hőszivattyús üzemben, így egész évben gazdaságos. A legnagyobb előnye azonban a nyugalom: a prémium Gree klímákra a feltételek teljesülése esetén akár 10 év garancia is igényelhető – mi pedig hivatalos szakszervizként végig a partnerei maradunk a telepítéstől a karbantartáson át a garanciális ügyintézésig.",
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
        description:
          "Az egyik legkedveltebb Gree modell Magyarországon: erős fűtési teljesítmény hőszivattyús üzemben, beépített WiFi-vezérlés és kiváló ár-érték arány egyben. Modern inverteres kompresszorával halkan, energiatakarékosan működik, és R32 hűtőközeggel dolgozik – ideális választás lakásba és házba egyaránt, ha megbízható mindenest keres.",
        features: ["Beépített WiFi", "Erős téli fűtés", "Inverteres, R32", "Jó ár-érték"],
      },
      {
        name: "Fairy",
        positioning: "Modern dizájn",
        description:
          "Letisztult, elegáns előlap, kifejezetten halk működés és beépített WiFi – a Fairy a mindennapi kényelmet prémium hangulattal ötvözi. Inverteres, energiatakarékos üzem, jó fűtési teljesítménnyel: ott a legjobb választás, ahol a klíma megjelenése is számít, de nem szeretne prémium árat fizetni.",
        features: ["Dizájnos, lapos forma", "Beépített WiFi", "Halk, inverteres üzem", "Jó hatásfok"],
      },
      {
        name: "Amber",
        positioning: "Prémium hőszivattyú",
        description:
          "Erős fűtésre optimalizált prémium modell, amely a hidegebb téli napokon is hatékonyan fűt – valódi alternatíva a klímafűtésre. Alacsony külső hőmérsékleten is stabil teljesítményt ad, magas energiaosztállyal és beépített WiFi-vel. Ha a klímát télen is komolyan használná fűtésre, ez a Gree csúcsragadozója.",
        features: ["Kiváló téli fűtés", "Magas energiaosztály", "Beépített WiFi", "Prémium"],
      },
      {
        name: "Comfort X",
        positioning: "Kiegyensúlyozott kényelmi",
        description:
          "A klasszikus Gree kényelmi széria: kiegyensúlyozott hűtés-fűtés, inverteres, R32-es működés és jó energiahatékonyság megfizethető áron. Halk beltéri egység, WiFi-vezérelhetőség és megbízható, bevált technika – kiváló belépő a prémium Gree világába.",
        features: ["Inverteres, R32", "WiFi-vezérelhető", "Jó energiaosztály", "Kedvező ár"],
      },
      {
        name: "Bora",
        positioning: "Megbízható klasszikus",
        description:
          "Bevált, gazdaságos modell, amely megbízható hűtést és fűtést nyújt kedvező áron. Egyszerű, tartós felépítés, inverteres működés és WiFi-vel bővíthető vezérlés – annak, aki a jól bevált, problémamentes megoldást keresi.",
        features: ["Gazdaságos", "Megbízható", "Inverteres", "WiFi opció"],
      },
      {
        name: "Lomo",
        positioning: "Kedvező belépő",
        description:
          "Egyszerű, megbízható belépő modell azoknak, akiknek a jó alapfunkciók és a kedvező ár a legfontosabb. Inverteres kompresszor a gazdaságos üzemért, letisztult megjelenés, és a Gree bevált megbízhatósága – a legkedvezőbb út egy jó minőségű klímához.",
        features: ["Kedvező ár", "Inverteres", "Egyszerű", "Megbízható"],
      },
      {
        name: "Clivia",
        positioning: "Prémium dizájn",
        description:
          "Fém hatású, exkluzív előlapú prémium Gree modell erős teljesítménnyel – ha a klíma dizájnelem is a lakásban. Csúcskategóriás anyaghasználat, kifinomult, halk működés, magas energiaosztály és teljes okosvezérlés WiFi-n keresztül. A Gree kínálatának dizájn-zászlóshajója.",
        features: ["Prémium fém dizájn", "Erős teljesítmény", "Csúcs energiaosztály", "Okosvezérlés WiFi-vel"],
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
