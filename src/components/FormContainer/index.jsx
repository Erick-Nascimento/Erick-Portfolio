import { FormContainerStyled } from "./style";
import LinkedinIcon from "../../assets/linkedin.png";
import TelegramIcon from "../../assets/telegram.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import InstagramIcon2 from "../../assets/instagram-icon.png";
import WhatsappIcon from "../../assets/whatsapp-icon.png";
import Form from "./Form";

function FormContainer() {
  return (
    <FormContainerStyled>
      <div className="left">
        <span>Me encontre nas redes sociais</span>
        <div className="socialMediaIconsContainer">
          <a
            href="https://www.linkedin.com/in/ericksnascimento/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="Icon" />
          </a>
          <a
            href="https://t.me/ErickSNascimento"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TelegramIcon} alt="Icon" />
          </a>
          <a
            href="https://www.facebook.com/erick.nascimento.798278"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookIcon} alt="Icon" />
          </a>
          <a
            href="https://www.instagram.com/erick.nascim3nto/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={InstagramIcon} alt="Icon" />
          </a>
        </div>
        <a
          href="https://wa.me/5521965494547?text=Ol%C3%A1%20Erick,%20cheguei%20aqui%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio."
          target="_blank"
          rel="noreferrer"
        >
          <img src={WhatsappIcon} alt="Icon" />
        </a>
        <span>ou se preferir, deixe um e-mail ao lado</span>
      </div>
      <div className="right">
        <Form />
      </div>
    </FormContainerStyled>
  );
}

export default FormContainer;
