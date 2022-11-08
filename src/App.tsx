import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './components';
import { AppRouter } from './router';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}
