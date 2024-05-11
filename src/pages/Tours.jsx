import { clienteAxios } from "../config/axios";
import { useEffect, useState } from "react";

import Tour from '../components/Tour'

import BookCalendar from '../components/BookCalendar';



const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] =useState(true);

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
      <div className="tours">
        <div className="tours__container">
          <div className="tours__wrapper">
            <h1 className="tours__heading">Grant Access to a Once in a Lifetime Experience!</h1>

            <div className="tours__grid">
              {tours.map(tour => (
                <div className="tour__content" key={tour._id}>
                  <Tour
                    tour={tour}
                    loadingTours={loading}
                  />

                  <div className="tour__calendar">
                    <BookCalendar key={tour._id}/>
                  </div>
                  
                </div>
                  
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tours