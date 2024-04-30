import useThumbnails from "@/Composables/useThumbnails.jsx";
import {formatDistance} from 'date-fns';

function VideoData({videos}) {
    function computeReadableDate(date=null) {
        return (date) ? formatDistance(new Date(date), new Date(), {addSuffix: true}) : '';
    }

    // if not already, store random images to local storage to be used for video images
    if(!localStorage.getItem('images')) {
        const images_arr = [];
        for (let i = 0; i < 300; i++) {
            images_arr.push(useThumbnails().generateThumbnail());
        }
        localStorage.setItem('images', JSON.stringify(images_arr));
    }
    const images = JSON.parse(localStorage.getItem('images'));

    return (
        <>
            {videos.map((video, index) => {
                return (
                    <li key={video.id} className="video relative border border-gray-400 rounded-md p-4 bg-[#323232] bg-opacity-50">
                        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:offset-2 focus-within:ring-offset-gray-100">
                            <img src={images[video.id]} alt={'video_thumbnail'} className="pointer-events-none object-cover group-hover:opacity-75" />
                        </div>
                        <p className="pointer-events-none mt-2 block truncate text-sm font-bold text-[#14FFEC]">{video.title}</p>
                        <p className="pointer-events-none line-clamp-3 text-sm text-white mx-2">{video.description}</p>
                        <p className="mt-1 pointer-events-none block text-sm font-medium text-[#14FFEC]">Created by <span className="text-[#14FFEC] font-bold">{video.user.name}</span> <br /> <span className={"text-xs"}>{computeReadableDate(video.created_at)}</span></p>
                    </li>
                );
            })}
        </>
    )
}


export default VideoData;
