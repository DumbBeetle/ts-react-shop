import React, { Dispatch, SetStateAction } from "react";
import Nav from "../components/Nav";
import useProductFetch from "../hooks/useProductFetch";
import Loading from "../components/Loading/Loading";
import Products from "../components/Products/Products";
import { FetchedData } from "../interfece/ProductInterface";

const Home = () => {
  interface Data {
    data: FetchedData[];
    error: Error;
    isLoading: boolean;
    sort: string;
    setSort: Dispatch<SetStateAction<string>>;
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
  }

  const { data, error, filter, isLoading, setFilter, setSort, sort }: Data = useProductFetch();
  // TODO: Error page
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <main className="store-main-container">
      {data ? (
        <>
          <Nav setFilter={setFilter} items={data} setSort={setSort} />
          <Products items={data} filter={filter} sort={sort} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Home;
