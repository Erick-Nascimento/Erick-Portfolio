import TimelineItem from "./Item";
import { TimelineContainer } from "./style";
import Pedagio from "/assets/pedagio.png";
import Headphones from "/assets/headphones.png";
import { useContext } from "react";
import data from "../../data/about.json";

function Timeline() {
  const timelineData = data.timeline;
  return (
    <TimelineContainer>
      <div className="TimeLineBar">
        {timelineData.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              color={item.color}
              direction={item.direction}
              icon={item.icon}
              alt={item.alt}
              order={item.order}
            />
          );
        })}
      </div>
    </TimelineContainer>
  );
}

export default Timeline;
