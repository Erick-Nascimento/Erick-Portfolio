import { styled } from "styled-components";

export const StyledItem = styled.div`
  width: 20%;

  .item {
    height: 45px;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;

    .point {
      height: 15px;
      width: 15px;
      border-radius: 100%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      position: relative;

      .line {
        background-color: ${(props) => props.color};
        width: 4px;
        height: 110px;
        position: absolute;
        ${(props) =>
          props.direction === "down" ? "top: 20px;" : "bottom: 20px;"}

        .circle {
          background-color: ${(props) => props.color};
          height: 80px;
          width: 80px;
          border-radius: 100%;
          position: absolute;
          left: -38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          ${(props) =>
            props.direction === "down" ? "top: 110px;" : "bottom: 110px;"}
          & img {
            width: 40px;
          }
        }
      }
    }
  }
`;
