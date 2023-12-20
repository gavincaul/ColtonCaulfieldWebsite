import React from 'react';
import VideoList from 'C:/Users/gavdog/VSC/ColtonWebsite/src/components/VideoList.tsx'
import { Grid, Container } from '@mui/material';
import VideoBox from 'C:/Users/gavdog/VSC/ColtonWebsite/src/components/VideoFile.tsx';
import './Page.css';

export default function Solo() {


  const arrayToGrid = (arr, elementsPerRow) => {
    const result = [];
    for (let i = 0; i < arr.length; i += elementsPerRow) {
      result.push(arr.slice(i, i + elementsPerRow));
    }
    return result;
  };
  const videoGrid = arrayToGrid([...VideoList().map(i=>(i.props))], 3);

  

  
  

  return(
    <div className="gradient_background_projects">
        <div className="title">Solo Work</div>
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
    </div>
  );
}