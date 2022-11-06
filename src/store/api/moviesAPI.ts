import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const moviesAPI: AxiosInstance = axios.create({
  baseURL: API_BASE_URL
});
