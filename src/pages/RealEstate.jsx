import { useEffect } from "react";
import { useState } from "react"
import { clienteAxios } from "../config/axios";

const RealEstate = () => {
    const [loading, setLoading] = useState(true);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
            try {
                const {data} = await clienteAxios('/public-properties');
                setProperties(data);
            } catch (error) {
                
            }
        }

        getProperties();
    }, [])
    return (
        <>
          <h1>{properties}</h1>
        </>
      )
}

export default RealEstate