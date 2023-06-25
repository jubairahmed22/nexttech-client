import React, { useEffect, useRef, useState } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './LayoutCourse.css'


// import required modules

// import required modules


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Navbar from '../../Shared/Navbar/Navbar';
import NavScrool from '../../Shared/Navbar/NavScrool';


const LayoutCourse = () => {
    return (
        <div>
              <div className=''>
                <Navbar></Navbar>
                <NavScrool></NavScrool>
                    {/* <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className=''>
                            <div className="courseBannerImg">
                                <img src="https://i.ibb.co/q92f2N0/course-THREE.jpg" alt="" />
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                                <h1 className="slideFontHeading lg:ml-8">Take the first step towards your dreams <br/>  with us</h1>
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 slideFontPera">
                                <p className='slideFontPeraTwo ml-10 lg:mt-20'>Explore our most popular and high-demand courses, a fast track to your independence</p>
                            </div>
    
                        </SwiperSlide>
                    </Swiper> */}
                <div className='CourseAllBackground rounded-xl'>
                        <div className='max-w-[1150px] h-56  mx-auto '>
                        <h1 className="CourseHeadingMainOne text-left pt-48 lg:mt-20">Take the first step towards your dreams with us</h1>
                        <p className="CoursePera mt-10">Explore our most popular and high-demand courses, a fast track to your independence</p>

                        </div>
                </div>
                   
                </div>
        </div>
    );
};

export default LayoutCourse;