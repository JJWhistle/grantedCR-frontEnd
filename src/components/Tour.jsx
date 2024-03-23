import { useState } from "react";
import {Link} from "react-router-dom";
import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";
import { NumericFormat } from "react-number-format";
import BookCalendar from './BookCalendar';


import User from "../assets/icons/User";
import Users from "../assets/icons/Users";


const Tour = ({tour, loadingTours}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showPrevImage = () => {
    setImageIndex(index => {
      if(index === 0) return tour.imageUrls.length - 1;

      return index - 1;
    });
    
  }

  const showNextImage = () => {
    setImageIndex(index => {
      if(index === tour.imageUrls.length - 1) return 0;

      return index + 1;
    })
  }
  

  return (
    <>
      <div className="tour">
        <div className="tour__graphic">
          <img src={`${tour.imageUrls[imageIndex]}`} className="tour__image" alt= {`${tour.title} Image Number ${imageIndex + 1}`} />
          <button onClick={showPrevImage} className="tour__btn" style={{left:'0'}}><SlArrowLeft /></button>
          <button onClick={showNextImage} className="tour__btn" style={{right:'0'}}><SlArrowRight /></button>
        </div>
        
        <div className="tour__flex">
          <div className="tour__details">
            <h3 className="tour__heading">{tour.title}</h3>
            
            <div className="tour__icons">
              <div className="tour__icon">
                <Users />
                <p className="tour__text">Minimum Party: <span className="tour__text-span">{`${tour.min_traveller} People`}</span></p>
              </div>

              <div className="tour__icon">
                <User />
                <p className="tour__text">Minimun Age: <span className="tour__textt-span">{tour.min_age}</span> y/o</p>
              </div>
            </div>

            <div className="tour__desc">
              <p className="tour__text">{tour.description}</p>

            </div>


            <Link to={`${tour._id}`} className="tour__button tour__button-more">More Details</Link>
          </div>

          <div className="tour__book">
              <p className="tour__price">
                From
                <NumericFormat className='tour__price tour__price-number' value={tour.price.toFixed(2)} displayType={'text'}   thousandSeparator={true} prefix={'$'} />

              </p>
              
              <div className="tour__bottons">
                <button className="tour__button tour__button-add">Add to Cart</button>
                <Link to={`book/${tour._id}`} className="tour__button">Book Now</Link>
              </div>

            </div>
        </div>

      </div>
        <BookCalendar />
    </>
  )
}

export default Tour