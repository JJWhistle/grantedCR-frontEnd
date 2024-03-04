import { useParams } from "react-router-dom";
import Tours from "./Tours";
import RealEstate from "./RealEstate";
import { useState, useEffect } from "react";
import {pageAxios} from "../config/axios";
import SecundaryHeader from "../components/SecundaryHeader";


const CurrentPage = () => {
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
      <SecundaryHeader />
        {pageParams === 'tours' && <Tours data={page} />}
        {pageParams === 'real-estate' && <RealEstate data={page} />}
    </>
  )
}

export default CurrentPage