import React from "react";
import './App.css';
import { useState } from "react";
import { Box, styled, Grid } from "@mui/material";
import QuizList from "./pages/QuizList";
import Header from "./components/Header";

const HeadarWraper = styled(Box)(() => ({
    backgroundColor: "red",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent:"center"
  }));

  const NavBarWraper = styled(Box)(() => ({
    backgroundColor: "green",
    height: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden"
  }));

  const BodyWraper = styled(Box)(() => ({
    height: "100vh",
    backgroundColor: "blue",
    padding: "10px",
    overflow: "auto",
    padding: "40px"

  }));

  const FooterWraper = styled(Box)(() => ({
    backgroundColor: "rgb(138, 144, 155)",
    height: "150px",
    display: "flex",
    alignItems: "center"
  }));

function App() {
    let [watchOpenDrawel, handlerOpenDrawer] = useState(false);
    const openDrawer = () => handlerOpenDrawer(true);
    const closeDrawer = () => handlerOpenDrawer(false);
    return (
        <div className="App">
            <Grid container >
                <Grid item xs={12} >
                    <HeadarWraper>
                        <Header/>
                    </HeadarWraper>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                    <NavBarWraper>
                    </NavBarWraper>
                </Grid>
                <Grid item xs={10} >
                    <BodyWraper>
                        <QuizList/>
                    </BodyWraper>
                </Grid>
                <Grid item xs={12} >
                    <FooterWraper></FooterWraper>
                </Grid>
            </Grid>
        </div>
    );
}
export default App;
