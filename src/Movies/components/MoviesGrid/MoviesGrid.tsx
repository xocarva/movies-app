import { Movie } from "../../../types";
import { MovieCard } from "../MovieCard/MovieCard";
import './MoviesGrid.css'

interface Props {
  movies: Movie[];
}

export const MoviesGrid = ({ movies }: Props) => {
  return (
    <ul className="grid">
      {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </ul>
  );
}
