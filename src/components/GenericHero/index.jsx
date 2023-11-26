import { GenericStyle } from "./style";

function GenericHero({ title, description, image }) {
  return (
    <GenericStyle>
      <div className="textsContainer">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
      <div className="imageContainer">
        <img src={image} alt="" />
      </div>
    </GenericStyle>
  );
}

export default GenericHero;
