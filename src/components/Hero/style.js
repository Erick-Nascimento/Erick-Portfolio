import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: #242424;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px 10%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .heroContent {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    .imageContainer {
    }

    .contentContainer {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .htmlTag {
        color: #fff;
        font-family: "Charmonman", cursive;
        font-size: 16px;
        margin: 0 10px;
      }

      .nameContainer {
        display: flex;

        .name {
          color: #2ec4b6;
          font-family: "Bebas Neue", sans-serif;
          font-size: 40px;
          display: flex;
          align-items: center;
        }
      }

      .hand {
        width: 25px;
        height: 25px;
      }

      .role {
        font-family: "Comfortaa", cursive;
        display: flex;
        align-items: center;
      }

      .phrasesContainer {
        background-color: #1f1f1f;
        padding: 1rem;
        border-radius: 2rem;
        font-family: "Electrolize", sans-serif;
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;

        .phrases {
          display: flex;
          align-items: center;
          .cursor {
            font-size: 1.5rem;
            margin: 0 3px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575.98px) {
    .heroContent {
      flex-direction: column;
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      & img {
        width: 100%;
        margin-left: -65px;
      }
    }

    .contentContainer {
      display: flex;
      align-items: center;
      .nameContainer {
        .name {
          p {
            font-size: 1.6rem;
          }
        }

        & img {
          position: absolute;
          right: 70px;
        }
      }
    }
  }

  @media only screen and (max-width: 767.98px) {
    .heroContent {
      flex-direction: column;

      & .imageContainer {
        & img {
          margin-left: -65px;
        }
      }
    }
  }

  @media only screen and (max-width: 991.98px) {
    padding: 15px;
    & .heroContent {
      gap: 5px;
      & .imageContainer {
        & img {
          margin-left: -40px;
          width: 110%;
        }
      }
    }
  }
`;
