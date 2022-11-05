import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { emptyMovies } from '../../../store/slices';
import './SearchBar.css';

export const SearchBar = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [ inputValue, setInputValue ] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(inputValue) {
      navigate(`?q=${inputValue}`);
    } else {
      dispatch(emptyMovies());
      navigate('');
    }
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
