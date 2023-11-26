import { styled } from "styled-components";

export const ProjectCardsContainerStyle = styled.div`
  padding: 4rem 20%;
  display: flex;
  flex-direction: column;

  .projectsWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 575.98px) {
    .projectsWrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 60px;
      gap: 6rem;
    }
  }

  @media only screen and (max-width: 767.98px) {
    padding: 4rem 30px;
  }

  @media only screen and (max-width: 991.98px) {
    .projectsWrapper {
      gap: 4rem;
    }
  }

  @media only screen and (max-width: 1199.98px) {
  }

  @media only screen and (max-width: 1399.98px) {
  }
`;
