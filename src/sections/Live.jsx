import {clienteAxios} from "../config/axios";
import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import HomeProperty from "../components/HomeProperty";
import FeaturedProperty from '../components/FeaturedProperty';

const Live = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    

    const getProperties = async () => {
      try {
        const {data} = await clienteAxios('/public-properties?limit=6');

        setProperties(data);      
      } catch (error) {
        console.log(error);
      }
      
      setLoading(false);
    
    };
    getProperties();
  
  }, []);
  
  const mostExpensiveItem = properties.reduce((maxItem, currentItem) =>  currentItem.price > maxItem.price ? currentItem : maxItem, properties[0]);

  
  const newProperties = properties.filter(properties => properties !== mostExpensiveItem);
  const displayNewProperties = newProperties.slice(0, 6);
  
  
  return (
    <>
      <section className="live">
        <div className="live__container">
          <div className="live__wrapper">
            <h2 className='live__heading'>Live in Paradise <span className='visit__span'>Look for your dream house and enjoy the Pura Vida Lifestyle</span></h2>

            <div className="live__grid">

              {loading ? <p>Loading...</p> : properties.map(property => (
                  <HomeProperty
                    key={property._id}
                    property={property}
                  />
                ))}

            </div>

            <Link to={'/real-estate'} className="button button-center">View All</Link>

          </div>
        </div>



          <div className="live__featured">
            {loading ? <p>Loading...</p> : <FeaturedProperty
              mostExpensiveItem={mostExpensiveItem} />}
          </div>
      </section>
    </>
  )
}

export default Live