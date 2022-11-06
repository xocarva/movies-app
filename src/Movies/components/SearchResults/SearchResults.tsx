import { useEffect } from 'react';
import { Loading, Pagination } from '../../../components';
import { Oops, MoviesGrid } from '../../components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchMoviesByText } from '../../../store/slices/movies/thunks';

interface Props {
  searchValue: string;
  page: number;
  setPage: any;
}

export const SearchResults = ({ searchValue, page, setPage }: Props) => {

  const dispatch = useAppDispatch();

  const { movies, status, moviesTotalPages } = useAppSelector(state => state.movies);

  useEffect(() => {
    if(searchValue) {
      if(page > 1) dispatch(fetchMoviesByText(`${searchValue}&page=${page}`));
      else dispatch(fetchMoviesByText(searchValue));
    }
  }, [dispatch, searchValue, page]);

  return (
    <>
      { searchValue && movies.length > 0 && <span>results for "{searchValue}"</span> }
      { !searchValue && <span>Search something!</span> }
      {
        movies.length > 0
          && searchValue
          &&  <Pagination
                handleNext={() => setPage(page + 1)}
                handlePrev={() => setPage(page - 1)}
                page={page}
                totalPages={moviesTotalPages}
              />
      }
      { status === 'loading' && <Loading /> }
      { status === 'failed' && <Oops /> }

      { searchValue
          && status === 'success'
          && movies.length > 0
          && <MoviesGrid movies={movies} />
      }
      {
        movies.length > 0
          && searchValue
          &&  <Pagination
                handleNext={() => setPage(page + 1)}
                handlePrev={() => setPage(page - 1)}
                page={page}
                totalPages={moviesTotalPages}
              />
      }
      {
        status === 'success'
        && movies.length === 0
        && searchValue
        && <div>No results found for '{searchValue}'</div>
      }
    </>
  );
}
