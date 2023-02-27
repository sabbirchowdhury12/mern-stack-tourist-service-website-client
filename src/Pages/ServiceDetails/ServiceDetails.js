import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailSection from '../../components/ServiceDetailSection/ServiceDetailSection';
import ServiceReviewSection from '../../components/ServiceDetailSection/ServiceReviewSection';

const ServiceDetails = () => {

    const service = useLoaderData();

    return (
        <div>
            <ServiceDetailSection service={service} />
            <ServiceReviewSection service={service} />
        </div>
    );
};

export default ServiceDetails;