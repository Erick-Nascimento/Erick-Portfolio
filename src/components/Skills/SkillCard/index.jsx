import { StyledImage } from "./style";

function SkillCard({
  image,
  altText,
  title,
  background,
  width,
  height,
  border,
}) {
  return (
    <StyledImage
      background={background}
      width={width}
      height={height}
      border={border}
    >
      <img src={image} alt={altText} title={title} />
    </StyledImage>
  );
}

export default SkillCard;
