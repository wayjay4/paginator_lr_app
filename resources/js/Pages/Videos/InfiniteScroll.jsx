import VideoData from "@/Pages/Videos/Components/VideoData.jsx";
import {useRef, useState} from "react";
import NavHeader from "@/Pages/Videos/Components/NavHeader.jsx";
import {useInfiniteScroll} from "@/Composables/useInfiniteScroll.jsx";
import UserFilter from "@/Pages/Videos/Components/UserFilter.jsx";
import {useForm} from "@inertiajs/react";

function InfiniteScroll(props) {
    const [selectedUser, setSelectedUser] = useState(props.selected_user);
    const prop_name = 'videos';
    const api_url = (selectedUser > 0) ? `/api/users/${selectedUser}/videos` : `/api/videos`;
    const landmark = useRef(null);
    const {items:videos, canLoadMoreItems} = useInfiniteScroll(prop_name, api_url, landmark);

    const {get} = useForm({});
    const handleSelection = (event) => {
        const user_id = event.target.value;

        const url = (user_id > 0)
            ? `/users/${user_id}/videos_infinite_scroll/`
            : '/videos_infinite_scroll/';

        get(url);
    }

    return (
        <>
            <NavHeader />

            <UserFilter users={props.users} selectedUser={selectedUser} handleSelection={handleSelection} />

            <div className={'video-catalog-container'}>
                <div className="mt-6">
                    <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                        <VideoData videos={videos} />
                    </ul>
                </div>

                <div ref={landmark}></div>

                {! canLoadMoreItems && (
                    <div className="mt-10 mb-10 flex justify-center">
                        End of the line buddy!
                    </div>
                )}
            </div>
        </>
    )
}

export default InfiniteScroll;
