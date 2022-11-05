import { createAsyncThunk } from '@reduxjs/toolkit';
import { moviesAPI } from '../../../api/moviesAPI';
import { getFromLocalStorage } from '../../../utils';
import { Movie, MovieResponseFromApi } from '../../../types';

export const fetchMoviesByText = createAsyncThunk(
  'movies/fetchByText',
  async (query: string) => {

    const { data } = await moviesAPI.get(`search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${query}`);

    const movies: Movie[] = data.results.map((movieFromApi: MovieResponseFromApi) => {
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

    const totalPages = data.total_pages;
    const page = data.page;
    const totalResults = data.total_results;

    return {movies, page, totalPages, totalResults};
  }
);
