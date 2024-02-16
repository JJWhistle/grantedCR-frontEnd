import {Link} from "react-router-dom";
import BedLogo from "../assets/icons/BedLogo";
import BathLogo from "../assets/icons/BathLogo";
import Map from "../assets/icons/Map";
import { NumericFormat } from 'react-number-format';
import { useState } from "react";

const Property = ({property}) => {
  return (
    <>
      <Link target="_blank" className="property" to={`/real-estate/${property._id}`}>
        <div className="property__flex">
          <div className="property__graphic">
            <img className="property__image" loading="lazy" src={property.imageUrl}/>
          </div>
          
          <div className="property__info">
            <h3 className="property__heading">{property.title.length > 20 ? property.title.substr(0, 20) + '...' : property.title}</h3>
            
            <div className="property__location"><Map/> <p>&nbsp; {property.location}</p></div>
              
              <div className="property__aspects">
                <div className="property__aspect"><p className="property__aspect property__aspect-text">{`${property.lot_size}m²`} Land</p></div>
                <div className="property__aspect"><p className="property__aspect property__aspect-text">{`${property.building}m²`} Building Size</p></div>
              </div>
            
              <div className="property__aspects">
                <div className="property__aspect"><BedLogo /> <p className="property__aspect property__aspect-text">&nbsp;{property.bedrooms} Beds</p></div>
                <div className="property__aspect"><BathLogo /> <p className="property__aspect property__aspect-text">&nbsp;{property.bathrooms} Toilets</p></div> 
              </div>

            

              <NumericFormat value={property.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />

            </div>
          </div>
        </Link>
      
    </>
  )
}

export default Property;