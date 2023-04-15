import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constant';

const filterQuizs = createAction(`${moduleName}/filterQuizs`, (payload) => ({
  payload,
}));

export default {
  filterQuizs,
};
