import { Project } from "../data/projects";
import ChakraUiBadge from "./ChakraUiBadge";
import ReactBadge from "./ReactBadge";
import ReactQueryBadge from "./ReactQueryBadge";
import TypeScriptBadge from "./TypeScriptBadge";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="grid grid-cols-2 mt-5">
      <div className="overflow-hidden pr-4 flex items-center">
        <img
          src={project.img}
          alt="Game Hub image"
          className="rounded-lg object-cover"
        />
      </div>
      <div>
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
        <div>
          <button className="mr-4 text-white text-lg">Github</button>
          <button className="text-white text-lg">Preview</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
