import React from "react";
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";
import { FetchedData } from "../../interfece/ProductInterface";
import "./Nav.css";
import PriceSlider from "./PriceSlider";

type Props = {
  setFilter: (filter: string) => void;
  items: FetchedData[];
  setSort: (sort: string) => void;
  filter: string;
  setBudget: (budget: number[]) => void;
  budget: number[];
};
const Nav = (props: Props) => {
  return (
    <nav className="store-nav">
      <div className="sort">
        <FilterBy items={props.items} setFilter={props.setFilter} />
        <SortBy setSort={props.setSort} />
        <PriceSlider items={props.items} filter={props.filter} setBudget={props.setBudget} budget={props.budget} />
      </div>
    </nav>
  );
};

export default Nav;
