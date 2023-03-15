import React from "react";
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import QuizList from "./pages/QuizList";
import DrawerLeft from "./components/DrawerLeft";
import { useState } from "react";

function App() {
    let [watchOpenDrawel,handlerOpenDrawer] = useState(false);
    const openDrawer = () => handlerOpenDrawer(true);
    const closeDrawer = () => handlerOpenDrawer(false);
    return (
        <div className="App">
            <NavBar openDrawer={ openDrawer }/>
            <DrawerLeft watchOpenDrawel={ watchOpenDrawel } closeDrawer={ closeDrawer } />
            <QuizList/>
            <Footer/>
        </div>
    );
}
export default App;
