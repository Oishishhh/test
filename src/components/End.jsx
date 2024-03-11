import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: 'orange', height: '200px',width: "500px",position: "relative",left: "-150px"}} />
        <div className='photo'></div>
      </Container>
    </React.Fragment>
  );
}