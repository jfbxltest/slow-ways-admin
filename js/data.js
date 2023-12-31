const getActivityById = (id) => obj[1].activities?.find((a) => a.id == id);

const getRefs = () => obj[0].refs;

const uptadeActivityTitle = (activityId, title) => {
  const activity = obj[1].activities?.find((a) => a.id == activityId);
  activity.title = title;
};

const uptadeActivityDescription = (activityId, description) => {
  const activity = obj[1].activities?.find((a) => a.id == activityId);
  activity.description = description;
};

const uptadeActivityTypes = (activityId, types) => {
  const activity = obj[1].activities?.find((a) => a.id == activityId);
  activity.types = types;
};

const uptadeActivityLanguages = (activityId, languages) => {
  const activity = obj[1].activities?.find((a) => a.id == activityId);
  activity.languages = languages;
};

const uptadeActivityOrganisateur = (activityId, organisateur) => {
  const activity = obj[1].activities?.find((a) => a.id == activityId);
  activity.organisateur = organisateur;
};

const uptadeActivityData = (id, data) => {
  console.log("***** data activity updated", data);
};

const obj = [
  {
    refs: {
      types: {
        fr: [
          "balade",
          "nature",
          "histoire",
          "f\u00eate",
          "art",
          "culture",
          "architecture",
          "patrimoine-historique",
          "espace public",
          "musique",
          "voie lente",
          "sport",
          "course \u00e0 pied",
        ],
        en: [
          "walk",
          "nature",
          "history",
          "party",
          "art",
          "culture",
          "architecture",
          "cultural heritage",
          "public space",
          "music",
          "slow way",
          "sport",
          "running",
        ],
        nl: [
          "wandeling",
          "natuur",
          "geschiedenis",
          " feest",
          "kunst",
          "cultuur",
          "architectuur",
          "historisch erfgoed",
          "openbare ruimte",
          "muziek",
          "trage wegen",
          "sport",
          "lopen",
        ],
      },
      dates: {
        fr: ["vendredi 13 octobre", "samedi 14 octobre", "dimanche 15 octobre"],
        en: ["fryday 13 october", "saturday 14 october", "sunday 15 october"],
        nl: ["vrijdag 13 oktober", "zaterdag 14 oktober", "zondag 15 oktober"],
      },
      public: [
        { fr: ["Tout public", "enfants", "adultes"] },
        { en: ["all", "children", "adult"] },
        { nl: ["enderen", "kinderen", "adult"] },
      ],
      languages: ["none", "nederland", "french", "english"],
      langs: ["", "nl", "fr", "en"],
      infosPratiques: {
        fr: "Infos pratiques",
        en: "Practical info",
        nl: "Praktische info",
      },
      price: { fr: "Prix", en: "Price", nl: "Prijs" },
      activitesprestexte: {
        fr: "Langue de l'activit\u00e9 : ",
        nl: "Taal van de activiteit : ",
        en: "Language of the activity : ",
      },
      organiser: {
        fr: "Organisateur : ",
        en: "Organiser : ",
        nl: "Organisator : ",
      },
      reservation: {
        fr: ["R\u00e9servation obligatoire", "oui", "non"],
        en: ["Reservation mandatory", "Yes", "No"],
        nl: ["Reservatie verplicht", "Ja", "Nee"],
      },
      mainmenu: {
        fr: "Menu principal",
        en: "Main page",
        nl: "Hoofdmenu",
      },
    },
  },
  {
    activities: [
      {
        id: "01",
        title: "Parcours cont\u00e9 de Tour & Taxis \u00e0 Bockstael",
        description: {
          nl: "Qui a dit que le chemin le plus court \u00e9tait celui trac\u00e9 par la nature ? La nature profite des interstices et suit des sentes tortueuses, recherchant tant\u00f4t l'ombre et tant\u00f4t le soleil. Qui va lentement va s\u00fbrement. Pour \u00e9viter le danger, pour profiter du moment, pour ne pas aller quelque part, mais ailleurs ; il faut prendre le rallongi qui serpente vers la libert\u00e9. Vous \u00eates press\u00e9\u00b7es ? Faites un d\u00e9tour !",
          fr: "Qui a dit que le chemin le plus court \u00e9tait celui trac\u00e9 par la nature ? La nature profite des interstices et suit des sentes tortueuses, recherchant tant\u00f4t l'ombre et tant\u00f4t le soleil. Qui va lentement va s\u00fbrement. Pour \u00e9viter le danger, pour profiter du moment, pour ne pas aller quelque part, mais ailleurs ; il faut prendre le rallongi qui serpente vers la libert\u00e9. Vous \u00eates press\u00e9\u00b7es ? Faites un d\u00e9tour !",
          en: "Qui a dit que le chemin le plus court \u00e9tait celui trac\u00e9 par la nature ? La nature profite des interstices et suit des sentes tortueuses, recherchant tant\u00f4t l'ombre et tant\u00f4t le soleil. Qui va lentement va s\u00fbrement. Pour \u00e9viter le danger, pour profiter du moment, pour ne pas aller quelque part, mais ailleurs ; il faut prendre le rallongi qui serpente vers la libert\u00e9. Vous \u00eates press\u00e9\u00b7es ? Faites un d\u00e9tour !",
        },
        types: [0, 1],
        dates: [2],
        horaire: "15:00",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://www.conteenbalade.be/programme/itineraire-bis/",
        },
        illustration: "01-baladeconte-passage.jpg",
        duration: "around hh/mm",
        organisateur: {
          name: "Conte en balade",
          link: "https://www.conteenbalade.be/",
        },
        location: {
          nom: "Laeken",
          adress: {
            number: "86C",
            street: "Parc Tour et Taxis",
            town: "Laeken",
            postcode: "1020",
            lieudit: "Entr\u00e9e du Parc Tour et Taxis",
          },
          coordonates: {
            lat: 50.8677650999999997338818502612411975860595703125,
            lon: 4.34049200000000023891288947197608649730682373046875,
          },
        },
        public: ["all", "children", "adult"],
        languages: ["fr"],
      },
      {
        id: "02",
        title:
          "Donderberg, ses chemins vicinaux et de sa riche biodiversit\u00e9",
        description: {
          nl: "Baladez-vous sur des chemins vicinaux centenaires traversant le site du Donderberg, en contrebas des serres du Stuyvenbergh, et provenant de la Donation royale.\u003Cbr\u003ED\u00e9couvrez un \u00e9crin de nature sauvage, ses arbres -  dont 14 arbres remarquables - et sa prairie, menac\u00e9s par le projet immobilier de la Ville. Soutenez le collectif qui d\u00e9fend le site.\u003Cbr\u003EL'\u00e9v\u00e8nement se poursuit \u00e0 Parckfarm jusque 18h.",
          fr: "Baladez-vous sur des chemins vicinaux centenaires traversant le site du Donderberg, en contrebas des serres du Stuyvenbergh, et provenant de la Donation royale.\u003Cbr\u003ED\u00e9couvrez un \u00e9crin de nature sauvage, ses arbres -  dont 14 arbres remarquables - et sa prairie, menac\u00e9s par le projet immobilier de la Ville. Soutenez le collectif qui d\u00e9fend le site.\u003Cbr\u003EL'\u00e9v\u00e8nement se poursuit \u00e0 Parckfarm jusque 18h.",
          en: "Baladez-vous sur des chemins vicinaux centenaires traversant le site du Donderberg, en contrebas des serres du Stuyvenbergh, et provenant de la Donation royale.\u003Cbr\u003ED\u00e9couvrez un \u00e9crin de nature sauvage, ses arbres -  dont 14 arbres remarquables - et sa prairie, menac\u00e9s par le projet immobilier de la Ville. Soutenez le collectif qui d\u00e9fend le site.\u003Cbr\u003EL'\u00e9v\u00e8nement se poursuit \u00e0 Parckfarm jusque 18h.",
        },
        types: [0, 8],
        dates: [2],
        horaire: "14:00-16:30",
        price: "0",
        booking: false,
        bookinglinks: { tel: "", mail: "", link: "" },
        illustration: "02-donderberg.jpg",
        duration: "around hh/mm",
        organisateur: {
          name: "Collectif Save Dondeberg",
          link: "https://www.facebook.com/SaveDonderberg/",
        },
        location: {
          nom: "Laeken",
          adress: {
            number: "113-115",
            street: "rue des Horticulteurs",
            town: "Laeken",
            postcode: "1020",
            lieudit: "Portail entre les n\u00b0s 109 et 115",
          },
          coordonates: {
            lat: 50.8824818398785936324202339164912700653076171875,
            lon: 4.34975729999999938257815301767550408840179443359375,
          },
        },
        public: ["all"],
        language: ["fr"],
      },
      {
        id: "03",
        title: "Slow Ways Halloween parade",
        description: {
          nl: "Nous vous attendons, d\u00e9guis\u00e9s ou non, petits ou grands, pour une promenade \u00e0 la d\u00e9couverte des voies lentes du quartier et \u00e0 la recherche des bonbons cach\u00e9s (chasse au tr\u00e9sors). Apr\u00e8s donnerie des d\u00e9guisements et go\u00fbter avec les participants et les menas de Fedasil. Apportez des d\u00e9guisements et des gateaux, jus... Nous aurons des coloriages pour vous!",
          fr: "Nous vous attendons, d\u00e9guis\u00e9s ou non, petits ou grands, pour une promenade \u00e0 la d\u00e9couverte des voies lentes du quartier et \u00e0 la recherche des bonbons cach\u00e9s (chasse au tr\u00e9sors). Apr\u00e8s donnerie des d\u00e9guisements et go\u00fbter avec les participants et les menas de Fedasil. Apportez des d\u00e9guisements et des gateaux, jus... Nous aurons des coloriages pour vous!",
          en: "Nous vous attendons, d\u00e9guis\u00e9s ou non, petits ou grands, pour une promenade \u00e0 la d\u00e9couverte des voies lentes du quartier et \u00e0 la recherche des bonbons cach\u00e9s (chasse au tr\u00e9sors). Apr\u00e8s donnerie des d\u00e9guisements et go\u00fbter avec les participants et les menas de Fedasil. Apportez des d\u00e9guisements et des gateaux, jus... Nous aurons des coloriages pour vous!",
        },
        types: [0, 3],
        dates: [2],
        horaire: "14:30-17:30",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://forms.gle/4d56YYTMFVSLgdEc8",
        },
        illustration: "palmiers-eleonore_parade.jpg",
        duration: "14h30-17h30",
        organisateur: {
          name: "Sous les palmiers d'El\u00e9onore",
          link: "https://www.facebook.com/profile.php?id=100070329783942",
        },
        location: {
          nom: "Woluwe Saint Pierre",
          adress: {
            number: "80",
            street: "Rue des Palmiers",
            town: "Woluwe Saint Pierre",
            postcode: "1150",
            lieudit: "Sous les Palmiers",
          },
          coordonates: {
            lat: 50.825846213052358280037879012525081634521484375,
            lon: 4.407957452888769722676443052478134632110595703125,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr", "nl", "en"],
      },
      {
        id: "04",
        title: "Visite guid\u00e9e graffiti",
        description: {
          nl: "Fais le Trottoir propose une visite guid\u00e9e anim\u00e9e par deux personnes dont un artiste. Lors de la balade, ils d\u00e9codent les signatures, expliquent l\u2019historique et les techniques de travail et les m\u00e9canismes propres \u00e0 ce mouvement.  Au gr\u00e9 du parcours, vous d\u00e9couvrez tags, graff, pochoirs, collages, stickers, fresques murales qui se glissent notamment au d\u00e9tours des passerelles pi\u00e9tonnes, tunnels, raccourcis discrets...",
          fr: "Fais le Trottoir propose une visite guid\u00e9e anim\u00e9e par deux personnes dont un artiste. Lors de la balade, ils d\u00e9codent les signatures, expliquent l\u2019historique et les techniques de travail et les m\u00e9canismes propres \u00e0 ce mouvement.  Au gr\u00e9 du parcours, vous d\u00e9couvrez tags, graff, pochoirs, collages, stickers, fresques murales qui se glissent notamment au d\u00e9tours des passerelles pi\u00e9tonnes, tunnels, raccourcis discrets...",
          en: "Fais le Trottoir propose une visite guid\u00e9e anim\u00e9e par deux personnes dont un artiste. Lors de la balade, ils d\u00e9codent les signatures, expliquent l\u2019historique et les techniques de travail et les m\u00e9canismes propres \u00e0 ce mouvement.  Au gr\u00e9 du parcours, vous d\u00e9couvrez tags, graff, pochoirs, collages, stickers, fresques murales qui se glissent notamment au d\u00e9tours des passerelles pi\u00e9tonnes, tunnels, raccourcis discrets...",
        },
        types: [0, 4],
        dates: [2],
        horaire: "14:00-15h30",
        price: "12",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "visitegraffiti@gmail.com",
          link: "",
        },
        illustration: "Visit-graffiti_MIMA.jpg",
        Duration: "1h30",
        organisateur: {
          name: "Fais le trottoir",
          link: "https://www.faisletrottoir.com/",
        },
        location: {
          nom: "Molenbeek",
          adress: {
            number: "41",
            street: "Quai du Hainaut",
            town: "Molenbeek",
            postcode: "1080",
            lieudit: "Mima",
          },
          coordonates: {
            lat: 50.8509636000000000422005541622638702392578125,
            lon: 4.3354029000000000593217919231392443180084228515625,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr"],
      },
      {
        id: "05",
        title:
          "7 Walks: WALK #03 \u2013 Little rivers together make big streams, the world as\u00a0a\u00a0work\u00a0of\u00a0art",
        description: {
          nl: "7 Walks is een artistiek onderzoekstraject in samenwerking met gastwandelaars en deelnemers. Met wandelen als publieke onderzoeksmethode wil het project in directe relatie met de natuurlijke of stedelijke omgeving, de ecologie van de kunsten verbinden met een natuurlijk gemeengoed - water. Voor nadine ontwikkelen we drie nieuwe wandelingen in Brussel. Het wandelproject zet een dialoog op over concepten als eigendom, publieke goederen en beheer en onderzoekt vormen van redistributie van waarde en mutualisering. Tegelijkertijd onderzoeken we cartografie vanuit een alternatieve pedagogische praktijk. De wandelingen activeren de archiefdocumenten die we presenteren in nadine's tentoonstellingsruimte. Die belichten de rol van anarchist en geograaf Elis\u00e9e Reclus bij de oprichting van de Universit\u00e9 Nouvelle en het Institut des Hautes Etudes, twee nieuwe instellingen die zich presenteerden als radicaal en vernieuwend, in Brussel in 1894. Het Institut G\u00e9ographique dat Reclus in die institutionele context oprichtte, cre\u00eberde globes en 3D-kaarten die voortkwamen uit een kritische en ge\u00efntegreerde pedagogie. 2D-kaarten zouden volgens Reclus enkel onderdanen voortbrengen, geen kritische burgers. De grote traditie van het anarchistisch onderwijs zweerde namelijk bij het axioma dat het beste leren gebeurt... via onze voetzolen. We volgen dan ook \u00c9lis\u00e9e Reclus' aanmoediging in zijn boek Histoire d'un Ruisseau om vooraleer enige kaart te raadplegen steeds de dichtstbijzijnde rivier op te zoeken en te leren vanuit de directe observatie van de omgeving. Tijdens de wandelingen bevragen we de donkere kant van cartografie als een infrastructuur van macht en surveillance, iets wat ook zichtbaar wordt in het stedelijk weefsel. We stellen daarbij de vraag of het mogelijk is vanuit een artistieke praktijk die ingebed is in het landschap, een emancipatorisch cartografisch instrument te co-cre\u00ebren, dat nieuwe verhalen, samenwerkingsverbanden en agency kan genereren?",
          fr: "7 Walks is an artistic research trajectory by the artist duo Vermeir & Heiremans in collaboration with guest walkers and participants. Using walking as a public research method, developing a direct relation with the natural or urban environment, the project aims to connect the ecology of the arts with a natural common good \u2013 water.\u003Cbr\u003EVermeir & Heiremans are developing three new walks in Brussels for their exhibition in n0dine.\u003Cbr\u003EOn Sunday 15 October, during Slow Ways Weekend, the third walk will take place in Ixelles with guests Tatiana Debroux and Margot Elmer. Note that the guided walk will be held in English.\u003Cbr\u003EWALK #03 \u2013 Little rivers together make big streams, the world as a work of art\u003Cbr\u003E'This walk focuses on the role of art in society. We walk to the source of the vaulted Maelbeek, near La Cambre Abbey, where Henry Van de Velde founded his Nationale Hoogere School voor Sierkunst in 1926. He started his career influenced by anarchist writings such as Proudhon\u2019s book: Du principe de l\u2019art et de sa destination sociale.\u003Cbr\u003EThe question of the role of art was as alive then as it is today. An international meeting point were this question was addressed was the Universit\u00e9 Nouvelle in Brussels, where Elis\u00e9e Reclus, as well as neo-impressionist artists like Th\u00e9o Van Rysselberghe, writers like Emile Verhaeren, and also Van de Velde taught.\u003Cbr\u003EQuestions around the autonomy of the artist, the political instrumentalisation of artistic practice, the question of whether new forms of expression in art could be the starting point for a renewal of society were all on the agenda. One of the basic ideas of anarchism, the importance of individual freedom in relation to solidarity was expressed by the neo-impressionists\u2019 divisionism, which was based on science. In the pointillist technique, each point retains its colour and individuality, but to the eye they merge harmoniously.\u003Cbr\u003EFor Elis\u00e9e Reclus, the true work of art was the world itself, and in his vision of social geography and radical education, with its focus on physical labour and a direct relationship with the environment, these neo-impressionist artists were social reformers whom he engaged for the giant globes and relief maps he wanted to realise in order to reduce the gap between the world and its representations.\u003Cbr\u003EElis\u00e9e Reclus lived close by the lakes of Ixelles, and we just have to cross over to the Abdijstraat where there are still some studios of some of these artists, grouped as Les XX(1883-1893) and later as La Libre Esth\u00e9tique (1894-1914). The group, of which Anna Boch was the only female artist, played an important role in avant-garde art in Europe.",
          en: "7 Walks is an artistic research trajectory by the artist duo Vermeir & Heiremans in collaboration with guest walkers and participants. Using walking as a public research method, developing a direct relation with the natural or urban environment, the project aims to connect the ecology of the arts with a natural common good \u2013 water.\u003Cbr\u003EVermeir & Heiremans are developing three new walks in Brussels for their exhibition in n0dine.\u003Cbr\u003EOn Sunday 15 October, during Slow Ways Weekend, the third walk will take place in Ixelles with guests Tatiana Debroux and Margot Elmer. Note that the guided walk will be held in English.\u003Cbr\u003EWALK #03 \u2013 Little rivers together make big streams, the world as a work of art\u003Cbr\u003E'This walk focuses on the role of art in society. We walk to the source of the vaulted Maelbeek, near La Cambre Abbey, where Henry Van de Velde founded his Nationale Hoogere School voor Sierkunst in 1926. He started his career influenced by anarchist writings such as Proudhon\u2019s book: Du principe de l\u2019art et de sa destination sociale.\u003Cbr\u003EThe question of the role of art was as alive then as it is today. An international meeting point were this question was addressed was the Universit\u00e9 Nouvelle in Brussels, where Elis\u00e9e Reclus, as well as neo-impressionist artists like Th\u00e9o Van Rysselberghe, writers like Emile Verhaeren, and also Van de Velde taught.\u003Cbr\u003EQuestions around the autonomy of the artist, the political instrumentalisation of artistic practice, the question of whether new forms of expression in art could be the starting point for a renewal of society were all on the agenda. One of the basic ideas of anarchism, the importance of individual freedom in relation to solidarity was expressed by the neo-impressionists\u2019 divisionism, which was based on science. In the pointillist technique, each point retains its colour and individuality, but to the eye they merge harmoniously.\u003Cbr\u003EFor Elis\u00e9e Reclus, the true work of art was the world itself, and in his vision of social geography and radical education, with its focus on physical labour and a direct relationship with the environment, these neo-impressionist artists were social reformers whom he engaged for the giant globes and relief maps he wanted to realise in order to reduce the gap between the world and its representations.\u003Cbr\u003EElis\u00e9e Reclus lived close by the lakes of Ixelles, and we just have to cross over to the Abdijstraat where there are still some studios of some of these artists, grouped as Les XX(1883-1893) and later as La Libre Esth\u00e9tique (1894-1914). The group, of which Anna Boch was the only female artist, played an important role in avant-garde art in Europe.",
        },
        types: [0, 4, 5],
        dates: [2],
        horaire: "14:00-18:00",
        price: "0",
        booking: true,
        bookinglinks: { tel: "", mail: "loes@nadine.be", link: "" },
        illustration: "Nadine_7walks.jpg",
        duration: "around 4h00",
        organisateur: {
          name: "Nadine",
          link: "https://index.nadine.be/",
        },
        location: {
          nom: "Ixelles",
          adress: {
            number: "217",
            street: "Vleurgatsesteenweg",
            town: "Ixelles",
            postcode: "1050",
            lieudit: "Ten Bosch left side of the India Embassy",
          },
          coordonates: {
            lat: 50.820214949305267282397835515439510345458984375,
            lon: 4.36603722883535727561366002191789448261260986328125,
          },
        },
        public: ["all"],
        language: ["en"],
      },
      {
        id: "06",
        title: "COMPLET-FULL-VOLZET-D\u00e9couverte au sud de Bruxelles",
        description: {
          fr: "Le QuartierUnionWijk propose une randonn\u00e9e de +/- 13km entre Forest et Uccle, y compris une pause pour grignoter un morceau. Le d\u00e9but de la balade sera agr\u00e9ment\u00e9 d'un petit parcours d\u00e9couverte dans le quartier Coghen avec l'accent sur les r\u00e9alisations modernistes de l'architecte Louis Tenaerts. Ces d\u00e9couvertes culturelles seront suivies par une promenade au gr\u00e9 des sentiers, passages et espaces verts de Forest et Uccle. ",
          en: "Le QuartierUnionWijk propose une randonn\u00e9e de +/- 13km entre Forest et Uccle, y compris une pause pour grignoter un morceau. Le d\u00e9but de la balade sera agr\u00e9ment\u00e9 d'un petit parcours d\u00e9couverte dans le quartier Coghen avec l'accent sur les r\u00e9alisations modernistes de l'architecte Louis Tenaerts. Ces d\u00e9couvertes culturelles seront suivies par une promenade au gr\u00e9 des sentiers, passages et espaces verts de Forest et Uccle. ",
          nl: "Le QuartierUnionWijk propose une randonn\u00e9e de +/- 13km entre Forest et Uccle, y compris une pause pour grignoter un morceau. Le d\u00e9but de la balade sera agr\u00e9ment\u00e9 d'un petit parcours d\u00e9couverte dans le quartier Coghen avec l'accent sur les r\u00e9alisations modernistes de l'architecte Louis Tenaerts. Ces d\u00e9couvertes culturelles seront suivies par une promenade au gr\u00e9 des sentiers, passages et espaces verts de Forest et Uccle. ",
        },
        types: [0, 1, 6],
        dates: [2],
        horaire: "10:30-14:00",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://forms.gle/GiLohkPJY7xZL3Ws9",
        },
        illustration: "06-quartierunionwijk_balade-au-sud-complet.jpg",
        duration: "around hh/mm",
        organisateur: {
          name: "Quartier Union Wijk",
          link: "https://www.facebook.com/groups/655852268592138",
        },
        location: {
          nom: "Forest",
          adress: {
            number: "314",
            street: "Chauss\u00e9e de Bruxelles",
            town: "Forest",
            postcode: "1190",
            lieudit: "Entr\u00e9e Parc Duden",
          },
          coordonates: {
            lat: 50.81620000000000203499439521692693233489990234375,
            lon: 4.33030000000000026005864128819666802883148193359375,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr"],
      },
      {
        id: "07",
        title: "Serre-party : c\u00e9l\u00e9bration du Potajoie.",
        description: {
          en: " La 'Serre-Party' annuelle - f\u00eate autour de la construction progressive d'une grande serre de quartier - dans le cadre du Slow Ways WE est l\u00e0 pour c\u00e9l\u00e9brer le Potajoie comme lieu de passage et de rencontre. Bienvenue \u00e0 tous, toutes g\u00e9n\u00e9rations confondues et accessible aux PMR. La f\u00eate est gratuite vous pouvez librement participer au savoureux buffet garni par les habitants.",
          fr: " La 'Serre-Party' annuelle - f\u00eate autour de la construction progressive d'une grande serre de quartier - dans le cadre du Slow Ways WE est l\u00e0 pour c\u00e9l\u00e9brer le Potajoie comme lieu de passage et de rencontre. Bienvenue \u00e0 tous, toutes g\u00e9n\u00e9rations confondues et accessible aux PMR. La f\u00eate est gratuite vous pouvez librement participer au savoureux buffet garni par les habitants.",
          nl: " La 'Serre-Party' annuelle - f\u00eate autour de la construction progressive d'une grande serre de quartier - dans le cadre du Slow Ways WE est l\u00e0 pour c\u00e9l\u00e9brer le Potajoie comme lieu de passage et de rencontre. Bienvenue \u00e0 tous, toutes g\u00e9n\u00e9rations confondues et accessible aux PMR. La f\u00eate est gratuite vous pouvez librement participer au savoureux buffet garni par les habitants.",
        },
        types: [3],
        dates: [2],
        horaire: "13:00",
        price: "0",
        booking: false,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "http://www.vieux-sainte-anne.be/",
        },
        illustration: "7-sainte_anne-auderghem.jpg",
        duration: "around hh/mm",
        organisateur: {
          name: "Le quartier du vieux-Sainte Anne",
          link: "http://www.vieux-sainte-anne.be/",
        },
        location: {
          nom: "Auderghem",
          adress: {
            number: "",
            street: "rue Montagne de Sable",
            town: "Auderghem",
            postcode: "1160",
            lieudit:
              "Jardin des Villageois Acc\u00e8s par la rue du Villageois 89 ou la chauss\u00e9e de Wavre 1690",
          },
          coordonates: {
            lat: 50.8164959570229228802418219856917858123779296875,
            lon: 4.43033968103875697153171131503768265247344970703125,
          },
        },
        public: ["all"],
        language: ["fr", "en"],
      },
      {
        id: "08",
        title: "Les quartiers de Forest via raccourcis et sentiers",
        description: {
          nl: "Op zondag 15 oktober nodigt QuartierWielsWijk je uit om Vorst te ontdekken door via een maximum aan paden en sluiproutes door enkele soms weinig bekende wijken te wandelen. Maak je dus klaar voor een wandeling en een bezoek aan het historisch en stedelijk erfgoed. De bewonersvereniging QuartierWielsWijk promoot sinds 2013 actief het wandelen in de buurt.\u003Cbr\u003EVanuit de Sint-Antonius wijk vertrekken we naar de Vroegegroenten - Luttrebrug wijk, aan de hand van een nieuw pad langs het Wielsmoeras. Van daaruit doorkruisen we de Bervoetswijk richting de Missidorwijk om daarna te passeren langs de Groene Vorst tuinwijk. Als je voeten nog steeds meewillen, wandelen we naar de Abdijwijk.\u003Cbr\u003EDus een mooie wandeling in het verschiet langs paden en wegeltjes die je misschien nog nooit opgemerkt of gebruikt hebt. De tocht kan enkele uren duren, maar voel je vrij op elk moment te vertrekken.\u003Cbr\u003EVoorzie zeker eten en drinken om een snackpauze te houden!",
          fr: "Le QuartierWielsWijk vous invite le dimanche 15 octobre \u00e0 d\u00e9couvrir Forest en reliant, \u00e0 pied, certains de ses quartiers parfois m\u00e9connus via un maximum de sentiers et de raccourcis. \u003Cbr\u003EC'est donc \u00e0 la fois une promenade et une visite patrimoniale historique et urbanistique.\u003Cbr\u003ELe QuartierWielsWijk, association d\u2019habitants, promeut, depuis 2013, le d\u00e9placement p\u00e9destre local. Nous partirons du quartier Saint-Antoine pour relier le quartier Primeurs Pont de Luttre en passant voir le Marais Wiels via un nouveau sentier. De l\u00e0 nous traverserons le quartier Bervoets pour rejoindre le quartier Messidor que nous quitterons pour rejoindre la Cit\u00e9-jardin Forest Vert. Si vos pieds en ont encore le courage, nous descendrons vers le quartier de l'abbaye. Tout cela via des chemins et sentiers que vous n'avez peut-\u00eatre jamais remarqu\u00e9s ou emprunt\u00e9s. Une belle promenade en perspective! Elle peut durer plusieurs heures mais libre \u00e0 vous de la  quitter \u00e0 tout moment.\u003Cbr\u003ESinon, pr\u00e9voyez \u00e0 boire et \u00e0 manger, nous ferons une pause casse-cro\u00fbte !",
          en: "Le QuartierWielsWijk vous invite le dimanche 15 octobre \u00e0 d\u00e9couvrir Forest en reliant, \u00e0 pied, certains de ses quartiers parfois m\u00e9connus via un maximum de sentiers et de raccourcis. \u003Cbr\u003EC'est donc \u00e0 la fois une promenade et une visite patrimoniale historique et urbanistique.\u003Cbr\u003ELe QuartierWielsWijk, association d\u2019habitants, promeut, depuis 2013, le d\u00e9placement p\u00e9destre local. Nous partirons du quartier Saint-Antoine pour relier le quartier Primeurs Pont de Luttre en passant voir le Marais Wiels via un nouveau sentier. De l\u00e0 nous traverserons le quartier Bervoets pour rejoindre le quartier Messidor que nous quitterons pour rejoindre la Cit\u00e9-jardin Forest Vert. Si vos pieds en ont encore le courage, nous descendrons vers le quartier de l'abbaye. Tout cela via des chemins et sentiers que vous n'avez peut-\u00eatre jamais remarqu\u00e9s ou emprunt\u00e9s. Une belle promenade en perspective! Elle peut durer plusieurs heures mais libre \u00e0 vous de la  quitter \u00e0 tout moment.\u003Cbr\u003ESinon, pr\u00e9voyez \u00e0 boire et \u00e0 manger, nous ferons une pause casse-cro\u00fbte !",
        },
        types: [0, 1, 7],
        dates: [2],
        horaire: "10:30",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "quartierwielswijk@gmail.com",
          link: "",
        },
        illustration: "8-marais-wiels.jpg",
        duration: "around hh/mm",
        organisateur: {
          name: "QuartierWielsWijk",
          link: "http://www.quartierwielswijk.be/",
        },
        location: {
          nom: "Forest",
          adress: {
            number: "1",
            street: "Rue Pierre Decoster",
            town: "Forest",
            postcode: "1190",
            lieudit: "Place Orban",
          },
          coordonates: {
            lat: 50.8257906246404189687382313422858715057373046875,
            lon: 4.32589993466057620707942987792193889617919921875,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr", "nl", "en"],
      },
      {
        id: "09",
        title: "Aux marges d'Uccle",
        description: {
          nl: "Entre la ville et la campagne, il y a la banlieue, les faubourgs, la p\u00e9riph\u00e9rie, la deuxi\u00e8me couronne. Ce sont les marges de la ville. Et l\u00e0 o\u00f9 la densit\u00e9 diminue, s\u2019\u00e9crit une incroyable diversit\u00e9, tant de typologies que de milieux sociaux. Y coexistent : des villas luxueuses ou moins, des cit\u00e9s-jardins ou simplement sociales, des lotissements, des immeubles chics ou moins, des alignements de maisons \u00ab \u00ab bel \u00e9tage \u00bb, mais aussi des noyaux villageois. Entre ceux-ci, il y a aussi des espaces non b\u00e2tis : zones semi-naturelles, r\u00e9serves naturelles, parcs, plaines de jeux, friches, potagers, bois et m\u00eame des terres agricoles. Et pour relier tout \u00e7a, des chemins, vicinaux ou non, des rues paisibles, des trottoirs bord\u00e9s de haies, en pav\u00e9s, en terre ou en dalles.\u003Cbr\u003EDans le cadre du Slow Way Weekend, organis\u00e9 par Walk.brussels, l\u2019ARAU vous invite \u00e0 arpenter ces \u00ab marges de la ville \u00bb \u00e0 pied, aux confins d\u2019Uccle, de Drogenbos et de Linkebeek.",
          fr: "Entre la ville et la campagne, il y a la banlieue, les faubourgs, la p\u00e9riph\u00e9rie, la deuxi\u00e8me couronne. Ce sont les marges de la ville. Et l\u00e0 o\u00f9 la densit\u00e9 diminue, s\u2019\u00e9crit une incroyable diversit\u00e9, tant de typologies que de milieux sociaux. Y coexistent : des villas luxueuses ou moins, des cit\u00e9s-jardins ou simplement sociales, des lotissements, des immeubles chics ou moins, des alignements de maisons \u00ab \u00ab bel \u00e9tage \u00bb, mais aussi des noyaux villageois. Entre ceux-ci, il y a aussi des espaces non b\u00e2tis : zones semi-naturelles, r\u00e9serves naturelles, parcs, plaines de jeux, friches, potagers, bois et m\u00eame des terres agricoles. Et pour relier tout \u00e7a, des chemins, vicinaux ou non, des rues paisibles, des trottoirs bord\u00e9s de haies, en pav\u00e9s, en terre ou en dalles.\u003Cbr\u003EDans le cadre du Slow Way Weekend, organis\u00e9 par Walk.brussels, l\u2019ARAU vous invite \u00e0 arpenter ces \u00ab marges de la ville \u00bb \u00e0 pied, aux confins d\u2019Uccle, de Drogenbos et de Linkebeek.",
          en: "Entre la ville et la campagne, il y a la banlieue, les faubourgs, la p\u00e9riph\u00e9rie, la deuxi\u00e8me couronne. Ce sont les marges de la ville. Et l\u00e0 o\u00f9 la densit\u00e9 diminue, s\u2019\u00e9crit une incroyable diversit\u00e9, tant de typologies que de milieux sociaux. Y coexistent : des villas luxueuses ou moins, des cit\u00e9s-jardins ou simplement sociales, des lotissements, des immeubles chics ou moins, des alignements de maisons \u00ab \u00ab bel \u00e9tage \u00bb, mais aussi des noyaux villageois. Entre ceux-ci, il y a aussi des espaces non b\u00e2tis : zones semi-naturelles, r\u00e9serves naturelles, parcs, plaines de jeux, friches, potagers, bois et m\u00eame des terres agricoles. Et pour relier tout \u00e7a, des chemins, vicinaux ou non, des rues paisibles, des trottoirs bord\u00e9s de haies, en pav\u00e9s, en terre ou en dalles.\u003Cbr\u003EDans le cadre du Slow Way Weekend, organis\u00e9 par Walk.brussels, l\u2019ARAU vous invite \u00e0 arpenter ces \u00ab marges de la ville \u00bb \u00e0 pied, aux confins d\u2019Uccle, de Drogenbos et de Linkebeek.",
        },
        types: [0, 1, 2],
        dates: [2],
        horaire: "10:00",
        price: "1.25\u20ac-12",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://www.arau.org/fr/visites/aux-marges-duccle/",
        },
        illustration: "09-arrau-uccle2.jpg",
        duration: "around hh/mm",
        organisateur: { name: "ARAU", link: "https://www.arau.org/fr/" },
        location: {
          nom: "Uccle",
          adress: {
            number: "1155",
            street: "Chauss\u00e9e d'Alsemberg",
            town: "Uccle",
            postcode: "1180",
            lieudit:
              "Devant la friterie du \u00ab Bourdon \u00bb au coin des chauss\u00e9es d\u2019Alsemberg et de Drogenbos",
          },
          coordonates: {
            lat: 50.787990234129978261989890597760677337646484375,
            lon: 4.3301624547752037841519268113188445568084716796875,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr"],
      },
      {
        id: "10",
        title: "25 voorstellen voor de toekomst van het Ter Kamerenbos",
        description: {
          nl: "Sinds 2020 hebben het Ter Kamerenbos, de sluiting ervan voor autoverkeer tijdens de pandemie en de gevolgen van deze beslissing veel aandacht gekregen in de pers, op sociale netwerken en in de publieke arena. ARAU steunt het vooruitzicht van een autovrij bos, ten gunste van zijn functie als groene ruimte en de diensten die het levert aan de (menselijke) wezens die er gebruik van maken!\u003Cbr\u003EARAU heeft in en rond het Ter Kamerenbos een parcours uitgestippeld met 25 voorstellen om het gebruik van het bos te verbeteren, evenals de manier waarop mensen er zich in en rondom het park verplaatsen (terugkeer van een tram op de Waterloolaan, herstel van de verbinding tussen het bos en de Louizalaan), en niet te vergeten de meer politieke vraag over het beheer van een site van regionaal belang.\u003Cbr\u003EDeze wandelreflectie vindt plaats in het kader van de Dag van het Zoni\u00ebnwoud.",
          fr: "Sinds 2020 hebben het Ter Kamerenbos, de sluiting ervan voor autoverkeer tijdens de pandemie en de gevolgen van deze beslissing veel aandacht gekregen in de pers, op sociale netwerken en in de publieke arena. ARAU steunt het vooruitzicht van een autovrij bos, ten gunste van zijn functie als groene ruimte en de diensten die het levert aan de (menselijke) wezens die er gebruik van maken!\u003Cbr\u003EARAU heeft in en rond het Ter Kamerenbos een parcours uitgestippeld met 25 voorstellen om het gebruik van het bos te verbeteren, evenals de manier waarop mensen er zich in en rondom het park verplaatsen (terugkeer van een tram op de Waterloolaan, herstel van de verbinding tussen het bos en de Louizalaan), en niet te vergeten de meer politieke vraag over het beheer van een site van regionaal belang.\u003Cbr\u003EDeze wandelreflectie vindt plaats in het kader van de Dag van het Zoni\u00ebnwoud.",
          en: "Sinds 2020 hebben het Ter Kamerenbos, de sluiting ervan voor autoverkeer tijdens de pandemie en de gevolgen van deze beslissing veel aandacht gekregen in de pers, op sociale netwerken en in de publieke arena. ARAU steunt het vooruitzicht van een autovrij bos, ten gunste van zijn functie als groene ruimte en de diensten die het levert aan de (menselijke) wezens die er gebruik van maken!\u003Cbr\u003EARAU heeft in en rond het Ter Kamerenbos een parcours uitgestippeld met 25 voorstellen om het gebruik van het bos te verbeteren, evenals de manier waarop mensen er zich in en rondom het park verplaatsen (terugkeer van een tram op de Waterloolaan, herstel van de verbinding tussen het bos en de Louizalaan), en niet te vergeten de meer politieke vraag over het beheer van een site van regionaal belang.\u003Cbr\u003EDeze wandelreflectie vindt plaats in het kader van de Dag van het Zoni\u00ebnwoud.",
        },
        types: [0, 8],
        dates: [2],
        horaire: "10:00-12:30",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://www.arau.org/fr/visites/25-voorstellen-voor-de-toekomst-van-het-terkamerenbos/",
        },
        illustration: "10-arau-bois-de-lacambre.jpg",
        duration: "around hh/mm",
        organisateur: { name: "Arau", link: "https://www.arau.org/fr/" },
        location: {
          nom: "",
          adress: {
            number: "55",
            street: "Terhulpensesteenweg",
            town: "Ukkel",
            postcode: "1180",
            lieudit: "Voor het torentje naast het retaurant Woodpecker",
          },
          coordonates: {
            lat: 50.79638110113696569669627933762967586517333984375,
            lon: 4.39672081177242102256741418386809527873992919921875,
          },
        },
        public: ["all", "children", "adult"],
        language: ["nl"],
      },
      {
        id: "11",
        title: "R\u00e9\u00e9criture de l'histoire dans le quartier du Sablon",
        description: {
          nl: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
          fr: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
          en: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
        },
        types: [0, 2],
        dates: [1],
        horaire: "14:00-15:30",
        price: "12",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://arkadia.be/fr/node/5661",
        },
        illustration: "Arkadia_Sablon.jpg",
        duration: "1h30",
        organisateur: { name: "Arkadia", link: "https://arkadia.be/" },
        location: {
          nom: "Bruxelles-ville",
          adress: {
            number: "66",
            street: "Coudenberg",
            town: "Bruxelles-ville",
            postcode: "1000",
            lieudit: "Ancienne pharmacie Delacre /pharmacie anglaise",
          },
          coordonates: {
            lat: 50.84343596316072222407456138171255588531494140625,
            lon: 4.358740665349831289177018334157764911651611328125,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr"],
      },
      {
        id: "12",
        title: "L'ancien cin\u00e9ma le Movy Club",
        description: {
          nl: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
          fr: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
          en: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
        },
        types: [0, 5],
        dates: [1],
        horaire: "14:00-15:30",
        price: "12",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://arkadia.be/fr/node/11547",
        },
        illustration: "Arkadia_cinemaMovy.jpg",
        duration: "1h30",
        organisateur: { name: "Arkadia", link: "https://arkadia.be/" },
        location: {
          nom: "Forest",
          adress: {
            number: "21",
            street: "rue des Moines",
            town: "Forest",
            postcode: "1190",
            lieudit: "Devant l'entr\u00e9e du cin\u00e9ma Le Movy Club",
          },
          coordonates: {
            lat: 50.82744017385417834020699956454336643218994140625,
            lon: 4.331915884657387749712142976932227611541748046875,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr"],
      },
      {
        id: "13",
        title: "Passage de Bruxelles : une id\u00e9e lumineuse",
        description: {
          nl: "Bruxelles comptera jusqu'\u00e0 50 passages couverts dans les ann\u00e9es 1850 et exportera le mod\u00e8le vers plusieurs autres villes de Belgique. Inaugur\u00e9es en 1847, les Galeries Royales Saint-Hubert sont parmi les plus anciennes d'Europe. Ces passages abritaient des intemp\u00e9ries une client\u00e8le ais\u00e9e et leur proposaient des sorties au th\u00e9\u00e2tre, cin\u00e9ma, restaurant et un acc\u00e8s \u00e0 des commerces vari\u00e9s. Nous allons parcourir l'histoire de trois de ces passages dont chacun d\u00e9gage une lumi\u00e8re, une po\u00e9sie et une nostalgie particuli\u00e8re.",
          fr: "Bruxelles comptera jusqu'\u00e0 50 passages couverts dans les ann\u00e9es 1850 et exportera le mod\u00e8le vers plusieurs autres villes de Belgique. Inaugur\u00e9es en 1847, les Galeries Royales Saint-Hubert sont parmi les plus anciennes d'Europe. Ces passages abritaient des intemp\u00e9ries une client\u00e8le ais\u00e9e et leur proposaient des sorties au th\u00e9\u00e2tre, cin\u00e9ma, restaurant et un acc\u00e8s \u00e0 des commerces vari\u00e9s. Nous allons parcourir l'histoire de trois de ces passages dont chacun d\u00e9gage une lumi\u00e8re, une po\u00e9sie et une nostalgie particuli\u00e8re.",
          en: "Bruxelles comptera jusqu'\u00e0 50 passages couverts dans les ann\u00e9es 1850 et exportera le mod\u00e8le vers plusieurs autres villes de Belgique. Inaugur\u00e9es en 1847, les Galeries Royales Saint-Hubert sont parmi les plus anciennes d'Europe. Ces passages abritaient des intemp\u00e9ries une client\u00e8le ais\u00e9e et leur proposaient des sorties au th\u00e9\u00e2tre, cin\u00e9ma, restaurant et un acc\u00e8s \u00e0 des commerces vari\u00e9s. Nous allons parcourir l'histoire de trois de ces passages dont chacun d\u00e9gage une lumi\u00e8re, une po\u00e9sie et une nostalgie particuli\u00e8re.",
        },
        types: [0, 2],
        dates: [1],
        horaire: "11:00-12:30",
        price: "12",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://arkadia.be/fr/visites/passages-de-bruxelles-une-id-e-lumineuse-bbea",
        },
        illustration: "Arkadia_galeries.jpg",
        duration: "1h30",
        organisateur: { name: "Arkadia", link: "https://arkadia.be/" },
        location: {
          nom: "Bruxelles-ville",
          adress: {
            number: "55",
            street: "Rue de la Madeleine",
            town: "Bruxelles-ville",
            postcode: "1000",
            lieudit: "Galerie Bortier",
          },
          coordonates: {
            lat: 50.844733673756678626887151040136814117431640625,
            lon: 4.35489289713732485864738919190131127834320068359375,
          },
        },
        public: ["all", "children", "adult"],
        language: ["fr"],
      },
      {
        id: "14",
        title: "La maison Langbehn + r\u00e9cital de guitare",
        description: {
          nl: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
          fr: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
          en: "Autour du Sablon, plusieurs b\u00e2timents illustrent la r\u00e9interpr\u00e9tation libre et \u00e9clectique des styles du pass\u00e9 qu\u2019eurent les architectes de la fin du XIXe et du XXe si\u00e8cle. Vous d\u00e9couvrirez ainsi sous un regard diff\u00e9rent, les Mus\u00e9es Royaux des Beaux-Arts, le conservatoire de musique, le square du Petit Sablon et diverses maisons particuli\u00e8res sur la Place du Grand Sablon.La restauration de l\u2019\u00e9glise Notre-Dame du Sablon sera bien entendu \u00e9voqu\u00e9e. Un cas d\u2019\u00e9cole pour les adeptes des id\u00e9es de Viollet-le-Duc que furent Auguste Schoy, Jules-Jacques Van Ysendyck et son fils Maurice Van Ysendyck !",
        },
        types: [0, 4, 9],
        dates: [2],
        horaire: "14:00-15h30",
        price: "30",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://arkadia.be/fr/visites/la-maison-langbehn-r-cital-de-guitare",
        },
        illustration: "Arkadia_Maison-Langbehn.jpg",
        duration: "1h30",
        organisateur: { name: "Arkadia", link: "https://arkadia.be/" },
        location: {
          nom: "Schaerbeek",
          adress: {
            number: "90-92",
            street: "Rue Renkin   ",
            town: "Schaerbeek",
            postcode: "1030",
            lieudit: "La maison Langbehn",
          },
          coordonates: {
            lat: 50.86806656644615287632404942996799945831298828125,
            lon: 4.3702178110914946529419466969557106494903564453125,
          },
        },
        public: ["all"],
        language: ["fr"],
      },
      {
        id: "15",
        title: "Langs trage wegen - zuidoost",
        description: {
          nl: "Is er een mooiere manier om een Trage Wegen Weekend te vieren dan met een lange wandeling? U gaat met een Brukselgids op stap doorheen het zuidoosten van Brussel, op zoek naar wegen waar het aangenaam wandelen is... of zou kunnen zijn. En, bijna tegen de verwachting in: dat zijn er nogal wat.Van bij het Centraal Station gaat het langs galerijen, groene verbindingen, binnenparken, spoorwegbermen, brede voetpaden, een desolate promenade en een campus richting een metrostation aan de rand van de Groene Wandeling. Telkens bekijken we wat de ruimte comfortabel maakt voor de wandelaar en wat er zou kunnen verbeteren.Stapschoenen komen goed van pas voor deze Thematour, want hij is zeven km lang. !",
          fr: "Is er een mooiere manier om een Trage Wegen Weekend te vieren dan met een lange wandeling? U gaat met een Brukselgids op stap doorheen het zuidoosten van Brussel, op zoek naar wegen waar het aangenaam wandelen is... of zou kunnen zijn. En, bijna tegen de verwachting in: dat zijn er nogal wat.Van bij het Centraal Station gaat het langs galerijen, groene verbindingen, binnenparken, spoorwegbermen, brede voetpaden, een desolate promenade en een campus richting een metrostation aan de rand van de Groene Wandeling. Telkens bekijken we wat de ruimte comfortabel maakt voor de wandelaar en wat er zou kunnen verbeteren.Stapschoenen komen goed van pas voor deze Thematour, want hij is zeven km lang. !",
          en: "Is er een mooiere manier om een Trage Wegen Weekend te vieren dan met een lange wandeling? U gaat met een Brukselgids op stap doorheen het zuidoosten van Brussel, op zoek naar wegen waar het aangenaam wandelen is... of zou kunnen zijn. En, bijna tegen de verwachting in: dat zijn er nogal wat.Van bij het Centraal Station gaat het langs galerijen, groene verbindingen, binnenparken, spoorwegbermen, brede voetpaden, een desolate promenade en een campus richting een metrostation aan de rand van de Groene Wandeling. Telkens bekijken we wat de ruimte comfortabel maakt voor de wandelaar en wat er zou kunnen verbeteren.Stapschoenen komen goed van pas voor deze Thematour, want hij is zeven km lang. !",
        },
        types: [0, 2],
        dates: [2],
        horaire: "13:30-17h30",
        price: "12",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://www.brukselbinnenstebuiten.be/event/langs-trage-wegen-zuidoost-2023-10-15-274/register#scrollTop=0",
        },
        illustration: "Bruksel_wandeling.jpg",
        duration: "1h30",
        organisateur: {
          name: "Brukselbinnenstebuiten",
          link: "https://www.brukselbinnenstebuiten.be/",
        },
        location: {
          nom: "Bruxelles-ville",
          adress: {
            number: "",
            street: "Europakruispunt",
            town: "Brussel",
            postcode: "1000",
            lieudit:
              "Bij het Centraal Station, in het midden van het Europakruispunt",
          },
          coordonates: {
            lat: 50.84577833136521718415679060854017734527587890625,
            lon: 4.35665651487557425980412517674267292022705078125,
          },
        },
        public: ["all", "children", "adult"],
        language: ["nl"],
      },
      {
        id: "16",
        title: "Des p\u00e2turages et moulins de la Senne ",
        description: {
          en: "Peut-on imaginer bouleversement plus radical que la transformation des p\u00e2turages de Cureghem en ce petit Birmingham qu\u2019il devint \u00e0 la suite du creusement du canal de Charleroi ? Nous essaierons de suivre cette \u00e9volution, notamment, en retrouvant le passage de la Senne qui, avant 1832, rythmait toute la vie du quartier.",
          fr: "Peut-on imaginer bouleversement plus radical que la transformation des p\u00e2turages de Cureghem en ce petit Birmingham qu\u2019il devint \u00e0 la suite du creusement du canal de Charleroi ? Nous essaierons de suivre cette \u00e9volution, notamment, en retrouvant le passage de la Senne qui, avant 1832, rythmait toute la vie du quartier.",
          nl: "Peut-on imaginer bouleversement plus radical que la transformation des p\u00e2turages de Cureghem en ce petit Birmingham qu\u2019il devint \u00e0 la suite du creusement du canal de Charleroi ? Nous essaierons de suivre cette \u00e9volution, notamment, en retrouvant le passage de la Senne qui, avant 1832, rythmait toute la vie du quartier.",
        },
        types: [0, 2],
        dates: [1],
        horaire: "10:00-14:00",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "+32498588994",
          mail: " activin1070@anderlecht.brussels",
          link: "",
        },
        illustration: "16-anderlecht_abords-de-la-senne.jpg",
        duration: "4h00",
        organisateur: {
          name: "Commune d'Anderlecht",
          link: "https://www.anderlecht.be/",
        },
        location: {
          nom: "Anderlecht",
          adress: {
            number: "88",
            street: "Rue des v\u00e9t\u00e9rinaires",
            town: "Anderlecht",
            postcode: "1070",
            lieudit:
              "croisement de la rue des V\u00e9t\u00e9rinaires et des Deux Gares.",
          },
          coordonates: {
            lat: 50.8329288261332976617268286645412445068359375,
            lon: 4.330107544851099277138928300701081752777099609375,
          },
        },
        public: ["all"],
        language: ["fr"],
      },
      {
        id: "17",
        title: "Balade de parc en parc",
        description: {
          nl: "Organis\u00e9e dans le cadre du WE des voies lentes, cette promenade en boucle vous permettra d\u2019aller d\u2019un parc anderlechtois \u00e0 l\u2019autre en empruntant des voies qui ne sont accessibles qu\u2019\u00e0 pied et parfois aussi \u00e0 v\u00e9lo.",
          fr: "Organis\u00e9e dans le cadre du WE des voies lentes, cette promenade en boucle vous permettra d\u2019aller d\u2019un parc anderlechtois \u00e0 l\u2019autre en empruntant des voies qui ne sont accessibles qu\u2019\u00e0 pied et parfois aussi \u00e0 v\u00e9lo.",
          en: "Organis\u00e9e dans le cadre du WE des voies lentes, cette promenade en boucle vous permettra d\u2019aller d\u2019un parc anderlechtois \u00e0 l\u2019autre en empruntant des voies qui ne sont accessibles qu\u2019\u00e0 pied et parfois aussi \u00e0 v\u00e9lo.",
        },
        types: [0, 10],
        dates: [1],
        horaire: "10:00-14h00",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "+32498588994",
          mail: "activin1070@anderlecht.brussels",
          link: "",
        },
        illustration: "17-anderlecht_parc-en-parc.jpg",
        duration: "1h30",
        organisateur: {
          name: "Commune d'Anderlecht",
          link: "https://www.anderlecht.be/",
        },
        location: {
          nom: "Anderlecht",
          adress: {
            number: "144",
            street: "avenue Marius Renard",
            town: "Anderlecht",
            postcode: "1070",
            lieudit: "Terminus Tram 81",
          },
          coordonates: {
            lat: 50.8249891341240669362377957440912723541259765625,
            lon: 4.28170843490686348076224021497182548046112060546875,
          },
        },
        public: ["all"],
        language: ["fr"],
      },
      {
        id: "18",
        title:
          "Ontdek de Woluwe met een gids: Van Hof Ter Musschen tot aan het Bronnepark",
        description: {
          nl: "Hoewel haar vallei erg verstedelijkt is, stroomt de Woluwe nog grotendeels in open lucht, door heel wat groene gebieden die bewaard zijn gebleven en waarvan sommige zelfs het Natura 2000-statuut hebben vanwege de fauna en flora die erin voorkomen. De Woluwe is uw gids op deze wandeling in Sint-Lambrechts-Woluwe die door verschillende parken, natuurreservaten, bossen en voormalige landelijke gebieden leidt maar die u ook laat kennismaken met een aantal opmerkelijke gebouwen. Onderweg kan u met eigen ogen zien welke concrete projecten de voorbije jaren werden uitgevoerd, zoals het openleggen van de rivier, ingrepen om regenwater beter op te vangen en verschillende restauratiewerkzaamheden. Allemaal dragen ze bij tot een herwaardering van deze uitzonderlijke uithoek van Brussel.",
          fr: "Hoewel haar vallei erg verstedelijkt is, stroomt de Woluwe nog grotendeels in open lucht, door heel wat groene gebieden die bewaard zijn gebleven en waarvan sommige zelfs het Natura 2000-statuut hebben vanwege de fauna en flora die erin voorkomen. De Woluwe is uw gids op deze wandeling in Sint-Lambrechts-Woluwe die door verschillende parken, natuurreservaten, bossen en voormalige landelijke gebieden leidt maar die u ook laat kennismaken met een aantal opmerkelijke gebouwen. Onderweg kan u met eigen ogen zien welke concrete projecten de voorbije jaren werden uitgevoerd, zoals het openleggen van de rivier, ingrepen om regenwater beter op te vangen en verschillende restauratiewerkzaamheden. Allemaal dragen ze bij tot een herwaardering van deze uitzonderlijke uithoek van Brussel.",
          en: "Hoewel haar vallei erg verstedelijkt is, stroomt de Woluwe nog grotendeels in open lucht, door heel wat groene gebieden die bewaard zijn gebleven en waarvan sommige zelfs het Natura 2000-statuut hebben vanwege de fauna en flora die erin voorkomen. De Woluwe is uw gids op deze wandeling in Sint-Lambrechts-Woluwe die door verschillende parken, natuurreservaten, bossen en voormalige landelijke gebieden leidt maar die u ook laat kennismaken met een aantal opmerkelijke gebouwen. Onderweg kan u met eigen ogen zien welke concrete projecten de voorbije jaren werden uitgevoerd, zoals het openleggen van de rivier, ingrepen om regenwater beter op te vangen en verschillende restauratiewerkzaamheden. Allemaal dragen ze bij tot een herwaardering van deze uitzonderlijke uithoek van Brussel.",
        },
        types: [0, 1],
        dates: [2],
        horaire: "10:00-12:00",
        price: "3",
        booking: true,
        bookinglinks: {
          tel: "+3222061207",
          mail: "contact@coordinatiezenne.be",
          link: "",
        },
        illustration: "18-woluwe_zenne.jpg",
        duration: "around hh/mm",
        organisateur: {
          name: "Co\u00f6rdinatie Zenne",
          link: "https://www.coordinationsenne.be/fr/index.php",
        },
        location: {
          nom: "Sint-Lambrechts-Woluwe",
          adress: {
            number: "2",
            street: "Emile Vanderveldelaan  ",
            town: "Sint-Lambrechts-Woluwe",
            postcode: "1200",
            lieudit: "Kwak caf\u00e9",
          },
          coordonates: {
            lat: 50.84715568198088675444523687474429607391357421875,
            lon: 4.44087248357286856759174042963422834873199462890625,
          },
        },
        public: ["all"],
        language: ["nl"],
      },
      {
        id: "19",
        title: "Balade guid\u00e9e tous public",
        description: {
          nl: "D\u00e9couvrez l\u2019histoire de la danse de mani\u00e8re ludique et interactive en explorant des lieux insolites gr\u00e2ce aux balades guid\u00e9es Si t\u2019y danses. \u00c0 l\u2019occasion de l\u2019ouverture du Jardin H\u00e9l\u00e8ne de Rudder, un nouveau parcours sera inaugur\u00e9 \u00e0 Saint-Gilles. Au d\u00e9part du Centre culturel Jacques Franck la balade Danser les volutes met particuli\u00e8rement en lumi\u00e8re le matrimoine et le patrimoine Art nouveau de la commune ainsi que ses espaces verts. Au gr\u00e9 du parcours, les liens se tissent entre danse et architecture, individus et collectif dans les rues de la commune aux 140 nationalit\u00e9s.",
          fr: "D\u00e9couvrez l\u2019histoire de la danse de mani\u00e8re ludique et interactive en explorant des lieux insolites gr\u00e2ce aux balades guid\u00e9es Si t\u2019y danses. \u00c0 l\u2019occasion de l\u2019ouverture du Jardin H\u00e9l\u00e8ne de Rudder, un nouveau parcours sera inaugur\u00e9 \u00e0 Saint-Gilles. Au d\u00e9part du Centre culturel Jacques Franck la balade Danser les volutes met particuli\u00e8rement en lumi\u00e8re le matrimoine et le patrimoine Art nouveau de la commune ainsi que ses espaces verts. Au gr\u00e9 du parcours, les liens se tissent entre danse et architecture, individus et collectif dans les rues de la commune aux 140 nationalit\u00e9s.",
          en: "D\u00e9couvrez l\u2019histoire de la danse de mani\u00e8re ludique et interactive en explorant des lieux insolites gr\u00e2ce aux balades guid\u00e9es Si t\u2019y danses. \u00c0 l\u2019occasion de l\u2019ouverture du Jardin H\u00e9l\u00e8ne de Rudder, un nouveau parcours sera inaugur\u00e9 \u00e0 Saint-Gilles. Au d\u00e9part du Centre culturel Jacques Franck la balade Danser les volutes met particuli\u00e8rement en lumi\u00e8re le matrimoine et le patrimoine Art nouveau de la commune ainsi que ses espaces verts. Au gr\u00e9 du parcours, les liens se tissent entre danse et architecture, individus et collectif dans les rues de la commune aux 140 nationalit\u00e9s.",
        },
        types: [0, 2, 4],
        dates: [1],
        horaire: "16:00",
        price: "0",
        booking: true,
        bookinglinks: {
          tel: "",
          mail: "",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSd2uRpLxH2dY3RizrrQN-2sE57tm3CNp8715k_1uq7UzCx7Jw/viewform",
        },
        illustration: "19-sitydanse.jpg",
        Duration: "",
        organisateur: {
          name: "Sitydanses",
          link: "https://www.sitydanses.be/2023/09/08/balades-guidees-1410/",
        },
        location: {
          nom: "Saint-Gilles",
          adress: {
            number: "11",
            street: "Rue de Rome",
            town: "Saint-Gilles",
            postcode: "1060",
            lieudit: "",
          },
          coordonates: {
            lat: 50.82971253941851585977929062210023403167724609375,
            lon: 4.34523371055966745046816868125461041927337646484375,
          },
        },
        public: ["all"],
        language: ["fr"],
      },
      {
        id: "20",
        title:
          "Promenade guid\u00e9e avec le garde-forestier : autour du vallon des Enfants Noy\u00e9s",
        description: {
          nl: "Je vous pr\u00e9senterai tout au long d'une promenade autour du vallon des Enfants Noy\u00e9s un aper\u00e7u historique de la for\u00eat de Soignes, les diff\u00e9rentes fonctions qu'elle a \u00e9t\u00e9 amen\u00e9e \u00e0 remplir au cours de son histoire jusqu'\u00e0 nos jours, ainsi que les objectifs vis\u00e9s par le plan de gestion bruxellois et les d\u00e9fis \u00e0 relever face au changement climatique. Enfin, en fonction de ce qui nous sera \u00e9ventuellement possible d'observer, je vous parlerai de sa biodiversit\u00e9 animale et v\u00e9g\u00e9tale. Au plaisir de vous y rencontrer! Willy Van De Velde - Garde-forestier Dur\u00e9e : +/- 3 h (\u003C 3km) RDV \u00e0 la 'tour de d\u00e9part' \u00e0 c\u00f4t\u00e9 du 'Village des Paris', en entrant \u00e0 l'hippodrome par l\u2019entr\u00e9e principale (chauss\u00e9e de La Hulpe 53 \u2013 1180 Uccle). Le site est accessible \u00e0 pied, \u00e0 v\u00e9lo et en transports en commun : Tram 8. Gares de Boondael et de Boitsfort \u00e0 proximit\u00e9. Parking v\u00e9lo sur le site",
          fr: "Je vous pr\u00e9senterai tout au long d'une promenade autour du vallon des Enfants Noy\u00e9s un aper\u00e7u historique de la for\u00eat de Soignes, les diff\u00e9rentes fonctions qu'elle a \u00e9t\u00e9 amen\u00e9e \u00e0 remplir au cours de son histoire jusqu'\u00e0 nos jours, ainsi que les objectifs vis\u00e9s par le plan de gestion bruxellois et les d\u00e9fis \u00e0 relever face au changement climatique. Enfin, en fonction de ce qui nous sera \u00e9ventuellement possible d'observer, je vous parlerai de sa biodiversit\u00e9 animale et v\u00e9g\u00e9tale. Au plaisir de vous y rencontrer! Willy Van De Velde - Garde-forestier Dur\u00e9e : +/- 3 h (\u003C 3km) RDV \u00e0 la 'tour de d\u00e9part' \u00e0 c\u00f4t\u00e9 du 'Village des Paris', en entrant \u00e0 l'hippodrome par l\u2019entr\u00e9e principale (chauss\u00e9e de La Hulpe 53 \u2013 1180 Uccle). Le site est accessible \u00e0 pied, \u00e0 v\u00e9lo et en transports en commun : Tram 8. Gares de Boondael et de Boitsfort \u00e0 proximit\u00e9. Parking v\u00e9lo sur le site",
          en: "Je vous pr\u00e9senterai tout au long d'une promenade autour du vallon des Enfants Noy\u00e9s un aper\u00e7u historique de la for\u00eat de Soignes, les diff\u00e9rentes fonctions qu'elle a \u00e9t\u00e9 amen\u00e9e \u00e0 remplir au cours de son histoire jusqu'\u00e0 nos jours, ainsi que les objectifs vis\u00e9s par le plan de gestion bruxellois et les d\u00e9fis \u00e0 relever face au changement climatique. Enfin, en fonction de ce qui nous sera \u00e9ventuellement possible d'observer, je vous parlerai de sa biodiversit\u00e9 animale et v\u00e9g\u00e9tale. Au plaisir de vous y rencontrer! Willy Van De Velde - Garde-forestier Dur\u00e9e : +/- 3 h (\u003C 3km) RDV \u00e0 la 'tour de d\u00e9part' \u00e0 c\u00f4t\u00e9 du 'Village des Paris', en entrant \u00e0 l'hippodrome par l\u2019entr\u00e9e principale (chauss\u00e9e de La Hulpe 53 \u2013 1180 Uccle). Le site est accessible \u00e0 pied, \u00e0 v\u00e9lo et en transports en commun : Tram 8. Gares de Boondael et de Boitsfort \u00e0 proximit\u00e9. Parking v\u00e9lo sur le site",
        },
        types: [0, 1],
        dates: [2],
        horaire: "10:00",
        price: "0",
        booking: false,
        bookinglinks: { tel: "", mail: "", link: "" },
        illustration: "20-foretdesoignes-gardeforestier.jpg",
        Duration: "3h00",
        organisateur: {
          name: "Fondation For\u00eat de Soignes",
          link: "https://www.foret-de-soignes.be/partenaires/fondation-foret-de-soignes/",
        },
        location: {
          nom: "",
          adress: {
            number: "53A",
            street: "chauss\u00e9e de La Hulpe",
            town: "Uccle",
            postcode: "1180",
            lieudit: "Hippodrome de Boitsfort - Drohme Par",
          },
          coordonates: {
            lat: 50.7955397311668122029004734940826892852783203125,
            lon: 4.39658049706368814213419682346284389495849609375,
          },
        },
        public: ["all"],
        language: ["fr"],
      },
      {
        id: "21",
        title:
          "Hippodrome de Boitsfort, 'porte d\u2019accueil' de la for\u00eat de Soignes avec Bruxelles Environnement",
        description: {
          nl: "St\u00e9phane Vanwijnsberghe, directeur bruxellois de la for\u00eat de Soignes et Heleen Ochelen, porteuse du projet pour Bruxelles Environnement vous emm\u00e8nent en balade \u00e0 l'Hippodrome de Boitsfort pour vous parler de la for\u00eat de Soignes, de sa 'porte d'accueil' et des d\u00e9veloppements en cours \u00e0 l'hippodrome.",
          fr: "St\u00e9phane Vanwijnsberghe, directeur bruxellois de la for\u00eat de Soignes et Heleen Ochelen, porteuse du projet pour Bruxelles Environnement vous emm\u00e8nent en balade \u00e0 l'Hippodrome de Boitsfort pour vous parler de la for\u00eat de Soignes, de sa 'porte d'accueil' et des d\u00e9veloppements en cours \u00e0 l'hippodrome.",
          en: "St\u00e9phane Vanwijnsberghe, directeur bruxellois de la for\u00eat de Soignes et Heleen Ochelen, porteuse du projet pour Bruxelles Environnement vous emm\u00e8nent en balade \u00e0 l'Hippodrome de Boitsfort pour vous parler de la for\u00eat de Soignes, de sa 'porte d'accueil' et des d\u00e9veloppements en cours \u00e0 l'hippodrome.",
        },
        types: [0, 1],
        dates: [2],
        horaire: "14:00",
        price: "0",
        booking: false,
        bookinglinks: { tel: "", mail: "", link: "" },
        illustration: "21-foretdesoignes.jpg",
        Duration: "",
        organisateur: {
          name: "Fondation For\u00eat de Soignes",
          link: "https://www.foret-de-soignes.be/partenaires/fondation-foret-de-soignes/",
        },
        location: {
          nom: "",
          adress: {
            number: "53A",
            street: "Chauss\u00e9e de la Hulpe",
            town: "Uccle",
            postcode: "1180",
            lieudit:
              "Hippodrome de Boitsfort - Drohme Park\u003Cbr\u003Ele \u2018Village des Paris\u2019 se trouve sur votre droite",
          },
          coordonates: {
            lat: 50.7955397311668122029004734940826892852783203125,
            lon: 4.39658049706368814213419682346284389495849609375,
          },
        },
        public: ["all"],
        language: ["fr"],
      },
      {
        id: "22",
        title:
          "La vall\u00e9e du Roodkloosterbeek \u00e0 Auderghem De vallei van de Roodkloosterbeek in Oudergem",
        description: {
          nl: "Tijdens deze begeleide wandeling volg je de Roodkloosterbeek, een belangrijke zijloop van de Woluwe. De waterloop dankt zijn naam aan de priorij die meer dan 600 jaar geleden door monniken gesticht werd in het Zoni\u00ebnwoud. Met veel geduld hebben ze de natte valleigronden ontgonnen en bewerkt. Op de Roodkloostersite en in het Zoni\u00ebnwoud, ontdek je de oude priorij, maar ook en vooral een rijk hydraulisch en natuurlijk erfgoed: beken, vijvers, moerassen, maar ook de bronnen (sommige memorabel!) die ze voeden, of het gebruik dat de monniken van de priorij van het Rood Klooster in het verleden van dit water maakten.NB : Afspraak : site van de priorij van het Rood Klooster, naast de fontein (Rood-Kloosterstraat 4) - Geen reservering nodig (max. 25 personen)",
          fr: "A l\u2019occasion de cette promenade guid\u00e9e, nous vous invitons \u00e0 parcourir la vall\u00e9e du Roodkloosterbeek (un important affluent de la Woluwe),ruisseau qui doit son nom au prieur\u00e9 fond\u00e9 par des moines il y a plus de 6 si\u00e8cles, qui d\u00e9frich\u00e8rent patiemment ce fond de vall\u00e9e humide gagn\u00e9 sur la for\u00eat de Soignes. En passant par le site de Rouge-Clo\u00eetre et la for\u00eat de Soignes, vous d\u00e9couvrirez l\u2019ancien prieur\u00e9, mais aussi et surtout un riche patrimoine naturel et hydraulique : ruisseaux, \u00e9tangs, marais, mais aussi les sources (certaines m\u00e9morables !) qui les alimentent, ou encore l\u2019usage que les moines du prieur\u00e9 de Rouge-Clo\u00eetre firent de cette eau par le pass\u00e9.  NB : D\u00e9part: site du prieur\u00e9 de Rouge-Clo\u00eetre, \u00e0 c\u00f4t\u00e9 de la fontaine (rue de Rouge-Clo\u00eetre 4) - Sans r\u00e9servation (max. 25 personnes)",
          en: "A l\u2019occasion de cette promenade guid\u00e9e, nous vous invitons \u00e0 parcourir la vall\u00e9e du Roodkloosterbeek (un important affluent de la Woluwe),ruisseau qui doit son nom au prieur\u00e9 fond\u00e9 par des moines il y a plus de 6 si\u00e8cles, qui d\u00e9frich\u00e8rent patiemment ce fond de vall\u00e9e humide gagn\u00e9 sur la for\u00eat de Soignes. En passant par le site de Rouge-Clo\u00eetre et la for\u00eat de Soignes, vous d\u00e9couvrirez l\u2019ancien prieur\u00e9, mais aussi et surtout un riche patrimoine naturel et hydraulique : ruisseaux, \u00e9tangs, marais, mais aussi les sources (certaines m\u00e9morables !) qui les alimentent, ou encore l\u2019usage que les moines du prieur\u00e9 de Rouge-Clo\u00eetre firent de cette eau par le pass\u00e9.  NB : D\u00e9part: site du prieur\u00e9 de Rouge-Clo\u00eetre, \u00e0 c\u00f4t\u00e9 de la fontaine (rue de Rouge-Clo\u00eetre 4) - Sans r\u00e9servation (max. 25 personnes)",
        },
        types: [0, 1],
        dates: [2],
        horaire: "14:00",
        price: "0",
        booking: false,
        bookinglinks: { tel: "", mail: "", link: "" },
        illustration: "22-coordination-senne.jpg",
        Duration: "",
        organisateur: {
          name: "Fondation For\u00eat de Soignes",
          link: "https://www.foret-de-soignes.be/partenaires/fondation-foret-de-soignes/",
        },
        location: {
          nom: "",
          adress: {
            number: "1",
            street: "Rue du Rouge-Clo\u00eetre",
            town: "Auderghem",
            postcode: "1160",
            lieudit:
              "For\u00eat de Soignes - Porte d'acc\u00e8s Rouge-Clo\u00eetre",
          },
          coordonates: {
            lat: 50.81433578070797096870592213235795497894287109375,
            lon: 4.44371725473554679552989910007454454898834228515625,
          },
        },
        public: ["all"],
        language: ["fr", "nl"],
      },
      {
        id: "23",
        title: "Course \u00e0 pied avec Foyer vzw",
        description: {
          nl: "Foyer vzw voorziet een loopparcours voor iedereen die zich ofwel aan lopen wil wagen, al ervaren is of gewoon mee wil op deze sportieve reis. Onderweg ontdekken we een aantal plaatsen in Brussel waar je met eigen lichaamsgewicht kan trainen en we maken van de gelegenheid gebruik om hier en daar halt te houden voor een paar simpele, maar doeltreffende oefeningen.\u003Cbr\u003EJe krijgt de kans om op je eigen tempo te lopen in een aangename, energieke en groene omgeving doorheen het Brusselse voetgangersnetwerk.",
          fr: "Foyer vzw propose un parcours de cours \u00e0 pied pour tous/toutes ceux/celles qui veulent s'initier \u00e0 cette discipline, qui la pratiquent d\u00e9j\u00e0 ou qui tout simplement veulent nous accompagner dans ce parcours sportif. Pendant notre parcours on d\u00e9couvrira quelques points dans la ville de Bruxelles qui sont dispos\u00e9s pour s'entra\u00eener tout en utilisant le poids de son corps; on en profitera pour s'y arr\u00eater et pratiquer quelques exercises simples mais efficaces.\u003Cbr\u003EEn respectant ton propre rythme, tu auras l'opportunit\u00e9 de pratiquer la course \u00e0 pied dans un ambient conviviale, \u00e9nerg\u00e9tique et amusant \u00e0 travers le r\u00e9seau pi\u00e9ton de Bruxelles.",
          en: "Foyer vzw propose un parcours de cours \u00e0 pied pour tous/toutes ceux/celles qui veulent s'initier \u00e0 cette discipline, qui la pratiquent d\u00e9j\u00e0 ou qui tout simplement veulent nous accompagner dans ce parcours sportif. Pendant notre parcours on d\u00e9couvrira quelques points dans la ville de Bruxelles qui sont dispos\u00e9s pour s'entra\u00eener tout en utilisant le poids de son corps; on en profitera pour s'y arr\u00eater et pratiquer quelques exercises simples mais efficaces.\u003Cbr\u003EEn respectant ton propre rythme, tu auras l'opportunit\u00e9 de pratiquer la course \u00e0 pied dans un ambient conviviale, \u00e9nerg\u00e9tique et amusant \u00e0 travers le r\u00e9seau pi\u00e9ton de Bruxelles.",
        },
        types: [12, 11],
        dates: [2],
        horaire: "15:00-17:00",
        price: "0",
        booking: false,
        bookinglinks: { tel: "", mail: "", link: "" },
        illustration: "23-foyervzw.jpg",
        Duration: "",
        organisateur: {
          name: "Foyer VZW",
          link: "https://www.foyer.be/",
        },
        location: {
          nom: "",
          adress: {
            number: "527",
            street: "Avenue Louise",
            town: "Ixelles",
            postcode: "1050",
            lieudit: "KBC Brussels La Cambre",
          },
          coordonates: {
            lat: 50.81522905080753815809657680802047252655029296875,
            lon: 4.37182558172346080738179807667620480060577392578125,
          },
        },
        public: ["all"],
        language: ["fr", "nl", "en"],
      },
    ],
  },
];
