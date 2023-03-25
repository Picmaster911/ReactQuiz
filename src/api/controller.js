import axios from './service';

const controller = {
  get: () => axios.get('/quiz').then((data) => data),
};
export default controller;
