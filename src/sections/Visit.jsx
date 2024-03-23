import HomeTour from '../components/HomeTour';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Visit = ({tours, loadingTours}) => {
    
  return (
    <>
        <section className="visit">
            <div className="visit__container">
                <div className="visit__wrapper">
                    <h2 className='visit__heading'>Visit Paradise <span className='visit__span'>and enjoy for Granted</span></h2>

                    <div className='visit__content'>
                        <div className='visit__flex'>
                            {tours.map(tour => (
                                <HomeTour 
                                    key={tour._id}
                                    tour={tour}
                                    loadingTours={loadingTours}
                                />
                            ))}
                        </div>
                        <Link to={'/tours'} className='button button-center'> View all Tours</Link>
                    </div>


                    <div className="visit__grid">
                        <img className="visit__image" loading="lazy" src="https://res.cloudinary.com/dwtmwtnpb/image/upload/v1696977619/tours/rafting2_xsrvof.jpg"/>
                        
                        <div className="visit__column">
                            <h3>Tours in Costa Rica</h3>
                            <p> Costa Rica is one of the best destinations for tourism in the world! With Granted Costa Rica, you will go to the best places to enjoy paradise at it's finest. <br/>
                            Come Grant Access to an unique expirience. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur labore numquam quidem enim illo et debitis. Saepe assumenda excepturi quam, at soluta cumque ad ipsum aliquam, officiis eum exercitationem quisquam. Aperiam, temporibus. Quibusdam iusto saepe similique odit quas, recusandae molestias!
                            </p>
                            <Link to ={'/tours'} className="button button-left">Book now!</Link>
                        </div>
                        
                        <img className="visit__image" loading="lazy" src="https://res.cloudinary.com/dwtmwtnpb/image/upload/v1697253513/GrantedCR%20Rentals/c28viznkreno3azbm3qm.jpg"/>
                        
                        <div className="visit__column visit__column-left">
                            <h3>Rentals in Costa Rica</h3>
                            <p> Costa Rica is one of the best destinations for tourism in the world! With Granted Costa Rica, you will go to the best places to enjoy paradise at it's finest. <br/>
                            Come Grant Access to an unique expirience with Granted Costa Rica. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur labore numquam quidem enim illo et debitis. Saepe assumenda excepturi quam, at soluta cumque ad ipsum aliquam, officiis eum exercitationem quisquam. Aperiam, temporibus. Quibusdam iusto saepe similique odit quas, recusandae molestias!
                            </p>
                            <Link to ={'/rentals'} className="button button-left">View more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Visit