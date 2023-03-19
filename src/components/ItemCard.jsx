import React, { useState } from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography, 
    Grid,
} from '@mui/material';
import ModalWindowQuiz from "./ModalWindowQuiz";
import Notification from "./Notification";

export default function ItemCard({ quiz }) {
    let [showModal, handleClickOpen] = useState(false);
    const handleOpenModal = () => handleClickOpen(true);
    const handleCloseModal = () => handleClickOpen(false);
    let [alertShow, handelClickAlert] = useState(false);
    const alertQuiz = () => handelClickAlert(true);
    const alertResetQuiz = () => handelClickAlert(false);
    const cardStyle = {
        display: 'block',
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={cardStyle}>
                <CardMedia
                    component="img"
                    alt={quiz.Quiz}
                    image={quiz.Foto}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {quiz.Quiz}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {quiz.Description.slice(0, 100)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpenModal} size="small">Show More</Button>
                    <Button onClick={alertQuiz} size="small">Start quiz</Button>
                </CardActions>
                <ModalWindowQuiz
                    handler={showModal}
                    handleClose={handleCloseModal}
                    img={quiz.Foto}
                    info={quiz.Description}
                    quiz={quiz.Quiz}
                />
            </Card>
            <Notification open={alertShow} handleClose={alertResetQuiz}/>
        </Grid>
    )
}