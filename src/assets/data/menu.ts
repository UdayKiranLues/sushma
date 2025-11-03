export type MenuType = {
  id: number,
  title: string,
  url?: string,
  submenus?: {
    id: number,
    title: string,
    url: string
  }[]
}[]
export const menu: MenuType = [
  {
    id: 1,
    title: "Home",
    submenus: [
      { id: 1.1, title: "Home 1", url: "/" },
      { id: 1.2, title: "Home 2", url: "/home-2" },
      { id: 1.3, title: "Home 3", url: "/home-3" },
    ],
  },
  {
    id: 2,
    title: "About",
    submenus: [
      { id: 2.1, title: "About US", url: "/about" },
      { id: 2.2, title: "Our Team", url: "/team" },
    ],
  },
  {
    id: 3,
    title: "Services",
    submenus: [
      { id: 3.1, title: "Services", url: "/services" },
      { id: 3.2, title: "Services Details", url: "/services-details" },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    submenus: [
      { id: 4.1, title: "Portfolio", url: "/portfolio" },
      { id: 4.2, title: "Portfolio Details", url: "/portfolio-details" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    submenus: [
      { id: 5.1, title: "Blog", url: "/blog" },
      { id: 5.2, title: "Blog Standard", url: "/blog-standard" },
      { id: 5.3, title: "Blog Details", url: "/blog/1" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
    // submenus: [],
  },
];
