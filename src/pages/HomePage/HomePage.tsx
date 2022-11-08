import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <main className='home-main'>
      <nav className='home-menu'>
        <Link className='menu-option' to={'/search'}>Search movies</Link>
        <Link className='menu-option' to={'/fav'}>Check favourites</Link>
      </nav>
    </main>
  );
}
