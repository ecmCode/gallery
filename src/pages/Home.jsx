import { Title,GallerySlot } from "../components";
import {cityscape, nature, history} from "../asset/url.json"

import wallpaper from "../asset/wallpaper1.png"
const Home = () => {

    return (
        <div className="w-screen flex flex-col items-center">
            <Title title='gallery' wallpaper={wallpaper}/>
            <GallerySlot title="Cityscape" source={cityscape}/>
            <GallerySlot title="Nature" source={nature}/>
            <GallerySlot title="History" source={history}/>
        </div>
    );
}

export default Home;
