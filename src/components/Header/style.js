import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #242424;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Comfortaa", cursive;
  border-bottom: 1px solid #fdfffc;

  .logoContainer {
    width: 10%;
  }

  .logo {
    height: 35px;
    width: 63px;
    cursor: pointer;
  }

  .navContainer {
    width: 60%;
  }

  .iconsContainer {
    width: 15%;
    display: flex;
  }

  .socialMediasContainer {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .moonIcon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .linkedinIcon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .githubIcon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .menu-hamburguer-icon {
    display: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 575.98px) {
    width: 100%;
    padding: 0 20px;

    .logo {
      width: 100%;
      object-fit: contain;
    }

    .socialMediasContainer img {
      width: 100%;
      object-fit: contain;
    }

    .moonIcon {
      display: none;
    }

    .menu-hamburguer-icon {
      display: flex;
    }
  }

  @media only screen and (max-width: 767.98px) {
    padding: 15px;
    .moonIcon {
      display: none;
    }
    .menu-hamburguer-icon {
      display: flex;
    }
  }

  @media only screen and (max-width: 991.98px) {
    padding: 15px;
    .moonIcon {
      display: none;
    }
    .menu-hamburguer-icon {
      display: flex;
    }
  }

  @media only screen and (max-width: 1199.98px) {
    padding: 15px;
    .moonIcon {
      display: none;
    }
  }
`;
