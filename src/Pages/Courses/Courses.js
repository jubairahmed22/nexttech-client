import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './Courses.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules

// import required modules


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


import { Link } from 'react-router-dom';
import CourseModal from './CourseModal';
import { toast } from 'react-hot-toast';
import SpinLoading from '../Shared/SpinLoading/SpinLoading';
import Footer from '../Shared/Footer/Footer';
import ViewSpin from '../Shared/SpinLoading/ViewSpin';

const SeminarData = [
    {
        name: "Software Testing",
        time: "Online time: 2:00 pm(cst)",
        date: "13th",
        month: "May",
        id: 1,
    },
    {
        name: "Mobile Testing",
        time: "Online time: 10:00 pm",
        date: "22th",
        month: "June",
        id: 1,
    },
    {
        name: "UI UX Design",
        time: "Online time: 7:00 pm",
        date: "24th",
        month: "June",
        id: 1,
    },
    {
        name: "Cyber Security",
        time: "Online time: 8:00 pm",
        date: "26th",
        month: "June",
        id: 2,
    },
    {
        name: "Graphic Design",
        time: "Online time: 12:00 pm(cst)",
        date: "6th",
        month: "May",

        id: 3,
    },
    {
        name: "Full Stack Web Development",
        time: "Online time: 9:00 pm",
        date: "30th",
        month: "June",
        id: 4,
    },
    {
        name: "Front End Development",
        time: "Online time: 6:00 pm",
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

        fetch('https://server-nexttech.vercel.app/courses')

            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

 
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
        formData.append('subject', 'Message From SEMINAR-STUDENTS(NEXTTECHITC)');
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


    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(() =>{
          setLoading(false);
      },300)
    },[])

    return (
        <div>
            {
                loading? <ViewSpin></ViewSpin> :
                <div>
                <div className=''>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className=''>
                            <div className="courseBannerImg">
                                <img src="https://i.ibb.co/q92f2N0/course-THREE.jpg" alt="" />
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                                <h1 className="slideFontHeading lg:ml-8">Take the first step towards your dreams <br/>  with us</h1>
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 slideFontPera">
                                <p className='slideFontPeraTwo ml-10 lg:mt-20'>Explore our most popular and high-demand courses, a fast track to your independence</p>
                            </div>
    
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='pt-10'>
    
                    <h1 className='OurCourse  text-center mt-20 mb-20'>Our Courses</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-10 '>
                        {
                            courses.length === 0 ? <div><SpinLoading /></div> : courses.map(course =>
                                <Link to={`/courseDetails/${course.id}`}>
                                    <div className='courseCard dark:border-4 border-sky-500 shadow-lg rounded-2xl gap-5 mb-20 transform transition duration-500 hover:scale-110 hover:shadow-2xl'>
    
                                        <img className='courseCardImg w-96 h-56 rounded-t-2xl' src={course.img} alt="" />
                                        <h1 className='m-5 courseCardText'>{course.name}</h1>
                                        <div className="rating m-5 mt-5 ">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
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
                                <img className='imgCardIndian rounded' src='https://i.ibb.co/867vBTw/group-four-indian-teen-male-students-classmates-spend-time-together.jpg' alt="" />
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
                        <div className='bg-base-200 pb-20 rounded-xl'>
                            <div className="hero   mt-20 py-5">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img className='modalItemImg rounded-3xl ' src='https://i.ibb.co/nzL82gL/67.jpg' alt="" />
                                    <div>
                                        <h1 className="modalItemHeading">Participate our free seminar</h1>
                                        <p className="lg:py-6 modalItemPera lg:pr-20">
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
                            <h1 className="modalItemHeading lg:pl-24 pt-20 text-center">Upcoming Career Sessions</h1>
                            <p className='modalItemPera lg:pl-24 lg:pr-32 pt-5'>You may have many questions about NextTech ITC Institute enrollment,
                                course options, and benefits. Weekly free course-based seminars answer your queries.
                                Course mentors can advise you during these sessions.</p>
                            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5 mt-5 place-items-center'>
    
                                {/* section join seminar start */}
    
                                {
                                    SeminarData.map(seminar =>
                                        <div>
                                            
                                            <div className='bg-white w-56 h-56 rounded-xl bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900'>
                                                <div className='text-center text-white text-4xl font-bold mt-5 pt-2'>{seminar.date}<br></br>{seminar.month}</div>
                                                <div className='text-center text-white text-sm font-bold mt-5'>
                                                    <h2>{seminar.name}</h2>
                                                    <h2>{seminar.time}</h2>
                                                </div>
    
                                                <div className='flex justify-center mt-5'>
    
                                                    {/* The button to open modal */}
                                                    <label htmlFor="my-modal-4" className="btn border-2 bg-transparent border-orange-500  hover:bg-gradient-to-r from-orange-500 hover:border-2 hover:border-orange-500 via-orange-500 to-orange-500 text-white text-lg font-bold py-1 px-6  rounded-full z-0 w-32">JOIN</label>
    
                                                    {/* Put this part before </body> tag */}
                                                    <input type="checkbox" id="my-modal-4" className="modal-toggle " />
                                                    <label htmlFor="my-modal-4" className="modal cursor-pointer ">
                                                        <label className="modal-box relative  z-5" htmlFor="">
                                                        <form onSubmit={handleBooking} ref={formRef} className='grid grid-cols-1 gap-3  p-2'>
                                                             <div className='grid grid-cols-2 gap-2'>
                                                             <div>
                                                                <h3 className='text-indigo-900 text-sm font-bold dark:text-white'>Your Name</h3>
                                                                <input name="name" type="text" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-sm font-bold dark:text-orange-400" />
                                                                </div>
                                                                <div>
                                                                <h3 className='text-indigo-900 text-sm font-bold dark:text-white'>Email Address</h3>
                                                                <input name="email" type="email" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-sm font-bold dark:text-orange-400" />
                                                                </div>
                                                                <div>
                                                                <h3 className='text-indigo-900 text-sm font-bold dark:text-white'>Phone Number</h3>
                                                                <input name="phone" type="phone" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-sm font-bold dark:text-orange-400" />
                                                                </div>
                                                                <div>
                                                               <h3 className='text-indigo-900 text-sm font-bold dark:text-white'>Address</h3>
                                                                <input name="address" type="address" placeholder="Type here" className="input w-full input-bordered text-indigo-900 text-sm font-bold dark:text-orange-400" />
                                                               </div>
                                                             </div>
                                                             <h3 className='text-indigo-900 text-sm font-bold dark:text-white'>Course Name</h3>
    
                                                                <select name="course" type="course" className="select text-indigo-900 text-sm font-bold dark:text-orange-400 border-2 border-sky-500">
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
                                                                 <br />
                                                                <input className='relative rounded px-2 py-1 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-600 transition-all ease-out duration-300 btn bg-orange-600 w-20 ' type="submit" value="Submit" />
                                                        </form>
                                                        </label>
                                                    </label>
                                                   
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
                <Footer></Footer>
            </div>
            }
       
        </div>


    );
};

export default Courses;