import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])
    return (
        <div>
            <h1>Not Found</h1>
            <h2>Returning to Home Page</h2>
        </div>
    );
};

export default NotFound;