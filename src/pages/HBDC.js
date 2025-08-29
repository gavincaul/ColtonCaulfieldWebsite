import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar.tsx";
import "./Home.css";
import "./HBDC.css";

export default function HBDC() {
  const iframeRef = useRef(null);

  const youtubeUrl =
    "https://www.youtube.com/embed/kLrBUcIvlrY?start=0&autoplay=1";
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = youtubeUrl;
    }
  }, [youtubeUrl]);
 
  return (
    <div className="gradient_background">
      <NavBar />
      <div style={{paddingTop:"10%"}}></div>
      <div className="hbdc-video-container">
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src={youtubeUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div style={{paddingBottom:"10%"}}></div>
    </div>
  );
}
