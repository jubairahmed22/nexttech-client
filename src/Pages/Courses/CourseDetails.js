import React, { useRef } from 'react';
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
import CourseModal from './CourseModal';
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';

const CourseDetails = () => {

    const allCourses = useLoaderData();
    console.log(allCourses);

    const [active, setActive] = useState("FirstCard");


    const formRef = useRef(null);
    function handleBooking(event) {
        event.preventDefault();



        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        const address = event.target.elements.address.value;
        const course = event.target.elements.course.value;

        const formData = new FormData();
        formData.append('from', 'cnexttechitc@gmail.com');
        formData.append('to', 'cnexttechitc@gmail.com');
        formData.append('subject', 'Message From NEW-STUDENTS-ENROLLMENT-MESSAGE(NEXTTECHITC)');
        formData.append('text', `Name: ${name}\nEmail: ${email}\nCourse: ${course}\nPhone: ${phone}\nAddress: ${address}`);

        axios({
            method: 'post',
            url: 'https://api.mailgun.net/v3/sandbox1222c277fe274f1980d191e295af587c.mailgun.org/messages',
            auth: {
                username: 'api',
                password: '80ae86160fcc88d85bb02c98efbac90e-181449aa-fbdc4735'
            },
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(response => {
                console.log(response);
                alert('Successfully Submitted!');
                formRef.current.reset();
            })

            .catch(error => {
                console.log(error);
                alert('Error submitting message. Please try again later.');
            });
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="grid lg:grid-cols-2   gap-4  ">
            <div className=" leftLayOut ">
                {
                    allCourses.map(details =>
                        <div>
                            <img className='courseImg' src={details.img} alt="" />
                            <h1 className='courseName mt-5 lg:ml-5'>{details.name}</h1>
                            <h1 className='courseDescription mt-10 lg:ml-5'>Course Description</h1>
                            <p className='courseDespera mt-5 lg:ml-5'>{details.description}</p>
                            <h1 className='courseDescription courseDescriptionTwo mt-28 lg:ml-5'>Course Outline</h1>

                            <div className='inline-flex items-center mt-3'>
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
                                    <li className='OutlilnePera'>{details.OutlineSixPeraFour}</li>
                                </div>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineSevenTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineSevenPeraOne}</li>
                                    <li className='OutlilnePera'>{details.OutlineSevenPeraTwo}</li>
                                    <li className='OutlilnePera'>{details.OutlineSevenPeraThree}</li>
                                    <li className='OutlilnePera'>{details.OutlineSevenPeraFour}</li>

                                </div>
                                <div className='inline-flex items-center mt-5'>
                                    <img src={tick} className="tickmark " alt=''></img>
                                    <p className='OutlineTittle ml-3'>{details.outlineEightTittle}</p>
                                </div>
                                <div className=' items-center mt-3 ml-5'>
                                    <li className='OutlilnePera'>{details.OutlineEightPeraOne}</li>
                                    <li className='OutlilnePera'>{details.OutlineEightPeraTwo}</li>
                                    <li className='OutlilnePera'>{details.OutlineEightPeraThree}</li>
                                    <li className='OutlilnePera'>{details.OutlineEightPeraFour}</li>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="lg:ml-20  rightLayOut">
                <nav>
                    <div className='multiButtonSize'>
                        <div class="multi-button">
                            <button onClick={() => setActive("FirstCard")}>Online</button>
                            <button onClick={() => setActive("SecoundCard")}>Offline</button>

                        </div>
                    </div>

                </nav>
                <div className='mb-10 shadow-xl rounded-lg'>
                    {active === "FirstCard" && <DetailsOnline allCourses={allCourses} cardIndex={0} />}
                    {active === "SecoundCard" && <DetailsOffline allCourses={allCourses} cardIndex={1}></DetailsOffline>}
                    <hr className="w-100 h-1 mx-auto my-4 bg-orange-500 border-0 rounded md:my-10 dark:bg-orange-500" />

                    <h1 className='courseDescription ml-10'>Skill You Will Gain</h1>

                    {
                        allCourses.map(skill =>
                            <div className='grid skillPart lg:grid-cols-3 gap-5 p-10 buttonAll'>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl">{skill.skill1}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl">{skill.skill2}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl">{skill.skill3}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl">{skill.skill4}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl">{skill.skill5}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out text-xl group-hover:text-white">{skill.skill6}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out text-xl group-hover:text-white">{skill.skill7}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out text-xl group-hover:text-white">{skill.skill8}</span>
                                </a>
                                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-xl group">
                                    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-xl text-white transition-colors duration-200 ease-in-out group-hover:text-white">{skill.skill9}</span>
                                </a>
                            </div>
                        )
                    }
                </div>
                <div className='rounded-lg shadow-2xl p-5'>
                    <h1 className='courseDescription courseDescriptionFive'>Please fill out the form below with correct information</h1>
                    <p className='formPera mt-5'>After filling out the form, our representative will contact you shortly.</p>
                    <form onSubmit={handleBooking} ref={formRef} className='grid grid-cols-1 gap-3 mt-10 p-5'>
                        <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Your Name</h3>
                        <input name="name" type="text" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required/>
                        <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Email Address</h3>
                        <input name="email" type="email" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required/>
                        <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Phone Number</h3>
                        <input name="phone" type="phone" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required/>
                        <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Course Name</h3>
                        <select name="course" type="course" className="select text-indigo-900 text-xl font-bold dark:text-orange-400 " required>
                            <option disabled selected>Choose Your Course Name</option>
                            <option value="Software Testing">Software Testing</option>
                            <option value="Mobile Testing">Mobile Testing</option>
                            <option value="UI UX Design">UI UX Design</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Full Stack Web Development">Full Stack Web Development</option>
                            <option value="Front End Development">Front End Development</option>
                            <option value="Backend Development">Backend Development</option>
                        </select>
                        <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Address</h3>

                        <input name="address" type="address" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" />
                        <br />

                        <input className='relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-600 transition-all ease-out duration-300 btn bg-orange-600 w-24 ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
           
        </div>
       
        </div>
        
    );
    
};

export default CourseDetails;