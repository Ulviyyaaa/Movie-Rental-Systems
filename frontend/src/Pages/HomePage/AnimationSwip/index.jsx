import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
function AnimationSwip() {
  return (
    < div className='mainAction'>
      <div id='container'>
        <div className='actionBox'>
<h1>Animation Flim</h1>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default AnimationSwip