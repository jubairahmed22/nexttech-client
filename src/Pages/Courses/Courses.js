import React, { useEffect, useState } from 'react';
import './Courses.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

// import required modules

// import required modules


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import "swiper/swiper.min.css";
import { Link } from 'react-router-dom';
import CourseModal from './CourseModal';
import { toast } from 'react-hot-toast';

const SeminarData = [
    {
        name: "UI UX Design",
        time: "Online time: 7:00 p.m.",
        date: "24th",
        month: "June",
        id: 1,
    },
    {
        name: "Cyber Security",
        time: "Online time: 8:00 p.m.",
        date: "26th",
        month: "June",
        id: 2,
    },
    {
        name: "Graphic Design",
        time: "Online time: 7:00 p.m.",
        date: "28th",
        month: "June",

        id: 3,
    },
    {
        name: "Full Stack Web Development",
        time: "Online time: 9:00 p.m.",
        date: "30th",
        month: "June",
        id: 4,
    },
    {
        name: "Front End Development",
        time: "Online time: 6:00 p.m.",
        date: "2th",
        month: "July",
        id: 5,
    },
    {
        name: "Backend Development",
        time: "Online time: 10:00 p.m.",
        date: "4th",
        month: "July",
        id: 6,
    },
]


const Courses = () => {


    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

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
        <div>
            <div className=''>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='slideMejar'>
                        <div className="cerocelImg">
                            <img src={require('../image/course/course-img/multiethnic-startup-business-team-meeting-modern-night-office-interior-brainstorming-working-laptop.jpg')} alt="" />
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                            <h1 className="textHeading ">Take the first step towards your dreams with us.</h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 imagePera">
                            <p>Explore our  popular and high-demand courses, a fast track to your independence</p>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
            <div className=''>

                <h1 className='OurCourse text-center mt-20 mb-20'>Our Courses</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-10'>
                    {
                        courses.map(course =>
                            <Link to={`/courseDetails/${course.id}`}>
                                <div className='courseCard shadow-xl gap-5 mb-20 transform transition duration-500 hover:scale-110 '>

                                    <img className='courseCardImg w-96 h-56' src={course.img} alt="" />
                                    <h1 className='m-5 courseCardText'>{course.name}</h1>
                                    <div className="rating m-5 mt-5">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </Link>
                        )}
                </div>
                <div>
                    <div className="  ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img className='imgCardIndian rounded' src={require('../image/course/course-img/group-four-indian-teen-male-students-classmates-spend-time-together.jpg')} alt="" />
                            <div className='grid lg:grid-cols-2 gap-10 cardIndianMejar mt-10'>
                                <div>
                                    <h1 className='cardIndianHeader ml-5'>Skilled instructor</h1>
                                    <p className='cardIndianPera mt-5 ml-5'>We have industry experts and skilled mentors who can
                                        provide the best training. They follow the rules at every
                                        step of the course training.
                                    </p>
                                </div>
                                <div>
                                    <h1 className='cardIndianHeader ml-5'>Online and offline courses</h1>
                                    <p className='cardIndianPera mt-5 ml-5'>We have pre-recorded and live courses available that you can
                                        take completely online and offline. In addition, you can take classes at
                                        any time according to your convenience and availability.</p>
                                </div>
                                <div>
                                    <h1 className='cardIndianHeader ml-5'>Assignment</h1>
                                    <p className='cardIndianPera mt-5 ml-5'>After each class, you will need to submit assignments according
                                        to the instructor's guidelines. This will ensure that you have no difficulty
                                        dealing with any kind of problems related to future real projects.</p>
                                </div>
                                <div>
                                    <h1 className='cardIndianHeader ml-5'>Life-time support</h1>
                                    <p className='cardIndianPera mt-5 ml-5'>NextTech ITC BD offers life-time and 24/7 time support for
                                        its students by skilled instructors.
                                        We are committed to this matter for all our students.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-base-200 rounded-xl'>
                        <div className="hero   mt-20 py-5">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img className='modalItemImg rounded-3xl' src={require('../image/course/course-img/beautiful-young-woman-working-with-audience.jpg')} alt="" />
                                <div>
                                    <h1 className="modalItemHeading">Participate our free seminar</h1>
                                    <p className="py-6 modalItemPera pr-20">
                                        Join us for our upcoming IT Training Free Seminar, where you will
                                        get vital skills and insights to advance your career in the technology sector.
                                        Our skilled instructors will cover a variety of topics, including programming
                                        languages, web development, cloud computing, and cybersecurity.
                                        This session is ideal for IT workers, students, and anybody else interested
                                        in learning more about the IT industry. Do not pass up this chance to acquire useful
                                        knowledge and increase your skill set. Register immediately to ensure your position!
                                    </p>

                                </div>
                            </div>

                        </div>
                        <h1 className="modalItemHeading pl-24 pt-20 text-center">Upcoming Seminar Schedule</h1>
                            <p className='modalItemPera pl-24 pr-32 pt-5'>You may have many questions about NextTech ITC Institute enrollment,
                                 course options, and benefits. Weekly free course-based seminars answer your queries.
                                 Course mentors can advise you during these sessions.</p>
                        <div className='px-24 pt-5 pb-20'>

                            {/* section join seminar start */}
                           
                            {
                                SeminarData.map(seminar =>
                                    <div class="block w-full">
                                        <div class="font-regular relative bg-white mb-4 block w-full rounded-l-xl flex flex-inline  bg-white  text-base rounded-r-xl  border-orange-400 border-4  leading-5 text-white opacity-100">
                                            <div className='text-2xl text-white font-bold px-5 bg-orange-400 py-1 w-32 text-center rounded-l-lg'>{seminar.date}<br></br>{seminar.month}</div>
                                            <div className='pl-4 text-black py-2 text-xl '>
                                                <h2>{seminar.name}</h2>
                                                <h2>{seminar.time}</h2>
                                            </div>

                                            <div className='absolute bottom-0 right-0 pr-4 py-3 z-10'>
                                                {/* <button className="btn btn-outline btn-warning text-xl px-4">Join</button> */}
                                                {/* The button to open modal */}
                                                <label htmlFor="my-modal-3" className="btn btn-outline btn-warning text-xl px-4">JOIN</label>

                                                {/* Put this part before </body> tag */}
                                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                                <div className="modal mt-20">
                                                    <div className="modal-box relative">
                                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                        <h3 className="text-lg font-bold text-black">If you want to join the seminar please fill the form !!</h3>

                                                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                                                            <h3 className='formName'>Your Name</h3>
                                                            <input name="name" type="text" placeholder="Type here" className="input w-full input-bordered text-black" />
                                                            <h3 className='formName'>Email Address</h3>
                                                            <input name="email" type="email" placeholder="Type here" className="input w-full input-bordered text-black" />
                                                            <h3 className='formName'>Phone Number</h3>
                                                            <input name="phone" type="phone" placeholder="Type here" className="input w-full input-bordered text-black" />
                                                            <h3 className='formName'>Course Name</h3>
                                                            <select name="course" type="course" className="select text-black w-full max-w-xs">
                                                                <option disabled selected>Choose Your Course Name</option>
                                                                <option value="UI UX Design">UI UX Design</option>
                                                                <option value="Cyber Security">Cyber Security</option>
                                                                <option value="Graphic Design">Graphic Design</option>
                                                                <option value="Full Stack Web Development">Full Stack Web Development</option>
                                                                <option value="Front End Development">Front End Development</option>
                                                                <option value="Backend Development">Backend Development</option>
                                                            </select>
                                                            <h3 className='formName'>Address</h3>

                                                            <input name="address" type="address" placeholder="Type here" className="input w-full input-bordered text-black" />
                                                            <br />

                                                            <input className='relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-600 transition-all ease-out duration-300 btn bg-orange-600 w-24 ' type="submit" value="Submit" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {/* section join seminar start */}

                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Courses;