import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (

        <div className='mt-10 footerBackground'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 max-w-[1345px]   mx-auto lg:place-items-center sm:place-items-start mt-32 p-5 lg:align-middle lg:items-stretch md:items-stretch'>
                <div className=''>
                    <h1 className='Maintittle '>Company Profile</h1>
                    <Link to="/aboutUs"><h1 className='mainPera lg:mt-20 comPera'>About Us</h1></Link>
                    <Link to="/blogLayout"><h1 className='mainPera lg:mt-5 comPera'>Blogs</h1></Link>
                    <Link to="/courses"><h1 className='mainPera lg:mt-5 comPera'>Events</h1></Link>
                </div>
                <div className=''>
                    <h1 className='Maintittle comPera'>Who We Are</h1>
                    <Link to="/aboutUs"><h1 className='mainPera lg:mt-20 sm:mt-10 comPera'>Our Philosophy</h1></Link>
                    <Link><h1 className='mainPera mt-5 comPera comPera comPera'>Our Team</h1></Link>
                    <Link to="/privacy"><h1 className='mainPera mt-5 comPera comPera comPera'>Privacy Policy</h1></Link>
                </div>
                <div className=''>
                    <h1 className='Maintittle comPera'>What We Do</h1>
                    <Link to="/service"><h1 className='mainPera mt-20 comPera'>Our Services</h1></Link>
                    <Link to="/courses"><h1 className='mainPera mt-5 comPera'>Our Courses</h1></Link>
                </div>
                {/* <div className=''>
                    <h1 className='Maintittle comPera'>Working at NextTech ITC BD </h1>
                    <Link to="/aboutUs"><h1 className='mainPera mt-20 comPera'>Life at Nexttech ITC BD</h1></Link>
                </div> */}
            </div>
            <div className='footerPipe mt-10 py-5 '>
                <div className='grid lg:grid-cols-2 max-w-[1345px]   mx-auto gap-8 px-20'>
                    <div>
                        <p className='mainPeraThree'>Copyright © 2023, Nexttech ITC | <Link to='/privacy'>Privacy Policy</Link> </p>
                    </div>


                    <div className='logoColor  grid place-items-end'>
                        <div className='inline-flex items-center'>
                            <p className='mainPeraThree '>Follow Us</p>
                            <Link target="_blank" to="https://www.instagram.com/nexttech_itc/?utm_source=qr&fbclid=IwAR3P_yT6g0tyfWtgK0XkjVN3HAuS1Vq6lgRF2P6Ej38YUO7jqFtW98MED5E"><BsInstagram className='w-6 h-6 ml-5' /></Link>
                            <Link target="_blank" to="https://www.facebook.com/NextTechITC"><BsFacebook className='w-6 h-6 ml-3' /></Link>
                            <Link target="_blank" to="https://www.linkedin.com/company/nexttechitc/"><BsLinkedin className='w-6 h-6 ml-3' /></Link>
                            
                           
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Footer;