import GenericHero from "../../components/GenericHero";
import Communicate from "../../assets/communicate.png";
import FormContainer from "../../components/FormContainer";

function Contact() {
  return (
    <>
      <GenericHero
        title={"Entre em contato"}
        description={
          "Eu vou adorar falar com você e te ajudar com os meus conhecimentos."
        }
        image={Communicate}
      />

      <FormContainer />
    </>
  );
}

export default Contact;
