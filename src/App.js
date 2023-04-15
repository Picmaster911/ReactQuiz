import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import QuizRoutes from './components/routs/QuizRoutes';
import MainPage from './pages/MainPage';
import StartQuiz from './pages/StartQuiz';
import Result from './pages/Result';
import store from './store';
import QuizsList from './pages/QuizsList';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path='/' element={<MainPage/>}>
        <Route path='/quiz' element={<QuizsList req={'quiz'} noButton={false} />}/>
        <Route path='/quiz/:pathQuiz' element={<QuizRoutes />}/>
        <Route path='/quiz/:pathQuiz/start' element={<StartQuiz/>}/>
        <Route path='/quiz/result' element={<Result/>}/>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </Provider>
  );
}
export default App;
