import { styled } from "styled-components";

export const DropdownMenuStyle = styled.div`
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1px 0;
  background-color: #fff;

  & a {
    text-decoration: none;
    color: #fff;
    padding: 10px 5px;
    background-color: #242424;
    width: 100%;
    display: flex;
    justify-content: center;
    //border-top-color: #fff;
    //border-top-width: 1px;
    //border-top-style: solid;
  }
`;
