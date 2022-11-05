import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link to={'/search'} title='search'>s</Link>
      <Link to={'/fav'} title='favourites'>f</Link>
    </nav>
  );
}
