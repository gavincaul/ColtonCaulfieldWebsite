import React from "react";
import VideoFile from "./VideoFile.tsx";
import solovids from "../data/SoloVids.json"; 
import profvids from "../data/ProfessionalVids.json"; 

interface VideoListProps{
    page: boolean;
}

export default function VideoList({page}: VideoListProps) {
  let videos;
  if (page){
    videos = solovids;
  }
  else{
    videos = profvids;
  }
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

