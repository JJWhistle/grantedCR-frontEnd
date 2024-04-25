import SecundaryHeader from "../components/SecundaryHeader";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';


const ClientLayout = () => {
  
  return (
    <>
      <SecundaryHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default ClientLayout;