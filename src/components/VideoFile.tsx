import React from "react";
import { Link } from "react-router-dom";
import "./VideoFile.css";
import { Paper } from "@mui/material";
import { useVideoContext } from './VideoContext.js';

export default function VideoFile({
    name,
    image,
    link,
    release,
    popularity,
  }: {
    name: string;
    image: string;
    link: string;
    release: string;
    popularity: number;
  }) {
    
  const { setVideoLink } = useVideoContext();

  let redirect = name;
  redirect = redirect.replace(/\s+/g, '-');
  const url = `/video/${redirect}`;

  const handleVideoClick = () => {
      setVideoLink(link);
  };
  return (
    <div>
      <Paper
        elevation={3}
        className="video-paper"
        sx = {{padding: 0.5, height: 204, width: 200}}
        >
            <Link to={url} state={{link}} style={{ textDecoration: 'none' }} onClick={handleVideoClick}>
                <img
                    src={image}
                    alt={name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
        </Link>
      </Paper>
      <div className="img-name">{name}</div>
    </div>
  );
}

export { VideoFile };
