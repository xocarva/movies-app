import { useState } from 'react';
import { SearchBar, SearchResults } from '../components';

export const MoviesSearchPage = () => {

  const [ searchValue, setSearchValue ] = useState<string>('');
  const [ page, setPage ] = useState<number>(1);

  return (
    <main>
      <SearchBar
        searchValue={searchValue}
        setPage={setPage}
        setSearchValue={setSearchValue}
      />
      <SearchResults
        searchValue={searchValue}
        page={page}
        setPage={setPage}
      />
    </main>
  );
}
