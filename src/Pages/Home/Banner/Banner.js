import React from 'react';
import { BsDot } from 'react-icons/bs';


const Banner = () => {
    return (
        <div className='mt-5'>
            <div className="hero " style={{ backgroundImage: `url("https://i.ibb.co/vJn9wMf/Rectangle-3.png")`, height: 500 }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">NE<span className='text-orange-500'>X</span>TTECH ITC BD manages</h1>
      <p className="mb-5 text-4xl">It workface from the onboarding to exit interviews </p>
     
        <div className='flex flex-col text-xl'>
        <div className='inline-flex items-center'>
        <BsDot className='text-white'/>
        <h1>Client Based</h1>
        </div>
        <div className='inline-flex items-center'>
        <BsDot className='text-white'/>
        <h1>Web based interface</h1>
        </div>
        <div className='inline-flex items-center'>
        <BsDot className='text-white'/>
        <h1>Campain Management</h1>
        </div>
        </div>
      
      <button className="btn btn-primary mt-5">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;