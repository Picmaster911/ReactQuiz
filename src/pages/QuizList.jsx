import {useEffect, useState} from "react";
import axios from "axios";
import ItemCardComponent from "../components/ItemCardComponent";
import {Box, Grid} from "@mui/material";

export  default function QuizList () {

    let [quiz,setQuiz] = useState([]);
    useEffect(()=> {
        (async () => {
            const  {data}  = await axios.get("https://63ee4ddbd466e0c18bad865b.mockapi.io/api/base/quiz");
            console.log(data);
            setQuiz(data);
        })();
    },[]);
    return(
        <div className="wrapper">
            {quiz.map((quiz,index) =>
                        <ItemCardComponent key={quiz.id} quiz={quiz}/>
            )}
        </div>
    )
}