import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavScrool = () => {
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
        <div className='mt-20'>

            <div className='navScrool scroolNav mt-5'>
                <div zIndex={1000} class="w-full bg-gray-200 rounded-full h-1.5 shadow top-20  sticky  ">
                    <div zIndex={1000} class="bg-purple-900 dark:bg-orange-500 h-1.5 rounded-full " style={{ width: `${scrollTop}%` }}></div>
                </div>


            </div>
        </div>
    );
};

export default NavScrool;