
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <Link to={'/'}><h1>Movies!</h1></Link>
      <NavBar />
    </header>
  );
}
