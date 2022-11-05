import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks';
import { fetchMoviesByText } from '../../store/slices';
import { SearchBar } from '../components';
import { MoviesGrid } from '../components/MoviesGrid/MoviesGrid';

export const MoviesSearchPage = () => {

  const query = useQuery();
  const dispatch = useAppDispatch();
  const { movies, status } = useAppSelector(state => state.movies);

  useEffect(() => {
    if (query) dispatch(fetchMoviesByText(query));
  }, [dispatch, query]);

  return (
    <main>
      <SearchBar />
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
