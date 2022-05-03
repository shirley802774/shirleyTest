import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './heroBanner.scss';

const HeroBanner = () => {
  return (
    <div className='c-heroBanner'>
      <Swiper>
        <SwiperSlide>test1</SwiperSlide>
      </Swiper>
      {/* <Swiper
        slidesPerView={1}
        autoHeight={true}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000, // mini second
          disableOnInteraction: false, // true: disable autoplay
        }}
        pagination={{
          clickable: true, // page dot can click ?
        }}
        navigation={true} // page arrow show ?
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>test1</SwiperSlide>
        <SwiperSlide>test2</SwiperSlide>
        <SwiperSlide>test3</SwiperSlide>
        <SwiperSlide>test4</SwiperSlide>
        <SwiperSlide>test5</SwiperSlide>
      </Swiper> */}
    </div>
  );
};
export default HeroBanner;
