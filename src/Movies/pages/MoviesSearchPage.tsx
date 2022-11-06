import { useState } from 'react';
import { SearchBar, SearchResults } from '../components';

export const MoviesSearchPage = () => {

  const [ searchValue, setSearchValue ] = useState<string>('');

  return (
    <main>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResults searchValue={searchValue} />
    </main>
  );
}
