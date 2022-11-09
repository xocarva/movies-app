import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../../../pages';

describe('test NotFoundPage component', () => {

  test('should match snapshot', () => {

    const { container } = render(<NotFoundPage />);

    expect(container).toMatchSnapshot();

  });

  test('should show not found message', () => {

    const message: string = 'Looks like the content you are looking for does not exist 😕';

    render(<NotFoundPage />);

    expect(screen.getByText(message)).toBeInTheDocument();


  });

});
