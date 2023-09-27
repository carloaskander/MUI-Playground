import React from 'react';
import { Container, Grid, Skeleton, Button, Box, Typography, Avatar, List } from '@mui/material';
import { pink, blue, orange } from '@mui/material/colors';

import './Main.css';

function Main() {
  return (
    <main className='main'>
      <h1>Welcome to the Material UI Playground</h1>
      <Container className='grid-section' style={{ marginBottom: '4rem' }}>
        <Box mb={2}>
          <Typography variant="h2" style={{ fontSize: '2rem' }}>Grid System</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor={pink[400]} p={2}>Column 1 (Responsive)</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor={pink[400]} p={2}>Column 2 (Responsive)</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor={pink[400]} p={2}>Column 3 (Responsive)</Box>
          </Grid>
        </Grid>
      </Container>


      <Container className='skeleton-section' style={{ marginBottom: '4rem', border: '2px solid orange', borderRadius: '15px', padding: '2rem' }}>
        <Typography variant="h2" style={{ fontSize: '2rem' }}>Skeleton Loading</Typography>
        <Grid container spacing={3} mt={2}> {/* Container for the grid */}
          <Grid item xs={4}> {/* Grid item for the text skeleton */}
              <Typography variant="h3" style={{ fontSize: '1.5rem' }}>Text</Typography>
              <Skeleton variant="text" width={210} />
          </Grid>
          <Grid item xs={4}> {/* Grid item for the circular skeleton */}
              <Typography variant="h3"  style={{ fontSize: '1.5rem' }}>Circular</Typography>
              <Skeleton variant="circular" width={40} height={40} />
          </Grid>
          <Grid item xs={4}> {/* Grid item for the rectangular skeleton */}
              <Typography variant="h3" style={{ fontSize: '1.5rem' }}>Rectangular</Typography>
              <Skeleton variant="rectangular" width={210} height={118} />
          </Grid>
        </Grid>
        {/* Displaying a YouTube skeleton loader */}
        <Box mt={4}>
          <Typography variant="h3" style={{ fontSize: '1.5rem' }}>Youtube Skeleton Loader</Typography>
          <Box mt={2}>
            <Grid container spacing={2}>
              {/* Thumbnail */}
              <Grid item xs={12}>
                <Skeleton variant="rectangular" width='65%' height={250} sx={{ borderRadius: '10px' }}/>
              </Grid>
              {/* Video Info */}
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  {/* Avatar */}
                  <Grid item>
                    <Skeleton variant="circular" width={60} height={60} />
                  </Grid>
                  {/* Video Title & Uploader */}
                  <Grid item xs>
                    <Skeleton variant='text' width="61%" height={50}></Skeleton>
                    <Skeleton variant='text' width="40%" height={40}></Skeleton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>


      <Container className='button-section' style={{ marginBottom: '4rem' }}>
        <Typography variant="h2" style={{ fontSize: '2rem' }}>Buttons</Typography>
        <Grid container spacing={2} mt={2}>

          {/* Contained */}
          <Grid item xs={12} sm={4}>
            <Button variant="contained" style={{ backgroundColor: pink[500] }}>Pink Contained</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" style={{ backgroundColor: blue[500] }}>Blue Contained</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" style={{ backgroundColor: orange[500] }}>Orange Contained</Button>
          </Grid>
          {/* Outlined */}
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" style={{ borderColor: pink[500], color: pink[500] }}>Pink Outlined</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" style={{ borderColor: blue[500], color: blue[500] }}>Blue Outlined</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" style={{ borderColor: orange[500], color: orange[500] }}>Orange Outlined</Button>
          </Grid>

          {/* Text */}
          <Grid item xs={12} sm={4}>
            <Button variant="text" style={{ color: pink[500] }}>Pink Text</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="text" style={{ color: blue[500] }}>Blue Text</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="text" style={{ color: orange[500] }}>Orange Text</Button>
          </Grid>

        </Grid>
      </Container>
    </main>
  );
}

export default Main;