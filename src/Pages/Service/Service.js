import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import RealState from '../image/Service/icon/assets 1.svg'
import business from '../image/Service/icon/profile 1.svg'
import commarce from '../image/Service/icon/ecommerce 1.svg'
import travel from '../image/Service/icon/booking 1.svg'
import appointment from '../image/Service/icon/calendar 1.svg'
import enterprice from '../image/Service/icon/erp 1.svg'
import hr from '../image/Service/icon/Layer_1.svg'
import learning from '../image/Service/icon/learning 1.svg'
import point from '../image/Service/icon/point-of-sale 1.svg'




// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
// import required modules
import { Pagination } from "swiper";
import './Service.css'

const ServiceData = [
    {
        image: hr,
        name: "HR & Payroll Software",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: business,
        name: "Business Portfolio Website",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: commarce,
        name: "E Commerce Website",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: RealState,
        name: "Real Estate Management",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: appointment,
        name: "Appointment Management System",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: learning,
        name: "Learning management System (LMS)",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: travel,
        name: "Travel Agency & Tourism Management",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: enterprice,
        name: "Enterprise Resource Planning System (ERP)",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: point,
        name: "Point Of Sale System (POS)",
        prev: 3,
        id: 4,
        next: 5
    },
]

const Service = () => {
    return (
        <>
            <div className="mt-10">
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
                            <h1 className='text-6xl font-bold text-white'>
                                Service <span className="text-6xl font-normal">We Offer</span>
                            </h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imagePera">
                            <p>Discover the latest in IT with our comprehensive training programs. Gain the skills <br /> and knowledge you need to stay ahead in this dynamic field.</p>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imageButton">
                            <button className="btn btn-warning">Read More</button>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Our Service Start */}

                <div className="flex items-center justify-center h-screen">
                    <div className="OurServiceRec">
                        <div className="grid lg:grid-cols-2">
                            <div className="OurServiceImg shadow-2xl  ">
                                <img src={require('../image/Service/img/Rectangle 86.png')} alt="" />
                            </div>
                            <div>
                                <h1 className="serviceHeading">Our Service</h1>
                                <p className="Ourservicepera mt-5">Our IT training programs are designed to provide individuals and organizations with the latest skills and knowledge in the rapidly evolving field of Information Technology. We offer both in-person and online training options to accommodate various schedules and learning preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Service End */}
                {/* All Services Start */}

                <div className="flex flex-col items-center justify-center h-screen">
                    <div className=" flex items-center justify-center">
                        <h1 className="serviceHeading mt-5">All services are</h1>

                    </div>
                    <p className="text-lg text-center">Next-level employee engagement ensures productivity retention, and alignment <br /> with organizational goal</p>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-20">
                        {
                            ServiceData.map((data =>
                                <div>
                                    <div className="card w-96 h-56 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={data.image} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{data.name}</h2>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* All Services End */}
            {/* banner Start */}

            <div className="h-screen mt-10">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="">
                            <img src={require('../image/Service/img/image 5.png')} alt="" />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                            <h1 className=' bannerText'>
                                Our Portfolio
                            </h1>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>

            {/* banner End */}




        </>
    );
};

export default Service;