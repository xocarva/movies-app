import { render } from '@testing-library/react';
import { NotFoundPage } from '../../../pages';

describe('test NotFoundPage component', () => {

  test('must match snapshot', () => {

    const { container } = render(<NotFoundPage />);

    expect(container).toMatchSnapshot();

  });

});
