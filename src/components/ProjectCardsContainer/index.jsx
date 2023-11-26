import { ProjectCardsContainerStyle } from "./style";
import ProjectCard from "../ProjectsSection/ProjectCard";
import Pagination from "../Pagination";
import data from "../../data/projects.json";

function ProjectCardsContainer() {
  const projectsData = data.projects;

  return (
    <ProjectCardsContainerStyle>
      <div className="projectsWrapper">
        {projectsData.projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              title={item.projectName}
              description={item.description}
              color={item.backgroundColor}
              image={item.image}
              technologies={item.technologies}
              projectLinks={item.links}
            />
          );
        })}
      </div>
      <Pagination />
    </ProjectCardsContainerStyle>
  );
}

export default ProjectCardsContainer;
