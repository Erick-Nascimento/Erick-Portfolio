import AboutMe from "../../components/AboutMe";
import InfosAboutMe from "../../components/infosAboutMe";
import PrevJobs from "../../components/PrevJobs";
import Timeline from "../../components/Timeline";
import TimelineContextProvider from "../../contexts/timelineContext";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <AboutMe />
      <InfosAboutMe />
      <TimelineContextProvider>
        <Timeline />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PrevJobs />
        </div>
      </TimelineContextProvider>
    </div>
  );
}

export default About;
