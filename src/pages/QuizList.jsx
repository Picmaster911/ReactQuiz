import React from "react";
import ItemCard from "../components/ItemCard";
import { useEffect, useState,} from "react";
import axios from "axios";
import { Grid } from "@mui/material";

export  default function QuizList () {
    let [ quiz,setQuiz ] = useState([]);
    useEffect(()=> {
        (async () => {
            const  { data }  = await axios.get("https://63ee4ddbd466e0c18bad865b.mockapi.io/api/base/quiz");
            setQuiz(data);
        })();
    },[]);
    return(
        <Grid container spacing={4} >
            { quiz.map((quiz,index) =>
                <ItemCard key={ quiz.id } quiz={ quiz }/>
            )}
       </Grid>
    )
}