import { styled } from "styled-components";

export const PrevJobsContainer = styled.div`
  display: flex;
  padding: 0 calc(20% - 4rem);
  align-items: center;
  margin-bottom: 8rem;
  box-sizing: border-box;

  .container {
    background-color: #f9f9f9;
    display: flex;
    padding: 2.5rem;
    border-radius: 10px;
    box-sizing: border-box;

    .rolePhoto {
      border-radius: 10px;
      object-fit: cover;
      width: 400px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 2rem;

    .title {
      font-family: "Inter", sans-serif;
      color: #363636;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 0.75rem;
      text-align: center;
    }
    .role {
      font-family: "Arimo", sans-serif;
      margin-bottom: 2.25rem;

      strong {
        color: #625f5f;
        font-size: 0.9rem;
      }
    }
    .description {
      font-family: "Arimo", sans-serif;
      text-align: justify;
    }
  }

  .arrowController {
    width: 30px;
    height: 30px;
    margin: 0 1rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 575.98px) {
    width: 100%;
    padding: 0;

    & > img {
      display: none;
    }
    .container {
      flex-direction: column;
      gap: 2rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 767.98px) {
    width: 100%;
    padding: 0;

    & > img {
      display: none;
    }
    .container {
      flex-direction: column;
      gap: 2rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 991.98px) {
    width: 100%;
    padding: 0;

    & > img {
      display: none;
    }
    .container {
      flex-direction: column;
      gap: 2rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 1199.98px) {
    width: 100%;
    padding: 0;

    & > img {
      display: none;
    }
  }

  @media only screen and (max-width: 1399.98px) {
    width: 90%;
    margin-top: 50px;
    padding: 0;
  }
`;
