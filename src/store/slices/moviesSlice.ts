import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesAPI } from '../../api/moviesAPI';
import { Movie, MovieResponseFromApi } from '../../types';

const getFromLocalStorage = (key: string): Movie[] => {
  const localStorageData = localStorage.getItem(key);
  return localStorageData ? JSON.parse(localStorageData) : [];
};

const setOnLocalStorage = (key: string, values: Movie[]) => {
  localStorage.setItem(key, JSON.stringify(values));
};

export const fetchMoviesByText = createAsyncThunk(
  'movies/fetchByText',
  async (text: string) => {

    const { data } = await moviesAPI.get(`search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${text}`);

    const movies: Movie[] = data.results.map((movieFromApi: MovieResponseFromApi) => {
      const favs = getFromLocalStorage('movies');
      const isFav = !!favs.find(movie => movie.id === movieFromApi.id);
      const movie: Movie = {
        id: movieFromApi.id,
        title: movieFromApi.original_title,
        posterURL: `https://image.tmdb.org/t/p/original${movieFromApi.poster_path}`,
        releaseDate: movieFromApi.release_date.split('').reverse().join(''),
        fav: isFav
      }
      return movie;
    });

    return movies;
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
      movies: [] as Movie[],
      favs: getFromLocalStorage('movies'),
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
        state.movies = action.payload;
      })
      .addCase(fetchMoviesByText.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const { addToFavs, removeFromFavs, emptyMovies, favOnMovies, unfavOnMovies } = moviesSlice.actions;
