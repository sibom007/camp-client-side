import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import coracal1 from '../../../../public/assiment -12//cricket-5365724_1280.jpg'
import coracal2 from '../../../../public/assiment -12/cricket-724620_1280.jpg'
import coracal3 from '../../../../public/assiment -12/pictogram-3101811_1280.jpg'
import coracal4 from '../../../../public/assiment -12/table-tennis-815715_1280.jpg'
import coracal5 from '../../../../public/assiment -12/table-tennis-1428052_1280.jpg'
import coracal6 from '../../../../public/assiment -12/tennis-2096676_1280.jpg'
import coracal7 from '../../../../public/assiment -12/table-tennis-815715_1280.jpg'


const Carcel = () => {
  
    return (
        <div className='p-3'>
          
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper rounded"
                >
                    <SwiperSlide><img className='w-full h-[550px]' src={coracal1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src="https://cdn.pixabay.com/photo/2019/07/15/16/59/football-4339906_1280.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src={coracal2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src="https://media.istockphoto.com/id/858960150/photo/back-view-of-young-girl-watching-a-foodball-game.jpg?s=2048x2048&w=is&k=20&c=X5Rw4GLRn1tOMdyKbgCPBd62zc5Oz39sLh4U8fH0YMA=" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src={coracal3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src={coracal4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src={coracal5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src={coracal6} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[550px]' src={coracal7} alt="" /></SwiperSlide>
                </Swiper>
               
        </div>
    );
};

export default Carcel;