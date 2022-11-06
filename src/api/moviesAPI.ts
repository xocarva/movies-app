import axios from 'axios';

export const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});
