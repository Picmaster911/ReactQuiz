import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { controller, controllerPost, controllerPut } from '../../api/controller';

const fetchQuizs = createAsyncThunk(`${moduleName}/fetchQuizs`, async (req) => {
  const { data } = await controller.get(req);
  return data;
});
const addQuizs = createAsyncThunk(`${moduleName}/addQuizs`, async (req) => {
  const {
    pathQuiz,
    Answer,
    Description,
    Foto,
    Questions,
    Quiz,
  } = req;
  const quiz = {
    Answer,
    Description,
    Foto,
    Questions,
    Quiz,
  };
  const { data } = await controllerPost.post(quiz, pathQuiz);
  return data;
});
const addQuiz = createAsyncThunk(`${moduleName}/addQuiz`, async (req) => {
  const {
    pathQuiz,
    Description,
    Foto,
    Quiz,
  } = req;
  const quiz = {
    Description,
    Foto,
    Quiz,
  };
  const { data } = await controllerPost.post(quiz, pathQuiz);
  return data;
});

const addFavorite = createAsyncThunk(`${moduleName}/addFavorite`, async (req) => {
  const pathQuiz = 'quiz';
  const { data } = await controllerPut.put(req, pathQuiz);
  return data;
});

export default {
  fetchQuizs,
  addQuizs,
  addQuiz,
  addFavorite,
};
