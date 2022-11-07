import { Movie } from '../../../types';
import { useAppDispatch } from '../../../hooks/';
import { addToFavs, removeFromFavs } from '../../../store/slices';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './MovieCard.css';

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {

  const dispatch = useAppDispatch();

  const handleClick = (movie:Movie): void => {
    if (movie.fav) dispatch(removeFromFavs(movie));
    else dispatch(addToFavs(movie));
  }

  return (
    <article className='movie-card'>
      {
        movie.posterURL
          ? <img className='movie-poster' src={movie.posterURL} alt={movie.title} />
          : <div className='movie-poster-backup'>Poster not available</div>
      }
      <div className='card-text-container'>
        <span>{movie.title}</span>
        <span>{movie.releaseDate}</span>
      </div>
      <button
        className='fav-button'
        onClick={() => handleClick(movie)}
      >
        {movie.fav ? <AiFillHeart /> : <AiOutlineHeart /> }
      </button>
    </article>
  );
}
