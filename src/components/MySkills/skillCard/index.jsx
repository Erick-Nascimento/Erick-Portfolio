import { useContext } from "react";
import { SkillContext } from "../../../contexts/skillContext";
import { StyledCard } from "./style";

function SkillCard({ title, image, background }) {
  const { selectedSkill, setSelectedSkill } = useContext(SkillContext);

  function toggleSkill() {
    setSelectedSkill(title);
  }

  return (
    <StyledCard color={background} onClick={toggleSkill}>
      <div className="skillCardShadow"></div>
      <div className="content">
        <img src={image} />
        <span>{title}</span>
      </div>
    </StyledCard>
  );
}

export default SkillCard;
