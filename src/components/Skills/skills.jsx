import SkillCard from "./SkillCard";
import { SkillsContainer } from "./style";
import data from "../../data/home.json";

function Skills() {
  const SkillsData = data.skills;
  return (
    <SkillsContainer>
      {SkillsData.map((item, index) => {
        return (
          <SkillCard
            key={index}
            image={item.icon}
            altText={item.altText}
            title={item.title}
            background={item.background}
            width={item.width}
            height={item.height}
            border={item.border}
          />
        );
      })}
    </SkillsContainer>
  );
}

export default Skills;
