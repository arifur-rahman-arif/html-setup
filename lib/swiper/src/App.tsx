// Import Swiper React components
import { SwiperSlide, useSwiper } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Swiper } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';

import React from 'react';

const App = () => {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    );
}

export default App;
