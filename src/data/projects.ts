import gameHub from "../assets/game-hub.webp";
import eCommerce from "../assets/e-commerce.webp";
import recipeFinder from "../assets/recipe-finder.webp";

export interface Project {
  id: number;
  title: string;
  stack: string[];
  description: string;
  github: string;
  demo: string;
  img: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Game Hub",
    stack: ["React", "TypeScript", "Chakra UI", "React Query"],
    description:
      "Game Hub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. Click on a game's title, to see details.",
    github: "https://github.com/GerardoGarcia79/game-hub",
    demo: "https://game-hub-eta-lilac.vercel.app/",
    img: gameHub,
  },
  {
    id: 2,
    title: "E-commerce Storefront",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "E-commerce Storefront fetch a list of products from an API and display their information, add or remove products from the cart and view list of selected products with total price.",
    github: "https://github.com/GerardoGarcia79/e-commerce-app",
    demo: "https://e-commerce-app-bice-seven.vercel.app/",
    img: eCommerce,
  },
  {
    id: 3,
    title: "Recipe Finder",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Recipe Finder is an web app to search for recipes and view details. Your can search by ingredients or recipe names, click on a recipe's name to view detailed information. Add or remove a recipe from favorites page.",
    github: "https://github.com/GerardoGarcia79/recipe-finder-app",
    demo: "https://recipe-finder-app-gamma.vercel.app/",
    img: recipeFinder,
  },
];
export default projects;
