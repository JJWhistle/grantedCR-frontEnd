import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';

import Bar from "./Bar";
import {clienteAxios} from "../config/axios";

const Header = () => {
  const location = useLocation();
  const path = location.pathname
  const [currentPageMedia, setCurrentPageMedia] = useState([]);

  useEffect(() => {
    const getPageDetails = async () => {
      const {data} = await clienteAxios('/page');
      const currentPageData = data.find(([header, value]) => path.includes(header[0]))

      console.log(currentPageData);


      if (currentPageData) {
        // If media data is found for the current page, set it as the current page media
        setCurrentPageMedia(currentPageData[1]);
      } else {
        // If no media data is found for the current page, set an empty array
        setCurrentPageMedia([]);
      }
    }
    getPageDetails();
  }, [path])




  const renderMedia = () => {
    if (currentPageMedia.mainVideo && currentPageMedia.mainVideo.length > 0) {
      // If there is a mainVideo for the current page, render it
      console.log(currentPageMedia.mainVideo[0]);
      return <video src={currentPageMedia.mainVideo[0]} controls />;
    } else if (currentPageMedia.mainImages && currentPageMedia.mainImages.length > 0) {
      // If there are mainImages for the current page, render them
      return currentPageMedia.mainImages.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ));
    } else {
      // If there are no mainVideo or mainImages for the current page, render a message or default content
      return <p>No media available for this page.</p>;
    }
  };


  return (
  <>

  {currentPageMedia}
    <header className="header">
      <div className="header__content">
        <Bar />
        
        {renderMedia()}
        
        <div className="header__flex">
          <div className="header__container">
            <div className="header__wrapper">
              <h1 className="header__heading">Grant Access to the Best of Costa Rica</h1>
              <div className="header__services">
                <span className="header__service">Tours</span>
                <span className="header__service">Vacation Rentals</span>
                <span className="header__service">Management</span>
                <span className="header__service">Real Estate</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>

  </>
  )
}

export default Header