import React from "react";
import NavBar from "../components/NavBar.tsx";
import { useVideoContext } from "../components/VideoContext";
import "./VideoPlayer.css";

export default function VideoPlayer() {
  const { selectedVideoLink } = useVideoContext();
  const extractVideoId = (link) => {
    const match = link.toLowerCase().includes("youtube")
      ? link.match(
          /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
        )
      : `${link.split("/").at(-2)}/${link.split("/").at(-1)}`;
    return link.toLowerCase().includes("youtube")
      ? match
        ? match[1]
        : null
      : match;
  };

  const videoId = extractVideoId(selectedVideoLink);

  let title = decodeURIComponent(window.location.href.split("/").pop());
  return (
    <div className="gradient_background">
      <NavBar />
      <div className="videopadding"></div>
      <div className="videotitle">{title}</div>
      <div className="videoWrapper">
        {selectedVideoLink && (
          <iframe
            title="Vimeo Video"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            src={`https://player.vimeo.com/video/${videoId.split("/")[0]}?h=${
              videoId.split("/")[1]
            }&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
}
