import { useState } from 'react';
import './SearchBar.css';

interface Props {
  searchValue: string;
  setSearchValue: any;
}

export const SearchBar = ({ setSearchValue }: Props) => {

  const [ inputValue, setInputValue ] = useState<string>('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSearchValue(inputValue.trim());
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input
        className='search-input'
        placeholder='Movie name'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  );
}
