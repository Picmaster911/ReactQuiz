import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function TimeCounter({ trData }) {
  const [timeLeft, setTimeLeft] = useState(3 * 60);
  const minutes = Math.floor(timeLeft / 60);
  const second = timeLeft - minutes * 60;
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft > 1 ? timeLeft - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);
  trData(timeLeft);

  return (
    <Box
      sx={{ padding: '20px', alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography align="center" variant="h5" gutterBottom>
        Время теста {minutes}:{second}
      </Typography>
    </Box>
  );
}
