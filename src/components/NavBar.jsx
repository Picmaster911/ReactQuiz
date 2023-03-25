import React from 'react';
import { Button, Stack } from '@mui/material';

export default function NavBar() {
  return (
    <Stack direction='column' spacing={2}>
      <Button variant='contained'>Action 1</Button>
      <Button variant='contained'>Action 2</Button>
      <Button variant='contained' href='#outlined-buttons'>
        Action 3
      </Button>
    </Stack>
  );
}
