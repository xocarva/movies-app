import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <main className='home-main'>
      <nav className='home-menu'>
        <Link className='menu-option' title='search movies' to={'/search'}>Search movies</Link>
        <Link className='menu-option' title='check favourites' to={'/fav'}>Check favourites</Link>
      </nav>
    </main>
  );
}
