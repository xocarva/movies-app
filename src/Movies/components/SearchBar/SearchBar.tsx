import { useState } from 'react';
import './SearchBar.css';

interface Props {
  searchValue: string;
  handleSetSearchValue: (value: string) => void;
  handleSetPage: (value: number) => void;
}

export const SearchBar = ({ handleSetSearchValue, handleSetPage }: Props) => {

  const [ inputValue, setInputValue ] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSetSearchValue(inputValue.trim());
    handleSetPage(1);
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
