import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseNav from './LayoutCourse/CourseNav';

const MainCourse = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='mt-32 max-w-[1345px] mx-auto '>
            <h1 className='OurCourse  text-center mt-20 mb-20'>Our Courses</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-5'>
                {
                    allCourses.map(all =>
                        <Link to={`/courseDetails/${all.id}`}>
                            <div className='courseCard dark:border-4 border-sky-500 shadow-lg rounded-2xl gap-5 mb-20 transform transition duration-500 hover:scale-110 hover:shadow-2xl'>

                                <img className='courseCardImg w-96 h-56 rounded-t-2xl' src={all.img} alt="" />
                                <h1 className='m-5 courseCardText'>{all.name}</h1>
                                <div className="rating m-5 mt-5 ">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            <CourseNav></CourseNav>
        </div>
    );
};

export default MainCourse;