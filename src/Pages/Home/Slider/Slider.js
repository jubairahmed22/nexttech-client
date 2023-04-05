import React, { useEffect, useState } from 'react';
import SliderDataHooks from '../../Hooks/SliderDataHooks';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import './Slider.css'
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';

const Slider = () => {


  const [cetagory, setcetagory] = useState([]);
  useEffect(() => {
    const url = `https://server-nexttech.vercel.app/courses`;

    fetch(url)
      .then(res => res.json())
      .then(data => {

        setcetagory(data);
      })
  }, [])
  return (
    <div className='mt-5 lg:m-20 mb-20 '>
      <h1 className='dark:text-white mainHading text-center '>What we <span className='text-orange-500'>Do</span></h1>
      <div className='grid lg:grid-cols-2  sm:grid-cols-1 gap-3 place-items-center mt-10 '>


        <div class="container mt-5 shadow-2xl">

          <img src="https://i.ibb.co/PM8RRgD/Group-187.png" className='image rounded-2xl imgRange' alt=''></img>

          <div class="overlay">

            <div className='lg:mt-10'>
              {
                cetagory.map(ceta =>
                  <Link to={`/courseDetails/${ceta.id}`} class="text flex flex-col">{ceta.name}</Link>
                )
              }
            </div>
          </div>
        </div>
        <div class="container mt-5 shadow-2xl">

          <img src="https://i.ibb.co/nrM4CSq/Group-188.png" className='image rounded-2xl imgRange' alt=''></img>

          <div class="overlay">

            <div className='mt-5 '>
              <div className='flex flex-col'>
              <h1 className='textTow'>HR & Payroll Software</h1>
              <h1 className='textTow'>Business Portfolio Website</h1>
              <h1 className='textTow'>Appointment Management System</h1>
              <h1 className='textTow'>Learning Management System (LMS)</h1>
              <h1 className='textTow'>POS System</h1>
              <h1 className='textTow'>ERP System</h1>
              <h1 className='textTow '>Travel Agency & Tourism Management</h1>


              </div>


              {/* <div className='flex flex-col '>
                <div className='inline-flex items-center textTow'>
                  
                  <h1>HR & Payroll Software</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                 
                  <h1>Business Portfolio Website</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                 
                  <h1>Appointment Management System</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                 
                  <h1>Travel Agency & Tourism Management</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                 
                  <h1>Learning Management System (LMS)</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                 
                  <h1>POS System</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                 
                  <h1>ERP System</h1>
                </div>
              </div> */}

            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Slider;