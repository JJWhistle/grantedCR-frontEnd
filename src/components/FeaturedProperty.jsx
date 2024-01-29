import {Link} from 'react-router-dom';
import BathLogo from "../assets/icons/BathLogo";
import BedLogo from "../assets/icons/BedLogo";
import Area from '../assets/icons/Area';
import Construction from '../assets/icons/Construction';

const FeaturedProperty = ({properties, loadingProperties}) => {
    
    if(loadingProperties) return;
    const featuredProperty = properties.reduce((maxProperty, currentProperty) => currentProperty.price > maxProperty.price ? currentProperty : maxProperty);

    return (
    <>
    
        <div className="featured">
            <img className="featured__image" src={featuredProperty.images[0].url} alt="Featured Property" />
            <div className="featured__info">
                <div className='featured__flex'>
                    <div className="featured__wrapper">
                        
                        <div className="featured__property">
                            <h3 className='featured__heading'>Featured Property</h3>
                            <h2 className="featured__heading">{featuredProperty.title}</h2>
                            
                            <div className="featured__details">
                                <span className='featured__icon'>
                                    <BedLogo
                                        property={featuredProperty}
                                        />
                                </span>
                                
                                <span className='featured__icon'>
                                    <BathLogo
                                        property={featuredProperty}
                                    />
                                </span>
                                
                                <span className='featured__icon'>
                                    <Area
                                        property={featuredProperty}
                                    />
                                </span>
                                
                                <span className='featured__icon'>
                                    <Construction
                                        property={featuredProperty}
                                    />
                                </span>
                                
                                <p className='featured__price'>Offered at US${featuredProperty.price}</p>
                                
                                <Link className='button' to={`/real-estate/${featuredProperty._id}`}>View</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default FeaturedProperty