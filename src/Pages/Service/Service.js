import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceSection/ServiceCard';
import { allServices } from '../../utilities/APIRoutes';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`${allServices}`)
            .then((response) => setServices(response.data));
    }, []);
    console.log(services);
    return (
        <div className='my-10 '>
            <p>All service</p>
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

export default Service;