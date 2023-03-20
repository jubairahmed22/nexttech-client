import React from 'react';
import './GlobalClients.css'

const GlobalClients = () => {
    return (
        <div>
        <h1 className='text-center mt-10 mb-5 text-6xl font-bold heading'>Our <span className='text-orange-500'>Global Clients</span></h1>
        <div className='flex justify-center items-center'>
        <img className='mt-10 imgSize ' src="https://i.ibb.co/zZtY3j7/world-map-with-abstract-colorful-triangular-texture.jpg" alt="" />
        </div>            
        </div>
    );
};

export default GlobalClients;