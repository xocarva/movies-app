import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesByText } from './thunks';
import { getFromLocalStorage, setOnLocalStorage } from '../../../utils';
import { Movie } from '../../../types';

export interface MovieSliceState {
  movies: Movie[];
  moviesPage: number;
  moviesTotalPages: number;
  favs: Movie[];
  status: string;
}

const initialState: MovieSliceState = {
  movies: [],
  moviesPage: 1,
  moviesTotalPages: 1,
  favs: getFromLocalStorage('movies'),
  status: ''
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    addToFavs: (state, action) => { //must update state and modify local storage
      state.favs = [ ...state.favs, { ...action.payload, fav:true } ];
      state.movies = state.movies.map(movie => {
        return action.payload.id === movie.id
          ? { ...movie, fav: true }
          : movie
      });
      setOnLocalStorage('movies', state.favs);
    },
    removeFromFavs: (state, action) => { //must update state and modify local storage
      state.favs = state.favs.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.movies = state.movies.map(movie => {
        return action.payload.id === movie.id
          ? { ...movie, fav: false }
          : movie
      });
      setOnLocalStorage('movies', state.favs);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByText.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesByText.fulfilled, (state, action) => {
        state.status = 'success';
        state.movies = action.payload.movies;
        state.moviesPage = action.payload.page;
        state.moviesTotalPages = action.payload.totalPages;
      })
      .addCase(fetchMoviesByText.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const {addToFavs, removeFromFavs} = moviesSlice.actions;
