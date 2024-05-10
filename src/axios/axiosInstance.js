import { Axios } from 'axios';

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
