import VideoData from "@/Pages/Videos/VideoData.jsx";
import {useEffect, useRef, useState} from "react";
import axios from 'axios';
import NavHeader from "@/Components/NavHeader.jsx";

function InfiniteScroll(props) {
    const [videos, setVideos] = useState([]);
    const [nextUrl, setNextUrl] = useState((props.videos.next_page_url) ? props.videos.next_page_url.replace('http://localhost/', 'api/') : props.videos.next_page_url)
    const [isLoading, setIsLoading] = useState(false);

    function handleResponse(response)  {
        setVideos([...videos, ...response.data.videos.data]);
        setNextUrl(response.data.videos.next_page_url);
    }

    const fetchData = (url) => {
        if(!isLoading && nextUrl) {
            setIsLoading(true);
        }
        else {
            return;
        }

        axios({
            method: 'get',
            baseURL: url,
            responseType: 'json',
        }).then((response) => {
            handleResponse(response);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchData('/api/videos');
    }, []);

    function loadMoreItems(event=null) {
        if(nextUrl) {
            fetchData(nextUrl);
        }
    }

    const landmark = useRef(null);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                if(! isLoading) {
                    loadMoreItems();
                }
            }
        });
    }, {
        rootMargin: '0px 0px 250px 0px'
    });

    useEffect(() => {
        observer.observe(landmark.current);

        // Cleanup function
        return () => {
            observer.disconnect();
        };
    });

    return (
        <>
            <NavHeader />

            <div className={'video-catalog-container'}>
                <div className="mt-6">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        <VideoData videos={videos} />
                    </ul>
                </div>

                <div ref={landmark}></div>

                {! nextUrl && (
                    <div className="mt-10 mb-10 flex justify-center">
                        End of the line buddy!
                    </div>
                )}
            </div>
        </>
    )
}

export default InfiniteScroll;
