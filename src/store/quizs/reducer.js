/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import quizsThunk from './thunks';
import actions from './actions';

const initialState = {
  quizs: [],
  filterQuizs: [],
  newQuiz: [],
};

const quizSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quizsThunk.fetchQuizs.fulfilled, (state, { payload }) => {
      state.quizs = payload;
      state.filterQuizs = payload;
    });
    builder.addCase(actions.filterQuizs, (state, { payload }) => {
      state.filterQuizs = state.quizs.filter((quizItem) => quizItem.Quiz.indexOf(payload) !== -1);
    });
    builder.addCase(quizsThunk.addQuizs.fulfilled, (state, { payload }) => {
      state.newQuiz.push(payload);
    });
    builder.addCase(quizsThunk.addQuiz.fulfilled, (state, { payload }) => {
      state.newQuiz.push(payload);
      state.filterQuizs.push(payload);
    });
    builder.addCase(quizsThunk.addFavorite.fulfilled, (state, { payload }) => {
      state.filterQuizs[payload.id - 1] = payload;
      state.quizs[payload.id - 1] = payload;
    });
  },
});

export default quizSlice.reducer;
