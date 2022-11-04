import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchMoviesByText } from '../../store/slices';
import { MoviesGrid } from '../components/MoviesGrid/MoviesGrid';

export const MoviesSearchPage = () => {

  const dispatch = useAppDispatch();


  const [ inputValue, setInputValue ] = useState('star wars');
  const handleSubmit = (e:any) => {
    e.preventDefault();
  };


  const { movies } = useAppSelector(state => state.movies);

  useEffect(() => {
    if (inputValue) dispatch(fetchMoviesByText(inputValue));
  }, [dispatch, movies, inputValue]);


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search movies'
          onChange={e => setInputValue(e.target.value)}
        />
      </form>

      <MoviesGrid movies={movies} />
    </main>
  );
}
