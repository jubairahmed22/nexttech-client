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
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';


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
                    <div >
                        <div className='HomeAllBackground rounded-xl'>
                        <div className='max-w-[1150px]  mx-auto '>
                        <h1 className="HeadingMainOne textMainAnim  text-left text-left text-center pt-32 ">NE<span className='text-orange-500'>X</span>TTECH ITC   <span className='TextMainThree'> </span></h1>
                        <p className='thirdText'>Leads Digital Transformation With Expertise</p>
                        <div className='lg:mt-20  lg:flex lg:flex-col absolute z-1 textFourth text-xl'>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500 lg:w-20 lg:h-20' />
                                                        <h1 className='lg:ml-5 sm:ml-2 clientDot'>Digital Solutions</h1>
                                                    </div>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500   lg:w-20 lg:h-20' />
                                                        <h1 className='lg:ml-5 sm:ml-2  clientDot'>IT Training</h1>
                                                       </div>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500 z-1 lg:w-20 lg:h-20' />
                                                                      <h1 className='lg:ml-5 sm:ml-2 clientDot '>Innovative Technology</h1>
                                                    </div>

                                              


                         </div>
                        </div>
                {/* <h1 className='text-center pt-20  text-white lg:mt-20'>Featured <span className='text-orange-600'>Courses</span>
                </h1> */}
                       </div>
                       
                        {/* <div className="absolute flex slideBox justify-end  -translate-y-1/2 homeTwoText ">
                            <div className='flex-col'>
                            <h1 className="textMainAnim ">NE<span className='text-orange-500'>X</span>TTECH ITC   <span className='TextMainThree'> </span></h1>
                                <p className='thirdText lg:ml-32 '>Leads Digital Transformation With Expertise</p>
                                <div className='lg:ml-32 lg:mt-5 lg:flex lg:flex-col textFourth text-xl'>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500 lg:w-20 lg:h-20' />
                                                        <h1 className='clientDot'>Digital Solutions</h1>
                                                    </div>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500 lg:w-20 lg:h-20' />
                                                        <h1 className='clientDot'>IT Training</h1>
                                                    </div>
                                                    <div className='inline-flex items-center'>
                                                        <BsDot className='text-orange-500 lg:w-20 lg:h-20' />
                                                        <h1 className='clientDot'>Innovative Technology</h1>
                                                    </div>

                                              


                                                </div>

                                            </div>

                        </div> */}
                       <div className='max-w-[1345px] mx-auto'>
                       <Slider></Slider>
                       <GlobalClients></GlobalClients>
                       <IndrastrySarved zIndex={500}></IndrastrySarved>
                       </div>

                        <Footer></Footer>
                    </div>

            }

        </div>
    );
};

export default HomeTwo;