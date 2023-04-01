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
        <div className='mt-10 pt-3 pb-3'>
            <h1 className='text-center mainHeading lg:mt-20 leading-sung'>Cutting Edge Solution <span className='text-orange-600'>For
                <br /> Your Business</span></h1>
            <p className='text-center subHeading'>Bright Your Business with the Virtual World</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mx-32 place-items-center mt-10'>
                {
                    indrustryData.slice(0, visible).map(indrustry =>
                        <div className="boxCard shadow-xl mt-5 p-5">
                            <div className="">
                                <div className="avatar flex ">
                                    <div className="w-34  rounded-full p-5">
                                        <img src={indrustry.img} alt="" />
                                    </div>
                                </div>
                                <h2 className="cardTittle ">{indrustry.name}</h2>
                                <p className='cardPera mt-5 pb-5'>{indrustry.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className='flex items-center justify-center mt-5'>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-6 border border-orange-500 rounded z-0" onClick={details}>Explore More</button>
            </div>

            <div className='mt-20'>
                <h1 className='lg:mx-32 Support'>Support And Management</h1>
                <p className='lg:mx-32 supportPera mt-5 '>Nexttech ITC provides customised help and management services <br /> to provide reliable support and efficient management.</p>
                <div className='grid lg:grid-cols-2 lg:mx-32 mt-10 place-items-center gap-20'>
                    <div>
                        <img className='boxImgOne' src='https://i.ibb.co/5RkjjsL/group-young-business-people-working-office.jpg' alt=''></img>
                    </div>
                    <div>
                        <li className='boxImgOnelist mt-5'>Remote and On-Site Technical Support</li>
                        <li className='boxImgOnelist mt-5'>Help Desk Support</li>
                        <li className='boxImgOnelist mt-5'>Network and Server Support</li>
                        <li className='boxImgOnelist mt-5'>Security and Data Protection</li>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 lg:mx-32 place-items-center  mt-10 gap-20'>

                    <div >
                        <li className='boxImgOnelist mt-5'>Network and Server Management</li>
                        <li className='boxImgOnelist mt-5'>Cybersecurity Management</li>
                        <li className='boxImgOnelist mt-5'>Data Backup and Recovery</li>
                        <li className='boxImgOnelist mt-5'>IT Consulting and Planning</li>
                    </div>
                    <div>
                        <img className='boxImgTwo' src='https://i.ibb.co/jTjTmBZ/group-casual-businessmen-working-desktop-computer-modern-open-plan-startup-office-interior-selective.jpg' alt=''></img>
                    </div>
                </div>

            </div>
            <div>
                <h1 className='text-center mt-20 workTittle'>How we <span className='text-orange-500'>Work</span></h1>
                <div className='grid lg:grid-cols-2 place-items-center lg:mx-32 mt-10 gap-20'>

                    <div className=''>
                        <h1 className='workText'>Find a professional adviser to guide your career development</h1>

                        <li className='boxImgOnelist mt-5'>Expert guidance</li>
                        <li className='boxImgOnelist mt-5'>In-depth evaluations and comments</li>
                        <li className='boxImgOnelist mt-5'>Comprehensive job guidance</li>
                    </div>
                    <div>
                        <img className='boxImgTwo' src='https://i.ibb.co/qMn6016/teacher-watching-student-doing-exercise.jpg' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndrastrySarved;