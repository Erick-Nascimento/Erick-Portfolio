import InfoItem from "./infoItem";
import { InfoSectionStyle } from "./style";

function InfoSection({ title, image, items }) {
  return (
    <InfoSectionStyle>
      <div className="title">
        <span>{title}</span>
        <img src={image} alt="" className="titleIcon" />
      </div>
      <div className="items">
        {items.map((index, item) => {
          return <InfoItem key={index} text={items[item]} />;
        })}
      </div>
    </InfoSectionStyle>
  );
}

export default InfoSection;
