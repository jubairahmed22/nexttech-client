import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import icon from '../image/Service/icon/material-symbols_check-circle-rounded.svg'
import { FaLongArrowAltRight } from 'react-icons/fa';



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import './Service.css'
import { Link } from "react-router-dom";


const ServiceData = [
    {
        image: "https://i.ibb.co/d6Pd95j/web-design-website-coding-concept.jpg",
        name: "HR & Payroll Software",
        intro: "HR & Payroll software helps organizations streamline their HR and payroll processes, reduce errors, and save money.",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: "https://i.ibb.co/12P9V8c/homepage-seen-computer-screen.jpg",
        name: "Business Portfolio Website",
        intro: "A well-designed business portfolio website can help attract new customers, establish credibility, and showcase the company's expertise and achievements.",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: "https://i.ibb.co/yBKL1xz/laptop-shopping-bags-online-shopping-concept.jpg",
        name: "E Commerce Website",
        intro: "E-commerce websites provide convenience and accessibility to customers, as well as a broader reach, lower operational costs, and the ability to collect customer data for better decision-making.",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://i.ibb.co/cD6QXLH/calendar-agenda-event-meeting-reminder-schedule-graphic-concept.jpg",
        name: "Appointment Management System",
        intro: "An appointment management system is a software program designed to manage the scheduling and organization of appointments, allowing for efficient scheduling and improved customer satisfaction.",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://i.ibb.co/cNkndVD/man-giving-some-keys-woman.jpg",
        name: "Real Estate Management",
        intro: "An appointment management system is a software program designed to manage the scheduling and organization of appointments, allowing for efficient scheduling and improved customer satisfaction.",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/wgsBX79/learning-education-ideas-insight-intelligence-study-concept.jpg",
        name: "Learning management System (LMS)",
        intro: "Travel agency and tourism management software can improve efficiency, enhance customer experience, and increase revenue by providing integrations with third-party booking engines and suppliers.",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/GdRRD0y/adventure-trip-travel-destination-hiking-nature-concept.jpg",
        name: "Travel Agency & Tourism Management",
        intro: "Travel agency and tourism management software can improve efficiency, enhance customer experience, and increase revenue by providing integrations with third-party booking engines and suppliers.",
        prev: 3,
        id: 4,
        next: 5
    },

    {
        image: "https://i.ibb.co/bsvYCqb/notebook-with-toolls-notes-about-erp-concept.jpg",
        name: "Enterprise Resource Planning System (ERP)",
        intro: "Real Estate Management software helps property managers and agents manage their properties and clients more efficiently, providing features such as property listing management, client management, lease management, financial management, and reporting and analytics.",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/M5C8LV1/person-paying-with-its-smartphone-wallet-app.jpg",
        name: "Point Of Sale System (POS)",
        intro: "POS systems are software and hardware systems used to manage transactions between customers and businesses, allowing for faster and more accurate processing, reducing errors, and better inventory management. They can help businesses improve customer experience, reduce costs, and increase revenue.",
        prev: 3,
        id: 4,
        next: 5
    }
]

const SlideData = [
    {
        image: "https://i.ibb.co/6WXds7H/Rectangle-129.png",
        name: "HR & Payroll Software",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: "https://i.ibb.co/VQrpGWF/Rectangle-130.png",
        name: "Business Portfolio Website",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: "https://i.ibb.co/YLv4nWr/Rectangle-131.png",
        name: "E Commerce Website",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://i.ibb.co/5kndmYV/Rectangle-132.png",
        name: "Real Estate Management",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/rQrYN0f/Rectangle-133.png",
        name: "",
        prev: 3,
        id: 4,
        next: 5
    },

    {
        image: "https://i.ibb.co/rQrYN0f/Rectangle-133.png",
        name: "",
        prev: 3,
        id: 4,
        next: 5
    }
]



const Service = () => {


    return (
        <>
            <div className="">


                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="ServiceImg">
                            <img src={require('../image/Service/img/group-young-people-business-meeting.jpg')} alt="" />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 slideHeadingTwo">
                            <h1 className="textHeading lg:mb-56">Service <span className="weOffer">we offer</span></h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imagePera">
                            <p className="lg:mb-48">Discover the latest in IT with our comprehensive training programs. Gain the skills <br /> and knowledge you need to stay ahead in this dynamic field.</p>
                        </div>

                    </SwiperSlide>
                </Swiper>




                {/* All Services Start */}

                <div className="flex flex-col items-center justify-center">
                    <div className=" flex items-center justify-center">
                        <h1 className="text-center aboutText lg:mt-20 ">Our <span className="text-orange-500">Services</span></h1>


                    </div>
                    <p className="text-center nextLvl mt-5">Next-level employee engagement ensures productivity retention, and alignment <br /> with organizational goal</p>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 ">
                        {
                            ServiceData.map((data =>
                                <div>
                                    <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-10">
                                        <img class="object-cover imgBackground w-full h-full transform duration-700 backdrop-opacity-100 " src={data.image} alt="" />
                                        <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                                        <div class="absolute bg-gradient-to-t  from-indigo-900 via-indigo-900 to-indigo-900 opacity-90  w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                                            <div class="absolute w-full flex place-content-center">
                                                <p class="capitalize font-heebo pb-10 font-bold text-2xl text-center shadow-2xl text-white mt-5">{data.name}</p>
                                            </div>
                                            <div class="absolute w-full flex place-content-center mt-20">
                                                <p class="font-sans text-center w-4/5 text-white mt-5">{data.intro}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* All Services End */}
            <h1 className="text-center aboutText">Our Portfolio</h1>

            {/* slider start */}
            <div className="slideBg p-5 mt-20">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="bookSwiper  ">

                    {
                        SlideData.map(slideSS => <SwiperSlide className='ml-10 mb-12 mt-10'>

                            <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                                <img
                                    src={slideSS.image}
                                    class="transition duration-300 ease-in-out hover:scale-110 slideImg"
                                    alt="Louvre" />
                            </div>


                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            {/* slider end */}


            {/* about site start */}
            <div>
                <h1 className="text-center aboutText mt-10">Empowering Innovation Together
                </h1>
                <div>

                    <div class="grid grid-cols-2 gap-2 mt-20 place-items-center ">
                        <div>
                            <div className="">
                                <img className="ItImg shadow-2xl" src={require('../image/Service/img/45.jpg')} alt="" />
                              

                                    <div className="">
                                        <h2 className="TogetherCardTitle p-5 mt-5">IT Training Center</h2>
                                        <Link to="/aboutUs">
                                            <div className="inline-flex items-center">
                                                <h2 className="TogetherCardTitleTwo py-5">More About Us</h2>
                                                <div >
                                                    <FaLongArrowAltRight className="w-10 h-10"></FaLongArrowAltRight>

                                                </div>
                                            </div>
                                            <hr class="w-64 h-1 bg-orange-500 rounded  items-start"/>
                                        </Link>
                                    </div>

                             
                            </div>

                        </div>
                        <div className="">
                            <div className="mb-5">
                                <h2 className="TogetherCardTitleThree p-5">IT Solution</h2>

                            </div>
                            <img className="ItImg shadow-2xl" src={require('../image/Service/img/58.jpg')} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            {/* about site end */}
            {/* Experience site end */}
            <div className="grid lg:grid-cols-2 place-items-center mt-10">
                <div>
                    <div className="inline-flex items-center">
                        <div class="flex">
                            <div class="m-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-400">
                                <p className="ml-20 text-2xl cicleText">5</p>

                            </div>
                        </div>
                        <div>
                            <p className="ml-10 text-2xl circlePera">Years Of Experiences</p>
                        </div>

                    </div>
                    <div>
                        <div className="inline-flex items-center">
                            <div class="flex">
                                <div class="m-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-400">
                                    <p className="ml-24 text-2xl cicleText">25</p>

                                </div>
                            </div>
                            <div>
                                <p className="ml-10 text-2xl circlePera">Experienced Employees</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="inline-flex items-center">
                            <div class="flex">
                                <div class="m-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-400">
                                    <p className="ml-24 text-2xl cicleText">10</p>

                                </div>
                            </div>
                            <div>
                                <p className="ml-10 text-2xl circlePera">Success Story</p>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="grid lg:grid-cols-1">
                    <div className="inline-flex items-center">
                        <img className="fill-blue-500" src={icon} alt="" />
                        <h1 className="tieckPera ml-3">Experience Developers</h1>
                    </div>
                    <div className="inline-flex items-center mt-10">
                        <img className="fill-blue-500" src={icon} alt="" />
                        <h1 className="tieckPera ml-3">Skilled instructor</h1>
                    </div>
                    <div className="inline-flex items-center mt-10">
                        <img className="fill-blue-500" src={icon} alt="" />
                        <h1 className="tieckPera ml-3">Online and offline courses</h1>
                    </div>
                    <div className="inline-flex items-center mt-10">
                        <img className="fill-blue-500" src={icon} alt="" />
                        <h1 className="tieckPera ml-3">Life-time support</h1>
                    </div>

                </div>
            </div>
            {/* Experience site end */}


        </>
    );
};

export default Service;