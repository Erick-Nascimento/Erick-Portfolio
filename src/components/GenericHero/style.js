import { styled } from "styled-components";

export const GenericStyle = styled.div`
  background-color: #242424;
  color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 4rem 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .textsContainer {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    font-family: "Comfortaa", cursive;
    line-height: 1.5rem;

    .title {
      font-family: "Bebas Neue", sans-serif;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .description {
      text-align: justify;
    }
  }

  .imageContainer {
  }

  @media only screen and (max-width: 575.98px) {
    //width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 30px;

    & img {
      width: 100%;
    }

    & .textsContainer {
      text-align: center;
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      img {
        width: 70%;
      }
    }
  }

  @media only screen and (max-width: 767.98px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 30px;

    & img {
      width: 100%;
    }

    & .textsContainer {
      text-align: center;
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      img {
        width: 70%;
      }
    }
  }

  @media only screen and (max-width: 991.98px) {
    padding: 5% 30px;
  }

  @media only screen and (max-width: 1199.98px) {
    padding: 5% 30px;
  }
`;
