import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import filterQuizs from '../store/quizs/actions';

export default function NavBar({ openFormAddQuiz }) {
  const dispatch = useDispatch();
  const handleFiand = (e) => {
    dispatch(filterQuizs.filterQuizs(e.target.value));
  };
  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onInput={handleFiand}
        />
      </Box>
      <Button variant="contained">
        <Link to="/quiz">Картки для тестування</Link>
      </Button>
      <Button onClick={openFormAddQuiz} variant="contained">
        Додаты новый Quiz
      </Button>
    </Stack>
  );
}
