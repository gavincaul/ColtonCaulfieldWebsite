import React from "react";
import VideoFile from "./VideoFile.tsx";
import videos from "../data/SoloVids.json"; 

export default function VideoList() {
  
  return (
    <div>
      {videos.map((video) => (
        <VideoFile
          name={video.title}
          image={video.img}
          link={`https://www.youtube.com/watch?v=${video.id}`}
          release={video.publishedAt}
          popularity={Number(video.viewCount)}
        />
      ))}
    </div>
  ).props.children.map(i=>i.props);
}

