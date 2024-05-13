import HomeTour from '../components/HomeTour';
import React, { useEffect, useState } from 'react';
import {clienteAxios} from "../config/axios";
import { Link } from 'react-router-dom';


const Visit = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
    const getTours = async () => {
      try {
        const {data} = await clienteAxios('/tour');
        setTours(data);
        
      } catch (error) {
        console.log(error);
      }
      
      setLoading(false);
    }

    getTours();
  }, [])
    
  return (
    <>
      <section className="visit">
        <div className="visit__container">
          <div className="visit__wrapper">
            <h2 className='visit__heading'>Visit Paradise <span className='visit__span'>and enjoy for Granted</span></h2>
            
            <div className='visit__content'>
              <div className='visit__flex'>
                {loading ? <p>Loading...</p> : tours.map(tour => (
                  <HomeTour key={tour._id} tour={tour}/>
                ))}
                
              </div>
              
              <Link to={'/tours'} className='button button-center'> View all Tours</Link>
              
            </div>
            
            <div className="visit__grid">
              
              <img className="visit__image" loading="lazy" src="tour.jpg" alt='tour image'/>
              
              <div className="visit__column">
                <h3>Tours in Costa Rica</h3>
                <p> Well known for its stunning natural beauty, is a hotspot for eco-tourism. With diverse ecosystems ranging from rainforests to beaches, the country offers a wealth of experiences. Tours are essential for visitors, providing opportunities to explore national parks, engage in adventure activities like zip-lining and snorkeling, and immerse in local culture. Costa Rica's commitment to sustainability ensures that tours not only showcase its natural wonders but also contribute to conservation efforts and support local communities.</p>
                
                <Link to ={'/tours'} className="button button-left">Book now!</Link>
                
              </div>
              
              <img className="visit__image" loading="lazy" src="rental.jpg" alt='rental image'/>
              
              <div className="visit__column visit__column-left">
                <h3>Rentals in Costa Rica</h3>
                <p> Find seamless options for accommodations. With options ranging from eco-lodges nestled in the heart of nature to beachfront villas offering panoramic views. This blend of immersive experiences and convenient accommodations makes Costa Rica an ideal destination for eco-conscious travelers seeking adventure and relaxation alike.</p>
                
                <Link to ={'/rentals'} className="button button-left">View more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Visit