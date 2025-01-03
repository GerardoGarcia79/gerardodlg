import projects from "../data/projects";
import MoreProjects from "./MoreProjects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const gameHub = projects[0];
  const eCommerceStorefront = projects[1];
  const issueTracker = projects[4];
  const allProjects = projects;

  return (
    <div id="projects">
      <h2 className="text-4xl font-semibold">
        {" "}
        <span className="text-[#00a8e8]">{`</ >`}</span> Projects
      </h2>
      <div className="">
        <ProjectCard project={issueTracker} />
        <ProjectCard project={gameHub} />
        <ProjectCard project={eCommerceStorefront} />
        <MoreProjects projects={allProjects} />
      </div>
    </div>
  );
};

export default ProjectsSection;
