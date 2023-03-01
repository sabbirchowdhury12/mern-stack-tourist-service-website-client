import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper';
import img1 from '../../assets/BannerImage/Banner_Image01.jpg';
import img2 from '../../assets/BannerImage/Banner_Image02.jfif';
import img3 from '../../assets/BannerImage/Banner_Image03.jfif';
import img4 from '../../assets/BannerImage/Banner_Image04.jfif';
import img5 from '../../assets/BannerImage/img2.jfif';
import img6 from '../../assets/BannerImage/img3.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SingleSlide from './SingleSlide';
import { slides } from '../../utilities/data';




const Hero = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            speed={1000}
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            // navigation={true}
            modules={[Autoplay, Pagination, EffectCreative, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
        >
            {
                slides.map((slide, idx) => {
                    return <SwiperSlide key={idx}>
                        <SingleSlide slide={slide}></SingleSlide>
                    </SwiperSlide>;
                })
            }
            <div className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-primary" slot="container-end">
                <svg
                    className='hidden sm:block absolute left-0 bottom-11 z-10 w-full h-full stroke-primary fill-none transform -rotate-90 stroke_custom'
                    viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span className='hidden sm:block text-white absolute bottom-14' ref={progressContent}></span>
            </div>
        </Swiper>
    );
};

export default Hero;