import React from 'react';
import {
  Typography,
  Button,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
  const GridStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Grid container style={{ alignItems: 'baseline' }}>
        <Grid item xs={6} style={GridStyle}>
          <Typography
            variant='h1'
            component='h2'
            sx={{ fontSize: { xs: 35, md: 65 } }}
          >
            Site QUIZ
          </Typography>
        </Grid>
        <Grid item xs={6} style={GridStyle}>
          {isMatch ? (
            <>
              <Typography>
                <HomeIcon />
              </Typography>
            </>
          ) : (
            <Stack direction='row' spacing={2}>
              <Button variant='contained'>Primary</Button>
              <Button variant='contained'>Secondary</Button>
              <Button variant='contained' href='#outlined-buttons'>
                Link
              </Button>
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
}
