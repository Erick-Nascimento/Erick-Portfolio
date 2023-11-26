import { PaginationStyle } from "./style";
import LeftArrow from "../../assets/left-arrow.png";
import RightArrow from "../../assets/right-arrow.png";
import PaginationItem from "./PaginationItem";

function Pagination() {
  return (
    <PaginationStyle>
      <img src={LeftArrow} className="arrowControllers" />
      <PaginationItem number={"1"} />
      <img src={RightArrow} className="arrowControllers" />
    </PaginationStyle>
  );
}

export default Pagination;
