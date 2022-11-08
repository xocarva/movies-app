import { render, screen } from '@testing-library/react';
import { Oops } from '../../../../Movies/components';

describe('test Oops component', () => {

  test('should match snapshot', () => {

    const { container } = render(<Oops />);

    expect(container).toMatchSnapshot();

  });

  test('should show error text', () => {

    const errorText = 'Oops! Something went wrong when loading 😓';

    render(<Oops />);

    const span = screen.getByText(errorText);

    expect(span).toBeInTheDocument();

  });

});
