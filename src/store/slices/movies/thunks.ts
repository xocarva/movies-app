import { createAsyncThunk } from '@reduxjs/toolkit';
import { moviesAPI } from '../../api';
import { mapFromApiToMovie } from '../../../utils';
import { ResponseFromMovieDBApi } from '../../../types';

const QUERY_BASE_URL = process.env.REACT_APP_QUERY_BASE_URL

export const fetchMoviesByText = createAsyncThunk('movies/fetchByText', async (query: string) => {
    const { data } = await moviesAPI.get<ResponseFromMovieDBApi>(`${QUERY_BASE_URL}${query}`);
    const movies = mapFromApiToMovie(data);
    const totalPages = data.total_pages;
    const page = data.page;
    const totalResults = data.total_results;

    return {movies, page, totalPages, totalResults};
  }

);
