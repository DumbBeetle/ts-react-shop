import React, {Dispatch, SetStateAction} from 'react';
import Nav from "../components/Nav";
import useProductFetch from "../hooks/useProductFetch";
import {State} from "swr";
import Loading from '../components/Loading/Loading';

const Home = () => {
    interface Data {
        data: string[],
        error: string,
        isLoading: boolean,
        sort: string,
        setSort: Dispatch<SetStateAction<string>>,
        filter: string,
        setFilter: Dispatch<SetStateAction<string>>,
    }
    const data: Data = useProductFetch()
    return (
        <div>
            {data.data ?
                (<>
                    <Nav setFilter={data.setFilter} passItems={data.data} setSort={data.setSort}/>
                    <Products passFilter={data.filter} passItems={data.data} passSort={data.sort}/>
                </>) :
                <Loading/>
            }
        </div>
    );
};

export default Home;