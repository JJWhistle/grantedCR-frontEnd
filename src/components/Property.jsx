import {Link} from "react-router-dom";
const Property = ({property, loading}) => {
  return (
    <>
      <Link target="_blank" className="property" to={`/real-estate/${property._id}`}>
        <div className="property__flex">
          <div className="property__graphic">
            <img className="property__image" loading="lazy" src={property.imageUrl}/>
          </div>

          <div className="property__info">
            <h3>{property.title}</h3>
            
            <p>{property.price}</p>

          </div>
        </div>
      </Link>
    </>
  )
}

export default Property;