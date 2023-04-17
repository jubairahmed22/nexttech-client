
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (

    <div className=''>

      <div className="navbar bg-base-100 dark:bg-gradient-to-r from-indigo-300 via-dark-800 to-dark  pb-5 pt-5 shadow navIndex max-w-[1345px] mx-auto">
        <div className="navbar-start">

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 col" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className='font-bold text-2xl'><Link to='/'>Home</Link></li>

              <li className='font-bold text-lg'><Link to="/service">Service</Link></li>
              <li className='font-bold text-lg'><Link to="/courses">Courses</Link></li>

              <li className='font-bold text-lg'><Link to='/blogLayout'>Blog</Link></li>
              <li className='font-bold text-lg'><Link to="/aboutUs">About Us</Link></li>
              <li className='font-bold text-lg'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

          <Link to='/'><img className='navLogo p-1 pl-4' src="https://i.ibb.co/8XLNDj6/nextech-modified-logo-PNG-file-assist-com-bd-1.png" alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='font-bold text-xl dark:text-white'><Link to='/'>Home</Link></li>
            <li className='font-bold text-xl dark:text-white'><Link to="/service">Service</Link></li>
            <li className='font-bold text-xl dark:text-white'><Link to="/courses">Courses</Link></li>
            <li className='font-bold text-xl dark:text-white'><Link to='/blogLayout'>Blog</Link></li>
            <li className='font-bold text-xl dark:text-white'><Link to='/aboutUs'>About Us</Link></li>
            <li className='font-bold text-xl dark:text-white'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

      </div>

    </div>

  );
};

export default Navbar;