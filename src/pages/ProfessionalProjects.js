import React from 'react';

import { Grid, Container } from '@mui/material';
import VideoBox from 'C:/Users/gavdog/VSC/ColtonWebsite/src/components/VideoFile.tsx';
import './Page.css';

export default function Professional() {
  const videoFiles = [
    { name: 'Awesome Adventure', image: '/IMG_9677.jpg', link: '#', release: '2023-01-01', popularity: 80 },
    { name: 'Fantastic Journey', image: '/IMG_9677.jpg', link: '#', release: '2023-02-15', popularity: 92 },
    { name: 'Epic Exploration', image: '/IMG_9677.jpg', link: '#', release: '2023-03-21', popularity: 65 },
    { name: 'Amazing Discovery', image: '/IMG_9677.jpg', link: '#', release: '2023-04-10', popularity: 87 },
    { name: 'Cool Quest', image: '/IMG_9677.jpg', link: '#', release: '2023-05-05', popularity: 75 },
    { name: 'Unbelievable Voyage', image: '/IMG_9677.jpg', link: '#', release: '2023-06-18', popularity: 89 },
    { name: 'Incredible Expedition', image: '/IMG_9677.jpg', link: '#', release: '2023-07-30', popularity: 78 },
    { name: 'Exciting Trek', image: '/IMG_9677.jpg', link: '#', release: '2023-08-22', popularity: 94 },
    { name: 'Breathtaking Safari', image: '/IMG_9677.jpg', link: '#', release: '2023-09-14', popularity: 82 },
    { name: 'Adventurous Safari', image: '/IMG_9677.jpg', link: '#', release: '2023-10-09', popularity: 88 },
  ];

  const arrayToGrid = (arr, elementsPerRow) => {
    const result = [];
    for (let i = 0; i < arr.length; i += elementsPerRow) {
      result.push(arr.slice(i, i + elementsPerRow));
    }
    return result;
  };
  
  const videoGrid = arrayToGrid(videoFiles, 3);
  

  
  

  return(
    <div className="gradient_background_projects">
        <div className="title">Professional Work</div>
        <br />
        <br />
        <br />
            <Container maxWidth='md' style={{ marginTop: 16 }}>
                <Grid container spacing={3}>
                    {videoGrid.map((row) =>
                    row.map((vidData, idx) => (
                        <Grid key={idx} item xs={12} sm={4}>
                        <VideoBox {...vidData} />
                        </Grid>
                    ))
                    )}
                </Grid>
            </Container>
        <br></br>
        <br></br>
    </div>
  );
}