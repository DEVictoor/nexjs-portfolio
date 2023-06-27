export const Enlaces: ITab[] = [
  { link: "/", title: "Home", id: 1 },
  { link: "/works", title: "Works", id: 2 },
  // { link: "/blog", title: "Blogs", id: 3 },
  { link: "/about", title: "About", id: 3 },
];

export interface ITab {
  id: number;
  link: string;
  title: string;
}
