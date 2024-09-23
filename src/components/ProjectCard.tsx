import { Project } from "../data/projects";

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
        <div className="mb-3 [&_*]:mr-2">
          <span className="text-white text-sm">badge 1</span>
          <span className="text-white text-sm">badge 2</span>
          <span className="text-white text-sm">badge 3</span>
          <span className="text-white text-sm">badge 4</span>
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
