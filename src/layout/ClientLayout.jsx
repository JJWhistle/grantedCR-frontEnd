import SecundaryHeader from "../components/SecundaryHeader";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';
import Bar from "../components/Bar";


const ClientLayout = () => {
  
  return (
    <>
      <Bar />
      <Outlet />
      <Footer />
    </>
  )
}

export default ClientLayout;