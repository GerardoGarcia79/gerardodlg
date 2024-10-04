import { FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import { Project } from "../data/projects";
import react from "../assets/icons/react.svg";
import typeScript from "../assets/icons/typescript.svg";
import tailwindCss from "../assets/icons/tailwind-css.svg";
import html from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";

interface Props {
  project: Project;
}

const MoreProjectsCard = ({ project }: Props) => {
  const icons: { [icon: string]: string } = {
    React: react,
    TypeScript: typeScript,
    "Tailwind CSS": tailwindCss,
    HTML: html,
    CSS: css,
  };

  return (
    <div className="p-4 mt-5 border-2 border-black/10 dark:border-white/10 rounded-lg transition ease-out duration-300 hover:border-[#00a8e8]/50 dark:hover:border-[#00a8e8]/50">
      <div className="flex justify-end ">
        <a
          target="_blank"
          href={project.github}
          className="transition ease-out hover:scale-125 duration-300 hover:text-[#00a8e8]"
        >
          <FiGithub size="25px" className="mr-3" />
        </a>
        <a
          target="_blank"
          href={project.demo}
          className="transition ease-out hover:scale-125 duration-300 hover:text-[#00a8e8]"
        >
          <IoIosLink size="25px" />
        </a>
      </div>
      <h2 className="text-3xl font-semibold text-[#00a8e8] mb-2">
        {project.title}
      </h2>
      <p className="text-base">{project.description}</p>
      <div className="flex justify-center [&_*]:mr-2 mt-3">
        {project.stack.map((technology, index) => (
          <span key={index}>
            <img src={icons[technology]} alt="React icon" className="w-4 h-4" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MoreProjectsCard;
