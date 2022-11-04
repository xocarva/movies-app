import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFav, fetchMoviesByText } from '../../store/slices/';

export const MoviesPage = () => {

  const dispatch = useAppDispatch();

  const { movies = [], status } = useAppSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesByText('godfather'));
  }, [dispatch]);

  const handleClick = (movie:{id: number, title:string, poster:string}) => {
    dispatch(addFav({
      id:movie.id,
      title: movie.title,
      poster: movie.poster
    }));
  }


  return (
    <main>
      Movies Page
      <div>
        {
          status==='loading'
            ? '...Loading'
            : 'Not Loading'
        }
      </div>
      <div>
        {
          status==='failed'
            ? 'Failed!'
            : 'Not failed'
        }
      </div>
      <div>
        {
          status==='success'
            ? 'Success!'
            : 'Not success'
        }
      </div>
      <ul>
        {
          movies.map((movie:{id: number, title:string, poster: string}) => (
            <li key={movie.id}>
              {movie.title}
              <img src={movie.poster} alt={movie.title}></img>
              <button onClick={() => handleClick(movie)}>fav</button>
            </li>
          ))
        }
      </ul>
    </main>
  );
}
