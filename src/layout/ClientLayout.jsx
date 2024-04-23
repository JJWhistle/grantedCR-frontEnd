import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';


const ClientLayout = () => {
  return (
    <>      
      <Outlet />
      <Footer />
    </>
  )
}

export default ClientLayout;