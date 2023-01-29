import React from "react";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";

type Props = {
  setFilter: (filter: string) => void;
  passItems: string[];
  setSort: (sort: string) => void;
};
const Nav = (props: Props) => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <FilterBy setFilter={props.setFilter} passItems={props.passItems} />
        <SortBy setSort={props.setSort} />
      </div>
    </nav>
  );
};

export default Nav;