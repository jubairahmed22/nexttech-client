import React, { useEffect, useState } from 'react';
import './AboutUs.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';






// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Footer from '../Shared/Footer/Footer';
import ViewSpin from '../Shared/SpinLoading/ViewSpin';


const SlideData = [
    {
        name: "Abu Saeed Mohammad",
        subName: "Full Stack Developer",
        description: "For me, NextTech ITC is a name of blessings. I was a student of NextTech ITC now an Alumni. I have learned all the latest tools technologies during our course and my course instructor Khandaker Nayeem Akbar is a good teacher. His explanation made things easy to understand and practice. If you want to make a really big career move in your life, and if you are ready to take control of your life, NextTech ITC is here to help you. Even with minimum knowledge and qualification, you can take this course. NextTech ITC's course curriculum will make you knowledgeable and qualified. You just need to pay proper attention and time to it.",
        prev: 6,
        id: 1,
        next: 2
    },
    {

        name: "Ashequr Rahman",
        subName: "Software Engineer",
        description: "Hi There! I am taking a chance to share my feelings regarding NextTech ITC. They are the best. They are working for community development, creating skills person and many more. They changed my life. Now I recommend everyone to enroll NextTech. Now I am Alumni of NextTech. I got job but still they are helping me whenever I need help. Their teaching system, grooming, interview prep and job searching process are well developed. If you enrolled once you will be life time member. Thanks",
        prev: 6,
        id: 1,
        next: 2
    },
    {

        name: "Mohammad Islam",
        subName: "Software Engineer",
        description: "If you want to build your career in IT field, NextTech ITC is a place to start. With only 4 months of hands on training, you can land on a high paying IT job. Their grooming session is very helpful and prepares you for the interview. Also group study will help you a lot. Of course if you want to succeed in any career field you need to work hard, have dedication and being open minded to ask questions and helpful to others.",
        prev: 6,
        id: 1,
        next: 2
    },
    {

        name: "Tajreen Haque",
        subName: "Software Engineer",
        description: "Nayeem Bhai and Jahan bhai are doing a great job for the Bangladeshi community in encouraging people to get into IT sector because if it’s huge demand. Nonetheless, my experience was great starting from learning the materials and participating in the bootcamp. Definitely, I would recommend others to give it a shot.",
        prev: 6,
        id: 1,
        next: 2
    },

]


const AboutUs = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(() =>{
          setLoading(false);
      },300)
    },[])
    return (
        <div>
        <div className='max-w-[1345px]  mx-auto'>
            {
                 loading? <ViewSpin></ViewSpin> :<div className=''>
                 <div className='grid lg:grid-cols-2 place-items-center'>
                     <div>
                         <p className='firstImgPera mr-5  mt-28'><span className='nexttechSpan'>NE<span className='xlogo'>X</span>TTECH ITC</span> is a highly regarded IT school and IT Solution provider located in Irving, TX. Since 2018, we have been at the forefront of cutting-edge technology education and comprehensive IT services, generating for individuals and businesses alike. Our team of experienced professionals is dedicated to providing personalized services that exceed even the most discerning expectations. Whether you are looking to develop your skills or require expert solutions, NEXTTECH ITC is
                             the optimal choice for those who demand the best in technology education and services.</p>
                     </div>
                     <div>
                         <img class="firstImg rounded-lg mt-24" src={require('../image/About Us Page/img/15.jpg')} alt="" />
     
                     </div>
                 </div>
     
                 {/* 2ND GRID */}
                 <div className='grid lg:grid-cols-2 place-items-center mt-20'>
                     <div className=''>
                         <div>
                             <img className='secoundImg rounded-lg' src={require('../image/About Us Page/img/59.jpg')} alt="" />
     
                         </div>
                         <div>
                             <img className='thirdImg rounded-lg mt-5 lg:ml-20' src={require('../image/About Us Page/img/60.jpg')} alt="" />
     
                         </div>
                     </div>
                     <div>
                         <p className='firstImgPera'><span className='nexttechSpan'>NE<span className='xlogo'>X</span>TTECH ITC</span> is a leading software firm and IT training institute that follows American teaching and work standards. Our mission is to provide comprehensive IT training that prepares individuals for successful careers in the industry. We offer courses in different IT platforms, based on real job environments, to equip our students with practical skills and knowledge. Our expert and knowledgeable instructors are working successfully in the IT industry, bringing real-world experience and expertise to the classroom. As a software firm, we design and develop innovative solutions that enhance business productivity and create a positive impact in society. We are committed to delivering exceptional
                             quality, reliability, and expertise to our clients and students alike
                         </p>
                     </div>
     
     
     
     
                 </div>
                 {/* 3RD GRID */}
     
                 <div className='grid lg:grid-cols-2 place-items-center mt-32                  '>
                     <div>
                         <h1 className='missonVisson text-center'>Mission & Vision</h1>
                         <p className='firstImgPera mt-10 '>
                             Our mission is to provide world-class IT training that equips individuals with the skills and knowledge needed to succeed in the rapidly evolving world of technology. We are committed to developing innovative software solutions that drive business growth and create a positive impact in society. Our vision is to become a leading software firm and IT training institute, renowned for delivering cutting-edge IT solutions and producing highly skilled and competent IT professionals. We aspire to drive the growth of the IT industry in Bangladesh and beyond, and empower individuals to thrive in the digital age. We strive to be the preferred choice of
                             clients and students alike, known for our exceptional quality, reliability, and expertise.
                         </p>
                     </div>
                     <div>
                         <div class="grid grid-rows-3 grid-flow-col gap-4 lg:ml-5 mt-10">
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
                             <img className='firstImg rounded-lg' src={require('../image/About Us Page/img/32.jpg')} alt="" />
     
                         </div>
                     </div>
                     <div>
                         <p className='firstImgPera mt-20 ml-5'>At <span className='nexttechSpan'>NE<span className='xlogo'>X</span>TTECH ITC</span>, we believe that the future belongs to those who are willing to embrace innovation and cutting-edge technology. That's why we offer the most comprehensive and innovative technology education and IT solutions. Our team of experienced professionals is dedicated to providing personalized, tailored solutions that exceed your expectations. Whether you're a beginner looking to develop your skills or an expert in need of premium solutions, NEXTTECH ITC is the optimal choice. Join our community of forward-thinking innovators and unlock your potential with NEXTTECH ITC. Let's build the future together.</p>
                     </div>
                 </div>
                 <h1 className='fouthPera text-center mt-20'>Testimonial</h1>
                 <div className="mt-10">
                     <Swiper
                         effect={"coverflow"}
                         grabCursor={true}
                         centeredSlides={false}
                         coverflowEffect={{
                             rotate: 0,
                             stretch: 0,
                             depth: 0,
                             modifier: 1,
                             slideShadows: false,
                         }}
                         pagination={false}
                         modules={[EffectCoverflow, Pagination]}
                         className="bookSwiper"
                         breakpoints={{
                             // when window width is >= 640px
                             640: {
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
                     >
     
     
                         {
                             SlideData.map(slideSS => <SwiperSlide className='ml-5 mb-12 mt-10'>
     
                                 <div className="card lg:w-96 min-w-fit  bg-base-100 shadow-xl">
                                     <div className="card-body">
                                         <h1 className='dark:text-white text-indigo-900 text-2xl font-bold mt-10'>{slideSS.name}</h1>
                                         <p className='dark:text-white text-indigo-900 text-xl'>{slideSS.subName}</p>
     
                                         <p className='dark:text-white text-indigo-900 text-md'>
                                            <blockquote className='blockquote'><span><FaQuoteLeft></FaQuoteLeft></span>{slideSS.description}<span><FaQuoteRight></FaQuoteRight></span></blockquote>
                                         </p>
                                     </div>
                                 </div>
     
     
     
     
                             </SwiperSlide>)
                         }
                     </Swiper>
                 </div>
                
             </div>
            }
        
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AboutUs;