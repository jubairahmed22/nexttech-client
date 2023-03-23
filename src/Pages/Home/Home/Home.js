import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Card from '../Card/Card';
import CustomerSays from '../CustomerSays/CustomerSays';
import GlobalClients from '../GlobalClients/GlobalClients';
import IndrastrySarved from '../IndrastrySarved/IndrastrySarved';
import Slider from '../Slider/Slider';

const Home = () => {
    const [scrollTop, setScroolTop] = useState(0);

    const onScrool = () => {
        const winScrool = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrooled = (winScrool / height) * 100;

        setScroolTop(scrooled)
    }

    useEffect(()=> {
        window.addEventListener("scroll", onScrool)

        return () => window.removeEventListener("scroll", onScrool);
    }, [])
    return (
        <div>
            <div zIndex={1000} class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-200   sticky z-5 top-24">
            <div class="bg-purple-900 h-1.5 rounded-full "  style={{width: `${scrollTop}%`}}></div>
            </div>
           <Banner></Banner>
           <Slider zIndex={500}></Slider>
           
           <IndrastrySarved zIndex={500}></IndrastrySarved>
           <GlobalClients zIndex={500}></GlobalClients>
           <Brand zIndex={500}></Brand>
           <CustomerSays zIndex={500}></CustomerSays>
        </div>
    );
};

export default Home;