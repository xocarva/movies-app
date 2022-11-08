import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../components';

describe('test Header component', () => {

  test('should match snapshot', () => {

    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
      );

      expect(container).toMatchSnapshot();

  });

  test('should render website title', () => {

    const webTitle: string = 'Movies!';

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
      );

    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toHaveTextContent(webTitle);

  });

  test('should render search link', () => {

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
      );

    const searchLink = screen.getByTitle('search page');

    expect(searchLink).toBeInTheDocument();

  });

  test('should render fav link', () => {

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
      );

    const searchLink = screen.getByTitle('favourites page');

    expect(searchLink).toBeInTheDocument();

  });

});
