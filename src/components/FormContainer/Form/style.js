import { styled } from "styled-components";

export const StyledForm = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    textarea {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: #fff;
      color: #000;
      border: none;
      width: 300px;
      padding: 0.7rem 1rem;
      border-radius: 5px;
      outline: none;
      font-family: "Arimo", sans-serif;
      resize: none;
      height: 150px;
    }

    button {
      background-color: #242424;
      color: #fff;
      border: none;
      width: 150px;
      padding: 0.7rem;
      box-shadow: 4px 4px #2488ff;
      cursor: pointer;
    }

    @media only screen and (max-width: 575.98px) {
      align-items: center;
    }

    @media only screen and (max-width: 767.98px) {
      align-items: center;
    }

    @media only screen and (max-width: 991.98px) {
    }

    @media only screen and (max-width: 1199.98px) {
    }

    @media only screen and (max-width: 1399.98px) {
    }
  }
`;
