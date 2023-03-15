import React, {useState} from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography, Grid,
} from '@mui/material';
import ModalWindowQuiz from "./ModalWindowQuiz";

export default function ItemCard ({quiz}) {
    let [ clickYes,handleClickOpen ] = useState(false);
    const handleOpen = () => handleClickOpen(true);
    const handleClose = () => handleClickOpen(false);
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card >
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
                        {quiz.Answer}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} size="small">Show QUIZ </Button>
                    <Button size="small">No</Button>
                </CardActions>
                <ModalWindowQuiz
                    handler={clickYes}
                    handleClose={handleClose}
                    img={quiz.Foto}
                    info={quiz.Answer}
                    quiz={quiz.Quiz}
                />
            </Card>
        </Grid>
    )
}