import { FooterContainer } from "./style";
import Arrow from "/assets/arrow.png";
import Nav from "../Header/Nav/nav";

function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <div className="footerInside">
        <div className="upArrowContainer" onClick={backToTop}>
          <button className="upArrowBtn">
            <img src={Arrow} className="arrowImg" alt="Up Arrow" />
          </button>
        </div>
        <div className="footerContent">
          <span>© Desenvolvido por Erick Nascimento</span>
          <Nav />
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
