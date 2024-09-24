import { Project } from "../data/projects";
import ChakraUiBadge from "./badges/ChakraUiBadge";
import ReactBadge from "./badges/ReactBadge";
import ReactQueryBadge from "./badges/ReactQueryBadge";
import TypeScriptBadge from "./badges/TypeScriptBadge";
import CodeButton from "./buttons/CodeButton";
import DemoButton from "./buttons/DemoButton";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
      <div className="flex items-center">
        <img
          src={project.img}
          alt="Game Hub image"
          className="w-[95%] rounded-lg transition hover:translate-x-2 hover:translate-y-2 ease-out hover:scale-105 hover:border-2 hover:border-white duration-300"
        />
      </div>
      <div className="pl-1">
        <h3 className="text-[#00a8e8] text-3xl font-semibold mb-3">
          {project.title}
        </h3>
        <div className="mb-3 [&_*]:mr-2 flex">
          <ReactBadge />
          <TypeScriptBadge />
          <ReactQueryBadge />
          <ChakraUiBadge />
        </div>
        <p className="text-base text-white mb-3">{project.description}</p>
        <div className="flex [&_*]:mr-2">
          <CodeButton code={project.github} />
          <DemoButton demo={project.demo} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
