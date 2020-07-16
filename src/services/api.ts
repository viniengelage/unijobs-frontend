import axios from 'axios';

const api = axios.create({
  baseURL: 'https://unijobs-backend.herokuapp.com',
});

export default api;
