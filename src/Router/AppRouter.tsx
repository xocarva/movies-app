import { Route, Routes } from 'react-router-dom';
import { FavsPage, MoviesSearchPage } from '../Movies/pages';
import { OopsPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MoviesSearchPage />}/>
      <Route path='/fav/' element={<FavsPage />}/>
      <Route path='/*' element={<OopsPage />}/>
    </Routes>
  );
}
