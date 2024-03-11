import * as React from 'react';
import Button from '@mui/material/Button';
import './Button.css';

export default function DisableElevation() {
  return (
    <Button variant="contained" size="large" sx={{marginTop: "100px",backgroundColor: "greenyellow",borderRadius: "20px"}} disableElevation  >
      <p>Open Catalog</p>
    </Button>
  );
}