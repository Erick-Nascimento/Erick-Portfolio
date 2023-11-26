import { styled } from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  white-space: nowrap;

  span {
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 575.98px) {
    display: none;
  }

  @media only screen and (max-width: 767.98px) {
    display: none;
  }

  @media only screen and (max-width: 991.98px) {
    display: none;
  }

  @media only screen and (max-width: 1199.98px) {
    //justify-content: center;
    margin: 4px 0;
  }
`;
