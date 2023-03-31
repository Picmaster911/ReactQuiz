import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import QuizRoutes from './components/routs/QuizRoutes';
import MainPage from './pages/MainPage';
import QuizList from './pages/QuizList';

function App() {
  const [quiz, setQuiz] = useState({});
  const callBackItemQuiz = (quiz) => {
    const startQuiz = { ...quiz, start: true };
    setQuiz(startQuiz);
  };
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path='/' element={<MainPage selectQuiz={quiz}/>}>
        <Route path='/quiz' element={<QuizList req={'/quiz'} callBackItemQuiz={callBackItemQuiz}/>}/>
        <Route path='/quiz/:pathQuiz' element={<QuizRoutes callBackItemQuiz={callBackItemQuiz}/>}/>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
