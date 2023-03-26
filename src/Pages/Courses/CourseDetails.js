import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import toast from 'react-hot-toast';
import tick from '../image/course/icon/check-mark.svg';
import ai from '../image/course/icon/illustrator.svg'
import figma from '../image/course/icon/figma.svg'
import xd from '../image/course/icon/xd.svg'
import { BsDot } from 'react-icons/bs';
import DetailsOnline from './DetailsOnline';
import { useState } from 'react';
import DetailsOffline from './DetailsOffline';

const CourseDetails = () => {

    const allCourses = useLoaderData();
    console.log(allCourses);

    const [active, setActive] = useState("FirstCard");

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const course = form.course.value;
        const address = form.address.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            name: name,
            address,
            email,
            course,
            phone,

        }
        console.log(booking);
        fetch('http://localhost:5000/mail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    alert('Your message is sent to admin')

                }
                else {
                    toast.error(data.message);
                }
            })




    }
    return (
        <div className="grid lg:grid-rows-3 gap-4 ">
            <div className="row-span-full col-span-10 leftLayOut ">
                {
                    allCourses.map(details =>
                        <div>
                            <img className='courseImg' src={details.img} alt="" />
                            <h1 className='courseName mt-5'>{details.name}</h1>
                            <h1 className='courseDescription mt-10'>Course Description</h1>
                            <p className='courseDespera mt-5'>{details.description}</p>
                            <h1 className='courseDescription mt-10'>Course Outline</h1>

                            <div className='inline-flex items-center mt-5'>
                                <img src={tick} className="tickmark " alt=''></img>
                                <p className='OutlineTittle ml-3'>{details.outlineOneTittle}</p>
                            </div>
                            <div className=' items-center mt-3 ml-5'>
                                <li className='OutlilnePera'>{details.OutlineOnePeraOne}</li>
                                <li className='OutlilnePera'>{details.OutlineOnePeraTwo}</li>
                                <li className='OutlilnePera'>{details.OutlineOnePeraThree}</li>
                            </div>
                            <div className=''>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineTwoTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineTwoPeraOne}</li>
                                    <li className='OutlilnePera'>{details.OutlineTwoPeraTwo}</li>
                                    <li className='OutlilnePera'>{details.OutlineTwoPeraThree}</li>
                                    <li className='OutlilnePera'>{details.OutlineTwoPeraFour}</li>
                                </div>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineThreeTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineThreePeraOne}</li>
                                    <li className='OutlilnePera'>{details.OutlineThreePeraTwo}</li>
                                    <li className='OutlilnePera'>{details.OutlineThreePeraThree}</li>
                                    <li className='OutlilnePera'>{details.OutlineThreePeraFour}</li>
                                </div>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineFourTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineFourPeraOne}</li>
                                    <li className='OutlilnePera'>{details.OutlineFourPeraTwo}</li>
                                    <li className='OutlilnePera'>{details.OutlineFourPeraThree}</li>
                                    <li className='OutlilnePera'>{details.OutlineFourPeraFour}</li>
                                </div>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineFiveTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineFivePeraOne}</li>
                                    <li className='OutlilnePera'>{details.OutlineFivePeraTwo}</li>
                                    <li className='OutlilnePera'>{details.OutlineFivePeraThree}</li>
                                    <li className='OutlilnePera'>{details.OutlineFivePeraFour}</li>
                                </div>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineSixTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineSixPeraOne}</li>
                                    <li className='OutlilnePera'>{details.OutlineSixPeraTwo}</li>
                                    <li className='OutlilnePera'>{details.OutlineSixPeraThree}</li>
                                </div>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineSevenTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineSevenPeraOne}</li>

                                </div>
                                <h1 className='courseDescription mt-5'>Software that will be taught</h1>
                                <div className='mt-8'>
                                    <div className='inline-flex items-center mt-5'>
                                        <img src={xd} className="logo" alt=''></img>
                                        <h1 className='logoText ml-5'>Adobe XD</h1>
                                    </div>
                                    <div className='inline-flex items-center mt-5 ml-5'>
                                        <img src={ai} className="logo" alt=''></img>
                                        <h1 className='logoText ml-5'>Adobe Illustrator</h1>
                                    </div>
                                    <div className='inline-flex items-center mt-5 ml-5'>
                                        <img src={figma} className="logo" alt=''></img>
                                        <h1 className='logoText ml-5'>Figma</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="row-span-full col-span-2  rightLayOut">
                <nav>
                    <div className='multiButtonSize'>
                        <div class="multi-button">
                        <button onClick={() => setActive("FirstCard")}>Online</button>
                        <button onClick={() => setActive("SecoundCard")}>Offline</button>

                    </div>
                    </div>

                </nav>
                <div className='mb-10 shadow-xl rounded-lg'>
                    {active === "FirstCard" && <DetailsOnline cardIndex={0} />}
                    {active === "SecoundCard" && <DetailsOffline cardIndex={1}></DetailsOffline>}
                <hr className="w-100 h-1 mx-auto my-4 bg-orange-500 border-0 rounded md:my-10 dark:bg-orange-500"/>
               
                <h1 className='courseDescription ml-10'>Skill You Will Gain</h1>
                <div className='grid lg:grid-cols-3 gap-5 p-10'>
                    <div className='p-2 text-lg font-bold rounded-full capsul transform transition duration-500 hover:scale-110 text-center tracking-wide items-center col-span-2'>User Experience (UX)</div>
                    <div className='p-2 text-lg font-bold rounded-full capsul text-center transform transition duration-500 hover:scale-110 '>UX Research</div>
                    <div className='p-2 text-lg font-bold rounded-full capsul text-center transform transition duration-500 hover:scale-110 '>Wireframe</div>
                    <div className='p-2 text-lg font-bold rounded-full capsul text-center col-span-2 tracking-wide transform transition duration-500 hover:scale-110 '>Usability Testing</div>
                    <div className='p-2 text-lg font-bold rounded-full capsul text-center transform transition duration-500 hover:scale-110 '>Prototype</div>

                    <div className='p-2 text-lg font-bold rounded-full capsul text-center transform transition duration-500 hover:scale-110 '>Mockup</div>
                    <div className='p-2 text-lg font-bold rounded-full capsul text-center transform transition duration-500 hover:scale-110 '>Figma</div>
                    <div className='p-2 text-lg font-bold rounded-full capsul text-center transform transition duration-500 hover:scale-110 '>Adobe XD</div>
                    <div className='p-2 text-lg font-bold rounded-full capsul text-center col-span-2 transform transition duration-500 hover:scale-110 '>UX design jobs</div>
                </div>
                </div>
                <div className='rounded-lg shadow-2xl p-5'>
                    <h1 className='courseDescription'>Please fill out the form below with correct information</h1>
                    <p className='formPera mt-5'>After filling out the form, our representative will contact you shortly.</p>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <h3 className='formName'>Your Name</h3>
                        <input name="name" type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <h3 className='formName'>Email Address</h3>
                        <input name="email" type="email" placeholder="Type here" className="input w-full input-bordered" />
                        <h3 className='formName'>Phone Number</h3>
                        <h3 className='formName'>Course Name</h3>
                        <input name="course" type="course" placeholder="Type here" className="input w-full input-bordered" />
                        <input name="phone" type="phone" placeholder="Type here" className="input w-full input-bordered" />
                        <h3 className='formName'>Address</h3>
                        <input name="address" type="address" placeholder="Type here" className="input w-full input-bordered" />
                        <br />

                        <input className='relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-600 transition-all ease-out duration-300 btn bg-orange-600 w-24 ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;