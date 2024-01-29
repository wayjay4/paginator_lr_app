import useThumbnails from "@/Composables/useThumbnails.jsx";
import {formatDistance} from 'date-fns';

function VideoData({videos}) {
    function computeReadableDate(date=null) {
        return (date) ? formatDistance(new Date(date), new Date(), {addSuffix: true}) : '';
    }

    return (
        <>
            {videos.map(video=> (
                <li key={video.id} className="video relative">
                    <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:offset-2 focus-within:ring-offset-gray-100">
                        <img src={useThumbnails().generateThumbnail()} alt={'video_thumbnail'} className="pointer-events-none object-cover group-hover:opacity-75" />
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{video.title}</p>
                    <p className="pointer-events-none line-clamp-3 text-sm text-gray-500">{video.description}</p>
                    <p className="mt-1 pointer-events-none block text-sm font-medium text-gray-500">Created by <span className="text-gray-600 font-bold">{video.user.name}</span> {computeReadableDate(video.created_at)} ID:{video.id}</p>
                </li>
            ))}
        </>
    )
}


export default VideoData;
