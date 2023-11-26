import styled from "styled-components";

export const Projects = styled.div`
  padding: 0 20%;
  max-width: 1600px;
  margin: 0 auto;

  .sectionTitle {
    margin-bottom: 2rem;

    .title {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: bold;
      font-family: "Bebas Neue", sans-serif;
    }
  }
  .cardsContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media only screen and (max-width: 575.98px) {
    padding: 0 30px 0 15px;

    .cardsContainer {
      gap: 8rem;
    }
  }
  @media only screen and (max-width: 767.98px) {
    padding: 0 30px 0 15px;

    .cardsContainer {
      gap: 0;

      & > div:first-child {
        margin-bottom: 6.5rem;
      }

      & > div {
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (max-width: 991.98px) {
    padding: 0 30px 0 15px;
  }

  @media only screen and (max-width: 1199.98px) {
    padding: 0 30px 0 15px;
  }

  @media only screen and (max-width: 1399.98px) {
    padding: 0 calc(10% + 15px) 0 10%;
  }
`;
