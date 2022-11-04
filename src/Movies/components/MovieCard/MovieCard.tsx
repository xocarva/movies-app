import { Movie } from '../../../types';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addFav, removeFav } from '../../../store/slices';
import './MovieCard.css';

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {

  const dispatch = useAppDispatch();

  const handleClick = (movie:Movie) => {
    if(movie.fav) {
      dispatch(removeFav(movie));
    } else {
      dispatch(addFav(movie));
    }
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
