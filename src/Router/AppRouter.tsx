import { Route, Routes } from 'react-router-dom';
import { MoviesPage } from '../Movies/pages';
import { OopsPage } from '../pages';
import { FavsPage } from '../Favs/pages/FavsPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MoviesPage />}/>
      <Route path='/fav/' element={<FavsPage />}/>
      <Route path='/*' element={<OopsPage />}/>
    </Routes>
  );
}
