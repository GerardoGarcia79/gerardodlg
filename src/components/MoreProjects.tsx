import { Project } from "../data/projects";
import MoreProjectsCard from "./MoreProjectsCard";

interface Props {
  projects: Project[];
}

const MoreProjects = ({ projects }: Props) => {
  return (
    <>
      <h3 className="text-2xl font-semibold mt-4">More projects</h3>
      {/* TODO: Change lg:grid-cols-3 when adding another project */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-3">
        <MoreProjectsCard project={projects[3]} />
        <MoreProjectsCard project={projects[4]} />
      </div>
    </>
  );
};

export default MoreProjects;
