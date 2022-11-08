import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../../../utils';
import { moviesAPI } from '../../api';
import { Movie } from '../../../types';

interface ResponseFromMovieDBApi {
  page: number;
  results: MovieResponseFromApi[];
  total_pages: number;
  total_results: number;
}

interface MovieResponseFromApi {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
}

// converts movie api data format to app data format
const mapFromApiToMovie = (data: ResponseFromMovieDBApi): Movie[] => {
  return data.results.map((movieFromApi) => {
    const favs = getFromLocalStorage('movies');
    const isFav = !!favs.find(movie => movie.id === movieFromApi.id);
    const movie: Movie = {
      id: movieFromApi.id,
      title: movieFromApi.original_title,
      posterURL: movieFromApi.poster_path
        ? `https://image.tmdb.org/t/p/original${movieFromApi.poster_path}`
        : '',
      releaseDate: movieFromApi.release_date,
      fav: isFav
    }
    return movie;
  });
}

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
