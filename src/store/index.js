import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizSlice from './quizs/reducer';

const rootReducer = combineReducers({
  quizSlice,
});
const store = configureStore({ reducer: rootReducer });

export default store;
