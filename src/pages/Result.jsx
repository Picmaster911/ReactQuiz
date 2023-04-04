import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const data = location.state;
  const { total, quiz, time } = data;
  const minutes = Math.floor(time.time / 60);
  const second = time.time - minutes * 60;
  return (
    <Box>
      <Typography align="center" variant="h4" gutterBottom>
        Поздравляем вы закончили опрос по тесту {quiz.quiz.Quiz} с результатом:
      </Typography>
      <Box sx={{ padding: '20px', justifyContent: 'center', display: 'flex' }}>
        <img width="350" src={quiz.quiz.Foto} alt={quiz.quiz.Quiz} />
      </Box>
      <Typography align="center" variant="h4" gutterBottom>
       {total.total} из 70
      </Typography>
      <Typography align="center" variant="h4" gutterBottom>
        общее время теста : {minutes}:{second}
      </Typography>
    </Box>
  );
}
