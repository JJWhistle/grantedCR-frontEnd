import {Link} from 'react-router-dom';
import BedLogo from '../assets/icons/BedLogo';
import BathLogo from '../assets/icons/BathLogo';


const HomeProperty = ({property}) => {
  return (
    <>
        <div className="home-property">
            <div className="home-property__graphic">
                <img src={property.imageUrl} alt="Property Image" className="home-property__image" />
                <h3 className="home-property__title">{property.title.length > 20 ? property.title.substr(0,20) + '...' : property.title}</h3>
            </div>

            <div className="home-property__info">
                <span className="home-property__flex">
                    <span className="home-property__icon">
                        <BedLogo
                            key={property._id}
                            property={property}
                        />
                    </span>

                    <span className="home-property__icon">
                        <BathLogo
                            key={property._id}
                            property={property}
                        />
                    </span>
                    
                    
                </span>
                <p className="home-property__text">{property.description.length > 100 ? property.description.substr(0, 100) + '...' : property.description }</p>
                <Link target='_blank' to={`/real-estate/${property._id}`} className='button'>View Property</Link>
            </div>

            
        </div>
    </>
  )
}

export default HomeProperty;