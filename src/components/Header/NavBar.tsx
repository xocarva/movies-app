import { Link } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link to={'/search'} title='search page'><FaSearch /></Link>
      <Link to={'/fav'} title='favourites page'><FaHeart /></Link>
    </nav>
  );
}
