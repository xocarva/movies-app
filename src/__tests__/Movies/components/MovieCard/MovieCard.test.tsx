import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MovieCard } from '../../../../Movies/components';
import { store } from '../../../../store';
import { Movie } from '../../../../types';

describe('test MoviesCard component', () => {

  const movie: Movie = {
    id: 1,
    title: 'Titanic',
    releaseDate: '2022-01-01',
    posterURL: 'http://posterurl.com/1243',
    fav: false
  }

  test('should match snapshot', () => {

    const { container } = render(
      <Provider store={store}>
        <MovieCard movie={movie} />
      </Provider>
    );

    expect(container).toMatchSnapshot();

  });

  test('should show movie data', () => {

    render(
      <Provider store={store}>
        <MovieCard movie={movie} />
      </Provider>
    );

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.releaseDate)).toBeInTheDocument();
    expect(screen.getByTestId('movie-card').style.backgroundImage)
      .toBe(`url(${movie.posterURL})`);
    expect(screen.getByTitle('fav / unfav').className)
      .toBe('fav-button unfaved');

  });

});
