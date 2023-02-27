import React from 'react';
import Slider from "react-slick";
import { style } from '../../utilities/data';

const TestomonialSection = () => {
    var settings = {
        dots: true,
        className: `center ${style}`,
        infinite: true,
        centerPadding: "50px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const reviews = [
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
        {
            name: "jordan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas animi repudiandae dignissimos doloribus magni! Corporis quaerat quasi doloremque?"
        },
    ];

    return (

        <div>
            <Slider {...settings}>

                {
                    reviews.map(review => {
                        return <section class="bg-white dark:bg-gray-900">
                            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                <figure class="max-w-screen-md mx-auto">
                                    <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                    </svg>
                                    <blockquote>
                                        <p class="text-sm  text-gray-900 dark:text-white tracking-wider">{review.text}</p>
                                    </blockquote>
                                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                            <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </section>;
                    })
                }


            </Slider>
        </div>



    );
};

export default TestomonialSection;