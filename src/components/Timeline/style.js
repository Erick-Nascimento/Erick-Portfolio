import { styled } from "styled-components";

export const TimelineContainer = styled.div`
  padding: 10% 0 15% 0;
  .TimeLineBar {
    display: flex;
    justify-content: center;
    padding: 0 20%;
    background-color: #d9d9d9;
    height: 45px;
  }

  @media only screen and (max-width: 575.98px) {
    margin: 200px 0;

    .TimeLineBar {
      margin: 50px 0;
    }
  }

  @media only screen and (max-width: 767.98px) {
    margin: 100px 0;
  }
  @media only screen and (max-width: 991.98px) {
    margin: 200px 0;
  }
  @media only screen and (max-width: 1199.98px) {
    margin: 100px 0;
  }
  @media only screen and (max-width: 1399.98px) {
  }
`;
