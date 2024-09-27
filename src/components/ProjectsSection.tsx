import projects from "../data/projects";
import MoreProjects from "./MoreProjects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const gameHub = projects[0];
  const eCommerceStorefront = projects[1];
  const recipeFinder = projects[2];
  const allProjects = projects;

  return (
    <div id="projects">
      <h2 className="text-4xl text-white font-semibold">
        {" "}
        <span className="text-[#00a8e8]">{`</ >`}</span> Projects
      </h2>
      <div className="">
        <ProjectCard project={gameHub} />
        <ProjectCard project={eCommerceStorefront} />
        <ProjectCard project={recipeFinder} />
        <MoreProjects projects={allProjects} />
      </div>
    </div>
  );
};

export default ProjectsSection;
