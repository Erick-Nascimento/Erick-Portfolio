import { HeroContainer } from "./style";
import { Typewriter } from "react-simple-typewriter";
import data from "../../data/home.json";

function Hero() {
  const heroData = data.hero;
  return (
    <>
      <HeroContainer>
        <div className="heroContent">
          <div className="imageContainer">
            <img src={heroData.photo} alt="" />
          </div>
          <div className="contentContainer">
            <div className="nameContainer">
              <span className="name">
                <strong className="htmlTag">&lt;h1&gt;</strong>
                <p>{heroData.title}</p>
                <strong className="htmlTag">&lt;/h1&gt;</strong>
              </span>
              <img src={heroData.handIcon} alt="" className="hand" />
            </div>
            <span className="role">
              <strong className="htmlTag">&lt;p&gt;</strong>
              {heroData.subtitle}
              <strong className="htmlTag">&lt;/p&gt;</strong>
            </span>
            <div className="phrasesContainer">
              <span className="phrases">
                {
                  <Typewriter
                    words={heroData.phrases}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={3000}
                  />
                }
              </span>
            </div>
          </div>
        </div>
      </HeroContainer>
    </>
  );
}

export default Hero;
