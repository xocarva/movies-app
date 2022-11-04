import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesAPI } from '../../api/moviesAPI';


const getFromLocalStorage = (key: string) => {
  const localStorageData = localStorage.getItem(key);
  return localStorageData ? JSON.parse(localStorageData) : [];
};

const setOnLocalStorage = (key: string, value: []) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const fetchMoviesByText = createAsyncThunk(
  'movies/fetchByText',
  async (text: string) => {
    const { data } = await moviesAPI.get(`search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${text}`);

    console.log(data.results)

    const movies = data.results.map((movie:{id: number, original_title:string, poster_path: string}) => {
      return {
        id: movie.id,
        title: movie.original_title,
        poster: `https://image.tmdb.org/t/p/original/${movie.poster_path}`

      }
    })

    return movies;
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
      movies: [],
      favs: getFromLocalStorage('movies'),
      status: ''
  },
  reducers: {
    addFav: (state, action) => {
      state.favs = [...state.favs, action.payload];
      setOnLocalStorage('movies', state.favs);
    },
    removeFav: (state, action) => {
      state.favs = state.favs.filter(
        (f:{id:number}) => f.id !== action.payload.id
      );
      setOnLocalStorage('movies', state.favs);
    },
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

export const { addFav, removeFav } = moviesSlice.actions;
