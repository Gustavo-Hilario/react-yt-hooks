import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [selectedVideo, setSelectedvideo] = useState(null);
    const [videos, search] = useVideos("Medidations");

    useEffect(() => {
        setSelectedvideo(videos[0]);
    }, [videos]);

    return (
        <div className="container-fluid">
            <SearchBar onFormSubmit={search} />
            <div className="row pt-3">
                <VideoDetail video={selectedVideo} />
                <VideoList
                    onVideoSelect={
                        /*(video) => {
                        setSelectedvideo(video);
                    }  OR */
                        setSelectedvideo
                    }
                    videos={videos}
                />
            </div>
        </div>
    );
};

export default App;
