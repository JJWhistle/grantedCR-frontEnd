import { useState, useEffect } from "react";

const RealEstateAside = ({properties, test}) => {


  const locations = [...new Set(properties.map(property => property.location))]
  const types = [...new Set(properties.map(property => property.type))]



  const [filterData, setFilterData] = useState({});

  const handleChange = (e) => {
    const element = e.target;

    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      [element.name]: element.value,
    }));
  };

  useEffect(() => {
    const filterProperty = () => {
      const result = properties.filter(property => filterLocation(property));
      test(result);
    };

    const filterLocation = (property) => {
      for (const key in filterData) {
        if (filterData.hasOwnProperty(key) && filterData[key] !== "") {
          if (property[key] !== filterData[key]) {
            return false;
          }
        }
      }

      return true;
    };

    filterProperty();
  }, [filterData, properties]);

  // ... rest of the component
  
  return (
    <>  
      <aside className="aside">
        <h3 className="aside__heading">There it is!</h3>
        
        <form action="" className="form">

          <div className="form__field">
            <input name="location" placeholder="Location" list="location" className="form__input" onChange={handleChange} />
            <datalist id="location" className="form__dataList">
              {
                locations
                .map(location => location)
                .sort()
                .map((location, index) => (
                  <option key={index} value={location} className="form__option">
                    {location}
                  </option>
                ))
              }
            </datalist>
          </div>

          <div className="form__field">
            <input name="type" placeholder="Estate Type" list="type" className="form__input" onChange={handleChange} />
            <datalist id="type" className="form__dataList">
              {
                types
                .map(type => type)
                .sort()
                .map((type, index) => (
                  <option key={index} value={type} className="form__option">
                    {type}
                  </option>
                ))
              }
            </datalist>
          </div>
          


        </form>
      </aside>
        
    </>
  )
}

export default RealEstateAside;