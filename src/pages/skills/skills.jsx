import GenericHero from "../../components/GenericHero";
import MySkills from "../../components/MySkills";
import SkillContextProvider from "../../contexts/skillContext";
import data from "../../data/skills.json";

function Skills() {
  const skillsData = data.hero;

  return (
    <>
      <GenericHero
        title={skillsData.title}
        description={skillsData.description}
        image={skillsData.image}
      />
      <SkillContextProvider>
        <MySkills />
      </SkillContextProvider>
    </>
  );
}

export default Skills;
