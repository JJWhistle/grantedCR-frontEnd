import '../build/css/app.css';
import {BrowserRouter,  Router, Route, Routes} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import ClientLayout from './layout/ClientLayout';

import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import RealEstateProperty from './pages/RealEstateProperty';
import Tours from './pages/Tours';
import Tour from './pages/Tour';

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path='real-estate' element={<RealEstate />} />
          <Route path='tours' element={<Tours />} />
        </Route>



        {/* TEST! */}

        <Route path='/' element={<ClientLayout />}>
            <Route path='real-estate/:id' element={<RealEstateProperty />} />
            <Route path='tours/:id' element={<Tour />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
