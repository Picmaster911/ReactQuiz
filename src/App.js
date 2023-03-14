import './App.css';
import {useState} from "react";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import TopMenuComponent from "./components/TopMenuComponent";
import ItemCardComponent from "./components/ItemCardComponent";
import QuizList from "./pages/QuizList";
import CompMuiDrawer from "./components/CompMuiDrawer";

function App() {
    let [counter,setCounter] = useState(0)
    const handelClickCounter = () => {
        setCounter(counter +=1);
        console.log(counter);
    }
    return (
        <div className="App">
            <TopMenuComponent/>
            <CompMuiDrawer />
            <QuizList/>
            <MuiBottomNavigation/>
        </div>
    );
}
export default App;
