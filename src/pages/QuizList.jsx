import { React, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ItemCard from '../components/ItemCard';
import controller from '../api/controller';

export default function QuizList() {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await controller.get();
      setQuiz(data);
    })();
  }, []);
  return (
    <Grid container spacing={4}>
      {quiz.map((quiz) => (
        <ItemCard key={quiz.id} quiz={quiz} />
      ))}
    </Grid>
  );
}
