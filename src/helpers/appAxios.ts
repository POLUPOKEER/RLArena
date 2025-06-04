import axios from 'axios';

const appAxios = axios.create({
  baseURL: 'http://localhost/api/v1', // замени на свой
});

appAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default appAxios;
