import { addToFavs, MovieSliceState, moviesSlice } from '../../../store/slices';
import { AnyAction } from "@reduxjs/toolkit";
import { Movie } from "../../../types";

describe('test moviesSlice', () => {

  const initialState: MovieSliceState = {
    movies: [
      {
        id: 2,
        title: 'The Matrix',
        releaseDate: '2010-01-01',
        posterURL:'http://posterurl.com/323',
        fav: true
      },
      {
        id: 3,
        title: 'The Lion King',
        releaseDate: '2011-01-01',
        posterURL:'http://posterurl.com/101',
        fav: false
      },
    ],
    moviesPage: 1,
    moviesTotalPages: 1,
    favs: [],
    status: ''
  }

  const demoMovie: Movie = {
    id: 1,
    title: 'Titanic',
    releaseDate: '2022-01-01',
    posterURL:'http://posterurl.com/111',
    fav: false
  }

  test('should be named "movies" and return initial state', () => {

      const state = moviesSlice.reducer(initialState, {} as AnyAction);

      expect( state ).toEqual( initialState );
      expect( moviesSlice.name ).toBe('movies');

  });

  test('should add favourite', () => {

    const state = moviesSlice.reducer( initialState, addToFavs( demoMovie ) );
    expect( state ).toEqual({
      movies: initialState.movies,
      moviesPage: initialState.moviesPage,
      moviesTotalPages: initialState.moviesTotalPages,
      favs: [ ...initialState.favs, { ...demoMovie, fav: true}],
      status: initialState.status
    });
  });

});
