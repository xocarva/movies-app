import { getFromLocalStorage } from './getFromLocalStorage';
import { Movie, ResponseFromMovieDBApi } from '../types';

export const mapFromApiToMovie = (data: ResponseFromMovieDBApi): Movie[] => {

  return data.results.map((movieFromApi) => {

    const favs = getFromLocalStorage('movies');
    const isFav = !!favs.find(movie => movie.id === movieFromApi.id);
    const movie: Movie = {
      id: movieFromApi.id,
      title: movieFromApi.original_title,
      posterURL: movieFromApi.poster_path
        ? `https://image.tmdb.org/t/p/original${movieFromApi.poster_path}`
        : '',
      releaseDate: movieFromApi.release_date,
      fav: isFav
    }

    return movie;

  });
}
