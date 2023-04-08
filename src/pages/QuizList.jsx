import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ItemCard from '../components/ItemCard';
import fetchQuizs from '../store/thunks';

export default function QuizList({ req, noButton }) {
  const { filterQuizs } = useSelector((state) => state.quizSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchQuizs.fetchQuizs(req));
    })();
  }, []);
  return (
    <Grid container spacing={4}>
      {filterQuizs.map((quiz) => (
        <ItemCard key={quiz.id} quiz={quiz} noButton={noButton} />
      ))}
    </Grid>
  );
}
