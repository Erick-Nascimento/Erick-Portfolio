import { styled } from "styled-components";

export const StyledCard = styled.div`
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 1rem 1.4rem;
  border-radius: 5px;
  position: relative;
  width: 80px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;

  .skillCardShadow {
    background-color: ${(props) => props.color}; //Mudar a cor pela prop #2196f3
    position: absolute;
    top: 5px;
    left: -5px;
    width: 80px;
    height: 110px;
    border-radius: 5px;
    z-index: -1;
    padding: 1rem 1.4rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-transform: uppercase;

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }

    span {
      text-transform: capitalize;
      text-align: center;
    }
  }
`;
