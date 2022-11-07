import { Movie } from '../../../types';
import { MovieCard } from '../';
import './MoviesGrid.css'

interface Props {
  movies: Movie[];
}

export const MoviesGrid = ({ movies }: Props) => {
  return (
    <section className='movies-grid'>
      {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </section>
  );
}
