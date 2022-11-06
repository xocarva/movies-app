import { useEffect } from 'react';
import { Loading } from '../../components/Loading';
import { SearchBar, MoviesGrid, Oops, Pagination } from '../components';
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks';
import { emptyMovies, fetchMoviesByText } from '../../store/slices';
import { useNavigate } from 'react-router-dom';

export const MoviesSearchPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pageQuery, textQuery, completeQuery } = useQuery();
  const { movies, status, moviesPage, moviesTotalPages } = useAppSelector(state => state.movies);

  useEffect(() => {
    dispatch(emptyMovies());
    if (textQuery) dispatch(fetchMoviesByText(completeQuery));
  }, [dispatch, textQuery, completeQuery]);

  if (movies && moviesPage > moviesTotalPages) navigate('/not-found');

  return (
    <main>
      <SearchBar />
      <Pagination
        moviesPage={moviesPage}
        moviesTotalPages={moviesTotalPages}
        pageQuery={pageQuery}
        textQuery={textQuery}
      />
      { status === 'loading' && <Loading />}
      { status === '' && <div>Search something!</div> }
      { status === 'failed' && <Oops /> }
      {
        status === 'success'
        && movies.length === 0
        && textQuery
        && moviesPage <= moviesTotalPages
        && <div>No results found for '{textQuery}'</div>
      }
      {
        status === 'success'
          && movies.length > 0
          && <MoviesGrid movies={movies} />
      }
    </main>
  );
}
