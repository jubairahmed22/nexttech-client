import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Card from '../Card/Card';
import CustomerSays from '../CustomerSays/CustomerSays';
import GlobalClients from '../GlobalClients/GlobalClients';
import IndrastrySarved from '../IndrastrySarved/IndrastrySarved';
import Slider from '../Slider/Slider';

const Home = () => {

    return (
        <div>

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