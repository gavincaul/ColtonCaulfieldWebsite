import { React, useState } from 'react';
import VideoList from '../components/VideoList.tsx'
import { Grid, Container } from '@mui/material';
import VideoBox from '../components/VideoFile.tsx';
import { Filter } from '../components/Filter.tsx'
import './Page.css';
import NavBar from '../components/NavBar.tsx';

export default function Solo() {
  const [videos, setVideos] = useState(VideoList())
  const arrayToGrid = (arr, elementsPerRow) => {
    const result = [];
    for (let i = 0; i < arr.length; i += elementsPerRow) {
      result.push(arr.slice(i, i + elementsPerRow));
    }
    return result;
  };
  const handleFilterChange = (filteredVideos) => {
    setVideos(filteredVideos);
  };
  const videoGrid = arrayToGrid([...videos], 3);

  

  
  

  return (
    <div className="gradient_background_projects">
      <NavBar></NavBar>
      <div className="title">Solo Work</div>
      <br />
      <br />
      <Filter onFilterChange={handleFilterChange}></Filter>
      <br />
      <Container maxWidth="md" style={{ marginTop: 16 }}>
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