import React, { Dispatch, SetStateAction } from "react";
import Nav from "../components/Nav";
import useProductFetch from "../hooks/useProductFetch";
import { State } from "swr";
import Loading from "../components/Loading/Loading";
import Products from "../components/Products/Products";
import { FetchedData } from "../interfece/ProductInterface";

const Home = () => {
  interface Data {
    data: FetchedData[];
    error: any;
    isLoading: boolean;
    sort: string;
    setSort: Dispatch<SetStateAction<string>>;
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
  }

  const { data, error, filter, isLoading, setFilter, setSort, sort }: Data = useProductFetch();
  return (
    <div>
      {data.data ? (
        <>
          <Nav setFilter={data.setFilter} items={data.data} setSort={data.setSort} />
          <Products items={data.data} filter={data.filter} sort={data.sort} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
