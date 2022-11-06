
import { useEffect, useState } from 'react';
import { Loading, Pagination } from '../../../components';
import { Oops, MoviesGrid } from '../';
import { fetchMoviesByText } from '../../../store/slices/movies/thunks';
import { useAppDispatch, useAppSelector } from '../../../hooks';

interface Props {
  searchValue: string;
}

export const SearchResults = ({ searchValue }: Props) => {

  const dispatch = useAppDispatch();

  const { movies, status, moviesTotalPages } = useAppSelector(state => state.movies);

  const [ page, setPage ] = useState(1);

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
                handleNext={() => {setPage(p => p + 1)}}
                handlePrev={() => setPage(p => p - 1)}
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
        status === 'success'
        && movies.length === 0
        && searchValue
        && <div>No results found for '{searchValue}'</div>
      }
    </>
  );
}
