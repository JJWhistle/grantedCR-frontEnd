const Galery = ({property, setIsOpen, setImageIndex}) => {
    const openImage = (index) => {

        setIsOpen(true);
        setImageIndex(index);
    }
  return (
    
    <>
        <ul className="real-estate-property__images">
            {property.imageUrls.map((image, index) => (
                <li key={index} className="real-estate-property__list">
                    <button className="real-estate-property__btn" onClick={() => openImage(index)}>
                        <img className="real-estate-property__image" loading="lazy" src={image} alt={`${property.title} Image ${index + 1}`} />
                    </button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Galery;