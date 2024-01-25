import VideoData from "@/Pages/Videos/VideoData.jsx";
import Pagination from "@/Components/Pagination.jsx";

function VideosPaginationScroll(props) {
    console.log(props);

    return (
        <div className={'video-catalog-container'}>
            <div className="mt-6">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    <VideoData video={props['videos']} />
                </ul>
            </div>

            <Pagination links={props['videos'].links} />
        </div>
    )
}

export default VideosPaginationScroll;
