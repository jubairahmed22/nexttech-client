import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import CustomerSays from '../CustomerSays/CustomerSays';
import GlobalClients from '../GlobalClients/GlobalClients';
import IndrastrySarved from '../IndrastrySarved/IndrastrySarved';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Slider></Slider>
           <IndrastrySarved></IndrastrySarved>
           <GlobalClients></GlobalClients>
           <Brand></Brand>
           <CustomerSays></CustomerSays>
        </div>
    );
};

export default Home;