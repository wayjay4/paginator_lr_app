import VideoData from "@/Pages/Videos/Components/VideoData.jsx";
import PaginationLinks from "@/Pages/Videos/Components/PaginationLInks.jsx";
import NavHeader from "@/Pages/Videos/Components/NavHeader.jsx";
import UserFilter from "@/Pages/Videos/Components/UserFilter.jsx";
import {useForm} from "@inertiajs/react";

function PageLinks(props) {
    const {get} = useForm({});

    const handleSelection = (event) => {
        const user_id = event.target.value;

        const url = (user_id > 0)
            ? `/users/${user_id}/videos_page_links/`
            : '/videos_page_links/';

        get(url);
    }

    return (
        <>
            <NavHeader />

            <UserFilter users={props.users} selectedUser={props.selected_user} handleSelection={handleSelection} />

            <div className={'video-catalog-container'}>
                <div className="mt-6">
                    <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                        <VideoData videos={props['videos'].data} />
                    </ul>
                </div>

                <PaginationLinks links={props['videos'].links} />
            </div>
        </>
    )
}

export default PageLinks;
