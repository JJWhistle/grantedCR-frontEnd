import { SlArrowLeft, SlArrowRight, SlClose  } from "react-icons/sl";

const Slider = ({object, setIsOpen, imageIndex, setImageIndex}) => {
    const {imageUrls, title} = object;
    
    
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

    const closeSlider = () => {
      document.body.style.overflow = 'auto';
      setIsOpen(false);
    }


  return (
    <>
      <div className="slider">
        <div className="slider__content">
          <div className="slider__graphic">
            <img loading="lazy" className="slider__image" src={imageUrls[imageIndex]} alt={`${title} Photo ${imageIndex}`} />
            <button onClick={showPrevImage} className="slider__btn" style={{left:'0'}}><SlArrowLeft /></button>
            <button onClick={showNextImage} className="slider__btn" style={{right:'0'}}><SlArrowRight /></button>
            {/* <button className="slider__close-btn" onClick={closeSlider}> <SlClose /></button> */}
          </div>
          </div>
      </div>
        
        
    </>
  )
}

export default Slider;