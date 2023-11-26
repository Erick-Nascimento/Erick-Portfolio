import { styled } from "styled-components";

export const MyInfos = styled.div`
  display: flex;
  padding: 4rem 20%;
  justify-content: space-between;

  @media only screen and (max-width: 575.98px) {
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 30px;
    font-size: 0.9rem;
  }
`;
