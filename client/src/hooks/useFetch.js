import { useEffect, useState} from "react";
import {fetchDataFromApi} from '../utils/api'

 export const useFetch = (endpoint) => { // here endpoint is the point from where we have to fetch the data like in strapi cotegories or products or a single category or single product can be endpoint which we will hit to fetch data from 
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    };

    return { data };
}

