import { useEffect, useState } from "react";
import { clienteAxios } from "../config/axios";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import Galery from "../components/Galery";
import { NumericFormat } from "react-number-format";
import MapIcon from '../assets/icons/Map';
import BedLogo from '../assets/icons/BedLogo';
import BathLogo from '../assets/icons/BathLogo';
import Construction from '../assets/icons/Construction';
import Area from '../assets/icons/Area';
import AgentCard from '../components/AgentCard';
import { Helmet } from 'react-helmet';
import Map from "../components/Map";
const RealEstateProperty = () => {
    const {id} = useParams();

    const [property, setProperty] = useState({});
    const [loadingProperty, setLoadingProperty] = useState(true);
    const [loadingAgent, setLoadingAgent] = useState(true);
    const [agent, setAgent] = useState({});
    const [imageIndex, setImageIndex] = useState(0);
    const [helmetInfo, setHelmetInfo] = useState({});
    
    useEffect( () => {
        const getProperty = async () => {
            try {
                const {data} = await clienteAxios(`/public-properties/${id}`);
                setProperty(data[0]);

                setHelmetInfo({
                    title: data[0].title,
                    description: data[0].description,
                    image: data[0].imageUrls[0],
                    id: data[0]._id
                });
            } catch (error) {
                console.error(`Error! Could not get properties: ${error}`);
            }


            setLoadingProperty(false);
        }
        
        
        getProperty()
    }, [])


    useEffect(() => {

            const getAgent = async (propertyToAgent) => {

                if (Object.keys(propertyToAgent).length > 0) {
                    try {
                        const {data} = await clienteAxios(`/public-properties/agent/${propertyToAgent.agent}`);
                        setAgent(data);
                    } catch (error) {
                        console.log(`Error! could not get agent: ${error}`);
                    }
            
                    setLoadingAgent(false);
                }
                
            }
    
            getAgent(property);
    }, [property])

  return (
    <>
        <Helmet>
            <title>{`Granted Costa Rica - ${helmetInfo.title}`} </title>
            <meta property="og:title" content={helmetInfo.title} />
            <meta property="og:description" content={helmetInfo.description} />
            <meta property="og:image" content={helmetInfo.image} />
            <meta property="og:url" content={`https://www.grantedcr.com/real-estate/${helmetInfo._id}`} />
            <meta property="og:type" content="article" />
        </Helmet>

        <section className="real-estate-property">
            <div className="real-estate-property__container">
                <div className="real-estate-propertty__wrapper">
                    <div className="real-estate-property__grid">
                        <div className="real-estate-property__col real-estate-property__col-left">
                            <Slider object={property} imageIndex={imageIndex} setImageIndex={setImageIndex}/>
                            
                            <Galery property={property} loadingProperty={loadingProperty} setImageIndex={setImageIndex} />
                            
                            <div className="real-estate-property__info">
                                <h1 className="real-estate-property__heading">{property.title}</h1>
                                    {!loadingProperty && <NumericFormat className='real-estate-property__price' value={property.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
                                        
                                    <div className="real-estate-property__location">
                                        <MapIcon />
                                        <p className="real-estate-property__text real-estate-property__text-price">{property.location}</p>
                                    </div>
                                    
                                    <div className="real-estate-property__aspects">
                                        <div className="real-estate-property__aspect">
                                            <p className="real-estate-property__text real-estate-property__text-smaller">Land</p>
                                            <div className="real-estate-property__flex">
                                                {!loadingProperty && <NumericFormat className="real-estate-property__text" value={property.lot_size.toFixed(2)} displayType={'text'} thousandSeparator={true} suffix="m²" />}
                                                    
                                                <Area />
                                            </div>
                                        </div>
                                        
                                        {property.building && <div className="real-estate-property__aspect">
                                            <p className="real-estate-property__text real-estate-property__text-smaller">Building</p>
                                            
                                            <div className="real-estate-property__flex">
                                                <NumericFormat className="real-estate-property__text" value={property.building.toFixed(2)} displayType={'text'} thousandSeparator={true} suffix="m²" />
                                                    <Construction />
                                            </div>
                                                        
                                        </div>}
                                        
                                        {property.bedrooms &&
                                            <div className="real-estate-property__aspect">
                                                <p className="real-estate-property__text real-estate-property__text-smaller">Bedrooms</p>
                                                
                                                <div className="real-estate-property__flex">
                                                    <p className="real-estate-property__text">{property.bedrooms}</p>
                                                    <BedLogo />
                                                </div>
                                            </div>}
                                            
                                            {property.bathrooms && <div className="real-estate-property__aspect">
                                                <p className="real-estate-property__text real-estate-property__text-smaller">Bathrooms</p>

                                                <div className="real-estate-property__flex">
                                                    <p className="real-estate-property__text">{property.bathrooms}</p>
                                                        <BathLogo />

                                                </div>

                                            </div>}
                                        </div>


                                        <div className="real-estate-property__description">
                                            <p className="real-estate-property__text whitespace-pre-line">{property.description}</p>
                                    </div>
                                 </div>


                            {!loadingProperty && <Map property={property} />}
                        </div>

                        <aside className="real-estate-property__col real-estate-property__col-right">
                            <AgentCard loadingAgent={loadingAgent} agent={agent} property={property} loadingProperty={loadingProperty} />
                        </aside>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default RealEstateProperty;