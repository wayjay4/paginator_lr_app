import {faker} from "@faker-js/faker";

function useThumbnails() {
    return {
        generateThumbnail: () => faker.image.url({width:600, height:300})
    }
}

export default useThumbnails;
