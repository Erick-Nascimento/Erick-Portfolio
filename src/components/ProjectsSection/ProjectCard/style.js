import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 170px;
  position: relative;
  font-family: "Arimo", sans-serif;
  margin-bottom: ${(props) => (props.expanded ? `${50}px` : 0)};

  .cardShadow {
    background-color: ${(props) => props.color};
    box-sizing: border-box;
    width: 100%;
    height: 140px;
    position: absolute;
    top: 15px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    height: ${(props) =>
      props.expanded ? `${props.thisdiv + 50}px` : `${props.thisdiv}px`};
    display: flex;
    align-items: flex-end;
    justify-content: center;

    padding-bottom: 15px;

    .iconsContainer {
      display: flex;
      gap: 1rem;
      align-items: center;

      .githubIcon {
        width: 30px;
        height: 30px;
      }
      .figmaIcon {
        width: 18px;
        height: 27px;
      }
      .externalLinkIcon {
        width: 25px;
        height: 25px;
      }
    }
  }

  .cardContent {
    background-color: #f9f9f9;
    width: 100%;
    position: absolute;
    left: 15px;
    border-radius: 5px;
    padding: 1rem;
    box-sizing: border-box;

    .topContent {
      display: flex;
      gap: 1rem;

      .imageContainer {
        .image {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
      }

      .projectInfos {
        display: flex;
        flex-direction: column;
        width: 100%;
        .title {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .techUsed {
          font-size: 0.9rem;
          display: flex;
          align-items: center;

          img {
            width: 25px;
          }
        }
      }
    }

    .buttonContainer {
      display: flex;
      justify-content: flex-end;

      .seeMoreBtn {
        background: inherit;
        border: none;
      }
      .seeMoreBtn:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 575.98px) {
  }

  @media only screen and (max-width: 767.98px) {
  }
`;
