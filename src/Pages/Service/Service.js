import React, { useEffect, useRef, useState } from "react";
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
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
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

const SlideData = [
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
    
    const [scrollTop, setScroolTop] = useState(0);

    const onScrool = () => {
        const winScrool = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrooled = (winScrool / height) * 100;

        setScroolTop(scrooled)
    }

    useEffect(()=> {
        window.addEventListener("scroll", onScrool)

        return () => window.removeEventListener("scroll", onScrool);
    }, [])
    return (
        <>
            <div className="">
            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200  sticky z-5 top-24">
              <div class="bg-purple-900 h-1.5 rounded-full t" style={{width: `${scrollTop}%`}}></div>
            </div>
           
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

                {/* Our Service Start */}
           


                <div className="flex items-center justify-center h-screen">
                    <div className="OurServiceRec">
                        <div className="grid lg:grid-cols-2">
                            <div className="OurServiceImg shadow-2xl  ">
                                <img src={require('../image/Service/img/Rectangle 86.png')} alt="" />
                            </div>
                            <div>
                                <h1 className="serviceHeading ">Our Service</h1>
                                <p className="Ourservicepera mt-5">Our IT training programs are designed to provide individuals and organizations with the latest skills and knowledge in the rapidly evolving field of Information Technology. We offer both in-person and online training options to accommodate various schedules and learning preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Service End */}
                {/* All Services Start */}

                <div className="flex flex-col items-center justify-center">
                    <div className=" flex items-center justify-center">
                        <h1 className="serviceHeading mt-5">All services are</h1>

                    </div>
                    <p className="text-lg text-center">Next-level employee engagement ensures productivity retention, and alignment <br /> with organizational goal</p>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 ">
                        {
                            ServiceData.map((data =>
                                <div>
                                    <div className="w-96 h-56 bg-info rounded-2xl shadow-2xl mt-10 flex flex-col items-center justify-center text-center">
                                       <h1 >{data.name}</h1>
                                       <img className="cardLogo " src={data.image} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* All Services End */}
            {/* banner Start */}

            <div className=" mt-10">
                
                    
                        <div className="">
                            <img src={require('../image/Service/img/image 5.png')} alt="" />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                            
                        </div>

                   
            </div>
          
            {/* banner End */}

            {/* slider start */}
            <div>
            <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={4}
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
                        SlideData.map(slideSS => <SwiperSlide className='bookslide mb-12'>

                        <h1>{slideSS.name}</h1>
                        <img className="slidePic" src={slideSS.image} alt="" />

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            {/* slider end */}
           

           


        </>
    );
};

export default Service;