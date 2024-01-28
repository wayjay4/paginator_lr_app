import VideoData from "@/Pages/Videos/Components/VideoData.jsx";
import {useRef} from "react";
import NavHeader from "@/Pages/Videos/Components/NavHeader.jsx";
import {useInfiniteScroll} from "@/Composables/useInfiniteScroll.jsx";

function InfiniteScroll(props) {
    const landmark = useRef(null);
    const {items:videos, canLoadMoreItems} = useInfiniteScroll('videos', '/api/videos', landmark);
    
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
