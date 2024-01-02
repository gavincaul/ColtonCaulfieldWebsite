import React from 'react';
import NavBar from '../components/NavBar.tsx';
import { Grid, Container } from '@mui/material';
import VideoBox from '../components/VideoFile.tsx';
import videos from '../data/ProfessionalVids.json'
import './Page.css';

export default function Professional() {
  

  const arrayToGrid = (arr, elementsPerRow) => {
    const result = [];
    for (let i = 0; i < arr.length; i += elementsPerRow) {
      result.push(arr.slice(i, i + elementsPerRow));
    }
    return result;
  };
  
  const videoGrid = arrayToGrid([...videos], 3);
  

  
  

  return(
    <div className="gradient_background_projects">
      <NavBar></NavBar>
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