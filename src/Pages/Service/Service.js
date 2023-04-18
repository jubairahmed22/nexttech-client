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
import Footer from "../Shared/Footer/Footer";
import ViewSpin from "../Shared/SpinLoading/ViewSpin";


const ServiceData = [
    {
        image: "https://i.ibb.co/vHgNPgF/Group-419.png",
        name: "HR & Payroll Software",
        intro: "HR & Payroll software helps organizations streamline their HR and payroll processes, reduce errors, and save money.",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: "https://i.ibb.co/Kz5dN5h/Group-412.png",
        name: "Business Portfolio Website",
        intro: "A well-designed business portfolio website can help attract new customers, establish credibility, and showcase the company's expertise and achievements.",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: "https://i.ibb.co/HHZZfZ5/Group-413.png",
        name: "E Commerce Website",
        intro: "E-commerce websites provide convenience and accessibility to customers, as well as a broader reach, lower operational costs, and the ability to collect customer data for better decision-making.",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://i.ibb.co/Vqvr1wB/Group-411.png",
        name: "Appointment Management System",
        intro: "An appointment management system is a software program designed to manage the scheduling and organization of appointments, allowing for efficient scheduling and improved customer satisfaction.",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://i.ibb.co/dBr38pX/Group-418.png",
        name: "Real Estate Management",
        intro: "Real Estate Management software helps property managers and agents manage their properties and clients more efficiently, providing features such as property listing management, client management, lease management, financial management, and reporting and analytics.",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/pf7hQwq/Group-415.png",
        name: "Learning management System (LMS)",
        intro: "LMS stands for Learning Management System, which is a software application used for the administration, documentation, tracking, reporting, and delivery of educational courses, training programs, or learning and development programs. LMS is widely used in both academic and corporate settings to deliver and manage online learning.",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/Z2gqRc2/Group-414.png",
        name: "Travel Agency & Tourism Management",
        intro: "Travel agency and tourism management software can improve efficiency, enhance customer experience, and increase revenue by providing integrations with third-party booking engines and suppliers.",
        prev: 3,
        id: 4,
        next: 5
    },

    {
        image: "https://i.ibb.co/sQ9C84F/Group-417.png",
        name: "Enterprise Resource Planning System (ERP)",
        intro: "ERP System (Enterprise Resource Planning) is a business management software that integrates and automates various functions such as finance, human resources, procurement, and supply chain management, providing real-time data for informed decision-making.",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/wNTVNfG/Group-416.png",
        name: "Point Of Sale System (POS)",
        intro: "POS systems are software and hardware systems used to manage transactions between customers and businesses, allowing for faster and more accurate processing, reducing errors, and better inventory management. They can help businesses improve customer experience, reduce costs, and increase revenue.",
        prev: 3,
        id: 4,
        next: 5
    }
]

const SlideData = [
    {
        image: "https://i.ibb.co/0KG1YNX/Rectangle-129-min.png",
        name: "HR & Payroll Software",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: "https://i.ibb.co/W3YpzGy/Rectangle-130-min.png",
        name: "Business Portfolio Website",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: "https://i.ibb.co/CQdL25w/Rectangle-131-min.png",
        name: "E Commerce Website",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://i.ibb.co/DwyzyDK/Rectangle-132-min.png",
        name: "Real Estate Management",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/CJjQ6H5/Rectangle-133-min.png",
        name: "",
        prev: 3,
        id: 4,
        next: 5
    },

    {
        image: "https://i.ibb.co/XW5RnrM/Rectangle-134-min.png",
        name: "",
        prev: 3,
        id: 4,
        next: 5
    }
]



const Service = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
        React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [loading, setLoading] = useState(false);
      useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        },400)
      },[])

    return (
        <>   
        {
            loading? <ViewSpin></ViewSpin> :
            <div>
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
                            <img src="https://i.ibb.co/nDsw6mb/service-Cover-Three.jpg" alt="" />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 slideHeadingTwo">
                            <h1 className="textHeading lg:mb-56">Service <span className="weOffer">we offer</span></h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imagePera">
                            <p className="lg:mb-48">Take your digital transformation to the next level with Nexttech ITC's advanced and reliable IT solutions</p>
                        </div>

                    </SwiperSlide>
                </Swiper>




                {/* All Services Start */}

                <div className="flex flex-col items-center justify-center">
                    <div className=" flex items-center justify-center">
                        <h1 className="text-center aboutText lg:mt-10 ">Our <span className="text-orange-500">Services</span></h1>


                    </div>
                    <p className="text-center nextLvl mt-5">Next-level employee engagement ensures productivity retention, and alignment <br /> with organizational goal</p>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 ">
                        {
                            ServiceData.map((data =>
                                <div>
                                    <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-10">
                                        <img class="object-cover imgBackground imgClr w-full h-full transform duration-700 backdrop-opacity-100 " src={data.image} alt="" />
                                        <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                                        <div class="absolute bg-gradient-to-t  from-indigo-900 via-indigo-900 to-indigo-900 opacity-90  w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                                            <div class="absolute w-full flex place-content-center">
                                                <p class="capitalize font-heebo pb-10 font-bold text-2xl text-center shadow-2xl text-white mt-5">{data.name}</p>
                                            </div>
                                            <div class="absolute w-full flex place-content-center mt-20">
                                                <p class="font-sans text-center w-4/5 text-white mt-5">{data.intro}</p>
                                            </div>
                                            {/* <div class="absolute w-full flex place-content-center mt-56">
                                            <Link to='/contact'><h1 className="text-2xl text-white font-bold">Contact Us</h1></Link>

                                            </div> */}

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
                    }
                
                }
                    
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
                            <div class="m-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-400 dark:bg-orange-600">
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
                                <div class="m-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-400 dark:bg-orange-600">
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
                                <div class="m-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-400 dark:bg-orange-600">
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
                        <h1 className="tieckPera ml-3">Experienced Developers</h1>
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
           <Footer></Footer>
           </div>
        }
            
        </>
    );
};

export default Service;