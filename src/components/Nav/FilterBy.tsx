import React from "react";
import { Category, FetchedData } from "../../interfece/ProductInterface";

type Props = {
  setFilter: (filter: string) => void;
  items: FetchedData[];
};

function getCategories(props: Props): string[] {
  const categories = props.items
    .map((option: FetchedData) => option.category)
    .filter((value: Category, index: Number, array: Category[]) => {
      return array.indexOf(value) === index;
    });
  categories.unshift("all products" as Category);
  return categories;
}

function getOptions(props: Props, categories: string[]): JSX.Element[] {
  return categories.map((value, index) => (
    <li
      key={index}
      onClick={() => {
        props.setFilter(value);
      }}
    >
      {value}
    </li>
  ));
}

const FilterBy = (props: Props) => {
  const categories = getCategories(props);
  const options = getOptions(props, categories);

  return (
    <div className="collection-filter">
      <ul>{options}</ul>
    </div>
  );
};

export default FilterBy;
