import axios from 'axios';

export default axios.create({
  baseURL: 'https://63ee4ddbd466e0c18bad865b.mockapi.io/api/base',
  headers: { 'Content-Type': 'application/json' },
});
