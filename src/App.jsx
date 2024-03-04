import '../build/css/app.css';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import ClientLayout from './layout/ClientLayout';

import Home from './pages/Home';
import RealEstateProperty from './pages/RealEstateProperty';

import RealEstate from './pages/RealEstate';

import CurrentPage from './pages/CurrentPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home/>} />
        </Route>



        {/* TEST! */}

        <Route path='/' element={<ClientLayout />}>
          <Route path='/:pageParams' element={<CurrentPage />} />
          <Route path='/:pageParams/:id' element={<RealEstateProperty />} />
        </Route>

        
        {/* Correct way or at least the one that's working... */}
        {/* <Route path='/:pageParams' element={<ClientLayout />} />
        <Route path='real-estate/:id' element={<RealEstateProperty />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
