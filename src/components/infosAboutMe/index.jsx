import { MyInfos } from "./style";
import InfoSection from "./infosSection";
import Lamp from "../../assets/lamp.png";
import Hat from "../../assets/hat.png";
import data from "../../data/about.json";

function InfosAboutMe() {
  const infosAboutMeData = data.infosAboutMe;

  return (
    <MyInfos>
      <InfoSection
        title={"Formação"}
        image={Lamp}
        items={infosAboutMeData.formations}
      />

      <InfoSection
        title={"Aleatoriedades"}
        image={Hat}
        items={infosAboutMeData.randonFacts}
      />
    </MyInfos>
  );
}

export default InfosAboutMe;
