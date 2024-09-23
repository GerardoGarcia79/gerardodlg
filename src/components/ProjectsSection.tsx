import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-4xl text-white">
        {" "}
        <span className="text-[#00a8e8]">{`</ >`}</span> Projects
      </h2>
      <ProjectCard />
    </div>
  );
};

export default ProjectsSection;
