import React from 'react';
import {
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
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
        <Grid item xs={2} md={0} style={GridStyle}>
          {!isMatch ? <></> : <HomeIcon />}
        </Grid>
        <Grid item xs={8} md={4} style={GridStyle}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ fontSize: { xs: 25, md: 45 } }}
          >
            QUIZ
          </Typography>
        </Grid>
        <Grid item xs={5} md={4} style={GridStyle}>
          {!isMatch ? (
            <Box sx={{ padding: '20px' }}>
            </Box>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={0} style={GridStyle}></Grid>
      </Grid>
    </>
  );
}
