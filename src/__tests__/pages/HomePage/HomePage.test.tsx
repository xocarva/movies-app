import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { HomePage } from '../../../pages';

describe('test HomePage component', () => {

  test('must match snapshot', () => {

    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
      );

    expect(container).toMatchSnapshot();

  });

});
