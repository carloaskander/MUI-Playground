// React Imports
import React from 'react';

// MUI Imports
import { Container, Grid, Skeleton, Button, Box, Typography, Stack, Avatar, AvatarGroup, List, Badge, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { styled } from '@mui/material/styles';
import { pink, blue, orange, deepOrange } from '@mui/material/colors';

// CSS
import './Main.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

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


      <Container className='avatar-section' style={{ marginBottom: '4rem' }}>
        <Typography variant="h3" gutterBottom style={{ fontSize: '2rem' }}>Avatars</Typography>

        <Stack direction="row" spacing={2}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>

          <Avatar sx={{ bgcolor: deepOrange[400], width: 24, height: 24 }}>S</Avatar>
          <Avatar variant='rounded' sx={{ bgcolor: pink[400] }}>M</Avatar>
          <Avatar variant='square' sx={{ bgcolor: blue[400], width: 56, height: 56 }}>L</Avatar>

        </Stack>
        <Stack direction='row' spacing={2}>

          <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </StyledBadge>

          <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          }
        >
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Badge>

          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>

          <Avatar {...stringAvatar('Kent Dodds')} />
          <Avatar {...stringAvatar('Jed Watson')} />
          <Avatar {...stringAvatar('Tim Neutkens')} />
        </Stack>
      </Container>


      <Container className='list-section' style={{ marginBottom: '4rem' }}>
        <Typography variant="h3" gutterBottom style={{ fontSize: '2rem' }}>List</Typography>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>
          </nav>
          <Divider />
          <nav aria-label='secondary mailbox folders'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Container>
    </main>
  );
}

export default Main;