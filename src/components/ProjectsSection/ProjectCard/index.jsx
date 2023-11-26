import { Card } from "./style";
import ReactIcon from "../../../assets/react-icon.png";
import { useRef, useEffect, useState } from "react";
import GithubIcon from "../../../assets/github.png";
import FigmaIcon from "../../../assets/figma.png";
import ExternalLinkIcon from "../../../assets/white-external-link.png";
import { Link } from "react-router-dom";
import { Item } from "../../Pagination/PaginationItem/style";

function ProjectCard({
  title,
  description,
  image,
  color,
  technologies,
  projectLinks,
}) {
  const [myDiv, setMyDiv] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const ShadowDiv = useRef(null);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    setMyDiv(ShadowDiv.current.clientHeight);
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function expandContainer() {
    setIsExpanded(!isExpanded);
    event.stopPropagation();
  }

  return (
    <Card color={color} thisdiv={myDiv} expanded={isExpanded ? 1 : 0}>
      <div className="cardShadow" onClick={expandContainer}>
        <div className="iconsContainer" onClick={(e) => e.stopPropagation()}>
          <Link to={projectLinks.githubLink} target="_blank">
            <img src={GithubIcon} className="githubIcon" />
          </Link>
          <Link to={projectLinks.figmaLink} target="_blank">
            <img src={FigmaIcon} className="figmaIcon" />
          </Link>
          <Link to={projectLinks.vercelLink} target="_blank">
            <img src={ExternalLinkIcon} className="externalLinkIcon" />
          </Link>
        </div>
      </div>
      <div className="cardContent" ref={ShadowDiv}>
        <div className="topContent">
          <div className="imageContainer">
            <img src={image} className="image" alt="" />
          </div>
          <div className="projectInfos">
            <span className="title">{title}</span>
            <span className="description">{description}</span>
            <span className="techUsed">
              Tecnologias Utilizadas:
              {technologies.map((item, index) => {
                return <img key={index} src={item.icon} />;
              })}
            </span>
            <div className="buttonContainer">
              <button className="seeMoreBtn" onClick={expandContainer}>
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
