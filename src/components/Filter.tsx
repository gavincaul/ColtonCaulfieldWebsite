import React from "react";
import VideoBox from "./VideoFile.tsx";
import { VideoBoxProps } from "C:/Users/gavdog/VSC/ColtonWebsite/src/interfaces/VideoBoxProps.tsx"

export default function filterVideos(videos: VideoBoxProps[], popular: boolean, high: boolean){
    if (popular){
        if (high){
            const fin = [...videos].sort((a,b) => {
                return a.popularity > b.popularity ? 1 : -1
            })
        }
        else{
             const fin = [...videos].sort((a,b) => {
                return a.popularity < b.popularity ? 1 : -1
            })
        }
    }
    else{
        if (high){
            const fin = [...videos].sort((a,b) => {
                return a.release > b.release ? 1 : -1
            })
        }
        else{
             const fin = [...videos].sort((a,b) => {
                return a.release < b.release ? 1 : -1
            })
        }
    }

}