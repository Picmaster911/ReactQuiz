import axios from './service';

const controller = {
  get: (req) => axios.get(req).then((data) => data),
};

const controllerPost = {
  post: (req) => axios.put(`/quiz/${req.id}`, req).then((data) => data),
};
export { controller, controllerPost };
