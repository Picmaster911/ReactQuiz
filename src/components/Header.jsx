import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Header({ selectQuiz }) {
  const [timeQuizSec, setTimeQuizSec] = useState(0);
  const [timeQuizMin, setTimeQuizMin] = useState(0);

  if (selectQuiz.start) {
    console.log (timeQuizSec);
    useEffect(() => {
      const timerID = setInterval(() => {
        setTimeQuizSec(timeQuizSec + 1);
        if (timeQuizSec >= 59) {
          setTimeQuizSec(timeQuizSec * 0);
          setTimeQuizMin(timeQuizMin + 1);
        }
      }, 1000);
      return () => clearInterval(timerID);
    }, [timeQuizSec]);
  }
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
            QUIZ {selectQuiz.Quiz}:Time = {timeQuizMin}:{timeQuizSec}
          </Typography>
        </Grid>
        <Grid item xs={5} md={4} style={GridStyle}>
          {!isMatch ? (
            <Box sx={{ padding: '20px' }}>
              <img width="150" src={selectQuiz.Foto} alt={selectQuiz.Quiz} />
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
