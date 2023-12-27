
import { createContext, useContext, useState, useEffect } from 'react';

const VideoContext = createContext();

export function useVideoContext() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }) {
  const [selectedVideoLink, setSelectedVideoLink] = useState(() => {
    const storedVideoLink = localStorage.getItem('selectedVideoLink');
    return storedVideoLink ? JSON.parse(storedVideoLink) : null;
  });

  const setVideoLink = (link) => {
    setSelectedVideoLink(link);
  };

 
  useEffect(() => {
    localStorage.setItem('selectedVideoLink', JSON.stringify(selectedVideoLink));
  }, [selectedVideoLink]);

  return (
    <VideoContext.Provider value={{ selectedVideoLink, setVideoLink }}>
      {children}
    </VideoContext.Provider>
  );
}
