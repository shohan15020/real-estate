// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  BiArrowToRight } from "react-icons/bi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import '../../Pages/Home/BannerStyle/Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>


            <Swiper className="mySwiper h-[500px] "
                // install Swiper modules
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >

                <SwiperSlide><img src="https://i.ibb.co/rtpQ2Yw/pexels-pixabay-210617.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/GdsXLXx/pexels-vecislavas-popa-1571463.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/dgS4d4s/dillon-kydd-XGvwt544g8k-unsplash.jpg" alt="" /></SwiperSlide>
                ...
            </Swiper>




            <div  className="p-6  m-4 top-[90%] left-1/2  space-y-6 w-2/3 sm:px-10 sm:mx-12 lg:rounded-md bg-white absolute z-10 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md flex flex-col items-center">
                <h1 className="text-4xl font-bold ">Find Your Dream Home</h1>

                <p className="text-lg ">Welcome to our premier real estate platform! Whether you are looking for a cozy apartment in the heart of the city, a spacious family home in the suburbs</p>
                <Link to='/contact' className="font-medium text-white text-3xl  md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center flex gap-2 items-center justify-center">

                    <span >Contact here</span>
                    <BiArrowToRight className='text-3xl font-bold'

                    /></Link>
            </div>

        </div>

    );
};

export default Banner;