export const works: IWork[] = [
  {
    empresa: "Innovamos Contigo",
    labor: "Backend Developer",
    aporte:
      "Encargado en un comienzo  de hacer el mantenimiento de su pagina web, mas adelante tambien estuve a cargo de renovar la pagina web para diferentes negocios de mi ciudad.",
    // inicio: new Date("05-11-2021"),
    inicio: new Date("2021-11-05"),
    // fin: new Date("05-01-2022"),
    fin: new Date("2022-01-05"),
  },
  {
    empresa: "Epiko Technology",
    labor: "Desarrollador web",
    aporte:
      "Estuve encargado de desarrollar pequeñas funcionalidad en su sistema de facturación electrónica, mas adelante desarrolle un sistema para gestionar creditos financiones para un negocio de mi ciudad",
    // inicio: new Date("02-08-2022"),
    inicio: new Date("2022-08-02"),
    // fin: new Date("02-03-2022"),
    fin: new Date("2023-03-02"),
  },
];

export interface IWork {
  empresa: string;
  labor: string;
  aporte: string;
  inicio: Date;
  fin: Date;
}
