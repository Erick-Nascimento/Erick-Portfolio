import { styled } from "styled-components";

export const TestimonialCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 20px;
    height: 20px;
  }

  .card {
    display: flex;
    background-image: linear-gradient(to bottom, #62bbda 40%, #ffffff 40% 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1rem;
    font-family: "Inter", sans-serif;
    width: 520px;
    gap: 1rem;
    .left {
      width: 30%;
      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 100%;
      }
    }
    .right2 {
      .top {
        display: flex;
        flex-direction: column;
        color: #ffffff;
        gap: 0.5rem;
        height: 40%;

        .title {
          font-weight: bold;
        }
        .role {
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        height: 60%;
      }
    }
  }

  .arrowControllers {
    cursor: pointer;
  }

  @media only screen and (max-width: 575.98px) {
    width: 100%;

    .card {
      margin-bottom: 50px;

      .left {
        img {
          width: 100px;
          height: 100px;
        }
      }
      .right2 {
        .top {
          .role {
            font-size: 0.7rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767.98px) {
    width: 100%;
    display: flex;
    justify-content: center;

    .card {
      margin-bottom: 50px;

      .left {
        img {
          width: 100px;
          height: 100px;
        }
      }
      .right2 {
        .top {
          .role {
            font-size: 0.7rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991.98px) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 1199.98px) {
  }
`;
