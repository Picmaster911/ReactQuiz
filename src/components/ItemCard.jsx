import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Checkbox,
  Box,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import addFavorite from '../store/quizes/thunks';

export default function ItemCard({ quiz, noButton }) {
  const [check, handleCheck] = useState(quiz.Favorit);
  const dispatch = useDispatch();
  function addFav() {
    handleCheck(!check);
    const favQuiz = { ...quiz, Favorit: !quiz.Favorit };
    (async () => {
      await dispatch(addFavorite.addFavorite(favQuiz));
    })();
  }

  const cardStyle = {
    display: 'block',
    maxWidth: '500px',
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={cardStyle}>
        <CardMedia component="img" alt={quiz.Quiz} image={quiz.Foto} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {quiz.Quiz}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {quiz.Description.slice(0, 100)}...
          </Typography>
          {noButton === 'true' ? (
            <></>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Додати до улюблених
              </Typography>
              <Checkbox onChange={addFav} checked={check} />
            </Box>
          )}
        </CardContent>
        <CardActions>
          {noButton === 'true' ? (
            <></>
          ) : (
            <Button size="small">
              <Link to={`${quiz.Quiz}`}>Переглянуты Quiz</Link>
            </Button>
          )}
          {noButton === 'true' ? (
            <Link to="start" state={{ from: 'ItemCard', data: { quiz } }}>
              <Button size="small">Start quiz</Button>
            </Link>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
