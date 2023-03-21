import { Component } from "react";
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

export default class ItemCard extends Component {
    state = {
        showModal: false,
        alertShow: false,
        completed: false
    }
    constructor() {
        super();
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.alertQuiz = this.alertQuiz.bind(this);
        this.alertResetQuiz = this.alertResetQuiz.bind(this);
    }

    render() {
        const cardStyle = {
            display: 'block',
        }
        const { Quiz, Foto, Description } = this.props.quiz
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card style={cardStyle}>
                    <CardMedia
                        component="img"
                        alt={Quiz}
                        image={Foto}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Quiz}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {Description.slice(0, 100)}...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={ this.handleOpenModal } size="small">Show More</Button>
                        <Button onClick={ this.alertQuiz } size="small">Start quiz</Button>
                    </CardActions>
                    <ModalWindowQuiz
                        handler={ this.state.showModal }
                        handleClose={ this.handleCloseModal }
                        img={ Foto }
                        info={ Description }
                        quiz={ Quiz }
                    />
                </Card>
                <Notification open={ this.state.alertShow } handleClose={ this.alertResetQuiz } />
            </Grid>
        )
    }

    handleOpenModal() {
        this.setState({ ...this.state, showModal: true });
    }

    handleCloseModal() {
        this.setState({ ...this.state, showModal: false });
    }

    alertQuiz() {
        this.setState({ ...this.state, alertShow: true });
    }
    alertResetQuiz() {
        this.setState({ ...this.state, alertShow: false });
    }

}
