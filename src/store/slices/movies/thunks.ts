import { createAsyncThunk } from '@reduxjs/toolkit';
import { moviesAPI } from '../../api';
import { mapFromApiToMovie } from '../../../utils';
import { ResponseFromMovieDBApi } from '../../../types';

export const fetchMoviesByText = createAsyncThunk('movies/fetchByText', async (query: string) => {

    const { data } = await moviesAPI.get<ResponseFromMovieDBApi>(`search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${query}`);
    const movies = mapFromApiToMovie(data);
    const totalPages = data.total_pages;
    const page = data.page;
    const totalResults = data.total_results;

    return {movies, page, totalPages, totalResults};
  }

);
