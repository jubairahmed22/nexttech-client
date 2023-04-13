import React, { useState } from 'react';
import IndrustrySarvedHook from '../../Hooks/IndrustrySarvedHook';
import './Indrastry.css'
import { BsDot } from 'react-icons/bs';

const IndrastrySarved = () => {
    const { indrustryData } = IndrustrySarvedHook();
    const [visible, setvisible] = useState(3)
    const showMore = () => {
        setvisible(prevValue => prevValue + 3);
    };
    const showLess = () => {
        setvisible(3);
    };
    return (
        <div className='mt-10 pt-3 pb-3'>
            <h1 className='text-center mainHeading lg:mt-20 leading-sung'>Cutting Edge Solution <span className='text-orange-600'>For
                <br /> Your Business</span></h1>
            <p className='text-center subHeading'>Bright Your Business with the Virtual World</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mx-32 place-items-center mt-10 '>
                {
                    indrustryData.slice(0, visible).map(indrustry =>
                        <div className="boxCard shadow-xl mt-8 p-5 dark:border-4 rounded-2xl border-sky-500 transform transition duration-500 hover:scale-110 hover:shadow-2xl">
                            <div className="">
                                <div className="avatar flex ">
                                    <div className="w-34  rounded-full p-5">
                                        <img src={indrustry.img} alt="" />
                                    </div>

                                </div>
                                <h2 className="cardTittle ">{indrustry.name}</h2>
                                <p className='cardPera mt-3 pb-2'>{indrustry.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            {visible < indrustryData.length ?
            <div className="text-center mt-8">
                <button className=" mx-2 bg-orange-500 hover:bg-orange-600 text-white  font-bold py-2 px-2 border border-orange-500 rounded z-0 w-32" onClick={showMore}>Show More</button>
            </div>
            
            :  
            <div className="text-center mt-8">
            <button className="mx-2 bg-orange-500 hover:bg-orange-600 text-white  font-bold py-2 px-2 border border-orange-500 rounded z-0 w-32" onClick={showLess}>Show Less</button>
            </div>
        }
        
            <div>
                
                <h1 className='text-center mt-20 workTittle'>How we <span className='text-orange-500'>Work</span></h1>
                <h1 className='supportPera text-center'>Discover our streamlined process for delivering high-quality <br/> IT solutions and training to our clients</h1>

                <div className='grid lg:grid-cols-2 place-items-center lg:mx-32 mt-10 gap-20'>

                    <div className=''>
                  
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-24 h-24' />
                            <h1 className='boxImgOnelist mt-8'>Discover our streamlined process for delivering high-quality IT solutions and training to our clients.

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-24 h-24' />
                            <h1 className='boxImgOnelist mt-8'>Collaborate with our experts to develop a custom solution that meets your specific needs and goals

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-24 h-24' />
                            <h1 className='boxImgOnelist mt-8'>Leverage the latest technologies and industry best practices to design and implement innovative solutions

                            </h1>
                        </div>
                    
                        
                    </div>
                    <div>
                        <img className='boxImgTwo rounded' src='https://i.ibb.co/mb7xSw9/teacher-watching-student-doing-exercise-min.jpg' alt=''></img>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <h1 className='lg:mx-32 Support'>Support And <span className='text-orange-500'>Management</span></h1>
                <p className='lg:mx-32 supportPera text-center mt-5 '>Nexttech ITC provides customised help and management services <br /> to provide reliable support and efficient management.</p>
                <div className='grid lg:grid-cols-2 lg:mx-32 mt-10 place-items-center gap-20'>
                    <div>
                        <img className='boxImgOne rounded' src='https://i.ibb.co/jTsRMVP/group-young-business-people-working-office-min.jpg' alt=''></img>
                    </div>

                    <div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Industry Expertise: Experienced professionals with specialized knowledge.</h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Worldwide Presence: Global reach to serve you wherever you are.
                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Creative Approach: Unique solutions to meet your business needs.
                            </h1>
                        </div>

                    </div>
                </div>
                <div className='grid lg:grid-cols-2 lg:mx-32 place-items-center  mt-10 gap-20'>

                    <div >
        
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Collaborative Partnership: Work with us to achieve your goals.

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Customized Training: Personalized training programs for your organization.

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Continuous Improvement: Ongoing improvement for your success worldwide.

                            </h1>
                        </div>
                    </div>
                    <div>
                        <img className='boxImgTwo rounded' src='https://i.ibb.co/b2Wym77/Support-And-Management-2-min-1.jpg' alt=''></img>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default IndrastrySarved;