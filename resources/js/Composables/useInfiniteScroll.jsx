import {useEffect, useRef, useState} from "react";
import useIntersect from "@/Composables/useIntersect.jsx";
import axios from "axios";

export function useInfiniteScroll(propName, baseApiUrl, landmark) {
    const [items, setItems] = useState([]);
    const [nextUrl, setNextUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const canLoadMoreItems = nextUrl !== null;

    const fetchData = (url) => {
        if(isLoading || ! url) {
            return;
        }

        setIsLoading(true);

        axios({
            method: 'get',
            baseURL: url,
            responseType: 'json',
        }).then((response) => {
            setItems([...items, ...response.data[propName].data]);
            setNextUrl(response.data[propName].next_page_url);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchData(baseApiUrl);
    }, []);

    function loadMoreItems() {
        fetchData(nextUrl);
    }

    useIntersect(landmark, loadMoreItems, {rootMargin: '0px 0px 250px 0px'});

    return {
        items,
        canLoadMoreItems,
    };
}
