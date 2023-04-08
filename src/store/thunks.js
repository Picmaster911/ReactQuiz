import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './quizs/constant';
import { controller } from '../api/controller';

const fetchQuizs = createAsyncThunk(`${moduleName}/fetchQuizs`, async (req) => {
  const { data } = await controller.get(req);
  return data;
});

export default {
  fetchQuizs,
};
