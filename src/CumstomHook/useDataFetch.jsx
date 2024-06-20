import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useFetchData = (url) => {

    const [data, setData] = useState();

    const getData = async () => {
        const res = await axios.get(url);
        console.log(res);
        setData(res.data.data);
    }

    useEffect(() => {
        getData();
        console.log("api call hoi! ye wali" + url);
    }, [url])

    return data;
}