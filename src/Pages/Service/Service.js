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
// import slide1 from 'https://i.ibb.co/6WXds7H/Rectangle-129.png'
// import slide2 from 'https://i.ibb.co/VQrpGWF/Rectangle-130.png'
// import slide3 from 'https://i.ibb.co/YLv4nWr/Rectangle-131.png'
// import slide4 from 'https://i.ibb.co/5kndmYV/Rectangle-132.png'
// import slide5 from 'https://i.ibb.co/rQrYN0f/Rectangle-133.png'
// import slide6 from 'https://i.ibb.co/qyjjBbb/Rectangle-134.png'




// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import './Service.css'


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

    const [scrollTop, setScroolTop] = useState(0);

    const onScrool = () => {
        const winScrool = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrooled = (winScrool / height) * 100;

        setScroolTop(scrooled)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrool)

        return () => window.removeEventListener("scroll", onScrool);
    }, [])
    return (
        <>
            <div className="">
                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200  sticky z-5 top-24">
                    <div class="bg-purple-900 h-1.5 rounded-full t" style={{ width: `${scrollTop}%` }}></div>
                </div>

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="ServiceImg">
                            <img src={require('../image/Service/img/Rectangle 3.png')} alt="" />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                            <h1 className="textHeading mb-20">Service We Offer</h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imagePera">
                            <p className="mb-20">Discover the latest in IT with our comprehensive training programs. Gain the skills <br /> and knowledge you need to stay ahead in this dynamic field.</p>
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
                                    <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-10">
                                        <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={data.image} alt="" />
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
            {/* banner Start */}

            <div className=" mt-10">
                <div class="relative">
                    <img src={require('../image/Service/img/image 5.png')} alt="" />

                    <h3 class="absolute text-2xl top-24 left-24 text-white bannerFont">Our Portfolio</h3>
                </div>
            </div>
            {/* banner End */}

            {/* slider start */}
            <div>
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





        </>
    );
};

export default Service;