import { Component } from "react";
import ItemCard from "../components/ItemCard";
import { Grid } from "@mui/material";
import controller from "../api/controller";

export default class QuizList extends Component {
    state = {
        quiz: [],
        completed: false
    }
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container spacing={ 4 } >
                {this.state.quiz.map((quiz) =>
                    <ItemCard key={ quiz.id } quiz={ quiz } />
                )}
            </Grid>
        )
    }
    componentDidMount() {
        controller.get()
            .then(quiz => this.setState({ ...this.state, quiz }))
    }
}
