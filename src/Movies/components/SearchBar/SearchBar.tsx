import { useState } from 'react';
import './SearchBar.css';

interface Props {
  searchValue: string;
  setSearchValue: any;
  setPage: any;
}

export const SearchBar = ({ setSearchValue, setPage }: Props) => {

  const [ inputValue, setInputValue ] = useState<string>('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSearchValue(inputValue.trim());
    setPage(1);
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input
        className='search-input'
        placeholder='Movie name'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className='search-button' title='search'>Go!</button>
    </form>
  );
}
