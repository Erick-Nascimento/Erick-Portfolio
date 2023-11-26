import { StyledItem } from "./style";
import CheckIcon from "../../../../assets/check.png";

function InfoItem({ text }) {
  return (
    <StyledItem>
      <img src={CheckIcon} alt="" />
      <span>{text}</span>
    </StyledItem>
  );
}

export default InfoItem;
