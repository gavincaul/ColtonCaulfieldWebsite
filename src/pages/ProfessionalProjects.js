import { React } from 'react';
import VideoList from '../components/VideoList.tsx'
import { Grid, Container } from '@mui/material';
import VideoFile from '../components/VideoFile.tsx';
/*import { Filter } from '../components/Filter.tsx'*/
import './Projects.css';
import NavBar from '../components/NavBar.tsx';

export default function Professional() {
  /*const [videos, setVideos] = useState(VideoList({ page: false }));*/ //Took out filter
  const arrayToGrid = (arr, elementsPerRow) => {
    const result = [];
    for (let i = 0; i < arr.length; i += elementsPerRow) {
      result.push(arr.slice(i, i + elementsPerRow));
    }
    return result;
  };
  /*const handleFilterChange = (filteredVideos) => {
    setVideos(filteredVideos)
  };*/
  const videoGrid = arrayToGrid(VideoList({ page: false }), 3);

  

  
  

  return (
    <div className="gradient_background_projects">
      <NavBar></NavBar>
      <div className="title">Professional Work</div>
      <br />
      <br />
      {/*<Filter onFilterChange={handleFilterChange}></Filter>*/}
      <br />
      <Container maxWidth="md" style={{ marginTop: 16}}>
        <Grid container spacing={3} className="gridContainer">
          {videoGrid.map((row) =>
            row.map((vidData, idx) => (
              <Grid key={idx} item xs={12} sm={4}  >
                <VideoFile {...vidData} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}