import React from "react";
import "./VideoFile.css";
import { Paper } from "@mui/material";

export default function VideoBox({
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
  return (
    <div>
      <Paper
        elevation={3}
        className="video-paper"
        sx = {{padding: 1}}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" >
                <img
                    src={image}
                    alt={name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
        </a>
      </Paper>
      <div className="img-name">{name}</div>
    </div>
  );
}

export { VideoBox };
