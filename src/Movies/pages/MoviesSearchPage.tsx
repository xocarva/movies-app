import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks';
import { emptyMovies, fetchMoviesByText } from '../../store/slices';
import { MoviesGrid } from '../components/MoviesGrid/MoviesGrid';

export const MoviesSearchPage = () => {

  const navigate = useNavigate();
  const query = useQuery();
  const dispatch = useAppDispatch();
  const { movies, status } = useAppSelector(state => state.movies);
  const [ inputValue, setInputValue ] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(inputValue) {
      navigate(`?q=${inputValue}`);
    } else {
      dispatch(emptyMovies());
      navigate('');
    }
  };

  useEffect(() => {
    if (query) dispatch(fetchMoviesByText(query));
  }, [dispatch, query]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search movies'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
      {
        movies.length > 0
          ? <>
              <MoviesGrid movies={movies} />
            </>
          : !query
            ? <div>Search something</div>
            : status === 'loading'
                ? <div>Loading</div>
                : <div>No results</div>
      }
    </main>
  );
}
