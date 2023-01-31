import React, {Dispatch, SetStateAction} from "react";
import Nav from "../components/Nav";
import useProductFetch from "../hooks/useProductFetch";
import {State} from "swr";
import Loading from "../components/Loading/Loading";
import Products from "../components/Products/Products";
import {FetchedData} from "../interfece/ProductInterface";

const Home = () => {
    interface Data {
        data: any;
        error: any;
        isLoading: boolean;
        sort: string;
        setSort: Dispatch<SetStateAction<string>>;
        filter: string;
        setFilter: Dispatch<SetStateAction<string>>;
    }

    const {data, error, filter, isLoading, setFilter, setSort, sort}: Data = useProductFetch();
    if (data === undefined) return <Loading/>
    return (
        <div>
            <>
                <Nav setFilter={setFilter} items={data} setSort={setSort}/>
                <Products items={data} filter={filter} sort={sort}/>
            </>

        </div>
    );
};

export default Home;
