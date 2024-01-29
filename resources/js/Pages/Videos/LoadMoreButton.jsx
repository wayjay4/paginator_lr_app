import VideoData from "@/Pages/Videos/Components/VideoData.jsx";
import {Link, useForm} from "@inertiajs/react";
import {useEffect, useState} from "react";
import axios from 'axios';
import NavHeader from "@/Pages/Videos/Components/NavHeader.jsx";
import UserFilter from "@/Pages/Videos/Components/UserFilter.jsx";

function LoadMoreButton(props) {
    const [videos, setVideos] = useState([]);
    const [nextUrl, setNextUrl] = useState();
    const [selectedUser, setSelectedUser] = useState(props.selected_user);

    const fetchData = (url) => {
        axios({
            method: 'get',
            baseURL: url,
            responseType: 'json',
        }).then((response)=>{
            setVideos([...videos, ...response.data.videos.data]);
            setNextUrl(response.data.videos.next_page_url);
        })
    }

    useEffect(() => {
        const url = (selectedUser > 0)
            ? `/api/users/${selectedUser}/videos/`
            : '/api/videos/';

        fetchData(url);
    }, []);

    function loadMoreItems(event) {
        event.preventDefault();

        if(nextUrl) {
            fetchData(nextUrl);
        }
    }

    const {get} = useForm({});
    const handleSelection = (event) => {
        const user_id = event.target.value;

        const url = (user_id > 0)
            ? `/users/${user_id}/videos_load_button/`
            : '/videos_load_button/';

        get(url);
    }

    return (
        <>
            <NavHeader />

            <UserFilter users={props.users} selectedUser={selectedUser} handleSelection={handleSelection} />

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

export default LoadMoreButton;
