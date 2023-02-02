import { Dispatch, SetStateAction, useState } from "react";
import useSWR from "swr";
const fetcher = (url: string) =>
  fetch(url).then((res) => {
    console.log("Data Fetch");
    return res.json();
  });
const UseProductFetch = (id: string = "") => {
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);
  return { data, error, isLoading };
};

export default UseProductFetch;
