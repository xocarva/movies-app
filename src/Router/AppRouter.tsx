import { Route, Routes } from 'react-router-dom';
import { FavsPage, MoviesPage } from '../Movies/pages';
import { OopsPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MoviesPage />}/>
      <Route path='/fav/' element={<FavsPage />}/>
      <Route path='/*' element={<OopsPage />}/>
    </Routes>
  );
}
