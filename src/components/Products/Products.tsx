import React from "react";
import Item from "./Item";
import { FetchedData } from "../../interfece/ProductInterface";

interface Props {
  filter: string;
  items: FetchedData[];
  sort: string;
}

function getProducts(items: FetchedData[], filter: string): JSX.Element[] {
  return items
    .map((product: FetchedData) => {
      return (
        <Item
          key={product.id}
          id={product.id}
          image={product.image}
          price={product.price}
          title={product.title}
          category={product.category}
          description={product.description}
          rating={product.rating}
        />
      );
    })
    .filter((value) => {
      // Filter Products based on chosen Category
      return filter === "all products" ? true : value.props.category === filter;
    });
}

//  Sort by Price from lower to higher, to change direction pass bool = true
function sortByPrice(products: JSX.Element[], toReverse: boolean = false) {
  products.sort((a, b) => {
    return a.props.price - b.props.price;
  });
  if (toReverse) {
    products.reverse();
  }
  return products;
}

// Sort by Title (abc), to change direction pass bool = true
function sortByTitle(products: JSX.Element[], toReverse: boolean = false): JSX.Element[] {
  products.sort((a, b) => {
    return a.props.title.localeCompare(b.props.title);
  });
  if (toReverse) {
    products.reverse();
  }
  return products;
}

// Sort by Rating, to change direction pass bool = true
function sortByRating(products: JSX.Element[], toReverse: boolean = false): JSX.Element[] {
  products.sort((a, b) => {
    return a.props.rating.rate - b.props.rating.rate;
  });
  if (toReverse) {
    products.reverse();
  }
  return products;
}

// Sort by Count
function sortByCount(products: JSX.Element[]): JSX.Element[] {
  products.sort((a, b) => {
    return a.props.rating.count - b.props.rating.count;
  });
  return products;
}

//  Sort switch case
function sortByCase(categorySort: string, products: JSX.Element[]): void {
  switch (categorySort) {
    case "Price, low to high":
      sortByPrice(products);
      break;
    case "Price, high to low":
      sortByPrice(products, true);
      break;
    case "Alphabetically, A-Z":
      sortByTitle(products);
      break;
    case "Alphabetically, Z-A":
      sortByTitle(products, true);
      break;
    case "Rating, low to high":
      sortByRating(products);
      break;
    case "Rating, high to low":
      sortByRating(products, true);
      break;
    case "Best Selling":
      sortByCount(products);
      break;
    default:
      break;
  }
}

const Products = (props: Props) => {
  const { items, filter, sort }: Props = props;
  const products = getProducts(items, filter);
  // Sort Products, using Sort State
  sortByCase(sort, products);
  // create element
  return <section className="products">{products}</section>;
};

export default Products;
