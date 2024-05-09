import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';

import Bar from "./Bar";
import {clienteAxios} from "../config/axios";

const Header = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const [currentPageMedia, setCurrentPageMedia] = useState([]);

  useEffect(() => {
    const getPageDetails = async () => {
      const {data} = await clienteAxios('/page');

      // Define a mapping of page types to their corresponding media keys
      const pageMediaMap = {
        'real-estate': ['realEstateVideo', 'realEstateImages'],
        'tours': ['tourVideo', 'tourImages'],
        '' : ['mainVideo', 'mainImages']
      };

      // Find the relevant media based on the path
      let mediaToShow = [];
      const mediaKeys = pageMediaMap[path]; // Get the corresponding media keys for the page type
      if (mediaKeys) {
        // Find the media data for the page type
        const pageMediaData = data.find(([key]) => mediaKeys.includes(key));
        if (pageMediaData) {
          mediaToShow = pageMediaData[1]; // Get the corresponding media array
        }
      }

      setCurrentPageMedia(mediaToShow);
    }
    getPageDetails();
  }, [path])

  return (
  <>
    <header className="header">
      <div className="header__content">
        <Bar />

        <video className="header__background" autoPlay muted loop playsInline src={currentPageMedia}>
          {/* <source src={currentPageMedia}/> */}
        </video>
        
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