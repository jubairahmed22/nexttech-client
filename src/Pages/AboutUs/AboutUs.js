import React from 'react';
import './AboutUs.css';

import { Swiper, SwiperSlide } from "swiper/react";






// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


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


const AboutUs = () => {
    return (
        <div className='mt-28'>
            <div className='grid lg:grid-cols-2 place-items-center'>
                <div>
                    <p className='firstImgPera'><span className='nexttechSpan'>NE<span className='xlogo'>X</span>TTECH ITC</span> is a highly regarded IT school and IT Solution provider located in Irving, TX. Since 2018, we have been at the forefront of cutting-edge technology education and comprehensive IT services, generating for individuals and businesses alike. Our team of experienced professionals is dedicated to providing personalized services that exceed even the most discerning expectations. Whether you are looking to develop your skills or require expert solutions, NEXTTECH ITC is
                        the optimal choice for those who demand the best in technology education and services.</p>
                </div>
                <div>
                    <img class="firstImg rounded-lg" src={require('../image/About Us Page/img/15.jpg')} alt="" />

                </div>
            </div>

            {/* 2ND GRID */}
            <div className='grid lg:grid-cols-2 place-items-center mt-20'>
                <div className=''>
                    <div>
                        <img className='secoundImg rounded-lg' src={require('../image/About Us Page/img/59.jpg')} alt="" />

                    </div>
                    <div>
                        <img className='thirdImg rounded-lg mt-5 ml-20' src={require('../image/About Us Page/img/60.jpg')} alt="" />

                    </div>
                </div>
                <div>
                    <p className='firstImgPera'><span className='nexttechSpan'>NE<span className='xlogo'>X</span>TTECH ITC BD</span> is a sister concern of USA based IT school and IT Solution of NEXTTECH ITC.  NEXTTECH ITC BD is a leading software firm and IT training institute that follows American teaching and work standards. Our mission is to provide comprehensive IT training that prepares individuals for successful careers in the industry. We offer courses in different IT platforms, based on real job environments, to equip our students with practical skills and knowledge. Our expert and knowledgeable instructors are working successfully in the IT industry, bringing real-world experience and expertise to the classroom. As a software firm, we design and develop innovative solutions that enhance business productivity and create a positive impact in society. We are committed to delivering exceptional
                        quality, reliability, and expertise to our clients and students alike.
                    </p>
                </div>




            </div>
            {/* 3RD GRID */}

            <div className='grid lg:grid-cols-2 place-items-center mt-32'>
                <div>
                    <h1 className='missonVisson text-center'>Mission & Vision</h1>
                    <p className='firstImgPera mt-10'>
                        Our mission is to provide world-class IT training that equips individuals with the skills and knowledge needed to succeed in the rapidly evolving world of technology. We are committed to developing innovative software solutions that drive business growth and create a positive impact in society. Our vision is to become a leading software firm and IT training institute, renowned for delivering cutting-edge IT solutions and producing highly skilled and competent IT professionals. We aspire to drive the growth of the IT industry in Bangladesh and beyond, and empower individuals to thrive in the digital age. We strive to be the preferred choice of
                        clients and students alike, known for our exceptional quality, reliability, and expertise.
                    </p>
                </div>
                <div>
                   <div class="grid grid-rows-3 grid-flow-col gap-4 ml-5 mt-10">
                      <div class="row-start-2 row-span-2 ...">
                            <img className='secoundImg rounded-lg' src={require('../image/About Us Page/img/36.jpg')} alt="" />

                        </div>
                        <div class="row-end-3 row-span-2 ...">
                            <img className='secoundImg rounded-lg' src={require('../image/About Us Page/img/42.jpg')} alt="" />

                        </div>
                     </div>
                 </div>
            
                
               
            </div>
                {/* 4th grid */}
            <div className='grid lg:grid-cols-2 place-items-center mt-20'>
                <div className=''>
                    
                    <div>
                        <h1 className='fouthPera text-center'>Why Choose Us!</h1>
                        <img className='firstImg rounded-lg ' src={require('../image/About Us Page/img/32.jpg')} alt="" />

                    </div>
                </div>
                <div>
                    <p className='firstImgPera mt-20'>At NEXTTECH ITC, we believe that the future belongs to those who are willing to embrace innovation and cutting-edge technology. That's why we offer the most comprehensive and innovative technology education and IT solutions. Our team of experienced professionals is dedicated to providing personalized, tailored solutions that exceed your expectations. Whether you're a beginner looking to develop your skills or an expert in need of premium solutions, NEXTTECH ITC is the optimal choice. Join our community of forward-thinking innovators and unlock your potential with NEXTTECH ITC. Let's build the future together.</p>
                </div>
          </div>
          <h1 className='fouthPera text-center mt-20'>Testimonial</h1>
          <div className="mt-10">
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
        </div>
    );
};

export default AboutUs;