export const Enlaces: ITab[] = [
  { link: "/", title: "Home", id: 1 },
  { link: "/projects", title: "Projects", id: 2 },
  { link: "/works", title: "Works", id: 3 },
  // { link: "/blog", title: "Blogs", id: 3 },
  { link: "/about", title: "About", id: 4 },
];

export interface ITab {
  id: number;
  link: string;
  title: string;
}
