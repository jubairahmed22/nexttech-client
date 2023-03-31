import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (

        <div className='mt-20 footerBackground'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 place-items-center mt-32 mt-20  p-10 align-middle items-stretch'>
                    <div className=''>
                        <h1 className='Maintittle'>Company Profile</h1>
                        <Link to="/aboutUs"><h1 className='mainPera mt-20'>About Us</h1></Link>
                        <Link to="/blogLayout"><h1 className='mainPera mt-5'>Blogs</h1></Link>
                        <Link to="/courses"><h1 className='mainPera mt-5'>Events</h1></Link>
                    </div>
                    <div className=''>
                        <h1 className='Maintittle'>Who We Are</h1>
                        <Link to="/aboutUs"><h1 className='mainPera mt-20'>Our Philosophy</h1></Link>
                        <Link><h1 className='mainPera mt-5'>Our Team</h1></Link>
                        <Link><h1 className='mainPera mt-5'>Privacy Policy</h1></Link>
                     
                    </div>
                    <div className=''>
                        <h1 className='Maintittle'>What We Do</h1>
                        <Link to="/service"><h1 className='mainPera mt-20'>Our Services</h1></Link>
                        <Link to="/courses"><h1 className='mainPera mt-5'>Our Courses</h1></Link>
                      
                       
                       
                    </div>
                    <div className=''>
                        <h1 className='Maintittle'>Working at NextTech ITC BD </h1>
                        <Link to="/aboutUs"><h1 className='mainPera mt-20'>Life at Nexttech ITC BD</h1></Link>
                        <Link to='/contact'><h1 className='mainPera mt-5'>Join the Team</h1></Link>
                    
                      
                   </div>
          </div> 
          <div className='footerPipe mt-10 py-5 '>
             <div className='grid lg:grid-cols-2 gap-8 px-20'>
             <div>
             <p className='mainPeraThree'>Copyright © 2023, Nexttech ITC | Privacy Policy </p>
             </div>
            
             
             <div className='logoColor  grid place-items-end'>
             <div className='inline-flex items-center'>
             <p className='mainPeraThree '>Follow Us</p>
             <BsInstagram className='w-6 h-6 ml-5'/>
             <BsFacebook className='w-6 h-6 ml-3'/>
             <BsLinkedin className='w-6 h-6 ml-3'/>
             </div>
             </div>
             </div>
       
          </div>
         
        </div>

    );
};

export default Footer;