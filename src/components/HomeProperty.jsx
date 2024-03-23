import {Link} from 'react-router-dom';
import BedLogo from '../assets/icons/BedLogo';
import BathLogo from '../assets/icons/BathLogo';
import { NumericFormat } from 'react-number-format';


const HomeProperty = ({property}) => {
  return (
    <>
        <div className="home-property">
            <div className="home-property__graphic">
                <img src={property.imageUrls[0]} alt="Property Image" className="home-property__image" />
                
                <NumericFormat className='home-property__price' value={property.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                
            </div>

            <div className="home-property__info">
            <h3 className="home-property__title">{property.title.length > 20 ? property.title.substr(0,20) + '...' : property.title}</h3>
                <span className="home-property__flex">

                    {property.bedrooms && 
                        <span className="home-property__icon">
                            <BedLogo />
                            <p className='home-property__text'>{property.bedrooms > 1 ? `${property.bedrooms} Beds` : `${property.bedrooms} Bed`}</p>
                        </span>
                    }

                    {property.bathrooms &&
                        <span className="home-property__icon">
                            <BathLogo />
                            <p className='home-property__text'>{property.bathrooms > 1 ? `${property.bathrooms} Toilets` : `${property.bathrooms} Toilet`}</p>
                    </span>
                    }
                        
                    
                    
                    
                </span>
                <p className="home-property__text">{property.description.length > 100 ? property.description.substr(0, 100) + '...' : property.description }</p>
                <Link target='_blank' to={`/real-estate/${property._id}`} className='button'>View</Link>
            </div>

            
        </div>
    </>
  )
}

export default HomeProperty;