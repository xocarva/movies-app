
export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  posterURL: string;
  fav: boolean;
}

export interface MovieResponseFromApi {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
}
