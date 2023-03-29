import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import NavScrool from '../Pages/Shared/Navbar/NavScrool';

const Main = () => {
    const [scrollTop, setScroolTop] = useState(0);

    const onScrool = () => {
        const winScrool = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrooled = (winScrool / height) * 100;

        setScroolTop(scrooled)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrool)

        return () => window.removeEventListener("scroll", onScrool);
    }, [])
    return (
        <div>





            {/* <div zIndex={1000} class="w-full bg-gray-200 rounded-full h-10 shadow top-20   sticky  ">
                <div zIndex={1000} class="bg-purple-900 h-1.5 rounded-full " style={{ width: `${scrollTop}%` }}></div>
            </div> */}

            <Navbar zIndex={500}></Navbar>
            <NavScrool zIndex={1000}></NavScrool>
            <Outlet zIndex={500}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;