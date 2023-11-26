import { styled } from "styled-components";

export const FormContainerStyled = styled.div`
  padding: 4rem 20%;
  display: flex;
  justify-content: space-between;
  font-family: "Arimo", sans-serif;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 50%;
    .socialMediaIconsContainer {
      img {
        width: 55px;
      }
    }

    & a {
      & img {
        width: 60px;
      }
    }
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    text-align: center;

    .left {
      margin-bottom: 30px;

      .socialMediaIconsContainer {
        img {
          width: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    text-align: center;

    .left {
      margin-bottom: 30px;

      .socialMediaIconsContainer {
        img {
          width: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 991.98px) {
    padding: 30px;
  }

  @media only screen and (max-width: 1199.98px) {
  }

  @media only screen and (max-width: 1399.98px) {
  }
`;
