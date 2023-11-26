import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 220px;
  height: 320px;
  cursor: pointer;

  &:first-child {
    margin-left: 15px;
  }
  &:last-child {
    margin-right: 15px;
  }

  & .cardImageContainer {
    & .cardImage {
      width: 100%;
      object-fit: cover;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  .cardImage {
    width: 100%;
  }

  .cardContent {
    font-family: "Archivo", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;
    height: 100%;

    .title {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .description {
      font-size: 0.9rem;
      padding: 0 0 1rem 0;
      text-align: justify;
    }

    .externalLinkContainer {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media only screen and (max-width: 575.98px) {
    width: 380px;
    height: 290px;
    margin-bottom: 100px;

    & > div {
      width: 170px;
    }

    & .cardImageContainer {
      width: 100%;
    }
  }

  @media only screen and (max-width: 767.98px) {
    & > div {
      width: 170px;
    }

    & .cardImageContainer {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1399.98px) {
    & > div {
      width: 170px;
    }

    & .cardImageContainer {
      width: 100%;
    }

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
