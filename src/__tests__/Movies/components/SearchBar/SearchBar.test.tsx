import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '../../../../Movies/components';

describe('test SearchBar component', () => {

  const handleSetSearchValue: (value: string) => void = jest.fn();
  const handleSetPage: (value: number) => void = jest.fn();

  test('should match snapshot', () => {

    const { container } = render(
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
    );

    expect(container).toMatchSnapshot();

  });

  test('should render search button', () => {

    render(
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
    );

    const searchButton = screen.getByTitle('search');

    expect(searchButton).toHaveTextContent('Go!');

  });

  test('should render input with placeholder "Movie name"', () => {

    render(
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
    );

    expect(screen.getByPlaceholderText('Movie name')).toBeInTheDocument();

  });

  test('should change input text', async () => {

    const inputValue = 'The Matrix';

    const user = userEvent.setup();

    render(
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
    );

    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.keyboard(inputValue);

    expect(input).toHaveDisplayValue(inputValue);

  });

  test('should trigger submit clicking the search button', async () => {

    const inputValue = 'The Matrix';

    const user = userEvent.setup();

    render(
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
    );

    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.keyboard(inputValue);
    await user.click(screen.getByTitle('search'));

    expect(handleSetPage).toHaveBeenCalledWith(1);
    expect(handleSetSearchValue).toHaveBeenCalledWith(inputValue.trim());

  });

  test('should trigger submit pressing enter key', async () => {

    const inputValue = 'The Matrix';

    const user = userEvent.setup();

    render(
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
    );

    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.keyboard(inputValue);
    await user.keyboard('[Enter]');

    expect(handleSetPage).toHaveBeenCalledWith(1);
    expect(handleSetSearchValue).toHaveBeenCalledWith(inputValue.trim());

  });

  test('should set search value with trimmed input value', async () => {

    const inputValue = ' The Matrix ';

    const user = userEvent.setup();

    render(
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
    );

    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.keyboard(inputValue);
    await user.keyboard('[Enter]');

    expect(handleSetPage).toHaveBeenCalledWith(1);
    expect(handleSetSearchValue).toHaveBeenCalledWith(inputValue.trim());

  });

});
