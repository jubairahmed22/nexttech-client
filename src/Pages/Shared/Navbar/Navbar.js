import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='font-bold text-2xl'><Link  to='/'>Home</Link></li>
            <li><Link to='/blogLayout'>Blog</Link></li>
            <li tabIndex={0}>
              <a className="justify-between">
                <h1 className='font-bold text-2xl'>Products</h1>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2 bg-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><Link>Service</Link></li>
            <li tabIndex={0}>
              <a className="justify-between">
                <h1 className='font-bold text-2xl'>Courses</h1>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2 bg-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><Link>Blog</Link></li>
            <li><Link>Contact Us</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/T4nFCfj/nextech-modified-logo-design-file-assist-com-1.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='font-bold text-lg'><Link to='/'>Home</Link></li>
          <li tabIndex={0}>
            <a>
            <h1 className='font-bold text-lg'>Products</h1>

              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-white">
              <li className='font-bold text-lg'><a>Submenu 1</a></li>
              <li className='font-bold text-lg'><a>Submenu 2</a></li>
            </ul>
          </li>
          <li className='font-bold text-lg'><Link>Service</Link></li>
          <li tabIndex={0}>
              <a className="justify-between">
                <h1 className='font-bold text-lg'>Courses</h1>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2 bg-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
          <li className='font-bold text-lg'><Link to='/blogLayout'>Blog</Link></li>

          <li className='font-bold text-lg'><Link>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>

  );
};

export default Navbar;