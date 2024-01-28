import VideoData from "@/Pages/Videos/VideoData.jsx";
import PaginationLinks from "@/Components/PaginationLinks.jsx";

function VideosPaginationLinks(props) {
    return (
        <div className={'video-catalog-container'}>
            <div className="mt-6">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    <VideoData videos={props['videos'].data} />
                </ul>
            </div>

            <PaginationLinks links={props['videos'].links} />
        </div>
    )
}

export default VideosPaginationLinks;
