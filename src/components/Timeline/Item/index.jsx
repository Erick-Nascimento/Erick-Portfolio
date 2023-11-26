import { useContext } from "react";
import { TimelineContext } from "../../../contexts/timelineContext";
import { StyledItem } from "./style";

function TimelineItem({ alt, color, direction, icon, order }) {
  const { index, setIndex } = useContext(TimelineContext);

  return (
    <StyledItem color={color} direction={direction}>
      <div className="item" onClick={() => setIndex(order)}>
        <div className="point">
          <div className="line">
            <div className="circle">
              <img src={icon} />
            </div>
          </div>
        </div>
      </div>
    </StyledItem>
  );
}

export default TimelineItem;
