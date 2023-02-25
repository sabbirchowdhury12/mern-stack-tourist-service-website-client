import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { country, desc, price, rating, review, place, img, _id } = service;

    return (
        <div className=" px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 z-0 my-20">


            <div className="shadow-lg flex flex-wrap w-full  mx-auto">

                <div className="bg-cover bg-bottom border w-full md:w-1/3 h-full md:h-auto relative object-cover"
                    style={{
                        backgroundImage: `url(${img})`
                    }}>
                    <div className="absolute text-xl">
                        <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                    </div>
                </div>
                <div className="bg-white w-full md:w-2/3">
                    <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

                        <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0  md:flex-wrap items-center">

                            <div className="w-full lg:border-right lg:border-solid text-center md:text-left">
                                <h3>Welcome Your Destination</h3>
                                <p className="mb-0 mt-3 text-grey-dark text-sm italic">{place} - {country}</p>
                                <hr className="w-full  md:w-1/4 md:ml-0 mt-4  border " />
                            </div>



                            <div className="w-full ">
                                <p className="text-md mt-4 text-justify md:text-left text-sm">
                                    {desc}
                                </p>
                            </div>

                            <hr className="w-full  md:ml-0 mt-4 mb-2  border " />
                            <p className='my-2'>Price: ${price}</p>
                            <p>Review: {review}</p>
                            <hr className="w-full  md:ml-0 mt-2  border " />

                            <div className="w-full mt-6 text-center ">
                                <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3  py-2">Book now</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;