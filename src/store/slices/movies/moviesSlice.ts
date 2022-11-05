import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesByText } from './thunks';
import { getFromLocalStorage, setOnLocalStorage } from '../../../utils';
import { Movie } from '../../../types';


export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
      movies: [] as Movie[],
      moviesPage: 1,
      moviesTotalPages: 1,
      favs: getFromLocalStorage('movies') as Movie[],
      status: ''
  },
  reducers: {
    addToFavs: (state, action) => {
      state.favs = [ ...state.favs, {...action.payload, fav:true} ];
      setOnLocalStorage('movies', state.favs);
    },
    removeFromFavs: (state, action) => {
      state.favs = state.favs.filter(
        (movie) => movie.id !== action.payload.id
      );
      setOnLocalStorage('movies', state.favs);
    },
    emptyMovies: (state) => {
      state.movies = [];
    },
    favOnMovies: (state, action) => {
      state.movies = state.movies.map(movie => {
        return action.payload.id === movie.id
          ? { ...movie, fav: true }
          : movie
      });
    },
    unfavOnMovies: (state, action) => {
      state.movies = state.movies.map(movie => {
        return action.payload.id === movie.id
          ? { ...movie, fav: false }
          : movie
      });
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

export const {
  addToFavs,
  removeFromFavs,
  emptyMovies,
  favOnMovies,
  unfavOnMovies
} = moviesSlice.actions;
