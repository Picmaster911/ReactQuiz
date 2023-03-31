import React from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBar({ callBackFind, openFormAddQuiz }) {
  return (
    <Stack direction='column' spacing={2}>
      <Box>
         <TextField id='outlined-basic' label='Outlined' variant='outlined' onChange={callBackFind} />
       </Box>
      <Button variant='contained'>
        <Link to='/quiz'>Картки для тестування</Link>
      </Button>
      <Button onClick={openFormAddQuiz} variant='contained'>
        Додаты новый Quiz
      </Button>
    </Stack>
  );
}
