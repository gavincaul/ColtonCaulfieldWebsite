import React, { useState } from "react";
import VideoList from './VideoList.tsx';
import { VideoBoxProps } from "../interfaces/VideoBoxProps.tsx";
import './Filter.css'
import { Box } from '@mui/material'
interface FilterProps {
    onFilterChange: (filteredVideos: VideoBoxProps[]) => void;
}

export function Filter({ onFilterChange }: FilterProps): JSX.Element {
    const [videos, setVideos] = useState<VideoBoxProps[]>(VideoList())



    function parseDate(dateString: string): Date {
        return new Date(dateString);
    }

    function filterVideos(popularity: boolean, high: boolean) {
        let sortedVideos;

        if (popularity) {
            sortedVideos = [...videos].sort((a, b) => {
                return high ? a.popularity - b.popularity : b.popularity - a.popularity;
            });
        } else {
            sortedVideos = [...videos].sort((a, b) => {
                const dateA = parseDate(a.release);
                const dateB = parseDate(b.release);
                return high ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            });
        }
        setVideos(sortedVideos);
        onFilterChange(sortedVideos);
    }

    return (
        <div>
            <Box className="arrowBox">
                <div className="text">Popularity</div>
                <div className="arrowu" onClick={() => filterVideos(true, false)}></div>
                <div className="arrowd" style={{/*Shift right 10px*/}} onClick={() => filterVideos(true, true)}></div>
                <div className="text">Release</div>
                <div className="arrowu" style={{ /*Shift right 10px*/ top: '27%'}} onClick={() => filterVideos(false, true)}></div>
                <div className="arrowd" style={{top: '26%'}} onClick={() => filterVideos(false, false)}></div>
            </Box>
        </div>
    );
}


