import { React, useEffect, useState, } from "react";
import ItemCard from "../components/ItemCard";
import { Grid } from "@mui/material";
import controller from "../api/controller";

export default function QuizList() {
    let [quiz, setQuiz] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await controller.get();
            setQuiz(data);
        })();
    }, []);
    return (
        <Grid container spacing={4} >
            {quiz.map((quiz) =>
                <ItemCard key={quiz.id} quiz={quiz} />
            )}
        </Grid>
    )
}