import React from 'react';
import { headingStyle } from '../../utilities/data';

const GallerySection = () => {
    return (
        <section className="overflow-hidden text-neutral-700 my-10">
            <p className={`${headingStyle}`}>Galley - Photo from CLIENT'S</p>
            <div className="container px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex md:w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                    <div className="flex md:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://travel-client-49757.web.app/static/media/gallery%20(3).22499f9cfb2c48e891fd.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;