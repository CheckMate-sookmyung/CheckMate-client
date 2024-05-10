import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
