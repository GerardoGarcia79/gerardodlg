import { Project } from "../data/projects";
import ChakraUiBadge from "./badges/ChakraUiBadge";
import ReactBadge from "./badges/ReactBadge";
import ReactQueryBadge from "./badges/ReactQueryBadge";
import TailwindCssBadge from "./badges/TailwindCssBadge";
import TypeScriptBadge from "./badges/TypeScriptBadge";
import CodeButton from "./buttons/CodeButton";
import DemoButton from "./buttons/DemoButton";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const badges: { [type: string]: JSX.Element } = {
    React: <ReactBadge key={1} />,
    TypeScript: <TypeScriptBadge key={2} />,
    "Chakra UI": <ChakraUiBadge key={3} />,
    "Tailwind CSS": <TailwindCssBadge key={4} />,
    "React Query": <ReactQueryBadge key={5} />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
      <div className="flex items-center md:items-start">
        <img
          src={project.img}
          alt={`${project.title} image`}
          className=" rounded-lg transition ease-out hover:scale-105 hover:border-2 hover:border-[#00a8e8]/50 duration-300 md:hover:translate-x-2 md:hover:translate-y-2 md:w-[95%]"
        />
      </div>
      <div className="pl-1">
        <h3 className="text-[#00a8e8] text-3xl font-semibold mb-3">
          {project.title}
        </h3>
        <div className={`mb-3 [&_*]:mr-2 lg:flex w-full`}>
          {project.stack.map((technology) => badges[technology])}
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
