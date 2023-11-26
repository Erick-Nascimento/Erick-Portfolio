import { styled } from "styled-components";

export const StyledImage = styled.div`
  background-color: ${(props) => props.background};
  border-radius: 100%;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.border};
  transition: 0.3s;

  &:hover {
    transform: translate(4px, 4px);
    transition: 0.3s;
  }
  img {
    width: ${(props) => props.width};
    object-fit: cover;
  }
`;
