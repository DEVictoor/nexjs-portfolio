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
    title: "Generador de CV",
    descripcion:
      "Proyecto realizado durante en la universidad, el cual tenia como principal objetivo obtener un cv en formato pdf mediante formularios web. La principal funcion que tuve en el proyecto fue la de encargarme de estructurar el proyecto, en la parte del bacckedn tambien hice la conexion a la base de datos con PDO y para el deploy utilie docker.",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
  {
    title: "Postmaster XIII",
    descripcion:
      "Proyecto realizado durante en la universidad, el cual tenia como principal objetivo obtener un cv en formato pdf mediante formularios web. La principal funcion que tuve en el proyecto fue la de encargarme de estructurar el proyecto, en la parte del bacckedn tambien hice la conexion a la base de datos con PDO y para el deploy utilie docker.",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
  {
    title: "CIIS XXIII",
    descripcion:
      "Proyecto realizado durante en la universidad, el cual tenia como principal objetivo obtener un cv en formato pdf mediante formularios web. La principal funcion que tuve en el proyecto fue la de encargarme de estructurar el proyecto, en la parte del bacckedn tambien hice la conexion a la base de datos con PDO y para el deploy utilie docker.",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.BOOTSTRAP],
      backend: [Backend.PHP, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
];
