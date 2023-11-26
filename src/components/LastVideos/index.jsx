import { LastVideosSection } from "./style";
import VideoCard from "./VideoCard/index";
import VideoCardImg from "../../assets/videoCard.png";
import ThumbnailLowdefy from "../../assets/Thumbnail_lowdefy.png";
import ThumbnailHTML from "../../assets/Thumbnail_html.png";
import data from "../../data/home.json";

function LastVideos() {
  const LastVideosSectionData = data.LastVideosSection;

  return (
    <LastVideosSection>
      <div className="sectionWrapper">
        <div className="sectionTitle">
          <span className="title">Meus Últimos Vídeos</span>
        </div>
        <div className="videosContainer">
          {LastVideosSectionData.map((item, index) => {
            return (
              <VideoCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </LastVideosSection>
  );
}

export default LastVideos;
