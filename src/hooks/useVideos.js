import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    // Roughly equivalent to componentDidMount()
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    // async - await or promises
    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;
