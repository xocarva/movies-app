import { createAsyncThunk } from '@reduxjs/toolkit';
import { moviesAPI } from '../../api';
import { mapFromApiToMovie } from '../../../utils';
import { ResponseFromMovieDBApi } from '../../../types';

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

export const fetchMoviesByText = createAsyncThunk('movies/fetchByText', async (query: string) => {
    const { data } = await moviesAPI.get<ResponseFromMovieDBApi>(`search/movie?api_key=${API_KEY}&query=${query}`);
    const movies = mapFromApiToMovie(data);
    const totalPages = data.total_pages;
    const page = data.page;
    const totalResults = data.total_results;

    return {movies, page, totalPages, totalResults};
  }
);
