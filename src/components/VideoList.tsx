import React from "react";
import VideoBox from "./VideoFile.tsx";
import videos from "../data/SoloVids.json"; 

export default function VideoList() {
  
  return (
    <div>
      {videos.map((video) => (
        <VideoBox
          name={video.snippet.title}
          image={video.snippet.thumbnails.medium.url}
          link={`https://www.youtube.com/watch?v=${video.id}`}
          release={video.snippet.publishedAt}
          popularity={Number(video.statistics.viewCount)}
        />
      ))}
    </div>
  ).props.children.map(i=>i.props);
}

