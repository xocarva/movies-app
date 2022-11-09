import { useAppDispatch } from '../../../hooks/';
import { addToFavs, removeFromFavs } from '../../../store/slices';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Movie } from '../../../types';
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
    <article
      data-testid='movie-card'
      className='movie-card'
      style={ movie.posterURL
              ? { backgroundImage: `url(${movie.posterURL})` }
              : { backgroundColor: 'black' }
            }
    >
      <div className={`movie-details ${movie.posterURL ? 'hidden' : 'visible'}`}>
        <span>{movie.title}</span>
        <span>{movie.releaseDate || 'Release date not available'}</span>
      </div>
      <button
        className={`fav-button ${ movie.fav? 'faved' : 'unfaved' }`}
        onClick={() => handleClick(movie)}
        title='fav / unfav'
      >
        {movie.fav ? <AiFillHeart /> : <AiOutlineHeart /> }
      </button>
    </article>
  );
}
