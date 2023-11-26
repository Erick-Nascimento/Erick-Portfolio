import { styled } from "styled-components";

export const LastVideosSection = styled.div`
  padding: 0 20%;
  max-width: 1600px;
  margin: 0 auto;
  margin-bottom: 30px;
  .sectionTitle {
    margin: 2rem 0;
    .title {
      font-family: "Bebas Neue", sans-serif;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .videosContainer {
    display: flex;
    gap: 1rem;
    height: 340px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .videosContainer::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 575.98px) {
    padding: 0;
    margin-top: 100px;

    .sectionTitle {
      margin-left: 15px;
    }

    .videosContainer {
      height: min-content;
    }
  }

  @media only screen and (max-width: 767.98px) {
    padding: 0;
    margin-top: 70px;
    margin-bottom: 40px;

    .sectionTitle {
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 991.98px) {
    padding: 0;
    margin-bottom: 30px;

    & .sectionTitle {
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 1199.98px) {
    padding: 0;

    & .sectionTitle {
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 1399.98px) {
    padding: 0;
    margin-bottom: 30px;

    & .sectionTitle {
      margin-left: 10%;
    }

    & .videosContainer {
      padding: 0 10%;
    }
  }
`;
