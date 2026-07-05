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

export type Brand = {
  slug: string;
  name: string;
  accent: string;
  tagline: string;
  metaTitle: string;
  intro: string;
  strengths: string[];
  models: BrandModel[];
};

export const brandPages: Brand[] = [
  {
    slug: "daikin",
    name: "Daikin",
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
          "Kedvező árú, megbízható választás azoknak, akik jó ár-érték arányú Daikin klímát keresnek.",
        features: ["Kedvező ár", "Halk működés", "Megbízható"],
      },
      {
        name: "Comfora",
        positioning: "Kényelmi",
        description:
          "Kiegyensúlyozott, mindennapi kényelmet nyújtó modell, jó hatásfokkal és opcionális WiFi-vezérléssel.",
        features: ["Jó hatásfok", "WiFi opció", "Csendes"],
      },
      {
        name: "Perfera",
        positioning: "Prémium",
        description:
          "Csúcskategóriás energiahatékonyság és kiváló fűtési teljesítmény alacsony külső hőmérsékleten is, beépített WiFi-vel.",
        features: ["Csúcs energiaosztály", "Erős fűtés télen", "Beépített WiFi"],
      },
      {
        name: "Emura",
        positioning: "Dizájn ikon",
        description:
          "Elegáns, fém hatású előlap és letisztult formavilág – a Daikin dizájn-zászlóshajója.",
        features: ["Prémium dizájn", "Halk", "Magas hatásfok"],
      },
      {
        name: "Stylish",
        positioning: "Kompakt dizájn",
        description:
          "Vékony, modern forma kiváló légáramlással és intelligens érzékelőkkel, WiFi-vezérléssel.",
        features: ["Kompakt forma", "Érzékelős", "WiFi vezérlés"],
      },
    ],
  },
  {
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
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
          "Megbízható alapfelszereltségű készülék azoknak, akik a Mitsubishi minőségét kedvező áron keresik.",
        features: ["Megbízható", "Kedvező ár", "Halk"],
      },
      {
        name: "MSZ-AY",
        positioning: "Kényelmi széria",
        description:
          "Kiegyensúlyozott hatásfok és komfort, továbbfejlesztett működéssel és csendes üzemmel.",
        features: ["Jó hatásfok", "Csendes", "WiFi opció"],
      },
      {
        name: "MSZ-LN Design",
        positioning: "Prémium dizájn",
        description:
          "Matt és fényes színekben elérhető dizájnmodell, érzékelővel vezérelt légtereléssel és magas hatásfokkal.",
        features: ["Dizájn színek", "Érzékelős légterelés", "Csúcs hatásfok"],
      },
      {
        name: "MSZ-EF Kirigamine Zen",
        positioning: "Dizájn prémium",
        description:
          "Letisztult, lapos előlapú prémium modell, amely elegánsan illeszkedik a modern otthonokba.",
        features: ["Elegáns forma", "Halk", "Magas energiaosztály"],
      },
    ],
  },
  {
    slug: "gree",
    name: "Gree",
    accent: "#16A34A",
    tagline: "Kiváló ár-érték arány, erős fűtés",
    metaTitle: "Gree klímák Kecskeméten – telepítés és szerviz | Kecskemét Klíma",
    intro:
      "A Gree a világ egyik legnagyobb klímagyártója, amely kedvező árú, mégis jól felszerelt készülékeivel rendkívül népszerű. Több modellje kiemelkedő fűtési teljesítményt nyújt, így egész évben gazdaságos megoldás lehet.",
    strengths: [
      "Kiváló ár-érték arány",
      "Erős fűtési teljesítmény hőszivattyús modelleknél",
      "Széles, jól felszerelt kínálat",
      "WiFi-vezérlés több modellnél",
    ],
    models: [
      {
        name: "Pular",
        positioning: "Népszerű kényelmi",
        description:
          "Az egyik legkedveltebb Gree modell: jó felszereltség, WiFi és kedvező ár egyben.",
        features: ["WiFi", "Jó ár-érték", "Csendes"],
      },
      {
        name: "Fairy",
        positioning: "Modern kényelem",
        description:
          "Letisztult megjelenés, halk működés és beépített WiFi a mindennapi kényelemért.",
        features: ["Modern forma", "WiFi", "Halk"],
      },
      {
        name: "Amber",
        positioning: "Prémium hőszivattyú",
        description:
          "Erős fűtési teljesítményre optimalizált prémium modell, amely a hidegebb napokon is hatékony.",
        features: ["Erős fűtés télen", "Prémium", "Magas hatásfok"],
      },
      {
        name: "Bora",
        positioning: "Megbízható klasszikus",
        description:
          "Bevált, gazdaságos modell, amely megbízható hűtést és fűtést nyújt kedvező áron.",
        features: ["Gazdaságos", "Megbízható", "WiFi opció"],
      },
      {
        name: "Lomo",
        positioning: "Kedvező belépő",
        description:
          "Egyszerű, megbízható belépő modell azoknak, akiknek a jó alapfunkciók a fontosak.",
        features: ["Kedvező ár", "Egyszerű", "Megbízható"],
      },
    ],
  },
  {
    slug: "lg",
    name: "LG",
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
          "Népszerű alapmodell Dual Inverter kompresszorral – csendes, gazdaságos, megbízható.",
        features: ["Dual Inverter", "Csendes", "Jó ár-érték"],
      },
      {
        name: "Silence",
        positioning: "Halk működés",
        description:
          "Extra csendes üzemre optimalizált modell azoknak, akiknek a nyugalom a legfontosabb.",
        features: ["Extra halk", "Energiatakarékos", "WiFi"],
      },
      {
        name: "Artcool",
        positioning: "Dizájn",
        description:
          "Prémium megjelenésű dizájnmodell, amely stílusos elemként illeszkedik a lakásba.",
        features: ["Prémium dizájn", "Dual Inverter", "WiFi"],
      },
      {
        name: "Dualcool Premium",
        positioning: "Prémium teljesítmény",
        description:
          "Erős hűtési és fűtési teljesítmény, prémium felszereltséggel és tisztább levegőt adó megoldásokkal.",
        features: ["Erős teljesítmény", "Prémium", "Tiszta levegő"],
      },
    ],
  },
  {
    slug: "panasonic",
    name: "Panasonic",
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
          "Jó ár-értékű, megbízható belépő modell a mindennapi hűtéshez és fűtéshez.",
        features: ["Jó ár-érték", "Megbízható", "WiFi opció"],
      },
      {
        name: "Etherea (Z)",
        positioning: "Prémium, tiszta levegő",
        description:
          "Prémium modell nanoe™ X levegőtisztítással, magas hatásfokkal és elegáns megjelenéssel.",
        features: ["nanoe™ X légtisztítás", "Csúcs hatásfok", "Elegáns dizájn"],
      },
      {
        name: "PZ",
        positioning: "Kényelmi széria",
        description:
          "Kiegyensúlyozott középkategóriás modell, amely jó egyensúlyt teremt az ár és a tudás között.",
        features: ["Kiegyensúlyozott", "Csendes", "WiFi opció"],
      },
    ],
  },
];

export const brandBySlug = (slug: string) =>
  brandPages.find((b) => b.slug === slug);
