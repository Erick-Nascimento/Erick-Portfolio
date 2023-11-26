import { Item } from "./style";

function PaginationItem({ number }) {
  return (
    <Item>
      <span>{number}</span>
    </Item>
  );
}

export default PaginationItem;
