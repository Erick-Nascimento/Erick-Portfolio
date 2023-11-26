import ProjectCard from "./ProjectCard";
import { Projects } from "./style";
import data from "../../data/projects.json";

function ProjectsSection() {
  const ProjectsData = data.projects;

  return (
    <Projects>
      <div className="sectionTitle">
        <span className="title">{ProjectsData.sectionTitle}</span>
      </div>
      <div className="cardsContainer">
        {ProjectsData.projects.map((item, index) => {
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
    </Projects>
  );
}

export default ProjectsSection;
