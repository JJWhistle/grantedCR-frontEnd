import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";


const Slider = ({object, imageIndex, setImageIndex}) => {
  const {imageUrls, title, _id} = object;
    
    const showPrevImage = () => {
      setImageIndex(index => {
        if(index === 0) return imageUrls.length - 1;

        return index - 1;
      });
      
    }

    const showNextImage = () => {
      setImageIndex(index => {
        if(index === imageUrls.length - 1) return 0;

        return index + 1;
      })
    }


  return (
    <>
      <div className="slider">
        <div className="slider__content">
          <div className="slider__graphic">
          {imageUrls && imageUrls.map(image => (
              <img key={image} loading="lazy" className="slider__image" src={image} alt={`${title} Photo ${imageIndex}`} style={{translate: `${-100 * imageIndex}%`}} />
          ))}
            
          <button onClick={showPrevImage} className="slider__btn" style={{left:'0'}}><SlArrowLeft /></button>
          <button onClick={showNextImage} className="slider__btn" style={{right:'0'}}><SlArrowRight /></button>
          </div>
          </div>
      </div>
        
        
    </>
  )
}

export default Slider;