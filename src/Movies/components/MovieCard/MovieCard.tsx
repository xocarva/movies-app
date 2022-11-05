import { Movie } from '../../../types';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addToFavs, removeFromFavs, favOnMovies, unfavOnMovies } from '../../../store/slices';
import './MovieCard.css';

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {

  const dispatch = useAppDispatch();

  const addNewFavouriteMovie = (movie: Movie): void => {
    dispatch(addToFavs(movie));
    dispatch(favOnMovies(movie));
  }

  const removeFromFavouritesMovies = (movie: Movie): void => {
    dispatch(removeFromFavs(movie));
    dispatch(unfavOnMovies(movie));
  }

  const handleClick = (movie:Movie) => {
    if (movie.fav) removeFromFavouritesMovies(movie);
    else addNewFavouriteMovie(movie);
  }

  return (
    <li className='movie-card'>
      <img className='movie-poster' src={movie.posterURL} alt={movie.title} />
      <div className='card-text-container'>
        <span>{movie.title}</span>
        <span>{movie.releaseDate}</span>
      </div>
      <button
        className='fav-button'
        onClick={() => handleClick(movie)}
      >
        {movie.fav ? '💖' : '❤️' }
      </button>
    </li>
  );
}
