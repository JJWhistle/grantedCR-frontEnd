import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({tour, loadingTours}) => {
    
  return (
    <>
    {loadingTours
        ? <p>hola</p> 
        : <div className='tour'>
        <div className='tour__graphic'>
            <img src={tour.images[0].url} alt="Tour Image" className='tour__img' />

            <div className='tour__details'>

                <div className='tour__block'>
                    <div className="tour__detail">
                        <p className='tour__paragraph'>{tour.duration}</p>
                    </div>
                    
                    <div className='tour__detail'>
                        <p className='tour__paragraph'><span className='tour__paragraph tour__paragraph-span'>From</span> {`$${tour.price}USD`}</p>
                    </div>

                </div>
            </div>
        </div>

        <div className="tour__info">
            <h3 className="tour__title">{tour.title.length > 25 ? tour.title.substr(0,25) + '...' : tour.title}</h3>
            <p className='tour__text'>{tour.description.length > 160 ? tour.description.substr(0, 160) + '...' : tour.description}</p>
            <Link to={`/tours/${tour._id}`} className='button'>More Details</Link>
        </div>
    </div>}
        
        
    </>
  )
}

export default Tour;