import React from "react";
import { Category, FetchedData } from "../../interfece/ProductInterface";

type Props = {
  setFilter: (filter: string) => void;
  items: FetchedData[];
};
const FilterBy = (props: Props) => {
  const categories = props.items
    .map((option: FetchedData) => option.category)
    .filter((value: Category, index: Number, array: Category[]) => {
      return array.indexOf(value) === index;
    });
  categories.unshift("all products" as Category);

  const options = categories.map((value, index) => (
    <option value={value} key={index}>
      {value}
    </option>
  ));

  return (
    <div className="collection-filter">
      <label htmlFor="">Filter by: </label>
      <select onChange={(event) => props.setFilter(event.target.value)}>{options}</select>
    </div>
  );
};

export default FilterBy;
