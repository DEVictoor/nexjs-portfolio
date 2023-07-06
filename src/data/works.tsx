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
  backend?: Backend[];
  databases?: Database | Database[];
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
      "Cada año en mi universidad se realiza el evento llamado 'Postmaster', el cual trata de que los egresados cuenten su experiencia en sus trabajos con los demas estudiantes.",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.REACT],
      backend: [Backend.NEST, Backend.DOCKER],
      databases: Database.MYSQL,
    },
  },
  {
    title: "CIIS XXIII",
    descripcion:
      "El Congreso Internacion de Informatica y Sistemas es un evento que se realiza cada año en mi carreara, tuve la responsabilidad de encargarme de la pagina web.",
    tecnologies: {
      frontend: [Frontend.JS, Frontend.HTML, Frontend.CSS, Frontend.REACT],
    },
  },
];
