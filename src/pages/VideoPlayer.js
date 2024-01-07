import React from 'react';
import NavBar from '../components/NavBar.tsx';
import { useVideoContext } from '../components/VideoContext';
import './Page.css'

export default function VideoPlayer(){
    const { selectedVideoLink } = useVideoContext();
    const extractVideoId = (link) => {
        const match = link.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
        return match ? match[1] : null;
    };

    const videoId = extractVideoId(selectedVideoLink);
    console.log(videoId);
    return (
        <div className="gradient_background">
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <div className="videoWrapper">
                {selectedVideoLink && (
                        <iframe
                            title="YouTube Video"
                            width="100%"
                            height="100%"
                            allow='autoplay'
                            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=0`}
                            frameBorder="1"
                            allowFullScreen
                        ></iframe>
                    )}
            </div>       
        </div>
    );
};
