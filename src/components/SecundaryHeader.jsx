import Bar from './Bar';
import { useEffect, useState } from "react";
import {clienteAxios, pageAxios} from "../config/axios";
import {useParams} from 'react-router-dom';


const SecundaryHeader = () => {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const {pageParams, id} = params;


  // useEffect(() => {
  //   const getPage = async () => {
  //     try {
  //       const {data} = await pageAxios(`/${pageParams}`);

  //       setPage(data[0]);
        
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     setLoading(false);
  //   }


  //   getPage();
  // }, [pageParams])
  

  return (
  <>
    <div className='secundaryHeader'>
      <div className='secundaryHeader__content'>
        <Bar />
        
        <video className='secundaryHeader__video' src={page.header} loop muted autoPlay></video>
        
        <div className='secundaryHeader__flex'>
          <h1 className='secundaryHeader__heading'>{page.title}</h1>
        </div>
      </div>
    </div>
  </>
  )
}

export default SecundaryHeader