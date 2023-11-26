import Hero from "../../components/Hero/hero";
import LastVideos from "../../components/LastVideos";
import ProjectsSection from "../../components/ProjectsSection";
import Skills from "../../components/Skills/skills";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsSection />
      <LastVideos />
    </>
  );
}

export default Home;
