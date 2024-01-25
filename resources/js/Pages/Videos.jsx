import {faker} from "@faker-js/faker";

export default function Videos(props) {
    console.log(props);
    
    return (
        <>
            <div className="mt-6">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {props['videos'].data.map(video=> (
                        <li key={video.id} className="video-item-container relative">
                            <div>
                                <img src={faker.image.url({width: 600, height: 300})} alt={'video_thumbnail'} className="pointer-events-none object-cover group-hover:opacity-75" />
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{video.title}</p>
                            <p className="pointer-events-none line-clamp-3 text-sm text-gray-500">{video.description}</p>
                            <p className="mt-1 pointer-events-none block text-sm font-medium text-gray-500">{video.duration}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
