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
      "Game Hub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. When clicking on a game's title, you can see a details page with information such as description, images, video, score, etc.",
    github: "https://github.com/GerardoGarcia79/game-hub",
    demo: "https://game-hub-eta-lilac.vercel.app/",
    img: gameHub,
  },
  {
    id: 2,
    title: "E-commerce Storefront",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "E-commerce Storefront is an application that fetch a list of products from an API and display them with image, price and description, this app allows users add products to shopping cart, view list of selected products and total price and delete products or empty cart with one click.",
    github: "https://github.com/GerardoGarcia79/e-commerce-app",
    demo: "https://e-commerce-app-bice-seven.vercel.app/",
    img: eCommerce,
  },
  {
    id: 3,
    title: "Recipe Finder",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Recipe Finder is an application to search for recipes and viw details. Your can search by entering ingredients or recipe names, and click on a recipe's name to view detailed information. You can also add or remove a recipe from favorites to display them on a favorites page.",
    github: "https://github.com/GerardoGarcia79/recipe-finder-app",
    demo: "https://recipe-finder-app-gamma.vercel.app/",
    img: recipeFinder,
  },
];
export default projects;
