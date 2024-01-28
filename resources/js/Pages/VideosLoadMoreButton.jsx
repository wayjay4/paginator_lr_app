import VideoData from "@/Pages/Videos/VideoData.jsx";
import {Link} from "@inertiajs/react";
import {useEffect, useState} from "react";
import axios from 'axios';
import NavHeader from "@/Components/NavHeader.jsx";

function VideosLoadMoreButton(props) {
    const [videos, setVideos] = useState([]);
    const [nextUrl, setNextUrl] = useState((props.videos.next_page_url) ? props.videos.next_page_url.replace('http://localhost/', 'api/') : props.videos.next_page_url)

    function handleResponse(response)  {
        setVideos([...videos, ...response.data.videos.data]);
        setNextUrl(response.data.videos.next_page_url);
    }

    const fetchData = (url) => {
        axios({
            method: 'get',
            baseURL: url,
            responseType: 'json',
        }).then((response)=>{
            handleResponse(response);
        })
    }

    useEffect(() => {
        const url = '/api/videos';
        fetchData(url);
    }, []);

    function loadMoreItems(event=null) {
        if(event) {
            event.preventDefault();
        }

        if(nextUrl) {
            fetchData(nextUrl);
        }
    }

    return (
        <>
            <NavHeader />

            <div className={'video-catalog-container'}>
                <div className="mt-6">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        <VideoData videos={videos} />
                    </ul>
                </div>

                {nextUrl && (
                    <div className="mt-10 mb-10 flex justify-center">
                        <Link onClick={loadMoreItems}><span className="font-bold hover:underline hover:text-blue-700">Load More</span></Link>
                    </div>
                )}

                {! nextUrl && (
                    <div className="mt-10 mb-10 flex justify-center">
                        <div>End of the line buddy!</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default VideosLoadMoreButton;
