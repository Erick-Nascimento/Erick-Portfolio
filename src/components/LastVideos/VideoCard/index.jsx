import { Card } from "./style";

import ExternalLink from "/assets/external-link.png";

function VideoCard({ image, title, description, link }) {
  return (
    <Card>
      <div className="cardImageContainer">
        <img
          src={image}
          alt="Imagem do Vídeo"
          className="cardImage"
          width={100}
          height={100}
        />
      </div>
      <div className="cardContent">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
        <div className="externalLinkContainer">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={ExternalLink} alt="External Link" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default VideoCard;
