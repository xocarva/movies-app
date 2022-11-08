import { useState } from 'react';
import { SearchBar, SearchResults } from '../components';

export const MoviesSearchPage = () => {

  const [ searchValue, setSearchValue ] = useState<string>('');
  const [ page, setPage ] = useState<number>(1);

  const handleSetSearchValue = (value: string) => setSearchValue(value);
  const handleSetPage = (page: number) => setPage(page);
  // created to avoid sending original state management functions to children

  return (
    <main>
      <SearchBar
        handleSetPage={handleSetPage}
        handleSetSearchValue={handleSetSearchValue}
      />
      <SearchResults
        searchValue={searchValue}
        page={page}
        handleSetPage={handleSetPage}
      />
    </main>
  );
}
