import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MoviesGrid } from '../../../../Movies/components';
import { store } from '../../../../store';
import { Movie } from '../../../../types';

describe('test MoviesGrid component', () => {

  const emptyMovies: Movie[] = [];

  const movies: Movie[] = [
    {
      id: 1,
      title: 'Movie 1',
      releaseDate: '2020-01-01',
      posterURL: 'http://psterurl.com/123',
      fav: false
    },
    {
      id: 2,
      title: 'Movie 2',
      releaseDate: '2020-01-01',
      posterURL: 'http://psterurl.com/123',
      fav: false
    },
    {
      id: 3,
      title: 'Movie 3',
      releaseDate: '2019-01-01',
      posterURL: 'http://psterurl.com/1242',
      fav: true
    },
    {
      id: 4,
      title: 'Movie 4',
      releaseDate: '2020-02-01',
      posterURL: 'http://psterurl.com/1211',
      fav: false
    },
  ];


  test('should match snapshot', () => {

    const { container } = render(<MoviesGrid movies={emptyMovies} />);

    expect(container).toMatchSnapshot();

  });

  test('should not render cards if movies is an empty array', () => {

    render(<MoviesGrid movies={emptyMovies} />);

    expect(screen.queryByTitle('fav / unfav')).not.toBeInTheDocument();

  });

  test('should render the same amount of cards than movies length', () => {

    const favButtonTitle: string = 'fav / unfav';

    render(
      <Provider store={store}>
        <MoviesGrid movies={movies} />
      </Provider>
    );

    const cardFavButtons = screen.getAllByTitle(favButtonTitle);

    expect(cardFavButtons.length).toEqual(movies.length);

  });

});
