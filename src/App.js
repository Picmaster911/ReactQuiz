import { Component } from "react";
import './App.css';
import { Box, styled, Grid } from "@mui/material";
import QuizList from "./pages/QuizList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const HeadarWraper = styled(Box)(() => ({
    backgroundColor: "rgb(55, 86, 145)",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const NavBarWraper = styled(Box)(() => ({
    backgroundColor: "rgb(130, 162, 223)",
    height: "100%",
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
    paddingTop: "50px"
}));

const BodyWraper = styled(Box)(() => ({
    height: "100vh",
    backgroundColor: "white",
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

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid container >
                    <Grid item xs={12} >
                        <HeadarWraper>
                            <Header />
                        </HeadarWraper>
                    </Grid>
                    <Grid item xs={0} md={2} lg={2}>
                        <NavBarWraper>
                            <NavBar />
                        </NavBarWraper>
                    </Grid>
                    <Grid item xs={12} md={10} lg={10} >
                        <BodyWraper>
                            <QuizList />
                        </BodyWraper>
                    </Grid>
                    <Grid item xs={12} >
                        <FooterWraper></FooterWraper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default App;
