import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1>Movies!</h1>
      <nav>
        <Link to={'/search'}>search</Link>
        <Link to={'/fav'}>favourites</Link>
      </nav>
    </header>
  );
}
