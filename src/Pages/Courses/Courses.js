import React, { useEffect, useState } from 'react';
import './Courses.css'

const Courses = () => {
    

        const [courses, setCourses] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/courses')
                .then(res => res.json())
                .then(data => setCourses(data))
        }, [])
    

    return (
        <div>
        <div className='h-screen top-36'>
            <div className="">
                <img src={require('../image/Service/img/Rectangle 3.png')} alt="" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 imageText">
                <h1 className="textHeading ">Our Course</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 imagePera">
                <p>Discover the latest in IT with our comprehensive training programs. Gain the skills <br /> and knowledge you need to stay ahead in this dynamic field.</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 imageButton">
                <button className="btn btn-warning">Read More</button>
            </div>
        
        </div>
        <div className='h-screen '>
       
            <h1 className='OurCourse text-center '>Our Courses</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-10'>
            {
                courses.map(course=> 
                <div className='w-96 h-56 shadow-xl gap-5 mb-20  '>
                   
                    <img className=' w-96 h-56' src={course.img} alt="" />
                    <h1>{course.name}</h1>
                </div>
            )}
            </div>
        </div>
        </div>
    );
};

export default Courses;