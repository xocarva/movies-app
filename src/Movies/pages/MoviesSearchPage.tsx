import { useEffect } from 'react';
import { Loading } from '../../components/Loading';
import { SearchBar, MoviesGrid, Oops, Pagination } from '../components';
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks';
import { emptyMovies, fetchMoviesByText } from '../../store/slices';

export const MoviesSearchPage = () => {

  const dispatch = useAppDispatch();
  const { pageQuery, textQuery, completeQuery } = useQuery();
  const { movies, status, moviesPage, moviesTotalPages } = useAppSelector(state => state.movies);

  useEffect(() => {
    dispatch(emptyMovies());
    if (textQuery) dispatch(fetchMoviesByText(completeQuery));
  }, [dispatch, textQuery, completeQuery]);

  return (
    <main>
      <SearchBar />
      <Pagination
        moviesPage={moviesPage}
        moviesTotalPages={moviesTotalPages}
        pageQuery={pageQuery}
        textQuery={textQuery}
      />
      {
        status === 'success'
          && movies.length > 0
          && <MoviesGrid movies={movies} />
      }
      { status === 'failed' && <Oops /> }
      { status === 'loading' && <Loading />}
      {
        status !== 'loading'
          && movies.length === 0
          && !textQuery
          && <div>Search something!</div>
      }
      {
        status !== 'loading'
          && movies.length === 0
          && textQuery
          && <div>No results found for '{textQuery}'</div>
      }
    </main>
  );
}
