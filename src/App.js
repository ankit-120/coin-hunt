import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='dark'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
