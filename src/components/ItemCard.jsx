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
import ModalWindowQuiz from './ModalWindowQuiz';
import Notification from './Notification';
import { controllerPost } from '../api/controller';

export default function ItemCard({ quiz, noButton, callBackItemQuiz }) {
  const [showModal, handleClickOpen] = useState(false);
  const [check, handleCheck] = useState(quiz.Favorit);
  const handleCloseModal = () => handleClickOpen(false);
  const handleOpenModal = () => handleClickOpen(true);
  const [alertShow, handelClickAlert] = useState(false);
  const alertResetQuiz = () => handelClickAlert(false);
  async function handleChangeBox() {
    const { data } = await controllerPost.post({
      ...quiz,
      Favorit: !quiz.Favorit,
    });
    quiz = data;
    handleCheck(data.Favorit);
  }
  const cardStyle = {
    display: 'block',
    maxWidth: '500px',
  };
  const startQuiz = () => {
    callBackItemQuiz(quiz);
    console.log(showModal);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={cardStyle}>
        <CardMedia component='img' alt={quiz.Quiz} image={quiz.Foto} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {quiz.Quiz}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {quiz.Description.slice(0, 100)}...
          </Typography>
          {noButton === 'true' ? (
            <></>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' color='text.secondary'>
              Додати до улюблених
            </Typography>
            <Checkbox onChange={handleChangeBox} checked={check} />
          </Box>
          )}
        </CardContent>
        <CardActions>
          {noButton === 'true' ? (
            <></>
          ) : (
            <Button size='small'>
              <Link to={`${quiz.Quiz}`}>Переглянуты Quiz</Link>
            </Button>
          )}
           {noButton === 'true' ? (
            <Button onClick={startQuiz} size='small'>
            Start quiz
          </Button>
           ) : (
            <></>
           )}
        </CardActions>
        <ModalWindowQuiz
          handler={showModal}
          handleClose={handleCloseModal}
          img={quiz.Foto}
          info={quiz.Description}
          quiz={quiz.Quiz}
        />
      </Card>
      <Notification open={alertShow} handleClose={alertResetQuiz} />
    </Grid>
  );
}
