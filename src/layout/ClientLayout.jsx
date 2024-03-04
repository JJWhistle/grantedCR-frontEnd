import SecundaryHeader from '../components/SecundaryHeader';
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import {pageAxios} from "../config/axios";
import {useParams, Outlet} from 'react-router-dom';
import Tours from "../pages/Tours";
import RealEstate from "../pages/RealEstate";


const ClientLayout = () => {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const {pageParams, id} = params;
  return (
    <>      
      <Outlet />
      <Footer />
    </>
  )
}

export default ClientLayout;