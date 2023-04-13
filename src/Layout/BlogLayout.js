import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import NavScrool from '../Pages/Shared/Navbar/NavScrool';
import RightSideNav from '../Pages/Shared/Navbar/RightSideNav';
import './BlogLayout.css'
import Footer from '../Pages/Shared/Footer/Footer';
import ViewSpin from '../Pages/Shared/SpinLoading/ViewSpin';

const BlogLayout = () => {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(() =>{
          setLoading(false);
      },500)
    },[])
    return (
        <div>
            {
                loading? <ViewSpin></ViewSpin> :
                <div>
            <Navbar></Navbar>
            <NavScrool></NavScrool>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">

                <div className="outlet"><Outlet></Outlet></div>
                <div className="rightNav lg:ml-56"><RightSideNav></RightSideNav>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
            }
        
        </div>
    );
};

export default BlogLayout;