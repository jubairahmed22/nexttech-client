import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import RightSideNav from '../Pages/Shared/Navbar/RightSideNav';

const BlogLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid lg:grid-rows-3 gap-4">

                <div className="row-span-full col-span-10 "><Outlet></Outlet></div>
                <div className="row-span-full col-span-2 "><RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default BlogLayout;