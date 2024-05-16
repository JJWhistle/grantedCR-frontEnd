const Galery = ({property, loadingProperty, setImageIndex}) => {
    const openImage = (index) => {
        
        setImageIndex(index);
    }
  return (
    
    <>
        <ul className="real-estate-property__images">
            {loadingProperty ? 'loading' : property.imageUrls.map((image, index) => (
                <li key={index} className="real-estate-property__list">
                    <button className="real-estate-property__btn" onClick={() => openImage(index)}>
                        <img className="real-estate-property__image" src={image} alt={`${property.title} Image ${index + 1}`} />
                    </button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Galery;