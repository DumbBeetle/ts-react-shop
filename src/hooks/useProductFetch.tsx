import useSWR from "swr";
const fetcher = (url: string) =>
  fetch(url).then((res) => {
    console.log("Data Fetch");
    return res.json();
  });
const UseProductFetch = (url:string, id: string = "") => {
  const { data, error, isLoading } = useSWR(`${url}${id}`, fetcher);
  return { data, error, isLoading };
};

export default UseProductFetch;
