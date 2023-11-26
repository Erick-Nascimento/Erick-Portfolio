import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #242424;
  color: #fff;
  font-family: "Comfortaa", cursive;
  height: 3.5rem;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  justify-content: center;
  white-space: nowrap;

  .footerInside {
    margin: 0 40px;
    max-width: 1600px;
    width: 100%;
    .upArrowContainer {
      position: absolute;
      top: -20px;
      left: calc(50% - 35px);
      .upArrowBtn {
        background-color: #242424;
        border-radius: 40px;
        border: none;
        height: 70px;
        width: 70px;
        display: flex;
        justify-content: center;
        position: relative;
        .arrowImg {
          position: absolute;
          top: 10px;
        }
      }
      .upArrowBtn:hover {
        cursor: pointer;
      }
    }

    .footerContent {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media only screen and (max-width: 575.98px) {
    font-size: 0.8rem;

    .footerInside {
      padding: 10px;
      width: 100%;
      margin: 0;
      padding: 0;

      & .footerContent {
        justify-content: center;
        position: relative;
        z-index: 999;
        margin-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 767.98px) {
    .footerInside {
      padding: 0;
      margin: 0;

      & .footerContent {
        justify-content: center;
        position: relative;
        z-index: 999;
        margin-top: 10px;
        font-size: 0.8rem;
      }
    }
  }

  @media only screen and (max-width: 991.98px) {
    box-sizing: border-box;
    padding: 15px;

    & .footerInside {
      & .footerContent {
        justify-content: center;
        position: relative;
        z-index: 999;
        margin-top: 10px;
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (max-width: 1199.98px) {
    & .footerInside {
      padding: 0 15px;
      & .footerContent {
        //flex-direction: column;
        //align-items: center;
        position: relative;
        z-index: 999;
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (max-width: 1399.98px) {
    & .footerInside {
      //padding: 0 10%;
      & .footerContent {
        position: relative;
        z-index: 999;

        font-size: 0.9rem;
      }
    }
  }
`;
