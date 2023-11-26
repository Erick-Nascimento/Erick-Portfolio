import { styled } from "styled-components";

export const AboutSection = styled.div`
  background-color: #242424;
  color: #fff;
  display: flex;
  gap: 4rem;
  padding: 4rem 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .textsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-family: "Bebas Neue", sans-serif;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .description {
      font-family: "Comfortaa", cursive;
      line-height: 1.5rem;
      text-align: justify;
    }
  }

  .imageContainer {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 575.98px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 30px;
    text-align: center;
  }

  @media only screen and (max-width: 767.98px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 30px;
    text-align: center;
  }

  @media only screen and (max-width: 991.98px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 30px;
    text-align: center;
  }

  @media only screen and (max-width: 1199.98px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 30px;
    text-align: center;
  }
  @media only screen and (max-width: 1399.98px) {
    padding: 4rem 10%;
  }
`;
