import { useAppSelector } from '../../hooks';
import { MoviesGrid } from '../components/MoviesGrid/MoviesGrid';
import './FavsPage.css';

export const FavsPage = () => {

  const { favs } = useAppSelector(state => state.movies);

  return (
    <main>
      <h2 className='favs-title'>Your ❤️ movies</h2>
      { favs.length > 0 && <MoviesGrid movies={favs} />}
      { favs.length === 0 && <div>No favourites yet</div>}
    </main>
  );
}
