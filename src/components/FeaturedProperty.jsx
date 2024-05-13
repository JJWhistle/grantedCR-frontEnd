import {Link} from 'react-router-dom';
import BathLogo from "../assets/icons/BathLogo";
import BedLogo from "../assets/icons/BedLogo";
import Area from '../assets/icons/Area';
import Construction from '../assets/icons/Construction';
import { NumericFormat } from 'react-number-format';

const FeaturedProperty = ({mostExpensiveItem}) => {
    
    return (
    <>
        {mostExpensiveItem && <div className="featured">
                <img className="featured__image" src={mostExpensiveItem.imageUrls[0]} alt="Featured Property" />
                <div className="featured__info">
                    <div className='featured__flex'>
                        <div className="featured__wrapper">
                            
                            <div className="featured__property">
                                <h3 className='featured__heading'>Featured Property</h3>
                                <h2 className="featured__heading">{mostExpensiveItem.title}</h2>
                                
                                <div className="featured__details">
                                    <span className='featured__icon'>
                                        <BedLogo /> <p className='featured__text'>{`${mostExpensiveItem.bedrooms} Bed`}</p>
                                    </span>
                                    
                                    <span className='featured__icon'>
                                        <BathLogo /> <p className='featured__text'>{`${mostExpensiveItem.bathrooms} Bath`}</p>
                                    </span>
                                    
                                    <span className='featured__icon'>
                                        <Area  /> <p className='featured__text'>{`${mostExpensiveItem.lot_size}m² Land Size`}</p>
                                    </span>
                                    
                                    <span className='featured__icon'>
                                        <Construction  /> <p className='featured__text'>{`${mostExpensiveItem.building}m² Construction Size`}</p>
                                    </span>
                                    
                                    <p className='featured__price'>Offered at&nbsp;    
                                        <NumericFormat className='featured__price' value={mostExpensiveItem.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    </p>
                                    
                                    <Link  target='_blank' className='button' to={`/real-estate/${mostExpensiveItem._id}`}>View</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        }
        
    </>
  )
}

export default FeaturedProperty