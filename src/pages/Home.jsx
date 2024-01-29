import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Visit from "../sections/Visit";
import Live from "../sections/Live";
import Trust from "../sections/Trust";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loadingTours, setLoadingTours] = useState(true);
  const [loadingProperties, setLoadingProperties] = useState(true);

  useEffect(() => {
    
    const getTours = async () => {
      try {
        const {data} = await clienteAxios('/tour');
        setTours(data);
        setLoadingTours(false);

      } catch (error) {
        console.log(error);
      }

    }


    const getProperties = async () => {
      try {
        const {data} = await clienteAxios('/public-properties');
        setProperties(data);
      
      } catch (error) {
        console.log(error);
      }
      
      setLoadingProperties(false);
    
    };
    
    getTours();
    getProperties();
  
  }, []);


  return (
    <>
      <Visit
        tours = {tours}
        loadingTours = {loadingTours} />
      
      <Live
        properties = {properties}
        loadingProperties = {loadingProperties} />

      <Trust />
    </>
  )
}

export default Home