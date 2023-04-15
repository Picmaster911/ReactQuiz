import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizSlice from './quizs/reducer';
import quizesSlice from './quizes/reducer';

const rootReducer = combineReducers({
  quizSlice,
  quizesSlice,
});
const store = configureStore({ reducer: rootReducer });

export default store;
