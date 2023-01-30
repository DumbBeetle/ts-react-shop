import React from "react";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";
import { FetchedData } from "../../interfece/ProductInterface";

type Props = {
  setFilter: (filter: string) => void;
  items: FetchedData[];
  setSort: (sort: string) => void;
};
const Nav = (props: Props) => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <FilterBy items={props.items} setFilter={props.setFilter} />
        <SortBy setSort={props.setSort} />
      </div>
    </nav>
  );
};

export default Nav;