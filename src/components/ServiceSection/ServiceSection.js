import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { limitServices } from '../../utilities/APIRoutes';
import ServiceCard from './ServiceCard';
import { Link, NavLink } from 'react-router-dom';

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`${limitServices}`)
            .then((response) => setServices(response.data));
    }, []);

    return (
        <div className='my-10 '>
            <div className='grid  lg:grid-cols-3 md:px-4  mx-auto lg:max-w-7xl md:items-center'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }

            </div>
            <div className='text-center py-5'>
                <Link to='/services'>
                    <button className='btn btn-secondary'>Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;