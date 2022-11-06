
export interface ResponseFromMovieDBApi {
  page: number;
  results: MovieResponseFromApi[];
  total_pages: number;
  total_results: number;
}

export interface MovieResponseFromApi {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
}

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  posterURL: string;
  fav: boolean;
}
