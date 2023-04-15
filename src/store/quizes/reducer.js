/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import quizsThunk from './thunks';

const initialState = {
  quizs: [],
};

const quizesSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quizsThunk.fetchQuizs.fulfilled, (state, { payload }) => {
      state.quizs = payload;
    });
    builder.addCase(quizsThunk.addFavorite.fulfilled, (state, { payload }) => {
      state.quizs[payload.id - 1] = payload;
    });
  },
});

export default quizesSlice.reducer;
