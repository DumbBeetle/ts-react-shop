import { Dispatch, SetStateAction, useState } from "react";
import useSWR from "swr";
const fetcher = (url: string) =>
  fetch(url).then((res) => {
    console.log("Data Fetch");
    return res.json();
  });
const UseProductFetch = (id: string = "") => {
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);
  const [sort, setSort] = useState<string>("Featured");
  const [filter, setFilter] = useState<string>("all products");
  return { data, error, isLoading, sort, setSort, filter, setFilter };
};

export default UseProductFetch;
