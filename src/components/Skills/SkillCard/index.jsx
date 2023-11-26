import { StyledImage } from "./style";

function SkillCard({ image, altText, background, width, height, border }) {
  return (
    <StyledImage
      background={background}
      width={width}
      height={height}
      border={border}
    >
      <img src={image} alt={altText} />
    </StyledImage>
  );
}

export default SkillCard;
