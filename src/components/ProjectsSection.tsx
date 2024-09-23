import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const gameHub = projects[0];

  return (
    <div>
      <h2 className="text-4xl text-white font-semibold">
        {" "}
        <span className="text-[#00a8e8]">{`</ >`}</span> Projects
      </h2>
      <div className="">
        <ProjectCard project={gameHub} />
      </div>
    </div>
  );
};

export default ProjectsSection;
