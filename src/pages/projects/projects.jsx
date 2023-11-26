import GenericHero from "../../components/GenericHero";
import ProjectCardsContainer from "../../components/ProjectCardsContainer";
import data from "../../data/projects.json";

function Projects() {
  const projectsData = data.projects;

  return (
    <>
      <GenericHero
        title={projectsData.title}
        description={projectsData.description}
        image={projectsData.image}
      />

      <ProjectCardsContainer />
    </>
  );
}

export default Projects;
