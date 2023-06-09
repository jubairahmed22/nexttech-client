import React from 'react';
import { Link } from 'react-router-dom';
import CourseCetagory from '../../Blog/CourseCetagory';
import RecentPostCetegory from '../../Blog/RecentPostCetegory';

const RightSideNav = () => {
    return (
        <div className='m-5 sticky w-96 top-28'>
            <CourseCetagory></CourseCetagory>
            <RecentPostCetegory></RecentPostCetegory>
        </div>
    );
};

export default RightSideNav;