import '../build/css/app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import ClientLayout from './layout/ClientLayout';

import Home from './pages/Home';
import Page from './pages/Page';
import Tours from './pages/Tours';
import RealEstate from './pages/RealEstate';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home/>} />
        </Route>

        <Route path='/:pageParams' element={<ClientLayout />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
