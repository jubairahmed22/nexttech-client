import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import RightSideNav from '../Pages/Shared/Navbar/RightSideNav';
import './BlogLayout.css'

const BlogLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">

                <div className="outlet"><Outlet></Outlet></div>
                <div className="rightNav lg:ml-56"><RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default BlogLayout;