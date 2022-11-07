import axios, { AxiosInstance } from 'axios';

export const moviesAPI: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});
