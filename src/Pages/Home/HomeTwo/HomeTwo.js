import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsDot } from 'react-icons/bs';





// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "./HomeTwo.css"
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Slider from '../Slider/Slider';
import IndrastrySarved from '../IndrastrySarved/IndrastrySarved';
import Footer from '../../Shared/Footer/Footer';
import SpinLoading from '../../Shared/SpinLoading/SpinLoading';
import ViewSpin from '../../Shared/SpinLoading/ViewSpin';
import GlobalClients from '../GlobalClients/GlobalClients';
import CustomerSays from '../CustomerSays/CustomerSays';


const SlideData = [
    {
        image: "https://i.ibb.co/DbnMSzx/homefinal.jpg",
        name: "HR & Payroll Software",
        prev: 6,
        id: 1,
        next: 2
    },

]




const HomeTwo = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 400)
    }, [])
    

    return (
        <div>
            {
                loading ? <ViewSpin></ViewSpin> :
                    <div>
                        <Swiper


                            pagination={false}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="bookSwiper ">

                            {
                                SlideData.map(slideSS => <SwiperSlide className='mb-12 slideOne'>

                                    <div class="relative  overflow-hidden bg-cover bg-no-repeat ">
                                        <div className='imgOverlyOut'>
                                            <img
                                                src={slideSS.image}
                                                class="transition duration-300  imgSizeTool "
                                                alt="Louvre z-1" />
                                        </div>
                                        <div className="absolute flex slideBox justify-end  -translate-y-1/2 homeTwoText ">
                                            <div className='flex-col'>
                                                <h1 className="textMainAnim lg:ml-32 z-40">NE<span className='text-orange-500'>X</span>TTECH ITC   <span className='TextMainThree'> </span></h1>
                                                <p className='lg:ml-32 slideFont'>Leads Digital Transformations With Expertise</p>
                                              
                                               
                                                <div className='lg:ml-32 lg:mt-5 lg:flex lg:flex-col text-xl'>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500 lg:w-20 lg:h-20' />
                                                        <h1 className='clientDot'>Digital Solutions</h1>
                                                    </div>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500 lg:w-20 lg:h-20' />
                                                        <h1 className='clientDot'>IT Training</h1>
                                                    </div>
                                                    <div className='inline-flex items-center lg:pb-5'>
                                                        <BsDot className='text-orange-500 lg:w-20 lg:h-20' />
                                                        <h1 className='clientDot'>Innovative Technology</h1>
                                                    </div>
                                                </div>
                                     
                                            </div>

                                        </div>
                                    </div>


                                </SwiperSlide>)
                            }

                        </Swiper>
                        
                        <Slider></Slider>
                        {/* <GlobalClients></GlobalClients> */}
                        <IndrastrySarved zIndex={500}></IndrastrySarved>
                       
                        <Footer></Footer>
                    </div>

            }

        </div>
    );
};

export default HomeTwo;