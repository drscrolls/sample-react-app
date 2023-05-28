import './App.css';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/first' element={<FirstPage/>}/>
      <Route path='/second' element={<SecondPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
