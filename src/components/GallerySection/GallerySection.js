import React from 'react';

const GallerySection = () => {
    return (
        <section class="overflow-hidden text-neutral-700 my-10">
            <div class="container px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex md:w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                    <div class="flex md:w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://travel-client-49757.web.app/static/media/gallery%20(3).22499f9cfb2c48e891fd.jpg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="opacity-75 hover:opacity-100  block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;