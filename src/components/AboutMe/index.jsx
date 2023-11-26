import { AboutSection } from "./style";
import data from "../../data/about.json";

function AboutMe() {
  const aboutHeroData = data.hero;
  return (
    <AboutSection>
      <div className="textsContainer">
        <span className="title">{aboutHeroData.title}</span>
        <span className="description">{aboutHeroData.text}</span>
      </div>
      <div className="imageContainer">
        <img src={aboutHeroData.image} alt="Erick Nascimento photo" />
      </div>
    </AboutSection>
  );
}

export default AboutMe;
