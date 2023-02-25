import React from 'react';
import GallerySection from '../../components/GallerySection/GallerySection';
import Hero from '../../components/HomeSection/Hero';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import TestomonialSection from '../../components/TestomonialSection/TestomonialSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <ServiceSection />
            <GallerySection />
            <TestomonialSection />
        </div>
    );
};

export default Home;