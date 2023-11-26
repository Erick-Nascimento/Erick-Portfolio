import Input from "./Input";
import { StyledForm } from "./style";

function Form() {
  return (
    <StyledForm>
      <form action="" method="POST">
        <Input
          type={"text"}
          name={"nome"}
          id={"nome"}
          placeholder={"Nome"}
          required
        />
        <Input
          type={"text"}
          name={"email"}
          id={"email"}
          placeholder={"E-mail"}
        />
        <Input
          type={"text"}
          name={"telefone"}
          id={"telefone"}
          placeholder={"Telefone"}
        />

        <Input
          type={"text"}
          name={"empresa"}
          id={"empresa"}
          placeholder={"Empresa"}
        />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </StyledForm>
  );
}

export default Form;
