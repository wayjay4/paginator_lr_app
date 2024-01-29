import {useEffect, useState} from "react";
import useIntersect from "@/Composables/useIntersect.jsx";
import axios from "axios";

export function useInfiniteScroll(prop_name, api_url, landmark) {
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
            setItems([...items, ...response.data[prop_name].data]);
            setNextUrl(response.data[prop_name].next_page_url);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchData(api_url);
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
