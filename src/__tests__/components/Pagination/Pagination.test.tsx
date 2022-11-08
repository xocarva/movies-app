import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Pagination } from '../../../components';

describe('test Pagination component', () => {

  const handleNext: () => void = jest.fn();
  const handlePrev: () => void = jest.fn();

  test('should match snapshot', () => {

    const page: number = 3;
    const totalPages: number = 5;

    const { container } = render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    expect(container).toMatchSnapshot();

  });

  test('should show page and total pages', () => {

    const page: number = 3;
    const totalPages: number = 5;

    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    expect(screen.getByText(`${page} / ${totalPages}`)).toBeInTheDocument();

  });

  test('should render prev button if page > 1', () => {

    const page: number = 2;
    const totalPages: number = 3;

    const { container } = render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    expect(screen.getByTitle('previous page')).toBeInTheDocument();

    expect(container).toMatchSnapshot();

  });

  test('should not render prev button if page = 1', () => {

    const page: number = 1;
    const totalPages: number = 3;

    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    expect(screen.queryByTitle('previous page')).not.toBeInTheDocument();

  });

  test('should render next button if page+1 <= totalPages', () => {

    const page: number = 3;
    const totalPages: number = 5;

    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    expect(screen.getByTitle('next page')).toBeInTheDocument();

  });

  test('should not render next button if page+1 > totalPages', () => {

    const page: number = 5;
    const totalPages: number = 5;

    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    expect(screen.queryByTitle('next page')).not.toBeInTheDocument();

  });

  test('should trigger handleNext if user clicks next page button', async () => {

    const page: number = 2;
    const totalPages: number = 5;

    const user = userEvent.setup();

    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    await user.click(screen.getByTitle('next page'));

    expect(handleNext).toHaveBeenCalledTimes(1);

  });

  test('should trigger handlePrev if user clicks previuos page button', async () => {

    const page: number = 2;
    const totalPages: number = 5;

    const user = userEvent.setup();

    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    );

    await user.click(screen.getByTitle('previous page'));

    expect(handlePrev).toHaveBeenCalledTimes(1);

  });

});
