import React from 'react';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';


const HomeTour = ({tour, loadingTours}) => {
    
  return (
    <>
    {loadingTours
        ? <p>Loading...</p> 
        : <div className='home-tour'>
        <div className='home-tour__graphic'>
            <img src={tour.imageUrls[0]} alt="Tour Image" className='home-tour__img' />

            <div className='home-tour__details'>

                <div className='home-tour__block'>
                    <div className='home-tour__detail'>
                        <p className='home-tour__paragraph'>{tour.duration}</p>
                    </div>
                    
                    <div className='home-tour__detail'>
                        <p className='home-tour__paragraph'>From </p>

                        <NumericFormat className='home-tour__price' value={tour.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </div>

                </div>
            </div>
        </div>

        <div className='home-tour__info'>
            <h3 className='home-tour__title'>{tour.title.length > 25 ? tour.title.substr(0,25) + '...' : tour.title}</h3>
            <p className='home-tour__text'>{tour.description.length > 160 ? tour.description.substr(0, 160) + '...' : tour.description}</p>
            <Link to={`/tours/${tour._id}`} className='button'>More Details</Link>
        </div>
    </div>}
        
        
    </>
  )
}

export default HomeTour;