import React from 'react'
import { Link } from 'react-router-dom';
import HomeProperty from "../components/HomeProperty";
import FeaturedProperty from '../components/FeaturedProperty';

const Live = ({properties, loadingProperties}) => {
  
  const mostExpensiveItem = properties.reduce((maxItem, currentItem) => {
    return currentItem.price > maxItem.price ? currentItem : maxItem;
  }, properties[0]);

  // const newProperties = properties.filter(properties => properties !== mostExpensiveItem);
  
  const newProperties = properties.filter(properties => properties !== mostExpensiveItem);
  const displayNewProperties = newProperties.slice(0, 6);
  
  
  return (
    <>
    <section className="live">
    <div className="live__container">
      <div className="live__wrapper">
        <h2 className='live__heading'>Live in Paradise <span className='visit__span'>Look for your dream house and enjoy the Pura Vida Lifestyle</span></h2>

        <div className="live__grid">

          {displayNewProperties.map(property => (
              <HomeProperty
                key={property._id}
                property={property}
              />
            ))}

        </div>

        <Link to={'/real-estate'} className="button button-center">View All</Link>

      </div>
    </div>



      <div className="live__featured">
        <FeaturedProperty
          mostExpensiveItem={mostExpensiveItem} />
      </div>
  </section>
    </>
  )
}

export default Live