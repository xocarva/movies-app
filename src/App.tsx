import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './Layout';
import { AppRouter } from './Router/AppRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}
