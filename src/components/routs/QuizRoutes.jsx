import React from 'react';
import { useParams } from 'react-router-dom';
import QuizList from '../../pages/QuizList';

export default function QuizRoutes() {
  const { pathQuiz } = useParams();

  return (
    <>
      <QuizList req={pathQuiz} noButton={'true'} />
    </>
  );
}
