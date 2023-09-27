// Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// NAVBAR STYLING (AppBar)
const StyledAppBar = styled(AppBar)({
  position: 'sticky',
  top: '2rem',
  border: '3px solid #75d64f',
  borderRadius: '1rem',
  background: '#101010',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
});

function Navbar() {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          MUI Playground
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;