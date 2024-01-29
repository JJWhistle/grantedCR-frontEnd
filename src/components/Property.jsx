import {Link} from 'react-router-dom';
import BedLogo from '../assets/icons/BedLogo';
import BathLogo from '../assets/icons/BathLogo';
const Property = ({property}) => {
  return (
    <>
        <div className="property">
            <div className='property__graphic'>
                <img src={property.images[0].url} alt="Property Image" className='property__image' />
                <h3 className="property__title">{property.title.length > 20 ? property.title.substr(0,20) + '...' : property.title}</h3>
            </div>

            <div className="property__info">
                <span className='property__flex'>
                    <span className='property__icon'>
                        <BedLogo
                            key={property._id}
                            property={property}
                        />
                    </span>

                    <span className='property__icon'>
                        <BathLogo
                            key={property._id}
                            property={property}
                        />
                    </span>
                    
                    
                </span>
                <p className='property__text'>{property.description.substr(0, 100) + '...'}</p>
                <Link to={`/real-estate/${property._id}`} className='button'>View Property</Link>
            </div>

            
        </div>
    </>
  )
}

export default Property