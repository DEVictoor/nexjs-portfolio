interface IProject {
  title: string;
  descripcion: string;
  tecnologies: ITech;
  enlace?: string;
  repo?: string;
  images?: IImage[];
}

interface ITech {
  frontend: Frontend[];
  backend?: Backend[];
  databases?: Database | Database[];
}

export interface IImage {
  id: number;
  url: string;
}

enum Frontend {
  JS = "Javascript",
  HTML = "Html",
  REACT = "Reactjs",
  JQUERY = "Jquery",
  ANGULAR = "Angular",
  CSS = "Css",
  BOOTSTRAP = "Boostrap",
}

enum Backend {
  NODE = "Nodejs",
  PHP = "Php",
  LARAVEL = "Laravel",
  NEST = "Nestjs",
  EX = "Expressjs",
  DOCKER = "Docker",
  PUNTONET = ".Net",
}

enum Database {
  MYSQL = "MYSQL",
  PSQL = "Postgresql",
  MONGO = "Mongodb",
}

export const Projects: IProject[] = [
  {
    title: "Scred: Sistema para un financiera",
    descripcion:
      "Como parte de mi prácticas hice junto con mis compañeros este proyecto para una financiera, el cual consistia  en forma general de gestionar creditos para las diferentes Mypes de mi ciudad.",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER, Backend.LARAVEL],
      databases: Database.PSQL,
    },
  },
  {
    title: "Generador de CV",
    descripcion:
      "Como proyecto final de un curso en la universidad se elaboró este proyecto que tiene como objetivo generar un curriculim vitae en base a formularios web y consumo de api's",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
    repo: "https://github.com/DEVictoor/GeneratorCV",
    // enlace: "https://github.com/DEVictoor/GeneratorCV",
    images: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dwsstshfy/image/upload/v1689029088/Generator%20CV/Screenshot_2023-07-08_at_17-45-14_P%C3%A1gina_Principal_r0e5wh.png",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dwsstshfy/image/upload/v1689029088/Generator%20CV/Screenshot_2023-07-08_at_18-01-41_P%C3%A1gina_Principal_fbrvcz.png",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dwsstshfy/image/upload/v1689029088/Generator%20CV/Screenshot_2023-07-08_at_18-01-53_P%C3%A1gina_Principal_a5sde5.png",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dwsstshfy/image/upload/v1689029088/Generator%20CV/Screenshot_2023-07-08_at_18-02-18_P%C3%A1gina_Principal_wpqabz.png",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dwsstshfy/image/upload/v1689029088/Generator%20CV/Screenshot_2023-07-08_at_18-02-28_Start_CV_enzef3.png",
      },
    ],
  },
  {
    title: "Postmaster XIII",
    descripcion:
      "Cada año en mi universidad se realiza el evento llamado 'Postmaster', el cual tiene como objetivo tener un encuentro entre egresados y estudiantes de la carrera mediante charlas y exposiciones",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.REACT],
      backend: [Backend.NEST, Backend.DOCKER],
      databases: Database.MYSQL,
    },
    enlace:
      "https://postmaster2022.vercel.app/?vercelToolbarCode=F_DCErgrq5Kajxv",
  },
  {
    title: "CIIS XXIII",
    descripcion:
      "El Congreso Internacion de Informatica y Sistemas es un evento que se realiza cada año en mi carreara, tuve la responsabilidad de encargarme de la pagina web.",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.REACT],
    },
    enlace:
      "https://ciis-page-congreso.vercel.app/?vercelToolbarCode=5yZTMPYxttq0Ktl",
    // images: [
    //   {
    //     id: 1,
    //     url: "https://res.cloudinary.com/dwsstshfy/image/upload/v1689133161/CIIS%20XXIII/Screenshot_2023-07-11_at_22-34-52_CIIS_XXIII_ojbcsn.png",
    //   },
    //   {
    //     id: 2,
    //     url: "https://res.cloudinary.com/dwsstshfy/image/upload/v1689133161/CIIS%20XXIII/Screenshot_2023-07-11_at_22-38-22_CIIS_XXIII_vkhixf.png",
    //   },
    // ],
  },
];
