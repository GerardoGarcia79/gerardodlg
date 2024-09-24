import { Project } from "../data/projects";
import MoreProjectsCard from "./MoreProjectsCard";

interface Props {
  projects: Project[];
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <>
      <h2 className="text-3xl text-white font-semibold mt-6">More projects</h2>
      {/* TODO: Change lg:grid-cols-3 when adding another project */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <MoreProjectsCard project={projects[0]} />
        <MoreProjectsCard project={projects[0]} />
        <MoreProjectsCard project={projects[0]} />
      </div>
    </>
  );
};

export default MoreProjects;
