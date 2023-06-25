import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseNav = () => {
    const [displayButton, setDisplayButton] = useState(true);

    const handleClick = () => {
      setDisplayButton(false);
    };
    return (
        <div>
             {displayButton && (
        <Link to="/CourseLayout/allCourses">
            <div className="text-center mt-8">
                <button  onClick={handleClick} className=" mx-2 bg-orange-500 hover:bg-orange-600 text-white  font-bold py-2 px-2 border border-orange-500 rounded z-0 w-32">See All Courses</button>
            </div>
        </Link>
      )}
        </div>
    );
};

export default CourseNav;