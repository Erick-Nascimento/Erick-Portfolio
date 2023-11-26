import { StyledInput } from "./style";

function Input({ type, name, id, placeholder }) {
  return (
    <StyledInput type={type} name={name} id={id} placeholder={placeholder} />
  );
}

export default Input;
