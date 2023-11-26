import { styled } from "styled-components";

export const InfoSectionStyle = styled.div`
  width: 50%;

  .title {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 3rem;

    span {
      margin-top: 0.25rem;
    }
    .titleIcon {
      width: 45px;
      height: 45px;
    }
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
