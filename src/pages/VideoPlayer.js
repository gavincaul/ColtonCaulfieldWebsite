import React from 'react';
import NavBar from '../components/NavBar.tsx';
import { useVideoContext } from '../components/VideoContext';
import './VideoPlayer.css'

export default function VideoPlayer(){
    const { selectedVideoLink } = useVideoContext();
    const extractVideoId = (link) => {
        const match = link.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
        return match ? match[1] : null;
    };

    const videoId = extractVideoId(selectedVideoLink);
    let title = decodeURIComponent(window.location.href.split('/').pop());
    
    return (
        <div className="gradient_background">
        < NavBar />
        <div className='videopadding'></div> 
        <div className='videotitle'>
                {title}</div>
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
