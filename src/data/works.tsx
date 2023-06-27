interface IWork {
  title: string;
  descripcion: string;
  tecnologies: techs;
  enlace?: string;
  repo?: string;
  images?: string[];
}

interface techs {
  frontend: Frontend[];
  backend: Backend[];
  databases?: Database | Database[];
}

enum Frontend {
  JS = "javascript",
  HTML = "html",
  REACT = "Reactjs",
  JQUERY = "Jquery",
  ANGULAR = "angular",
  CSS = "css",
  BOOTSTRAP = "boostrap",
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

export const works: IWork[] = [
  {
    title: "CVGenerator",
    descripcion:
      "Proyecto realizado durante mi desarrollo en la universidad, el cual tenia como principal objetivo obtener un cv en formato pdf mediante formularios web",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
  {
    title: "CVGenerator",
    descripcion:
      "Proyecto realizado durante mi desarrollo en la universidad, el cual tenia como principal objetivo obtener un cv en formato pdf mediante formularios web",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
  {
    title: "CVGenerator",
    descripcion:
      "Proyecto realizado durante mi desarrollo en la universidad, el cual tenia como principal objetivo obtener un cv en formato pdf mediante formularios web",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
  {
    title: "CVGenerator",
    descripcion:
      "Proyecto realizado durante mi desarrollo en la universidad, el cual tenia como principal objetivo obtener un cv en formato pdf mediante formularios web",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
];
