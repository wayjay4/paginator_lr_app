import {faker} from "@faker-js/faker";

function useThumbnails() {
    return {
        generateThumbnail: () => faker.image.url({width:600, height:200})
    }
}

export default useThumbnails;
