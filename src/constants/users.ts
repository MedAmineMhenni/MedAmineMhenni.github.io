import IUserData from "../Interfaces/user";

export const user: IUserData = {
  id: 1,
  name: {
    fr: "Salut, je suis MHENNI Mohamed Amine ingénieur développement Full Stack JS.",
    en: "HI, I am MHENNI Mohamed Amine Full Stack JS development engineer.",
  },
  description: {
    fr: "Je me présente mhenni mohamed amine, j'ai 27 ans, Ingénieur développement Full Stack JS. Passioné par le développement des applications web et les nouvelles technologies en général . Je suis constamment à la recherche de nouveaux défis afin d’améliorer mes capacités et mes compétences techniques.",
    en: "I introduce myself mhenni mohamed amine, I am 27 years old, Full Stack JS development engineer. Passionate about the development of web applications and new technologies in general. I am constantly looking for new challenges to improve my abilities and technical skills.",
  },
  cv: {
    fr: "/files/Med_Amine_CV__Fran_ais.pdf",
    en: "/files/Med_Amine_CV__Fran_ais.pdf",
  },
  technologies: [
    {
      title: "NestJS",
      description: {
        fr: "NestJS est un framework permettant de créer des applications Web Node.js efficaces et évolutives. Il utilise JavaScript moderne, est construit avec TypeScript et combine des éléments de OOP (Object Oriented Programming), FP (Functional Programming) et FRP (Functional Reactive Programming).",
        en: "NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).",
      },
      period: { fr: "", en: "" },
    },
    {
      title: "TypeScript",
      description: {
        fr: "TypeScript est un langage de programmation fortement typé qui s'appuie sur JavaScript, vous offrant de meilleurs outils à n'importe quelle échelle.",
        en: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      },
      period: { fr: "", en: "" },
    },
    {
      title: "React-Native",
      description: {
        fr: "React Native est un framework d'applications mobiles open source créé par Facebook. Il est utilisé pour développer des applications pour Android, iOS et UWP en permettant aux développeurs d’utiliser React avec les fonctionnalités natives de ces plateformes.",
        en: "React Native is an open-source UI software framework created by Facebook. It is used to develop applications for Android, iOS, and UWP[9] by enabling developers to use the React framework along with native platform capabilities.",
      },
      period: { fr: "", en: "" },
    },
    {
      title: "ReactJS",
      description: {
        fr: "ReactJS est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état. ",
        en: "ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on UI components, created by Facebook.The main purpose of this library is to facilitate the creation of single-page web applications, through the creation of components depending on a state and generating an HTML page at each change of state.",
      },
      period: { fr: "", en: "" },
    },
    {
      title: "MongoDB",
      description: {
        fr: "MongoDB est un système de gestion de base de données orienté documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données.",
        en: "MongoDB is a document-oriented database management system that can be distributed over any number of computers and does not require a predefined data schema.",
      },
      period: { fr: "", en: "" },
    },
    {
      title: "Mongoose",
      description: {
        fr: "Mongoose fournit une solution simple basée sur un schéma pour modéliser vos données d'application. Il comprend la conversion de type intégrée, la validation, la création de requêtes, les crochets de logique métier et plus encore, prêts à l'emploi.",
        en: "Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.",
      },
      period: { fr: "", en: "" },
    },
    {
      title: "ExpreesJS",
      description: {
        fr: "Express.js est un framework pour construire des applications web basées sur Node.js. C'est de fait le framework standard pour le développement de serveur en Node.js.",
        en: "Express.js is a framework for building web applications based on Node.js. It is in fact the standard framework for server development in Node.js.",
      },
      period: { fr: "", en: "" },
    },
    {
      title: "NodeJS",
      description: {
        fr: "Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS.",
        en: "Node.js is a free software platform in JavaScript, oriented towards highly concurrent event-driven network applications that must be able to scale. It uses the V8 virtual machine, the libuv library for its event loop, and implements the CommonJS specifications under MIT license.",
      },
      period: { fr: "", en: "" },
    },
  ],
  image:
    "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.6435-9/104290735_1781520955333795_9143834154231176065_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=j-DBNrjAjxAAX_Oxov7&_nc_ht=scontent.ftun6-1.fna&oh=00_AT-fIU0JzU9V-pjLojQ27kU7vSB_J6dmCT4G4JD9CE03pg&oe=624D40C9",
  createdAt: new Date(),
};
