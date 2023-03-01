import React from 'react';
import GallerySection from '../../components/GallerySection/GallerySection';
import Hero from '../../components/HomeSection/Hero';
import Loading from '../../components/Loading/Loading';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import TestomonialSection from '../../components/TestomonialSection/TestomonialSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <ServiceSection />
            <TestomonialSection />
            <GallerySection />
        </div>
    );
};

export default Home;