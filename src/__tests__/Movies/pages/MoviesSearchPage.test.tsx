import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MoviesSearchPage } from '../../../Movies/pages';
import { store } from '../../../store';

describe('test MoviesSearchPage component', () => {

  test('should match snapshot', () => {

    const { container } = render(
      <Provider store={store}>
        <MoviesSearchPage />
      </Provider>
    );

    expect(container).toMatchSnapshot();

  });

});