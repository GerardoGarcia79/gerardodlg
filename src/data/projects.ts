interface Project {
  id: number;
  title: string;
  stack: string[];
  description: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Game Hub",
    stack: ["React", "TypeScript", "Game Query", "Tailwind CSS"],
    description:
      "GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.",
    github: "https://github.com/GerardoGarcia79/game-hub",
    demo: "https://game-hub-eta-lilac.vercel.app/",
  },
];
export default projects;
