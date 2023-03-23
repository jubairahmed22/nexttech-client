import React, { useState } from 'react';
import IndrustrySarvedHook from '../../Hooks/IndrustrySarvedHook';
import './Indrastry.css'

const IndrastrySarved = () => {
    const { indrustryData } = IndrustrySarvedHook();
    const [visible, setvisible] = useState(3)
    const details = () => {
        setvisible((preValue => preValue + 3))
    }
    return (
        <div className='mt-10 background pt-3 pb-3'>
            <h1 className='text-center mainHeading mt-20 leading-sung'>Cutting Edge Solution <span className='text-orange-600'>For
                <br /> Your Business</span></h1>
            <p className='text-center subHeading'>Bright Your Business with the Virtual World</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-10'>
                {
                    indrustryData.slice(0, visible).map(indrustry =>
                        <div className=" w-96 h-96 shadow-xl mt-5 p-5">
                            <div className="">
                                <div className="avatar flex ">
                                    <div className="w-34 bg-gray-800 rounded-full p-5">
                                        <img src={indrustry.img} alt="" />
                                    </div>
                                </div>
                                <h2 className="card-title font-4xl">{indrustry.name}</h2>
                                <p>{indrustry.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className='flex items-center justify-center mt-5'>
                <button className="btn btn-info " onClick={details}>Explore All</button>
            </div>


        </div>
    );
};

export default IndrastrySarved;