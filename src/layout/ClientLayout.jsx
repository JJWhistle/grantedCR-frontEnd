import { Outlet } from "react-router-dom";
import SecundaryHeader from '../components/SecundaryHeader';
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import {pageAxios} from "../config/axios";
import {useParams} from 'react-router-dom';
import Tours from "../pages/Tours";
import RealEstate from "../pages/RealEstate";


const ClientLayout = () => {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const {pageParams} = params;

  useEffect(() => {
    const getPage = async () => {
      try {
        const {data} = await pageAxios(`/${pageParams}`);

        setPage(data[0]);
        
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }


    getPage();
  }, [pageParams])
  return (
    <>
      <SecundaryHeader page={page}/>
      {pageParams === 'tours' && <Tours data={page} />}
      {pageParams === 'real-estate' && <RealEstate data={page} />}
      <Footer />
    </>
  )
}

export default ClientLayout;