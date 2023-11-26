import { PrevJobsContainer } from "./style";
import RightArrow from "../../assets/right-arrow.png";
import LeftArrow from "../../assets/left-arrow.png";
import PedagioPhoto from "../../assets/via-facil.png";
import data from "../../data/about.json";
import { useContext } from "react";
import { TimelineContext } from "../../contexts/timelineContext";

function PrevJobs() {
  const { index, setIndex } = useContext(TimelineContext);
  const jobsData = data.jobs[index];

  const positions = [0, 1, 2, 3, 4];

  function getNext(number) {
    let newNumber;

    if (number == 4) {
      newNumber = 0;
    } else {
      newNumber = number + 1;
    }

    return newNumber;
  }
  function getPrev(number) {
    let newNumber;

    if (number == 0) {
      newNumber = 4;
    } else {
      newNumber = number - 1;
    }

    return newNumber;
  }

  return (
    <PrevJobsContainer>
      <img
        src={LeftArrow}
        className="arrowController"
        onClick={() => setIndex(getPrev(index))}
      />
      <div className="container">
        <div className="content">
          <span className="title">{jobsData.enterprise}</span>
          <span className="role">
            {jobsData.role} - <strong>{jobsData.period}</strong>
          </span>
          <span className="description">{jobsData.text}</span>
        </div>
        <img src={jobsData.photo} className="rolePhoto" />
      </div>
      <img
        src={RightArrow}
        className="arrowController"
        onClick={() => setIndex(getNext(index))}
      />
    </PrevJobsContainer>
  );
}

export default PrevJobs;
