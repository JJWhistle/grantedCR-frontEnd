import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import VideoHeader from "../components/VideoHeader";

const MainLayout = () => {
  return (
    <>
        <Header />
          <Outlet />
        <Footer />
    </>

    
  )
}

export default MainLayout