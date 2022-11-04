import { useAppSelector } from '../../hooks';
import { MoviesGrid } from '../components/MoviesGrid/MoviesGrid';

export const FavsPage = () => {

  const { favs } = useAppSelector(state => state.movies);

  return (
    <main>
      <h2>Your favourites movies</h2>
      <MoviesGrid movies={favs} />
    </main>
  );
}
