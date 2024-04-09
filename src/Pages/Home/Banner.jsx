// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import '../../Pages/Home/BannerStyle/Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
                
                <SwiperSlide><img  src="https://img.freepik.com/free-photo/old-wooden-house-village_1268-14691.jpg?w=996" alt="" /></SwiperSlide>
                <SwiperSlide><img  src="https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?w=996" alt="" /></SwiperSlide>
                <SwiperSlide><img  src="https://img.freepik.com/premium-photo/village-house-summer-day-blue-sky-surface_266732-25264.jpg?w=996" alt="" /></SwiperSlide>
                ...
            </Swiper>




            <div className="p-6  m-4 top-[90%] left-1/2  space-y-6 w-2/3 sm:px-10 sm:mx-12 lg:rounded-md bg-white absolute z-10 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md">
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                    <p className="text-xs dark:text-gray-600">By
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                    </p>
                </div>
                <div className="dark:text-gray-800">
                    <p>Insert the actual text content here...</p>
                </div>
            </div>

        </div>

    );
};

export default Banner;