import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
