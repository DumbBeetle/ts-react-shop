import { Dispatch, SetStateAction, useState } from "react";
import useSWR from "swr";
import { FetchedData } from "../interfece/ProductInterface";
import { resolve } from "dns";

// interface Data {
//   data: FetchedData | FetchedData[] | undefined;
//   error: string;
//   isLoading: boolean;
//   sort: string;
//   setSort: Dispatch<SetStateAction<string>>;
//   filter: string;
//   setFilter: Dispatch<SetStateAction<string>>;
// }

const fetcher = (url: string): Promise<Response> =>
  fetch(url).then((res) => {
    console.log("Data Fetch");
    return res.json();
  });
const UseProductFetch = (id: string = "") : any => {
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);
  const [sort, setSort] = useState<string>("Featured");
  const [filter, setFilter] = useState<string>("all products");
  return { data, error, isLoading, sort, setSort, filter, setFilter };
};

export default UseProductFetch;
