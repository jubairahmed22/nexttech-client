import React, { useEffect, useState } from 'react';
import LayoutCourse from '../Pages/Courses/LayoutCourse/LayoutCourse';

import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import CourseNav from '../Pages/Courses/LayoutCourse/CourseNav';
import Courses from '../Pages/Courses/Courses';
import ViewSpin from '../Pages/Shared/SpinLoading/ViewSpin';



const CourseLayout = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    return (
        <div>
            {loading ? <ViewSpin></ViewSpin> :
                <div>
                    <LayoutCourse></LayoutCourse>

                    <Outlet></Outlet>
                    <Courses></Courses>
                    <Footer></Footer>
                </div>
            }
        </div>
    );
};

export default CourseLayout;