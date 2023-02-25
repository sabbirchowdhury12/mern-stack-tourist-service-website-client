import React from 'react';
import Slider from "react-slick";

const TestomonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const reviews = [
        {
            name: "jordan",
            img: " https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
            desc: "Dolores clita ut voluptua no aliquyam justo. Elitr dolores dolores ipsum eos. Lorem elitr dolore est dolor est takimata takimata."
        },
        {
            name: "jordan",
            img: " https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
            desc: "Dolores clita ut voluptua no aliquyam justo. Elitr dolores dolores ipsum eos. Lorem elitr dolore est dolor est takimata takimata."
        },
        {
            name: "jordan",
            img: " https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
            desc: "Dolores clita ut voluptua no aliquyam justo. Elitr dolores dolores ipsum eos. Lorem elitr dolore est dolor est takimata takimata."
        }
    ];

    return (

        <div>
            <section className='mb-20'>
                <Slider className='w-11/12 mx-auto' {...settings}>
                    {reviews.map((review, idx) => {
                        const { name, desc, img } = review;
                        return (
                            <div>
                                <p className="flex items-center text-center text-gray-500 lg:mx-8">{desc}</p>

                                <div className="flex flex-col items-center justify-center mt-8 ">

                                    <div className="mt-4 text-center text-black">
                                        <h1 className="font-semibold">{name}</h1>
                                        <span className="text-sm">{desc}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </section>
        </div>

    );
};

export default TestomonialSection;