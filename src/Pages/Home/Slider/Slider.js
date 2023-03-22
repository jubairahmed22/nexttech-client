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
    const url = `http://localhost:5000/blogCategory`;

    fetch(url)
      .then(res => res.json())
      .then(data => {

        setcetagory(data);
      })
  }, [])
  return (
    <div className='mt-5 m-20 mb-20 z-0'>
      <h1 className='mainHading text-center z-0'>What we <span className='text-orange-500'>Do</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center mt-10 z-0'>


        <div class="container mt-5 shadow-2xl">

          <img src="https://i.ibb.co/3pnVYFD/3.jpg" className='image rounded-2xl imgRange' alt=''></img>

          <div class="overlay">

            <div className='mt-10 '>
              {
                cetagory.map(ceta =>
                  <Link to={`/blogLayout/${ceta.id}`} class="text flex flex-col">{ceta.name}</Link>
                )
              }
            </div>
          </div>
        </div>
        <div class="container mt-5 shadow-2xl">

          <img src="https://i.ibb.co/tCngDNf/5.jpg" className='image rounded-2xl imgRange' alt=''></img>

          <div class="overlay">

            <div className='mt-5 '>


              <div className='flex flex-col '>
                <div className='inline-flex items-center textTow'>
                  <BsDot className='text-white' />
                  <h1>HR & Payroll Software</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                  <BsDot className='text-white' />
                  <h1>Business Portfolio Website</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                  <BsDot className='text-white' />
                  <h1>Appointment Management System</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                  <BsDot className='text-white' />
                  <h1>Travel Agency & Tourism <br /> Management</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                  <BsDot className='text-white' />
                  <h1>Learning Management System (LMS)</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                  <BsDot className='text-white' />
                  <h1>POS System</h1>
                </div>
                <div className='inline-flex items-center textTow'>
                  <BsDot className='text-white' />
                  <h1>ERP System</h1>
                </div>
              </div>

            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Slider;