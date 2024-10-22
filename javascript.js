let IcaoCallsigns = [
    {icaoc: "LHBC",	calls: "Békéscsaba",	country: "Magyarország"},
    {icaoc: "LHBD",	calls: "Börgönd",	country: "Magyarország"},
    {icaoc: "LHBP",	calls: "Budapest Liszt Ferenc",	country: "Magyarország"},
    {icaoc: "LHBS",	calls: "Budaörs",	country: "Magyarország"},
    {icaoc: "LHDC",	calls: "Debrecen",    country: "Magyarország"},
    {icaoc: "LHDK",	calls: "Dunakeszi",   country: "Magyarország"},
    {icaoc: "LHDV",	calls: "Dunaújváros", country: "Magyarország"},
    {icaoc: "LHEM",	calls: "Esztergom",   country: "Magyarország"},
    {icaoc: "LHOY",	calls: "Őcsény",  country: "Magyarország"},
    {icaoc: "LHFM",	calls: "Fertőszentmiklós",    country: "Magyarország"},
    {icaoc: "LHGD",	calls: "Gödöllő", country: "Magyarország"},
    {icaoc: "LHHO",	calls: "Hajdúszoboszló",  country: "Magyarország"},
    {icaoc: "LHKK",	calls: "Kiskunlacháza",   country: "Magyarország"},
    {icaoc: "LHKV",	calls: "Kaposújlak",  country: "Magyarország"},
    {icaoc: "LHMC",	calls: "Miskolc", country: "Magyarország"},
    {icaoc: "LHMP",	calls: "Matkópuszta", country: "Magyarország"},
    {icaoc: "LHNY",	calls: "Nyíregyháza", country: "Magyarország"},
    {icaoc: "LHPP",	calls: "Pécs-Pogány", country: "Magyarország"},
    {icaoc: "LHPR",	calls: "Győr-Pér",    country: "Magyarország"},
    {icaoc: "LHSK",	calls: "Siófok-Kiliti",   country: "Magyarország"},
    {icaoc: "LHSM",	calls: "Sármellék",   country: "Magyarország"},
    {icaoc: "LHTL",	calls: "Tököl",   country: "Magyarország"},
    {icaoc: "LHUD",	calls: "Szeged",  country: "Magyarország"},
    {icaoc: "LHKE",	calls: "Kecskemét",   country: "Magyarország"},
    {icaoc: "LHPA",	calls: "Pápa",    country: "Magyarország"},
    {icaoc: "LHSN",	calls: "Szolnok", country: "Magyarország"},
    {icaoc: "LZIB",	calls: "Bratislava Stefanik", country: "Szlovákia"},
    {icaoc: "LZKZ",	calls: "Kosice",  country: "Szlovákia"},
    {icaoc: "LZPP",	calls: "Piestany",    country: "Szlovákia"},
    {icaoc: "LZSL",	calls: "Sliac",   country: "Szlovákia"},
    {icaoc: "LZTT",	calls: "Poprad-Tatry",    country: "Szlovákia"},
    {icaoc: "UKBB",	calls: "Kiev Boryspil",   country: "Ukrajna"},
    {icaoc: "UKDE",	calls: "Zaporizhzhia",    country: "Ukrajna"},
    {icaoc: "UKHH",	calls: "Kharkiv", country: "Ukrajna"},
    {icaoc: "UKKK",	calls: "Kiev International",  country: "Ukrajna"},
    {icaoc: "UKLL",	calls: "LViv",   country: "Ukrajna"},
    {icaoc: "UKLI",	calls: "Ivano-Frankivsk", country: "Ukrajna"},
    {icaoc: "UKLU",	calls: "Uzhhorod",    country: "Ukrajna"},
    {icaoc: "UKOO",	calls: "Odesa",   country: "Ukrajna"},
    {icaoc: "LRAR",	calls: "Arad",    country: "Románia"},
    {icaoc: "LRBM",	calls: "Baia Mare",   country: "Románia"},
    {icaoc: "LRBS",	calls: "Bukarest-Baneasa",    country: "Románia"},
    {icaoc: "LRCK",	calls: "Constanta",   country: "Románia"},
    {icaoc: "LRCL",	calls: "Cluj Napoca", country: "Románia"},
    {icaoc: "LRCT",	calls: "Campia Turzii (mil)", country: "Románia"},
    {icaoc: "LRIA",	calls: "Iasi",    country: "Románia"},
    {icaoc: "LROD",	calls: "Oradea",  country: "Románia"},
    {icaoc: "LROP",	calls: "Bukarest Henri Coanda",   country: "Románia"},
    {icaoc: "LRSB",	calls: "Sibiu",   country: "Románia"},
    {icaoc: "LRSM",	calls: "Satu Mare",   country: "Románia"},
    {icaoc: "LRTM",	calls: "Targu Mures", country: "Románia"},
    {icaoc: "LRTR",	calls: "Timisoara",   country: "Románia"},
    {icaoc: "LYBE",	calls: "Belgrade Nikola Tesla",   country: "Szerbia És Montenegró"},
    {icaoc: "LYBT",	calls: "Belgrade Batajnica (mil)",    country: "Szerbia És Montenegró"},
    {icaoc: "LYNI",	calls: "Nis", country: "Szerbia És Montenegró"},
    {icaoc: "LYPG",	calls: "Podgorica",   country: "Szerbia És Montenegró"},
    {icaoc: "LYTV",	calls: "Tivat",   country: "Szerbia És Montenegró"},
    {icaoc: "LYPR/BKPR",	calls: "Pristina",  country: "Szerbia És Montenegró"},
    {icaoc: "LDDU",	calls: "Dubrovnik",   country: "Horvátország"},
    {icaoc: "LDLO",	calls: "Losinj",  country: "Horvátország"},
    {icaoc: "LDOS",	calls: "Osijek",  country: "Horvátország"},
    {icaoc: "LDPL",	calls: "Pula",    country: "Horvátország"},
    {icaoc: "LDRI",	calls: "Rijeka",  country: "Horvátország"},
    {icaoc: "LDSB",	calls: "Brac",    country: "Horvátország"},
    {icaoc: "LDSP",	calls: "Split",   country: "Horvátország"},
    {icaoc: "LDZA",	calls: "Zagreb",  country: "Horvátország"},
    {icaoc: "LDZD",	calls: "Zadar",   country: "Horvátország"},
    {icaoc: "LJLJ",	calls: "Ljubljana",   country: "Szlovénia"},
    {icaoc: "LJMB",	calls: "Maribor", country: "Szlovénia"},
    {icaoc: "LOAN",	calls: "Wiener Neustadt East",    country: "Ausztia"},
    {icaoc: "LOGF",	calls: "Fürstenfeld", country: "Ausztia"},
    {icaoc: "LOGG",	calls: "Punitz-Güssing",  country: "Ausztia"},
    {icaoc: "LOWG",	calls: "Graz",    country: "Ausztia"},
    {icaoc: "LOWI",	calls: "Innsbruck",   country: "Ausztia"},
    {icaoc: "LOWK",	calls: "Klagenfurt",  country: "Ausztia"},
    {icaoc: "LOWL",	calls: "Linz",    country: "Ausztia"},
    {icaoc: "LOWS",	calls: "Salzburg",    country: "Ausztia"},
    {icaoc: "LOWW",	calls: "Wien Schwechat",  country: "Ausztia"},
    {icaoc: "LOXZ",	calls: "Zeltweg (mil)",   country: "Ausztia"},
    {icaoc: "BIKF",	calls: "Keflavik",    country: "Izland"},
    {icaoc: "BIRK",	calls: "Reykjavik",   country: "Izland"},
    {icaoc: "EBAW",	calls: "Antwerpen",   country: "Belgium"},
    {icaoc: "EBBR",	calls: "Brussels",    country: "Belgium"},
    {icaoc: "EBCI",	calls: "Brussels South Charleroi",    country: "Belgium"},
    {icaoc: "EBLG",	calls: "Liege",   country: "Belgium"},
    {icaoc: "EDDB",	calls: "Berlin Brandenburg",  country: "Németország (Civil)"},
    {icaoc: "EDDC",	calls: "Dresden", country: "Németország (Civil)"},
    {icaoc: "EDDE",	calls: "Erfurt",  country: "Németország (Civil)"},
    {icaoc: "EDDF",	calls: "Frankfurt",   country: "Németország (Civil)"},
    {icaoc: "EDDH",	calls: "Hamburg", country: "Németország (Civil)"},
    {icaoc: "EDDK",	calls: "Cologne Bonn",    country: "Németország (Civil)"},
    {icaoc: "EDDL",	calls: "Düsseldorf",  country: "Németország (Civil)"},
    {icaoc: "EDDM",	calls: "Munich",  country: "Németország (Civil)"},
    {icaoc: "EDDN",	calls: "Nürnberg",    country: "Németország (Civil)"},
    {icaoc: "EDDP",	calls: "Leipzig/Halle",   country: "Németország (Civil)"},
    {icaoc: "EDDS",	calls: "Stuttgart",   country: "Németország (Civil)"},
    {icaoc: "EDDV",	calls: "Hannover",    country: "Németország (Civil)"},
    {icaoc: "EDDW",	calls: "Bremen",  country: "Németország (Civil)"},
    {icaoc: "EDFH",	calls: "Frankfurt-Hahn",  country: "Németország (Civil)"},
    {icaoc: "EDJA",	calls: "Memmingen",   country: "Németország (Civil)"},
    {icaoc: "EDLW",	calls: "Dortmund",    country: "Németország (Civil)"},
    {icaoc: "EDMA",	calls: "Augsburg",    country: "Németország (Civil)"},
    {icaoc: "EDMO",	calls: "Oberpfaffenhofen",    country: "Németország (Civil)"},
    {icaoc: "EETN",	calls: "Tallin",  country: "Észtország"},
    {icaoc: "EFHK",	calls: "Helsinki Vantaa", country: "Finnország"},
    {icaoc: "EFLP",	calls: "Lappeenranta",    country: "Finnország"},
    {icaoc: "EFTP",	calls: "Tampere", country: "Finnország"},
    {icaoc: "EFTU",	calls: "Turku",   country: "Finnország"},
    {icaoc: "EGAA",	calls: "Belfast International",   country: "Nagy-Britannia"},
    {icaoc: "EGBB",	calls: "Birmingham",  country: "Nagy-Britannia"},
    {icaoc: "EGCC",	calls: "Manchester",  country: "Nagy-Britannia"},
    {icaoc: "EGFF",	calls: "Cardiff", country: "Nagy-Britannia"},
    {icaoc: "EGGD",	calls: "Bristol", country: "Nagy-Britannia"},
    {icaoc: "EGGP",	calls: "Liverpool",   country: "Nagy-Britannia"},
    {icaoc: "EGGW",	calls: "London Luton",    country: "Nagy-Britannia"},
    {icaoc: "EGKK",	calls: "London Gatwick",  country: "Nagy-Britannia"},
    {icaoc: "EGLC",	calls: "London City", country: "Nagy-Britannia"},
    {icaoc: "EGLL",	calls: "London Heathrow", country: "Nagy-Britannia"},
    {icaoc: "EGMC",	calls: "London Southend", country: "Nagy-Britannia"},
    {icaoc: "EGNM",	calls: "Leeds Bradford",  country: "Nagy-Britannia"},
    {icaoc: "EGNT",	calls: "Newcastle",   country: "Nagy-Britannia"},
    {icaoc: "EGNX",	calls: "East Midlands",   country: "Nagy-Britannia"},
    {icaoc: "EGPF",	calls: "Glasgow International",   country: "Nagy-Britannia"},
    {icaoc: "EGPH",	calls: "Edinburgh",   country: "Nagy-Britannia"},
    {icaoc: "EGPK",	calls: "Glasgow Prestwick",   country: "Nagy-Britannia"},
    {icaoc: "EGSS",	calls: "London Stansted", country: "Nagy-Britannia"},
    {icaoc: "EHAM",	calls: "Amsterdam",   country: "Hollandia"},
    {icaoc: "EHEH",	calls: "Eindhoven",   country: "Hollandia"},
    {icaoc: "EHRD",	calls: "Rotterdam",   country: "Hollandia"},
    {icaoc: "EICK",	calls: "Cork",    country: "Írország"},
    {icaoc: "EIDW",	calls: "Dublin",  country: "Írország"},
    {icaoc: "EINN",	calls: "Shannon", country: "Írország"},
    {icaoc: "EKBI",	calls: "Billund", country: "Dánia"},
    {icaoc: "EKCH",	calls: "Copenhagen Kastrup",  country: "Dánia"},
    {icaoc: "ELLX",	calls: "Luxembourg",  country: "Luxemburg"},
    {icaoc: "ENBR",	calls: "Bergen",  country: "Norvégia"},
    {icaoc: "ENGM",	calls: "Oslo Gardermoen", country: "Norvégia"},
    {icaoc: "EPKK",	calls: "Krakow",  country: "Lengyelország"},
    {icaoc: "EPKT",	calls: "Katowice",    country: "Lengyelország"},
    {icaoc: "EPMO",	calls: "Warsaw Modlin",   country: "Lengyelország"},
    {icaoc: "EPPO",	calls: "Poznan",  country: "Lengyelország"},
    {icaoc: "EPWA",	calls: "Warsaw Chopin",   country: "Lengyelország"},
    {icaoc: "EPWR",	calls: "Wroclaw", country: "Lengyelország"},
    {icaoc: "ESGG",	calls: "Göteborg",    country: "Svédország"},
    {icaoc: "ESKN",	calls: "Stockholm-Skavsta",   country: "Svédország"},
    {icaoc: "ESMS",	calls: "Malmö",   country: "Svédország"},
    {icaoc: "ESSA",	calls: "Stockholm-Arlanda",   country: "Svédország"},
    {icaoc: "ESSB",	calls: "Stockholm Bromma",    country: "Svédország"},
    {icaoc: "ETAR",	calls: "Ramstein",    country: "Németország (Katonai)"},
    {icaoc: "ETNG",	calls: "Geilenkirchen",   country: "Németország (Katonai)"},
    {icaoc: "EVRA",	calls: "Riga",    country: "Lettország"},
    {icaoc: "EYKA",	calls: "Kaunas",  country: "Litvánia"},
    {icaoc: "EYVI",	calls: "Vilnius", country: "Litvánia"},
    {icaoc: "GCFV",	calls: "Fuerteventura",   country: "Kanári-szigetek"},
    {icaoc: "GCLP",	calls: "Gran Canaria",    country: "Kanári-szigetek"},
    {icaoc: "GCTS",	calls: "Tenerife South",  country: "Kanári-szigetek"},
    {icaoc: "LATI",	calls: "Tirana",  country: "Albánia"},
    {icaoc: "LBBG",	calls: "Burgas",  country: "Bulgária"},
    {icaoc: "LBSF",	calls: "Sofia",   country: "Bulgária"},
    {icaoc: "LBWN",	calls: "Varna",   country: "Bulgária"},
    {icaoc: "LCEN",	calls: "Ercan",   country: "Ciprus"},
    {icaoc: "LCLK",	calls: "Larnaca", country: "Ciprus"},
    {icaoc: "LCPH",	calls: "Paphos",  country: "Ciprus"},
    {icaoc: "LCRA",	calls: "RAF Akrotiri (mil)",  country: "Ciprus"},
    {icaoc: "LEAL",	calls: "Alicante",    country: "Spanyolország"},
    {icaoc: "LEBL",	calls: "Barcelona",   country: "Spanyolország"},
    {icaoc: "LECH",	calls: "Castellón",   country: "Spanyolország"},
    {icaoc: "LEIB",	calls: "Ibiza",   country: "Spanyolország"},
    {icaoc: "LEMD",	calls: "Madrid Barajas",  country: "Spanyolország"},
    {icaoc: "LEMG",	calls: "Málaga",  country: "Spanyolország"},
    {icaoc: "LEMH",	calls: "Menorca", country: "Spanyolország"},
    {icaoc: "LEPA",	calls: "Palma de Mallorca",   country: "Spanyolország"},
    {icaoc: "LEVC",	calls: "Valencia",    country: "Spanyolország"},
    {icaoc: "LEXJ",	calls: "Santander",   country: "Spanyolország"},
    {icaoc: "LEZL",	calls: "Seville", country: "Spanyolország"},
    {icaoc: "LFBD",	calls: "Bordeaux-Mérignac",   country: "Franciaország"},
    {icaoc: "LFBO",	calls: "Toulouse-Blagnac",    country: "Franciaország"},
    {icaoc: "LFLL",	calls: "Lyon - Saint-Exupery",    country: "Franciaország"},
    {icaoc: "LFML",	calls: "Marseille",   country: "Franciaország"},
    {icaoc: "LFMN",	calls: "Nice Cote dAzur",  country: "Franciaország"},
    {icaoc: "LFOB",	calls: "Paris Beauvais",  country: "Franciaország"},
    {icaoc: "LFPB",	calls: "Paris Le Bourget",    country: "Franciaország"},
    {icaoc: "LFPG",	calls: "Paris Charles de Gaulle", country: "Franciaország"},
    {icaoc: "LFPO",	calls: "Paris Orly",  country: "Franciaország"},
    {icaoc: "LFRS",	calls: "Nantes Atlantique",   country: "Franciaország"},
    {icaoc: "LFSB",	calls: "Basel-Mulhouse-Freiburg", country: "Franciaország"},
    {icaoc: "LFST",	calls: "Strasbourg",  country: "Franciaország"},
    {icaoc: "LGAV",	calls: "Athens Eleftherios Venizelos",    country: "Görögország"},
    {icaoc: "LGIR",	calls: "Herakleion",  country: "Görögország"},
    {icaoc: "LGKF",	calls: "Kefalonia",   country: "Görögország"},
    {icaoc: "LGKL",	calls: "Kalamata",    country: "Görögország"},
    {icaoc: "LGKO",	calls: "Kos", country: "Görögország"},
    {icaoc: "LGKP",	calls: "Karpathos",   country: "Görögország"},
    {icaoc: "LGKR",	calls: "Corfu",   country: "Görögország"},
    {icaoc: "LGMK",	calls: "Mykonos", country: "Görögország"},
    {icaoc: "LGRP",	calls: "Rhodes",  country: "Görögország"},
    {icaoc: "LGSA",	calls: "Chania",  country: "Görögország"},
    {icaoc: "LGSR",	calls: "Santorini",   country: "Görögország"},
    {icaoc: "LGTS",	calls: "Thessaloniki",    country: "Görögország"},
    {icaoc: "LGZA",	calls: "Zakynthos",   country: "Görögország"},
    {icaoc: "LIBD",	calls: "Bari",    country: "Olaszország"},
    {icaoc: "LICC",	calls: "Catania", country: "Olaszország"},
    {icaoc: "LICJ",	calls: "Palermo", country: "Olaszország"},
    {icaoc: "LIEA",	calls: "Alghero", country: "Olaszország"},
    {icaoc: "LIEE",	calls: "Cagliari",    country: "Olaszország"},
    {icaoc: "LIMC",	calls: "Milan Malpensa",  country: "Olaszország"},
    {icaoc: "LIME",	calls: "Milan Bergamo",   country: "Olaszország"},
    {icaoc: "LIMJ",	calls: "Genova",  country: "Olaszország"},
    {icaoc: "LIML",	calls: "Milan Linate",    country: "Olaszország"},
    {icaoc: "LIPA",	calls: "Aviano",  country: "Olaszország"},
    {icaoc: "LIPE",	calls: "Bologna", country: "Olaszország"},
    {icaoc: "LIPH",	calls: "Treviso", country: "Olaszország"},
    {icaoc: "LIPQ",	calls: "Trieste", country: "Olaszország"},
    {icaoc: "LIPR",	calls: "Rimini",  country: "Olaszország"},
    {icaoc: "LIPU",	calls: "Padova",  country: "Olaszország"},
    {icaoc: "LIPZ",	calls: "Venice Marco Polo",   country: "Olaszország"},
    {icaoc: "LIRA",	calls: "Rome Ciampino",   country: "Olaszország"},
    {icaoc: "LIRF",	calls: "Rome Fiumicino",  country: "Olaszország"},
    {icaoc: "LIRN",	calls: "Naples International",    country: "Olaszország"},
    {icaoc: "LIRP",	calls: "Pisa",    country: "Olaszország"},
    {icaoc: "LKHK",	calls: "Hradec Králové",  country: "Csehország"},
    {icaoc: "LKKB",	calls: "Prague-Kbely (mil)",  country: "Csehország"},
    {icaoc: "LKKU",	calls: "Kunovice",    country: "Csehország"},
    {icaoc: "LKKV",	calls: "Karlovy Vary",    country: "Csehország"},
    {icaoc: "LKMH",	calls: "Mnichovo Hradiste",   country: "Csehország"},
    {icaoc: "LKMT",	calls: "Ostrava", country: "Csehország"},
    {icaoc: "LKPR",	calls: "Prague-Vaclav Havel", country: "Csehország"},
    {icaoc: "LKTB",	calls: "Brno",    country: "Csehország"},
    {icaoc: "LKVO",	calls: "Vodochody",   country: "Csehország"},
    {icaoc: "LLBG",	calls: "Tel Aviv Ben Gurion", country: "Izrael"},
    {icaoc: "LLER",	calls: "Eilat",   country: "Izrael"},
    {icaoc: "LLOV",	calls: "Ovda",   country: "Izrael"},
    {icaoc: "LMML",	calls: "Malta",   country: "Málta"},
    {icaoc: "LPMA",	calls: "Madeira", country: "Portugália"},
    {icaoc: "LPPR",	calls: "Porto",   country: "Portugália"},
    {icaoc: "LPPT",	calls: "Lisbon",  country: "Portugália"},
    {icaoc: "LQBK",	calls: "Banja Luka",  country: "Bosznia és Hercegovina"},
    {icaoc: "LQMO",	calls: "Mostar",  country: "Bosznia és Hercegovina"},
    {icaoc: "LQSA",	calls: "Sarajevo",    country: "Bosznia és Hercegovina"},
    {icaoc: "LQTZ",	calls: "Tuzla",   country: "Bosznia és Hercegovina"},
    {icaoc: "LSGG",	calls: "Geneva",  country: "Svájc"},
    {icaoc: "LSZB",	calls: "Bern-Belp",   country: "Svájc"},
    {icaoc: "LSZH",	calls: "Zürich",  country: "Svájc"},
    {icaoc: "LTAC",	calls: "Ankara",  country: "Törökország"},
    {icaoc: "LTAI",	calls: "Antalya", country: "Törökország"},
    {icaoc: "LTBA",	calls: "Istanbul Atatürk",    country: "Törökország"},
    {icaoc: "LTBJ",	calls: "Izmir",   country: "Törökország"},
    {icaoc: "LTBS",	calls: "Dalaman", country: "Törökország"},
    {icaoc: "LTFJ",	calls: "Istanbul Sabiha Gökcen",  country: "Törökország"},
    {icaoc: "LTFM",	calls: "Istanbul Airport",    country: "Törökország"},
    {icaoc: "LUKK",	calls: "Chisinau",    country: "Moldova"},
    {icaoc: "LWOH",	calls: "Ohrid",   country: "Macedónia"},
    {icaoc: "LWSK",	calls: "Skopje",  country: "Macedónia"},
    {icaoc: "CYUL",	calls: "Montréal-Trudeau",    country: "Kanada"},
    {icaoc: "CYVR",	calls: "Vancouver",   country: "Kanada"},
    {icaoc: "CYYZ",	calls: "Toronto Pearson", country: "Kanada"},
    {icaoc: "DAAG",	calls: "Algiers", country: "Algéria"},
    {icaoc: "DTTA",	calls: "Tunis-Carthage",  country: "Tunézia"},
    {icaoc: "DTMB",	calls: "Monastir",    country: "Tunézia"},
    {icaoc: "HAAB",	calls: "Addis Ababa", country: "Ethiópia"},
    {icaoc: "HECA",	calls: "Cairo",   country: "Egyiptom"},
    {icaoc: "HEGN",	calls: "Hurghada",    country: "Egyiptom"},
    {icaoc: "HELX",	calls: "Luxor",   country: "Egyiptom"},
    {icaoc: "HEMA",	calls: "Marsa Alam",  country: "Egyiptom"},
    {icaoc: "HESH",	calls: "Sharm el-Sheikh", country: "Egyiptom"},
    {icaoc: "HLLT",	calls: "Tripoli", country: "Líbia"},
    {icaoc: "HSSS",	calls: "Khartoum",    country: "Szudán"},
    {icaoc: "KATL",	calls: "Atlanta Hartsfield-Jackson",  country: "USA"},
    {icaoc: "KBOS",	calls: "Boston Logan",    country: "USA"},
    {icaoc: "KDFW",	calls: "Dallas/Fort Worth",   country: "USA"},
    {icaoc: "KEWR",	calls: "Newark",  country: "USA"},
    {icaoc: "KIAD",	calls: "Washington Dulles",   country: "USA"},
    {icaoc: "KJFK",	calls: "New York-John F. Kennedy",    country: "USA"},
    {icaoc: "KLAX",	calls: "Los Angeles", country: "USA"},
    {icaoc: "KLGA",	calls: "New York-LaGuardia",  country: "USA"},
    {icaoc: "KMIA",	calls: "Miami",   country: "USA"},
    {icaoc: "KORD",	calls: "Chicago OHare",    country: "USA"},
    {icaoc: "KPHL",	calls: "Philadelphia",    country: "USA"},
    {icaoc: "KSEA",	calls: "Seattle-Tacoma",  country: "USA"},
    {icaoc: "KSFO",	calls: "San Francisco",   country: "USA"},
    {icaoc: "OAKB",	calls: "Kabul",   country: "Afganisztán"},
    {icaoc: "OAKN",	calls: "Kandahar",    country: "Afganisztán"},
    {icaoc: "OBBI",	calls: "Bahrain International",   country: "Bahrein"},
    {icaoc: "OERK",	calls: "Riyad-King Khalid",   country: "Szaúd-Arábia"},
    {icaoc: "OIII",	calls: "Tehran Mehrabad", country: "Irán"},
    {icaoc: "OJAI",	calls: "Amman Queen Alia",    country: "Jordánia"},
    {icaoc: "OJAQ",	calls: "Aqaba",   country: "Jordánia"},
    {icaoc: "OKBK",	calls: "Kuwait",  country: "Kuvait"},
    {icaoc: "OLBA",	calls: "Beirut",  country: "Libanon"},
    {icaoc: "OMAA",	calls: "Abu Dhabi",   country: "Egyesült Arab Emírségek"},
    {icaoc: "OMDB",	calls: "Dubai International", country: "Egyesült Arab Emírségek"},
    {icaoc: "OMDW",	calls: "Dubai-Al Maktoum",    country: "Egyesült Arab Emírségek"},
    {icaoc: "OMSJ",	calls: "Sharjah", country: "Egyesült Arab Emírségek"},
    {icaoc: "OOMS",	calls: "Muscat",  country: "Omán"},
    {icaoc: "OPKC",	calls: "Karachi", country: "Pakisztán"},
    {icaoc: "ORBI",	calls: "Baghdad", country: "Irak"},
    {icaoc: "OSDI",	calls: "Damascus International",  country: "Szíria"},
    {icaoc: "OTHH",	calls: "Doha Hamad",  country: "Qatar"},
    {icaoc: "RCTP",	calls: "Taiwan Taoyuan",  country: "Tajpej"},
    {icaoc: "RJAA",	calls: "Tokyo Narita",    country: "Japán"},
    {icaoc: "RJTT",	calls: "Tokyo Haneda",    country: "Japán"},
    {icaoc: "RKSI",	calls: "Seoul-Incheon",   country: "Dél-Korea"},
    {icaoc: "UAAA",	calls: "Almaty",  country: "Kazahsztán"},
    {icaoc: "UACC",	calls: "Nur-Sultan",  country: "Kazahsztán"},
    {icaoc: "UBBB",	calls: "Baku Heydar Aliyev",  country: "Azerbajdzsán"},
    {icaoc: "UGKO",	calls: "Kutaisi", country: "Grúzia"},
    {icaoc: "UGTB",	calls: "Tbiliszi",    country: "Grúzia"},
    {icaoc: "ULLI",	calls: "Saint Petersburg-Pulkovo",    country: "Oroszország"},
    {icaoc: "URSS",	calls: "Sochi",   country: "Oroszország"},
    {icaoc: "UUBW",	calls: "Moscow Zhukovsky",    country: "Oroszország"},
    {icaoc: "UUDD",	calls: "Moscow Domodedovo",   country: "Oroszország"},
    {icaoc: "UUEE",	calls: "Moscow Sheremetyevo", country: "Oroszország"},
    {icaoc: "UUWW",	calls: "Moscow Vnukovo",  country: "Oroszország"},
    {icaoc: "UWKD",	calls: "Kazan",   country: "Oroszország"},
    {icaoc: "UMMS",	calls: "Minsk",   country: "Fehéroroszország"},
    {icaoc: "UTAA",	calls: "Ashgabat",    country: "Türkmenisztán"},
    {icaoc: "VABB",	calls: "Mumbai",  country: "India"},
    {icaoc: "VIDP",	calls: "New Delhi",   country: "India"},
    {icaoc: "VOMM",	calls: "Chennai", country: "India"},
    {icaoc: "VCBI",	calls: "Colombo Bandaranaike",    country: "Sri Lanka"},
    {icaoc: "VHHH",	calls: "Hong Kong Chek Lap Kok",  country: "Hongkong"},
    {icaoc: "VRMM",	calls: "Malé",    country: "Maldív-szigetek"},
    {icaoc: "VTBS",	calls: "Bangkok Suvarnabhumi",    country: "Thaiföld"},
    {icaoc: "VVNB",	calls: "Ha Noi-Noi Bai",  country: "Vietnám"},
    {icaoc: "VVTS",	calls: "Ho Chi Minh City",    country: "Vietnám"},
    {icaoc: "WMKK",	calls: "Kuala Lumpur",    country: "Malajzia"},
    {icaoc: "WSSS",	calls: "Singapore Changi",    country: "Szingapúr"},
    {icaoc: "ZBAA",	calls: "Beijing Capital", country: "Kína"},
    {icaoc: "ZBAD",	calls: "Beijing Daxing",  country: "Kína"},
    {icaoc: "ZGSZ",	calls: "Shenzhen",    country: "Kína"},
    {icaoc: "ZHCC",	calls: "Zhengzhou",   country: "Kína"},
    {icaoc: "ZLXY",	calls: "Xian", country: "Kína"},
    {icaoc: "ZSPD",	calls: "Shanghai Pudong", country: "Kína"},
    {icaoc: "ZUCK",	calls: "Chongqing",   country: "Kína"},
    {icaoc: "ZUUU",	calls: "Chengdu", country: "Kína"}
];

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter'){
        showNext();
    }
    if (event.ctrlKey){
        document.getElementById('Callsign').focus();
    }
});

const dropdownInput = document.querySelector('.dropdown-input');
const dropdownList = document.getElementById('dropdownList');
const arrowdown = document.getElementById('dropdownarrow');
const IcaoHint = document.getElementById("IcaoHint");
const CallsignHint = document.getElementById("CallsignHint");
const CoutryHint = document.getElementById("CoutryHint");
const score = document.getElementById("score");
const errorstxt = document.getElementById("txt");
let errors = 0;
let ErrorList = [];
ShuffledCallsigns = [];
let countryName = '';

// Function to handle the filtering and shuffling of the IcaoCallsigns array
function filterAndShuffle() {
    // Get the selector input values
    const selectorFrom = parseInt(document.getElementById("selectFrom").value) - 1; // Convert to zero-based index
    const selectorTo = parseInt(document.getElementById("selectTo").value);

    // Validate the input values
    if (isNaN(selectorFrom) || isNaN(selectorTo) || selectorFrom < 0 || selectorTo > IcaoCallsigns.length || selectorFrom >= selectorTo) {
        alert("Invalid selection range.");
        return;
    }

    // Filter the IcaoCallsigns array based on the selector inputs
    let filteredCallsigns = IcaoCallsigns.slice(selectorFrom, selectorTo);

    // Shuffle the filtered list
    ShuffledCallsigns = shuffle(filteredCallsigns);
    currentCallsignIndex = 0;
    nextCallsignIndex = 1;
    errors = 0;
    errorstxt.innerHTML = errors;
    clear();

    // Output the shuffled list (or you can use it further as needed)
    console.log(ShuffledCallsigns);
    showCalls();
}

// Example shuffle function (already present in your code)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Attach the filterAndShuffle function to the 'blur' event on the selectTo input field
document.getElementById("selectTo").addEventListener("blur", filterAndShuffle);

// Megjeleníti a lenyíló menüt, ha az inputra kattintunk
dropdownInput.addEventListener('focus', () => {
    dropdownList.style.display = 'block';
});

arrowdown.addEventListener('click', () => {
    if (dropdownList.style.display === 'block') {
        dropdownList.style.display = 'none';
    } else {
        dropdownList.style.display = 'block';
    }
});

// Elrejti a lenyíló menüt, ha a felhasználó máshová kattint
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdownList.style.display = 'none';
    }
});

// Opció kiválasztása
function selectOption(element) {
    countryName = element.querySelector('.country-name').textContent;
    dropdownInput.value = countryName;
    dropdownList.style.display = 'none';
}


// Opciók szűrése az input mező alapján
function filterOptions() {
    const filter = dropdownInput.value.toLowerCase();
    const options = dropdownList.getElementsByClassName('dropdown-item');
    let firstVisibleOption = null; // Tárolja az első látható elemet

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const countryName = option.querySelector('.country-name').textContent.toLowerCase();
        
        // Töröljük a highlight osztályt, ha korábban meg lett jelölve
        option.classList.remove('highlight');

        // Szűrés csak a filter-rel kezdődő országokra
        if (countryName.startsWith(filter)) {
            option.style.display = "";
            if (!firstVisibleOption) {
                firstVisibleOption = option; // Első látható elem mentése
            }
        } else {
            option.style.display = "none";
        }
    }
    // Ha van látható elem, azt kijelöljük
    if (firstVisibleOption) {
        firstVisibleOption.classList.add('highlight'); // Egyedi osztály a kijelöléshez
    }
}

// Opció kiválasztása "Tab" lenyomásakor
dropdownInput.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault(); // Megakadályozzuk az alapértelmezett tabulációt
        const highlightedOption = dropdownList.querySelector('.highlight');
        if (highlightedOption) {
            selectOption(highlightedOption); // Kiválasztjuk a kijelölt opciót
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    if (ShuffledCallsigns.length > 0) {
        showCalls();  // Ensure the shuffled list is used from the start
    } else {
        ShuffledCallsigns = shuffle(IcaoCallsigns.slice()); // Create a copy and shuffle
        console.log("No range selected. Using all ICAO callsigns shuffled.");
        showCalls();
    }
});

let currentCallsignIndex = 0;
let nextCallsignIndex = currentCallsignIndex + 1;
let mode = "basic";

var headerContent = document.getElementById("header");
var IcaoField = document.getElementById("IcaoField");
var CallsignField = document.getElementById("CallsignField");

function switchmodes(){
    if(mode === "basic"){
        mode = "second";
        IcaoField.style.display = "flex";
        CallsignField.style.display = "none";
    }
    else{
        mode = "basic";
        IcaoField.style.display = "none";
        CallsignField.style.display = "flex";
    }
    showCalls()
}

function showCalls(){
    const currentCallsign = ShuffledCallsigns[currentCallsignIndex];
    score.innerHTML = (nextCallsignIndex + "/" + ShuffledCallsigns.length);
    errorstxt.innerHTML = errors;

    if(mode === "basic"){
        headerContent.innerHTML = currentCallsign.icaoc;
    }
    else{
        headerContent.innerHTML = currentCallsign.calls;
    }
}

function showNext() {
    if (check()) {
        if (ShuffledCallsigns.length > currentCallsignIndex + 1) {
            currentCallsignIndex += 1;
            nextCallsignIndex += 1;
            showCalls();
            clear();
            if (checkCountry()) {
                CallsignHint.innerHTML = "";
            } else {
                previousHint();
                CoutryHint.style.backgroundColor = "red";
            }
        } else {
            if (checkCountry()) {
                previousHint();
                CoutryHint.style.backgroundColor = "red";
                done();
            } else {
                done();
                clear();
            }
        }
    } else {
        errors += 1;
        ErrorList.push(ShuffledCallsigns[currentCallsignIndex].icaoc + " - " + ShuffledCallsigns[currentCallsignIndex].calls + " - " + ShuffledCallsigns[currentCallsignIndex].country);
        errorstxt.innerHTML = errors;

        errorstxt.style.color = "red"; // Pirosra állítjuk
        setTimeout(() => {
            errorstxt.style.color = "black"; // Majd visszaállítjuk feketére
        }, 330); // 500 ms múlva vált vissza feketére
        setTimeout(() => {
            errorstxt.style.color = "red";
        }, 660);
        setTimeout(() => {
            errorstxt.style.color = "black";
        }, 1000);

    }
}

function clear(){
    document.getElementById("Callsign").value = "";
    document.getElementById("ICAOcode").value = "";
    document.querySelector(".dropdown-input").value = "";
    CoutryHint.style.backgroundColor = "white";
    IcaoHint.innerHTML = "";
    CoutryHint.innerHTML = "";
    CallsignHint.innerHTML = "";

    const options = dropdownList.getElementsByClassName('dropdown-item');
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "";
    }
}

function previousHint(){
    IcaoHint.innerHTML = ShuffledCallsigns[currentCallsignIndex - 1].icaoc;
    CallsignHint.innerHTML = ShuffledCallsigns[currentCallsignIndex - 1].calls;
    CoutryHint.innerHTML = ShuffledCallsigns[currentCallsignIndex - 1].country;
}

function hint(){
    IcaoHint.innerHTML = ShuffledCallsigns[currentCallsignIndex].icaoc;
    CallsignHint.innerHTML = ShuffledCallsigns[currentCallsignIndex].calls;
    CoutryHint.innerHTML = ShuffledCallsigns[currentCallsignIndex].country;
    CoutryHint.style.backgroundColor = "white";
}

function check(){
    const Callsign = document.getElementById("Callsign");
    const ICAOcode = document.getElementById("ICAOcode");
    const currentCallsign = ShuffledCallsigns[currentCallsignIndex];

    if(mode === "basic"){
        if(currentCallsign.calls.toLowerCase() === Callsign.value.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(currentCallsign.icaoc.toLowerCase() === ICAOcode.value.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    }
}

function checkCountry() {
    if(countryName.toLowerCase() === ShuffledCallsigns[currentCallsignIndex - 1].country.toLowerCase()){
        return true;
    }
    else{
        return false;
    } 
}

function done(){
    currentCallsignIndex = 0;
    nextCallsignIndex = 1;
    errors = 0;
    errorstxt.innerHTML = errors;
    showCalls();
    filterAndShuffle();
    if(ErrorList.length < 1){
        alert('Congratulations! You have completed all the constraints.');
    }
    else{
        // Create a downloadable .txt file for the ErrorList
        const errorContent = ErrorList.join("\n");
        const blob = new Blob([errorContent], { type: 'text/plain' });
        const downloadLink = document.createElement('a');
        
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'ErrorList.txt'; // File name for download
        downloadLink.textContent = 'Download ErrorList';
        
        // Append the download link to the DOM so the user can click it
        document.body.appendChild(downloadLink);
        downloadLink.click();  // Automatically trigger the download
        document.body.removeChild(downloadLink);  // Clean up the link from DOM
        
        ErrorList.length = 0;
        errors = 0;
    }  
}

function deleteError(){
    errors -= 1;
    errorstxt.innerHTML = errors;
    //console.log("előtte: " + ErrorList.join("\n"))
    ErrorList.pop();
    //console.log("utána: " + ErrorList.join("\n"))
}

function refresh(){
    var selectFromValue = document.getElementById('SelectFrom').value;
    var selectToValue = document.getElementById('selectTo').value;

    if (selectFromValue === "" || selectToValue === "") {
        ShuffledCallsigns = shuffle(IcaoCallsigns);    
    } else{
        filterAndShuffle();
    }
    currentCallsignIndex = 0;
    nextCallsignIndex = 1;
    errors = 0;
    showCalls();
    clear();
}
