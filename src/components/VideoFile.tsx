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
        
        sx = {{padding: 0.5, height: 204, width: 200, '@media (max-width:720px)': {height: 'auto', width: '48%', paddingRight: 1.0}
                                                    /*'@media all and (min-width: 0px) and (max-width: 280px)': {height: 154, width: 150, paddingRight: 2.17},
                                                      '@media all and (min-width: 281px) and (max-width: 360px)': {height: 159, width: 155, paddingRight: 1.2},
                                                      '@media all and (min-width: 361px) and (max-width: 375px)': {height: 140, width: 135, paddingRight: 1.0},
                                                      '@media all and (min-width: 376px) and (max-width: 390px)': {height: 179, width: 175, paddingRight: 1.3},
                                                      '@media all and (min-width: 391px) and (max-width: 412px)': {height: 169, width: 165, paddingRight: 1.2},
                                                      '@media all and (min-width: 413px) and (max-width: 414px)': {height: 184, width: 180, paddingRight: 1.8},
                                                      '@media all and (min-width: 415px) and (max-width: 430px)': {height: 179, width: 175, paddingRight: 1.35},
                                                      '@media all and (min-width: 431px) and (max-width: 540px)': {height: 179, width: 175, paddingRight: 1.35},
                                                      '@media all and (min-width: 541px) and (max-width: 768px)': {height: 179, width: 175, paddingRight: 1.35},
                                                      '@media all and (min-width: 769px) and (max-width: 820px)': {height: 179, width: 175, paddingRight: 1.35},
                                                      '@media all and (min-width: 821px) and (max-width: 912px)': {height: 179, width: 175, paddingRight: 1.35},*/
                                                      
                                                      
              }}
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
