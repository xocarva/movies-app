import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FavsPage } from '../../../Movies/pages';
import { store } from '../../../store';

describe('test FavsPage component', () => {

  test('should match snapshot', () => {

    const { container } = render(
      <Provider store={store}>
        <FavsPage />
      </Provider>
    );

    expect(container).toMatchSnapshot();

  });

  test('should render title', () => {

    const titleText: string = 'Your ❤️ movies';

    render(
      <Provider store={store}>
        <FavsPage />
      </Provider>
    );

    expect(screen.getByRole('heading', {level: 2}))
      .toHaveTextContent(titleText);

  });

});
