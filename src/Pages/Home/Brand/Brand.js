import React from 'react';
import BrandHooks from '../../Hooks/BrandHooks';
import './Brand.css'

const Brand = () => {
    const { brand } = BrandHooks()
    return (
        <div className='mt-20 mb-20 lg-h-screen sm-h-screen background pt-5 pb-10'>
            <h1 className='text-center mt-10 mb-5 heading'><span className='text-orange-500'>We are Trusted by <br/> </span> Indrustry Leaders</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-20'>
    
            
            {
                brand.map(leader =>
                    <div className="w-96 h-56 mt-5">
                    <figure><img src={leader.img} className="rounded w-96 h-56 " alt="car!"/></figure>
                    
                  </div>
                )
            }
        </div>
        </div>
    );
};

export default Brand;