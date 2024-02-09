import { useEffect, useState } from "react";
import { clienteAxios } from "../config/axios";
import Property from "../components/Property";

const RealEstate = () => {
    const [loading, setLoading] = useState(true);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
            try {
                const {data} = await clienteAxios('/public-properties');
                
                setProperties(data);
            } catch (error) {
                console.error('error:', error);
            }

            setLoading(false);
        }

        getProperties();


    }, [])
    return (
        <>
            <div className="real-estate">
                <div className="real-estate__container">
                    <h2 className="real-estate__heading">Fulfill Your Dreams</h2>
                    
                    <div className="real-estate__flex">

                        <aside className="real-estate__aside">
                            <h1>aside</h1>
                        </aside>
                        
                        <div className="real-estate__properties">
                            {properties.map(property => (
                                <Property
                                    key={property._id}
                                    property={property}
                                    loading={loading}
                                />
                            ))}
                        </div>
                        
                    </div>


                </div>
            </div>
        </>
      )
}

export default RealEstate