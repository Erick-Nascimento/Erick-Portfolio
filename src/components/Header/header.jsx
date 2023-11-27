import { HeaderContainer } from "./style";
import Logo from "/assets/logo.png";
import MoonIcon from "/assets/moon-icon.png";
import LinkedinIcon from "/assets/linkedin-icon.png";
import { Link } from "react-router-dom";
import GithubIcon from "/assets/github-icon.png";
import Nav from "./Nav/nav";
import MenuHamburguerIcon from "/assets/menu-hamburguer-icon.png";
import DropdownMenu from "../DropdownMenu";
import { useState, useEffect } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  //console.log(window.innerWidth);

  const [tamanhoTela, setTamanhoTela] = useState({
    largura: window.innerWidth,
    altura: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setTamanhoTela({
        largura: window.innerWidth,
        altura: window.innerHeight,
      });

      if (tamanhoTela.largura >= 991) {
        setIsVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tamanhoTela]);

  return (
    <HeaderContainer>
      <div className="logoContainer">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="navContainer">
        <Nav />
      </div>

      <div className="iconsContainer">
        {/*<img src={MoonIcon} alt="Logo" className="moonIcon" />*/}

        <div className="socialMediasContainer">
          <Link
            to={"https://www.linkedin.com/in/ericksnascimento/"}
            target="_blank"
          >
            <img src={LinkedinIcon} alt="Logo" className="linkedinIcon" />
          </Link>
          <Link to={"https://github.com/Erick-Nascimento"} target="_blank">
            <img src={GithubIcon} alt="Logo" className="githubIcon" />
          </Link>
        </div>
      </div>
      <img
        className="menu-hamburguer-icon"
        onClick={() => setIsVisible(!isVisible)}
        src={MenuHamburguerIcon}
        alt="Menu Hamburguer Icon"
        width={30}
        height={30}
      />
      {isVisible && <DropdownMenu />}
    </HeaderContainer>
  );
}

export default Header;
