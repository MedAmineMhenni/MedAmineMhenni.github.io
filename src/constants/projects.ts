import IProjectData from "../Interfaces/project";

export const projects: IProjectData[] = [
  {
    id: 1,
    name: {
      fr: "JOLIESSE : APPLICATION MOBILE D’UNE MAGASIN DE VÊTEMENTS. ",
      en: "JOLIESSE : MOBILE APPLICATION FOR A CLOTHING STORE.",
    },
    second_title: {
      fr: "DANS LE STORE SOUS LE NOM JOLIESSE",
      en: "IN STORE UNDER THE NAME JOLIESSE",
    },
    description: {
      fr: "Joliesse est une application qui permet de suivre l’actualité de la marque Joliesse, et passer des commandes en ligne. Mon rôle est d’appliquer des modifications sur un template existant sous le framework ReactNative. ",
      en: "Joliesse is an application that allows you to follow Joliesse brand news and place orders online. My role is to apply changes to an existing template under the ReactNative framework.",
    },

    period: {
      fr: "AOÛT 2021 OCTOBER 2021",
      en: "AUGUST 2021 OCTOBER 2021",
    },

    tasks: [
      {
        fr: "Déboguer les fonctionnalités existantes de template.",
        en: "Debug existing template functionality.",
      },
      {
        fr: "Intégrer et appliquer des modifications côté design.",
        en: "ntegrate and apply design changes.",
      },
      {
        fr: "Développer des nouvelles fonctionnalités.",
        en: "Develop new features.",
      },
      {
        fr: "Appliquer des modifications à la logique de l’algorithme de validation de stock.",
        en: "Apply changes to the logic of the inventory validation algorithm.",
      },
      { fr: "Consommation des services web.", en: "Manage web REST APIs." },
      { fr: "Test des Api's avec Postman", en: "Testing API's with Postman" },
      {
        fr: "Gérer le partage des états avec redux",
        en: "Manage state sharing with redux.",
      },
      {
        fr: "Redirection vers les écrans en fonction des notifications",
        en: "Redirection to screens based on notifications",
      },
      {
        fr: "Intégrer l’authentification par Facebook SDK",
        en: "Integrate authentication by Facebook SDK",
      },
      {
        fr: "Intégrer l’authentification par Apple SDK",
        en: "Integrate authentication by Apple SDK",
      },
    ],
    technologies: [
      "React Native",
      "React",
      "Redux-Thunk",
      "Hooks",
      "Postman",
      "VS Code",
      "Rest API",
      "Axios",
      "Git",
      "Firebase/Cloud Messaging",
      "Facebook SDK",
      "Apple SDK",
    ],
    logo: "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.18169-9/17190376_777184445764709_7386448395268490675_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=p68h9PqxIF8AX_fq0XK&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8Yu3LNshyH94LCYtMguyyF72lY1DtPWpQO3bdAtfU8pQ&oe=624DA052",
    createdAt: new Date("2020-05-18T16:00:00Z"),
  },
  {
    id: 2,
    name: {
      fr: "SEXO SANTÉ : APPLICATION MOBILE DÉDIÉE À LA SANTÉ SEXUELLE.",
      en: "SEXO SANTÉ : MOBILE APPLICATION DEDICATED TO SEXUAL HEALTH.",
    },
    second_title: { fr: "DANS LE STORE SOUS LE NOM SEXO SANTÉ", en: "" },
    description: {
      fr: "Sexo Santé est une application destinée aux adolescents et aux jeunes vise à sensibiliser et à simplifier les informations sur les composantes de la santé sexuelle. Mon rôle est de transformer l’application de l’état statique vers l’état dynamique sous le framework ReactNative.",
      en: "Sexo Santé is an application for adolescents and young people aimed at raising awareness and simplifying information on the components of sexual health. My role is to transform the application from static state to dynamic state under the ReactNative framework.",
    },

    period: {
      fr: "NOVEMBER 2021 DÉCENMBRE 2021",
      en: "NOVEMBER 2021 DECEMBER 2021",
    },
    tasks: [
      {
        fr: "Conception détaillée et implémentation de la logique métier.",
        en: "Detailed design and implementation of business logic.",
      },
      {
        fr: "Intégration d’une maquette de design.",
        en: "Integration of a UX / UI design mockup.",
      },
      {
        fr: "Mise en place d'un algorithme de calcul du cycle menstruel pour les femmes utilisant un calendrier et les notifiant.",
        en: "Implementation of an algorithm for calculating menstrual cycle for women using a calendar and notifying them.",
      },
      { fr: "Consommation des services web.", en: "Manage web REST APIs." },

      {
        fr: "Integration d’une base de données locale (SQLite).",
        en: "Integration of a local database (SQLite).",
      },
      {
        fr: "Gérer des notifications locale et firebase notifications Remote.",
        en: "Manage local notifications and firebase remote notifications.",
      },
      {
        fr: "Gérer la redirection vers des screens via natification tags",
        en: "Manage navigation between screens based on notifications tag",
      },

      { fr: "Test des Api's avec Postman", en: "Testing API's with Postman" },
      {
        fr: "Mise en place un système de traduction RTL + LTR",
        en: "Implementation of an RTL + LTR translation system",
      },
    ],
    technologies: [
      "React Native",
      "React",
      "Redux-Thunk",
      "Hooks",
      "Postman",
      "VS Code",
      "Rest API",
      "Axios",
      "Git",
      "i18n",
      "SQLite",
      "Firebase/Cloud Messaging",
      "RTL/LTR",
      "Android studio",
      "Xcode",
    ],
    logo: "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.6435-9/138628803_109019184477832_5009243263526836580_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=94Lm3ZVbf08AX-gt7e1&_nc_ht=scontent.ftun6-1.fna&oh=00_AT-dvSg14lPew1DWlZqoLXstUO_dhw0zCcM9LyIo23SpUQ&oe=624CB6BF",
    medias: [
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/211610024_197878728925210_5517953100451755931_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=BsVra_SWsXQAX8Zn6qI&_nc_ht=scontent.ftun6-1.fna&oh=00_AT9mepZLVsjzvgA2uHB8Pyi9mAxElMnhffeersrEYbCY6g&oe=622ABB2F",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/272782506_323392323040516_1186109972633114680_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=Mdqbi60fIOoAX_N06pV&_nc_ht=scontent.ftun6-1.fna&oh=00_AT9qEVmHLYGIPbiSMFtlu5AY5WMv1o6qkvktoINXzo3WPQ&oe=622C2A16",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/272630425_322811299765285_7962252536290990896_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=w8BUcd95M-EAX8Vl0rt&tn=evwdRAjqOek-7D1q&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8qCv6Dbu0_6Eu1zrI5aZ6kna1K87TfxosHb3g-oizJ5g&oe=622AED29",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/244489648_320082743371474_213395486373649248_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=TAIB8_Ah3gQAX9vqC8G&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8d-kU_1fB68qgFURP9eHM6ld4vhOPMf1YUySWoWiTr_A&oe=622B7F9C",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/271971795_318997603479988_1812628565799587779_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=ZdB17V97SbIAX9nrjA8&_nc_ht=scontent.ftun6-1.fna&oh=00_AT-ceKUoV0qq6vTwZlH5DBcbwWzJ8D2L_inA67GsoIGatw&oe=622AABF6",
    ],
    createdAt: new Date("2021-05-18T16:00:00Z"),
  },
  {
    id: 3,
    name: {
      fr: "FUZE BUS : APPLICATION DE TRANSPORT PUBLIC (EN TUNISIE)",
      en: "FUZEBUS : PUBLIC TRANSPORT APPLICATION (IN TUNISIA)",
    },
    second_title: {
      fr: "DANS LE STORE SOUS LE NOM FUZE BUS",
      en: "IN STORE UNDER THE NAME FUZEBUS",
    },
    description: {
      fr: "FuzeBus permet à l’utilisateur réserver une place dans une bus et de suivre en temps réel le trajet de leur bus. Mon rôle est d’appliquer des modifications sur la solution existante.",
      en: "FuzeBus is an application that allows the user to reserve a seat on a bus and to follow the route of their bus in real time. My role is apply changes to the existing solution.",
    },

    period: {
      fr: "JUIN 2021",
      en: "JUNE 2021",
    },
    tasks: [
      {
        fr: "Appliquer des modifications sur la logique de l’algorithme d’affichage des trajets.",
        en: "Apply modifications to the logic of the route display algorithm.",
      },
      {
        fr: "Définir des nouveaux écrans et gérer la navigation entre eux.",
        en: "Define new screens and manage navigation between them.",
      },
      {
        fr: "Intégration d’une maquette du design.",
        en: "Integration of a UX / UI design mockup.",
      },
      {
        fr: "Implémentation d'un mécanisme pour informer l'utilisateur qu'une mise à jour est obligatoire/facultatif.",
        en: "Implemented a mechanism to notify the user that an update is mandatory/optional",
      },
      {
        fr: "Redirection vers les écrans en fonction des notifications",
        en: "Redirection to screens based on notifications",
      },
      { fr: "Consommation des services web.", en: "Manage web REST APIs." },
      { fr: "Test des Api's avec Postman", en: "Testing API's with Postman" },
      {
        fr: "Gérer le partage des états avec redux",
        en: "Manage state sharing with redux",
      },
    ],
    technologies: [
      "React Native",
      "React",
      "Redux-Thunk",
      "Hooks",
      "Postman",
      "VS Code",
      "Rest API",
      "Axios",
      "Git",
      "Firebase/Cloud Messaging",
      "Android studio",
      "Xcode",
    ],
    logo: "https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/b2/16/b8/b216b8f0-4afd-a04f-c0e8-484793cc4c47/source/512x512bb.jpg",
    medias: [
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/223134790_124602576534052_7974476230722209852_n.png?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=qWUKcvEcPy4AX_5JJFU&_nc_ht=scontent.ftun6-1.fna&oh=00_AT_i85lqY3nVj5Q6G42TjAJJ-HFH6AUn0M8lzfivSWKpMQ&oe=622BFE22",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/225315893_125871383073838_1788041479148720669_n.png?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=Dv7P4JyEHHwAX-pwOgZ&_nc_ht=scontent.ftun6-1.fna&oh=00_AT86h61XC-GS2RvLTbYXO2V1N3InxaSv0k7wHbJSX-RiQA&oe=622A7AD0",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/241042154_135425425451767_6418798725876576413_n.png?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=g0BMEmSwVJwAX9x0gcw&_nc_ht=scontent.ftun6-1.fna&oh=00_AT_Q-ngcJiPtzHBit0Gjr6wysVsss5FDIiMnsTrDe5tPDA&oe=622BC02B",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/271434773_218865423774433_5026537366135323295_n.png?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=FkeoZgXvk98AX9ls_CN&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8bTMb_GsVEaeQ_qQeRVRD9azsUjMzmR4pWfaPxoJrFWw&oe=622BFB9F",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/271385354_218865753774400_2559315782930011549_n.png?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=7hwG86A4K1gAX_EGLm0&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8aEQHd9K5ZdrHE4NT2Z1LRuvTdXBRPuoJSueC0xlyhJQ&oe=622BF653",
    ],
    createdAt: new Date("2016-05-18T16:00:00Z"),
  },
  {
    id: 4,
    name: {
      fr: "ISTISHARA : APPLICATION MOBILE DE TÉLÉCONSULTATION",
      en: "ISTISHARA :PROFESSIONAL CONSULTING APPLICATION",
    },
    second_title: {
      fr: "DANS LE STORE SOUS LE NOM ISTISHARA",
      en: "IN STORE UNDER THE NAME ISTISHARA",
    },
    description: {
      fr: "ISTISHARA permet à l’utilisateur d’appeler un professionnel accrédité et d’obtenir une consultation juridique, comptable ou fiscale. Mon rôle est de développer la partie backoffice de l’application.",
      en: "ISTISHARA istishara is an application that make professional more accessible to public. My part is to develop the backoffice part with ReactJs.",
    },

    period: {
      fr: "MAY-2021 JUIN 2021",
      en: "MAY-2021 JUNE 2021",
    },
    tasks: [
      {
        fr: "Implémentation de l’architecture du projet ReactJs",
        en: "Building a scalable architecture for ReactJs application project.",
      },
      {
        fr: "Conception détaillée et implémentation de la logique métier.",
        en: "Detailed design and implementation of business logic.",
      },
      {
        fr: "Implémentation et intégration du design.",
        en: "Integration of a UX / UI design mockup.",
      },
      {
        fr: "Consommation des services web.",
        en: "Manage web REST APIs.",
      },
      { fr: "Test des Api's avec Postman", en: "Testing API's with Postman" },
    ],
    technologies: [
      "React",
      "Hooks",
      "Postman",
      "VS Code",
      "Rest API",
      "Axios",
      "Git",
      "Ant design",
      "HTML",
      "CSS",
    ],
    logo: "https://www.chercheinfo.com/uploads/0-a31331592b.jpg",
    medias: [
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.6435-9/202857376_109591014703098_2504220250877774266_n.png?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=p6uencTxcDcAX8F0A-E&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8eHm3F5W67HgjUKO0SqCXkYYDxfHXkXrZoGcaQKrT4TA&oe=624BD2B5",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.6435-9/204571794_109619948033538_5373650937209101150_n.png?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=47hjmVvp0GYAX-WCXmA&_nc_ht=scontent.ftun6-1.fna&oh=00_AT_Mo6K1VqjFQnS4AV_J9axDhe4ZsMIBS_zDjXVmXjLmSQ&oe=624B8F99",
      "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.6435-9/205402324_110638637931669_6083061596624879739_n.png?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=Y_mHxDoeHVoAX9nPNe-&_nc_ht=scontent.ftun6-1.fna&oh=00_AT9zm6TMFQ3szaWYZFPpnrdWq849jx5g2fc033CB_3BVvw&oe=624DD7E9",
    ],
    createdAt: new Date("2016-05-18T16:00:00Z"),
  },
  {
    id: 5,

    name: {
      fr: "FEECHR : APPLICATION MOBILE D'UN RESEAU SOCIAL",
      en: "FEECHR: MOBILE APPLICATION OF A SOCIAL NETWORK",
    },
    second_title: { fr: "", en: "" },
    description: {
      fr: "Feechr est une application mobile, un réseau social pour partager des photos et vidéos, créer des clubs, etc..., mon rôle était de développer le backoffice côté serveur/client sous MERN Stack, ainsi que de développer la partie backend pour le module messagerie instantanée.",
      en: "Feechr is an mobile application, a social network for sharing photos and videos, creating clubs, etc..., my role was to develop the server/client side backoffice under MERN Stack, as well as develop the backend part for the module instant messaging .",
    },

    period: {
      fr: "DÉCENMBRE 2021 - AUJOURD'HUI",
      en: "DECEMBER 2021 - CURRENTLY",
    },
    tasks: [
      {
        fr: "Conception détaillée et implémentation de la logique métier.",
        en: "Detailed design and implementation of business logic.",
      },
      {
        fr: "Intégration d’une maquette du design (backoffice).",
        en: "Integration of a UX / UI design mockup (backoffice).",
      },
      {
        fr: "Création et consommation des services Rest api.",
        en: "RESTful API design and development.",
      },
      {
        fr: "Implémentation d’un système de sécurité à l’aide des tokens JWT (backoffice).",
        en: "Implementation of a security system using JWT tokens (backoffice).",
      },
      {
        fr: "Upload des fichier vers AWS S3 Bucket.",
        en: "Upload files to AWS S3 Bucket.",
      },
      {
        fr: "Intégration de l'API Pusher JS pour notifier le front-end en temps réel (messagerie).",
        en: "Integration of the Pusher JS API to notify the front-end end in real time (messaging).",
      },
      {
        fr: "Création d'un mécanisme de filtrage selon plusieurs critère d'une façon dynamique (création d'une requête mongo dynamique). ",
        en: "Creation of a filtering mechanism according to several criteria in a dynamic way (creation of a dynamic mongo query).",
      },
      {
        fr: "Intégration de l'API Pusher JS pour notifier le front-end en temps réel.",
        en: "Integration of the Pusher JS API to notify the front-end end in real time.",
      },
      { fr: "Test des Api's avec Postman", en: "Testing API's with Postman" },
      {
        fr: "Gérer le partage des états avec redux",
        en: "Manage state sharing with redux",
      },
      {
        fr: "Mise en place d’une messagerie instantanée en temps réel à l’aide de l’API pusher.",
        en: "Implementation of real-time instant messaging using the pusherJs API.",
      },
    ],
    technologies: [
      "MongoDB",
      "Postgres",
      "Mongoose",
      "Sequelize",
      "NodeJS",
      "ExpressJS",
      "ReactJS",
      "Redux-Thunk",
      "Hooks",
      "PusherJS",
      "AWS SDK",
      "HTML",
      "CSS",
      "ES6",
      "Postman",
      "VS Code",
      "Rest API",
      "Axios",
      "Git",
    ],
    logo: "https://tulipemedia.com/wp-content/uploads/2013/01/social-media-hand.jpg",
    medias: [
      "https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T1298A1MPA3269PT17X29Y213D168157214FS2262/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/coming-soon-zwangerschapsshirt-zwangerschaps-t-shirt.jpg",
    ],
    createdAt: new Date("2022-06-18T16:00:00Z"),
  },
  {
    id: 6,
    name: {
      fr: "NIGHT IN : APPLICATION DE LOCATION LOCATION DE MAISON D'HÔTES.",
      en: "NIGHT IN: GUEST HOUSE RENTAL APPLICATION.",
    },
    second_title: { fr: "", en: "" },
    description: {
      fr: "NightIn est une application de location de maisons d’hôtes entre des particuliers. Mon rôle est développer une application web côté serveur/client sous MERN Stack",
      en: "NightIn is an application for renting guest houses between individuals. My role is to develop a web application on the server/ client side under MERN Stack.",
    },

    period: {
      fr: "JANVIER 2021 -AVRIL 2021",
      en: "JANUARY 2021 -APRIL 2021",
    },
    tasks: [
      {
        fr: "Conception détaillée et implémentation de la logique métier.",
        en: "Detailed design and implementation of business logic.",
      },
      {
        fr: "Intégration d’une maquette du design.",
        en: "Integration of a UX / UI design mockup.",
      },
      {
        fr: "Implémentation d’un système de sécurité à l’aide des tokens JWT.",
        en: "Implementation of a security system using JWT tokens.",
      },
      {
        fr: "Création et consommation des services Rest api.",
        en: "RESTful API design and development.",
      },
      {
        fr: "Intégration de l’api google maps + google places.",
        en: "Integration of the google maps + google places API.",
      },
      {
        fr: "Mise en place d’une messagerie instantanée en temps réel à l’aide de l’API pusher.",
        en: "Implementation of real-time instant messaging using the pusherJs API.",
      },
      {
        fr: "Mise en place d’un algorithme de recherche approximative des maisons d’hôtes les plus proches.",
        en: "Implementation of an approximate search algorithm for the nearest guesthouses.",
      },

      { fr: "Test des Api's avec Postman", en: "Testing API's with Postman" },
      {
        fr: "Gérer le partage des états avec redux",
        en: "Manage state sharing with redux",
      },
    ],
    technologies: [
      "MongoDB",
      "NodeJS",
      "ExpressJS",
      "ReactJS",
      "Redux-Thunk",
      "Hooks",
      "PusherJS",
      "HTML",
      "CSS",
      "ES6",
      "Postman",
      "VS Code",
      "Rest API",
      "Axios",
      "Git",
    ],
    medias: [
      "https://gitlab.com/mohamedamine.mhenni/pfe-esprit-digitu/-/raw/main/ScreenShots/roomDetails.png",
      "https://gitlab.com/mohamedamine.mhenni/pfe-esprit-digitu/-/raw/main/ScreenShots/Details.png",
      "https://gitlab.com/mohamedamine.mhenni/pfe-esprit-digitu/-/raw/main/ScreenShots/searchForm.png",
      "https://gitlab.com/mohamedamine.mhenni/pfe-esprit-digitu/-/raw/main/ScreenShots/Explore.png",
    ],
    logo: "https://gitlab.com/mohamedamine.mhenni/pfe-esprit-digitu/-/raw/main/ScreenShots/Explore.png",
    createdAt: new Date("2016-05-18T16:00:00Z"),
  },
];
