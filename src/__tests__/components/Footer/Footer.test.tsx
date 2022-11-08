import { render, screen } from '@testing-library/react';
import { Footer } from '../../../components';

describe('test Footer component', () => {

  const authorName: string = 'Xoán Carneiro';
  const year: string = '2022';

  test('should match snapshot', () => {

    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();

  });


  test('should render author website link', () => {

    render(<Footer />);

    const webLink = screen.getByText(authorName);

    expect(webLink).toBeInTheDocument();

  });

  test('should render year', () => {

    render(<Footer />);

    const yearElement = screen.getByText(year);

    expect(yearElement).toBeInTheDocument();

  });

});
