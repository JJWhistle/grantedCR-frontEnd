import React from 'react'
import { Link } from 'react-router-dom';
import Property from "../components/Property";
import FeaturedProperty from '../components/FeaturedProperty';

const Live = ({properties, loadingProperties}) => {

  properties.sort((a, b) => a.price - b.price);

  const organizedProperties = properties.slice(0, properties.length - 1);

  return (
    <>
    <section className="live">
    <div className="live__container">
      <div className="live__wrapper">
        <h2 className='visit__heading'>Live in Paradise <span className='visit__span'>Look for your dream house and enjoy the Pura Vida Lifestyle</span></h2>

        <div className="live__grid">

          {organizedProperties.map(property => (
              <Property
                key={property._id}
                property={property}
              />
            ))}

        </div>

        <Link to={'/real-estate'} className="button button-center">View all Properties</Link>

      </div>
    </div>



      <div className="live__featured">
        <FeaturedProperty
          properties={properties}
          loadingProperties={loadingProperties} />
      </div>
  </section>
    </>
  )
}

export default Live