import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import TimeCounter from '../components/TimeCounter';

export default function StartQuiz() {
  const [indexArray, setIndexArray] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [selectRadio, setSelectRadio] = useState('');
  const [total, setTotal] = useState(0);
  const location = useLocation();
  let time = 0;
  const { data } = location.state;
  const { quiz } = data;
  function trData(value) { time = value; }
  const navigate = useNavigate();
  const buildAnswer = (e) => {
    setSelectRadio(e.target.value);
  };
  const Next = () => {
    if (quiz.Questions.length >= answer.length + 1) {
      setAnswer([...answer, selectRadio]);
      setIndexArray(indexArray + 1);
      if (quiz.Answer[indexArray] === selectRadio) {
        setTotal(total + 10);
      }
      if (answer.length === 6) {
        navigate('/quiz/result', {
          state: { quiz: { quiz }, total: { total }, time: { time } },
        });
      }
    }
  };

  return (
    <Box
      sx={{ padding: '20px', alignItems: 'center', justifyContent: 'center' }}
    >
      <TimeCounter trData={ trData }/>
      <Typography align="center" variant="h4" gutterBottom>
        Вы выбрали воросы : {quiz.Quiz}
      </Typography>
      <Box sx={{ padding: '20px', justifyContent: 'center', display: 'flex' }}>
        <img width="250" src={quiz.Foto} alt={quiz.Quiz} />
      </Box>

        <Box
          sx={{
            padding: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography align="center" variant="h4" gutterBottom >
            {quiz.Questions[indexArray]}
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="quiz"
            disabled='disabled'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <FormControlLabel onChange={buildAnswer} value='Да' control={<Radio />}label="Да"/>
            <FormControlLabel onChange={buildAnswer} value= 'Нет' control={<Radio />} label="Нет" />
            <FormControlLabel onChange={buildAnswer} value= 'Другое' control={<Radio />} label="Другое" />
            <Button sx={{ mt: 1, mr: 1 }} onClick={Next} variant="outlined">
               Next
            </Button>
          </RadioGroup>
        </Box>
    </Box>
  );
}
