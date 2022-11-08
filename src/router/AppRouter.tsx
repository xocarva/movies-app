import { Route, Routes } from 'react-router-dom';
import { FavsPage, MoviesSearchPage } from '../Movies/pages';
import { HomePage, NotFoundPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/search/' element={<MoviesSearchPage />}/>
      <Route path='/fav/' element={<FavsPage />}/>
      <Route path='/*' element={<NotFoundPage />}/>
    </Routes>
  );
}
