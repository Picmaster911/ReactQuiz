import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ItemCard from '../components/ItemCard';
import fetchQuizs from '../store/quizes/thunks';

export default function QuizsList({ req, noButton }) {
  const { quizs } = useSelector((state) => state.quizesSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchQuizs.fetchQuizs(req));
    })();
  }, []);
  return (
    <Grid container spacing={4}>
      {quizs.map((quiz) => (
        <ItemCard key={quiz.id} quiz={quiz} noButton={noButton} />
      ))}
    </Grid>
  );
}
