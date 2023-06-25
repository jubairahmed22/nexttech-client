import React, { useEffect, useState } from 'react';
import './GlobalClients.css'
import { Link } from 'react-router-dom';
import Carousel from 'carousel-react-rcdev'
// Import Swiper React components
import { Swiper, SwiperSlide,  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';




const GlobalClients = () => {
  const [cetagory, setcetagory] = useState([]);
  useEffect(() => {

    const url = `https://server-nexttech-h6uhrs8ll-bnexttechitc-gmailcom.vercel.app/mainCourse`;


    fetch(url)
      .then(res => res.json())
      .then(data => {

        setcetagory(data);
      })
  }, [])


  const [swiperRef, setSwiperRef] = useState(null);

  const [swiper, setSwiper] = useState(null);

  const handleMouseEnter = () => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  };

  


  return (
    <div className='mt-10'>


      <div className='courseBox'>
        <h1 className='dark:text-white mainHading text-center pb-5 pt-5'>Our Training <span className='text-orange-500'>Programs</span></h1>

        <>
        <Swiper
        breakpoints={{
          // when window width is >= 640px
          390: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          588: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      
      onSwiper={setSwiper}
      slidesPerView={3}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
    >
      <div>
        <div>
          {cetagory.map((sub) => (
            <SwiperSlide key={sub.homeId}>
              <div>
                <Link to={`/CourseLayout/mainCourse/${sub.homeId}`}>
                  <div className="shadow-xl mainCard rounded-2xl flex flex-col transform transition duration-500 hover:scale-110 hover:shadow-2xl">
                    <div className="imgSize">
                      <img src={sub.img} alt=""></img>
                    </div>
                    <div>
                      <h1 className="text-center text-white mt-5 text-3xl font-bold">{sub.name}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
        </>

      </div>


    </div>


  );
};

export default GlobalClients;