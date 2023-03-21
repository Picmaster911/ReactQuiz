import axios from "../api/service";

const controller = {
    get: () => axios.get('/quiz').then(({ data }) => data)
};
export default controller