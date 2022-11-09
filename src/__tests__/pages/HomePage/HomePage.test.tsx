import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../../../pages';

describe('test HomePage component', () => {

  test('should match snapshot', () => {

    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
      );

    expect(container).toMatchSnapshot();

  });

  test('should render search link', () => {

    const buttonText: string = 'Search movies';

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
      );

    const searchLink = screen.getByTitle('search movies');

    expect(searchLink).toHaveTextContent(buttonText);

  });

  test('should render favourites link', () => {

    const buttonText: string = 'Check favourites';

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
      );

    const searchLink = screen.getByTitle('check favourites');

    expect(searchLink).toHaveTextContent(buttonText);

  });

});
