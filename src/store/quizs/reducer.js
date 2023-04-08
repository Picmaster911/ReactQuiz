import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import quizsThunk from '../thunks';
import actions from './actions';

const initialState = {
  quizs: [],
  filterQuizs: [],
};

const quizSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quizsThunk.fetchQuizs.fulfilled, (state, { payload }) => {
      state.quizs = payload;
      state.filterQuizs = state.quizs;
    });
    builder.addCase(actions.filterQuizs, (state, { payload }) => {
      state.filterQuizs = state.quizs.filter((quizItem) => quizItem.Quiz.indexOf(payload) !== -1);
    });
  },
});

export default quizSlice.reducer;
