import React, { useEffect, useState } from 'react';
import './Courses.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

// import required modules

// import required modules


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import "swiper/swiper.min.css";
import { Link } from 'react-router-dom';


const Courses = () => {


    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div>
            <div className=''>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="cerocelImg">
                            <img src={require('../image/Service/img/Rectangle 3.png')} alt="" />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                            <h1 className="textHeading ">Service We Offer</h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imagePera">
                            <p>Discover the latest in IT with our comprehensive training programs. Gain the skills <br /> and knowledge you need to stay ahead in this dynamic field.</p>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imageButton">
                            <button className="btn btn-warning">Read More</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className=''>

                <h1 className='OurCourse text-center mt-20 mb-20'>Our Courses</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-10'>
                    {
                        courses.map(course =>
                            <Link to={`/courseDetails/${course.id}`}>
                                <div className='courseCard shadow-xl gap-5 mb-20 transform transition duration-500 hover:scale-110 '>

                                    <img className='courseCardImg w-96 h-56' src={course.img} alt="" />
                                    <h1 className='m-5 courseCardText'>{course.name}</h1>
                                    <div className="rating m-5 mt-5">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </Link>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Courses;