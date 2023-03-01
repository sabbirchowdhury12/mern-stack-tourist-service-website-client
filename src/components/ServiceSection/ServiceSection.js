import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { limitServices } from '../../utilities/APIRoutes';
import ServiceCard from './ServiceCard';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { headingStyle } from '../../utilities/data';

const ServiceSection = () => {
    const pathname = useLocation();
    // console.log(pathname);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`${limitServices}`)
            .then((response) => setServices(response.data));
    }, []);

    return (
        <div className='my-10 '>


            <p className={`${headingStyle}`}>Services</p>
            <div className='grid  lg:grid-cols-3 md:px-4  mx-auto lg:max-w-7xl md:items-center'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }

            </div>
            <div className='text-center py-5'>
                <Link to='/services'>
                    <button className='btn btn-primary text-white'>Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;