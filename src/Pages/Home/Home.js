import React from 'react';
import GallerySection from '../../components/GallerySection/GallerySection';
import Hero from '../../components/HomeSection/Hero';
import ServiceSection from '../../components/ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <ServiceSection />
            <GallerySection />
        </div>
    );
};

export default Home;