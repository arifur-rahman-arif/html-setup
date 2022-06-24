import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';

const App = () => {
  return (
      <div className="mb-5 mx-auto position-relative custom_wrapper">
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            navigation={true}
            modules={[Navigation]}
            className="custom_swiper"
        >
          <SwiperSlide className="single_slide overflow-hidden">
                <img src="https://images.unsplash.com/photo-1656020813244-b4ad27be37a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="swiper image" />
          </SwiperSlide>

            <SwiperSlide className="single_slide overflow-hidden">
                <img src="https://images.unsplash.com/photo-1656020813244-b4ad27be37a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="swiper image" />
            </SwiperSlide>

            <SwiperSlide className="single_slide overflow-hidden">
                <img src="https://images.unsplash.com/photo-1656020813244-b4ad27be37a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="swiper image" />
            </SwiperSlide>

            <SwiperSlide className="single_slide overflow-hidden">
                <img src="https://images.unsplash.com/photo-1656020813244-b4ad27be37a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="swiper image" />
            </SwiperSlide>

            <SwiperSlide className="single_slide overflow-hidden">
                <img src="https://images.unsplash.com/photo-1656020813244-b4ad27be37a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="swiper image" />
            </SwiperSlide>

            <SwiperSlide className="single_slide overflow-hidden">
                <img src="https://images.unsplash.com/photo-1656020813244-b4ad27be37a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="swiper image" />
            </SwiperSlide>

        </Swiper>
      </div>
  );
}

export default App;
