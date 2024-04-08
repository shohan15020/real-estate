// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Banner = () => {
    return (
        <div > 
            <Swiper className='h-[500px]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img  className='w-full h-full' src="https://img.freepik.com/premium-photo/modern-villa-dubai-3d-render-luxurious-architecture-house-modern-style_727625-174.jpg?w=740" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src="https://img.freepik.com/free-photo/old-wooden-house-village_1268-14691.jpg?w=996" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src="https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?w=996" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src="https://img.freepik.com/premium-photo/village-house-summer-day-blue-sky-surface_266732-25264.jpg?w=996" alt="" /></SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Banner;