import useThumbnails from "@/Composables/useThumbnails.jsx";
import {formatDistance} from 'date-fns';

export default function VideoData({video}) {
    function computeReadableDate(date=null) {
        return (date) ? formatDistance(new Date(date), new Date(), {addSuffix: true}) : '';
    }

    return (
        <>
            {video.data.map(item=> (
                <li key={item.id} className="video-item-container relative">
                    <div>
                        <img src={useThumbnails().generateThumbnail()} alt={'video_thumbnail'} className="pointer-events-none object-cover group-hover:opacity-75" />
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="pointer-events-none line-clamp-3 text-sm text-gray-500">{item.description}</p>
                    <p className="mt-1 pointer-events-none block text-sm font-medium text-gray-500">Created by {item.user.name} {computeReadableDate(item.created_at)}</p>
                </li>
            ))}
        </>
    )
}
