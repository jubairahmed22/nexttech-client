import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import toast from 'react-hot-toast';
import tick from '../image/course/icon/check-mark.svg';
import ai from '../image/course/icon/illustrator.svg'
import figma from '../image/course/icon/figma.svg'
import xd from '../image/course/icon/xd.svg'
import { TiTick } from 'react-icons/ti';
import DetailsOnline from './DetailsOnline';
import { useState } from 'react';
import DetailsOffline from './DetailsOffline';
import CourseModal from './CourseModal';
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';
import { BsDot } from 'react-icons/bs';

const leftData = [
    {
        name: "Interested in freelancing",
        img: "https://i.ibb.co/pbSnqFz/Group-438.png"
    },
    {
        name: "Job seeker",
        img: "https://i.ibb.co/HxSqfLQ/Group-437.png"
    },
    {
        name: "Student",
        img: "https://i.ibb.co/CQ119xV/Group-436.png"
    },
    {
        name: "Homemaker",
        img: "https://i.ibb.co/hByb9TN/Group-435.png"
    },
    {
        name: "Foreign Resident",
        img: "https://i.ibb.co/y0MnM8x/Icons.png"
    },
    {
        name: "entrepreneur",
        img: "https://i.ibb.co/LNFykFY/interpretation.png"
    },
]
const specialData = [
    {
        name: "Lifetime Support",
        img: "https://i.ibb.co/PcxWnCh/Group-448.png",
        description: "After the training is completed, the relationship with you doesn't end here. As a student of Creative IT, you receive lifelong support. You can access 24/7 online support at any time. Our experienced team ensures this support, whether offline or online, based on the subject matter."
    },
    {
        name: "Important Class Videos",
        img: "https://i.ibb.co/PCR08BP/Group-447.png",
        description: "Many times, students struggle to understand certain topics in class. For their convenience, class videos are available. Now, students can attend classes without any worries. In case of any difficulties, you can watch the videos and solve any problem on your own."
    },
    {
        name: "Career Placement Support",
        img: "https://i.ibb.co/VTTczf6/Group-450.png",
        description: "The Career Placement Department works to ensure that the students' resumes reach the right place according to their qualifications. From here, you will receive grooming and career guideline seminars that will give you an edge over others in the job market. These seminars will help you stay ahead in your career race."
    },
    {
        name: "Virtual Internship",
        img: "https://i.ibb.co/yd4KY1n/Group-449.png",
        description: "Nexttech ITC offers internship opportunities for its students. Even though it is virtual, you will have the opportunity to gain real office experience. So, after completing the course, you can work with industry experts from the comfort of your own home through virtual internships. Additionally, there are also office work facilities available."
    },
]


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
        formData.append('from', 'infonexttechitcus@gmail.com');
        formData.append('to', 'infonexttechitcus@gmail.com');
        formData.append('subject', 'Message From NEW-STUDENTS-ENROLLMENT-MESSAGE(NEXTTECHITC)');
        formData.append('text', `Name: ${name}\nEmail: ${email}\nCourse: ${course}\nPhone: ${phone}\nAddress: ${address}`);

        axios({
            method: 'post',
            url: 'https://api.mailgun.net/v3/sandbox97c0ccacea3d492c89ffda76258a09c2.mailgun.org/messages',
            auth: {
                username: 'api',
                password: 'bae1ce8de25cff6e2c4abfddf892e08c-135a8d32-f14af332'
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
        <div className='max-w-[1345px]  mx-auto'>
            <div className='grid lg:grid-cols-2 sm:grid-col-1 gap-5 '>
                <div className='left'>
                    <div className="">
                        {
                            allCourses.map(details =>
                                <div className=''>

                                    <img className='courseImg ' src={details.img} alt="" />


                                    <h1 className='courseName mt-5 lg:ml-5'>{details.name}</h1>
                                    <h1 className='courseDescription mt-10 lg:ml-5'>Course Description</h1>
                                    <p className='courseDespera mt-5 lg:ml-5'>{details.description}</p>
                                    <h1 className='courseDescription courseDescriptionTwo mt-28 lg:ml-5'>Course Outline</h1>

                                    <ul>
                                        {details.topics.map((topic, topIndex) => (
                                            <li key={topic.name}>

                                                <h3 className='text-2xl OutlineTittle mb-5 mt-5 ml-5'> {topic.name}</h3>
                                                <ul>
                                                    {topic.subtopics.map((subtopic, subtopicIndex) => (
                                                        <div>


                                                            <div className='flex inline-flex' style={{ marginLeft: '10px' }}>
                                                                <TiTick className='mt-5 ml-5'></TiTick>
                                                                <li className='text-2xl ml-3 OutlilnePera mt-3' key={subtopic} style={{ lineHeight: '1.5em', maxHeight: '4.5em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                    {subtopic}
                                                                </li>
                                                            </div>
                                                        </div>


                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            )
                        }
                    </div>

                    <div className='p-5 mt-5  '>
                        <div className=' p-5 lg:pr-20 rounded '>
                            <h1 className='text-3xl font-bold dark:text-orange-500'>Software that will be taught</h1>

                            {
                                allCourses.map(all =>
                                    <div className=''>
                                        <div className='inline-flex items-center mt-10'>
                                            <img className='w-10 h-10' src={all.softImgOne} alt=''></img>
                                            <h1 className='ml-2 text-xl font-bold dark:text-orange-500'>{all.softNameOne}</h1>

                                        </div>
                                        <div className='inline-flex items-center mt-10 ml-10'>
                                            <img className='w-10 h-10' src={all.softImgTwo} alt=''></img>
                                            <h1 className='ml-2 text-xl font-bold dark:text-orange-500'>{all.softNameTwo}</h1>

                                        </div>
                            
                                    </div>
                                )
                            }
                        </div>
                        <div className='mt-20 bg-orange-100 hover:bg-orange-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 rounded p-5'>
                            <h1 className='text-3xl font-bold dark:text-white'>Positions in which you can work</h1>
                            <div className="">
                        {
                            allCourses.map(details =>
                                <div className=''>

                

                                    <ul>
                                        {details.possionsWork.map((topic, topIndex) => (
                                            <li key={topic.name}>

                                                <ul>
                                                    {topic.works.map((subtopic, subtopicIndex) => (
                                                        <div>


                                                            <div className='flex inline-flex' style={{ marginLeft: '10px' }}>
                                                                <TiTick className='mt-5 ml-5'></TiTick>
                                                                <li className='text-2xl ml-3 OutlilnePera mt-3 ' key={subtopic} style={{ lineHeight: '1.5em', maxHeight: '4.5em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                    {subtopic}
                                                                </li>
                                                            </div>
                                                        </div>


                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            )
                        }
                    </div>

                        </div>
                    </div>
                </div>
                <div className='right lg:ml-32'>
                    <nav>
                        <div className='mt-8'>
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
                                            <span class="absolute top-0 righ
                                            t-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
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

                        <div className='rounded-lg  p-5'>
                            <h1 className='text-4xl font-bold dark:text-zinc-50'>Please fill out the form below with correct information</h1>
                            <p className='formPera mt-5 dark:text-zinc-50'>After filling out the form, our representative will contact you shortly.</p>
                            <form onSubmit={handleBooking} ref={formRef} className='grid grid-cols-1 gap-3 mt-10 p-5'>
                                <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Your Name</h3>
                                <input name="name" type="text" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required />
                                <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Email Address</h3>
                                <input name="email" type="email" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required />
                                <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Phone Number</h3>
                                <input name="phone" type="phone" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required />
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
                        <div className='p-10 bg-base-100'>
                            <h1 className='font-bold  text-3xl dark:text-zinc-50'>For whom this course is intended</h1>
                            <div className='grid grid-cols-2 gap-5 mt-10'>
                                {
                                    leftData.map(left =>
                                        <div className='bg-slate-50 dark:bg-orange-500 w-48 h-48 rounded  p-3'>
                                            <div className=' flex items-center justify-center'>

                                                <img className='w-22 h-20' src={left.img} alt=''></img>
                                            </div>
                                            <h1 className='font-bold text-xl text-center mt-3 dark:text-zinc-50'>{left.name}</h1>
                                        </div>

                                    )
                                }
                            </div>

                            <div className='p-5 mt-5'>
                                <h1 className='text-3xl   font-bold dark:text-white'>You can work in these field</h1>
                                <div className='mt-10'>
                                    {
                                        allCourses.map(all =>
                                            <div className='grid lg:grid-cols-2 gap-4 ' >
                                                <div className='bg-zinc-100 dark:bg-orange-500 dark:text-white p-3 rounded'>
                                                    <img src='https://i.ibb.co/vPzV3WD/Group-445.png' alt=''></img>
                                                    <h1 className='text-xl mt-5'>{all.workOne}</h1>
                                                </div>
                                                <div className='bg-zinc-100 dark:bg-orange-500 dark:text-white p-3 rounded'>
                                                    <img src='https://i.ibb.co/wKG5mmV/Group-444.png' alt=''></img>
                                                    <h1 className='text-xl mt-5'>{all.workTwo}</h1>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=''>
                <h1 className='text-5xl mt-20 font-bold text-center dark:text-white'>Special services of Nexttech ITC</h1>
                <div className='p-5 gap-5 grid grid-cols-2 mt-10 place-items-center lg:h-screen md:h-screen sm:h-screen '>
                    {
                        specialData.map(special =>
                            <div className='p-5 bg-orange-100 transition duration-2000 hover:bg-orange-200 rounded-2xl'>
                                <img src={special.img} alt=''></img>
                                <h1 className='mt-5 font-bold text-xl dark:text-orange-500'>{special.name}</h1>
                                <p className='mt-5 dark:text-indigo-900 text-lg'>{special.description}</p>
                            </div>
                        )
                    }
                </div>

            </div>
            <Footer className='mt-20'></Footer>
            {/* <div className="grid lg:grid-cols-2   gap-4  ">
                <div className=" leftLayOut ">
                    {
                        allCourses.map(details =>
                            <div>
                                <img className='courseImg' src={details.img} alt="" />
                                <h1 className='courseName mt-5 lg:ml-5'>{details.name}</h1>
                                <h1 className='courseDescription mt-10 lg:ml-5'>Course Description</h1>
                                <p className='courseDespera mt-5 lg:ml-5'>{details.description}</p>
                                <h1 className='courseDescription courseDescriptionTwo mt-28 lg:ml-5'>Course Outline</h1>

                                <ul>
                                    {details.topics.map((topic, topIndex) => (
                                        <li key={topic.name}>
                                           
                                            <h3 className='text-2xl OutlineTittle mb-5 mt-5 ml-5'> {topic.name}</h3>
                                            <ul>
                                                {topic.subtopics.map((subtopic, subtopicIndex) => (
                                            <div>
                                           
                                            
                                            <div className='flex inline-flex' style={{ marginLeft: '10px' }}>
                                              <TiTick className='mt-5 ml-5'></TiTick>
                                              <li className='text-2xl ml-3 OutlilnePera mt-3' key={subtopic} style={{ lineHeight: '1.5em', maxHeight: '4.5em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {subtopic}
                                              </li>
                                            </div>
                                          </div>
                                          
                                             
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
        
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
                            <input name="name" type="text" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required />
                            <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Email Address</h3>
                            <input name="email" type="email" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required />
                            <h3 className='text-indigo-900 text-xl font-bold dark:text-white'>Phone Number</h3>
                            <input name="phone" type="phone" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-xl font-bold dark:text-orange-400" required />
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
           */}
        </div>

    );

};

export default CourseDetails;