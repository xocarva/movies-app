import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppRouter } from '../../router';
import { store } from '../../store';

describe('test AppRouter component', () => {

  test('should render home page', () => {

    const linkText: string = 'search movies';

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTitle(linkText)).toBeInTheDocument();

  });

  test('should render search search page', () => {

    const placeHolder: string = 'Movie name';

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText(placeHolder)).toBeInTheDocument();

  });

  test('should render favourites page', () => {

    const h2Title: string = 'Your ❤️ movies';

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/fav']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(h2Title);

  });

  test('should render not found page', () => {

    const message: string = 'Looks like the content you are looking for does not exist 😕';

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/dasdse']}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(message)).toBeInTheDocument();

  });

});
