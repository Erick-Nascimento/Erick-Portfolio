import { Link } from "react-router-dom";
import data from "../../data/header.json";
import { DropdownMenuStyle } from "./style";

function DropdownMenu() {
  const navData = data.header;
  return (
    <DropdownMenuStyle>
      {navData.navLinks.map((item, index) => {
        return (
          <Link to={item.href} key={index}>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </DropdownMenuStyle>
  );
}

export default DropdownMenu;
