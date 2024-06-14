import { useEffect, useState } from "react";
import { clienteAxios } from "../config/axios";
import { Helmet } from 'react-helmet';
import Property from "../components/Property";
import RealEstateAside from "../components/RealEstateAside";

const RealEstate = () => {
    const [loading, setLoading] = useState(true);
    const [properties, setProperties] = useState([]);
    const [newProperties, setNewProperties] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
            try {
                const { data } = await clienteAxios('/public-properties');
                setProperties(data);
            } catch (error) {
                console.error('error:', error);
            }

            setLoading(false);
        }

        getProperties();
    }, [])

    const test = (result) => {
        setNewProperties(result);
    }
      
    return (
        <>
            <Helmet>
                <title>Granted Real Estate</title>
            </Helmet>
            <div className="real-estate">
                <div className="real-estate__container">
                    <h2 className="real-estate__heading">Fulfill Your Dreams</h2>
                    
                    <div className="real-estate__flex">
                        <div className="real-estate_aside">
                            <RealEstateAside properties={properties} test={test} />
                        </div>
                        
                        <div className="real-estate__properties">
                            {newProperties.map(property => (
                                <Property
                                    key={property._id}
                                    property={property}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RealEstate;
