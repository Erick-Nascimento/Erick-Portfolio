import { Link } from "react-router-dom";
import { StyledNav } from "./style";
import data from "../../../data/header.json";

function Nav() {
  const navData = data.header;
  return (
    <StyledNav>
      {navData.navLinks.map((item, index) => {
        return (
          <Link to={item.href} key={index}>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </StyledNav>
  );
}

export default Nav;
