import { useEffect } from 'react';
import { Loading } from '../../components/Loading';
import { SearchBar, MoviesGrid, Oops } from '../components';
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks';
import { fetchMoviesByText } from '../../store/slices';

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
      { status === 'success' && movies.length > 0 && <MoviesGrid movies={movies} /> }
      { status === 'failed' && <Oops /> }
      { status === 'loading' && <Loading />}
      { status !== 'loading' && movies.length === 0 && !query && <div>Search something!</div> }
      { status !== 'loading' && movies.length === 0 && query && <div>No results found for '{query}'</div> }
    </main>
  );
}
