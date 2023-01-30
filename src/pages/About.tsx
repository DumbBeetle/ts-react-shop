import React from 'react';
import {useSearchParams} from "react-router-dom";

const About = () => {
    const url: any = {};
    let [searchParams, setSearchParams] = useSearchParams();
    for (const [key, value] of searchParams.entries()) {
        url[key] = value
    }
    console.log(url)
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
};

export default About;