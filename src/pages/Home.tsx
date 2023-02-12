import React, { Dispatch, SetStateAction, useState } from "react";
import useProductFetch from "../hooks/useProductFetch";
import Loading from "../components/Loading/Loading";
import Products from "../components/Products/Products";
import { FetchedData } from "../interfece/ProductInterface";
import Nav from "../components/Nav/Nav";

const Home = () => {
  interface Data {
    data: FetchedData[];
    error: Error;
    isLoading: boolean;
  }

  const { data, error, isLoading }: Data = useProductFetch("https://fakestoreapi.com/products/");
  const [sort, setSort] = useState<string>("Featured");
  const [filter, setFilter] = useState<string>("all products");
  const [budget, setBudget] = useState<number[]>([0, 100]);
  // TODO: Error page
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <main className="store-main-container">
      {data ? (
        <>
          <Nav
            setFilter={setFilter}
            items={data}
            setSort={setSort}
            filter={filter}
            setBudget={setBudget}
            budget={budget}
          />
          <Products items={data} filter={filter} sort={sort} budget={budget} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Home;
