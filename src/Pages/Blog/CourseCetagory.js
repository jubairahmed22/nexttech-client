import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllBlog.css'

const CourseCetagory = () => {



    const [cetagory, setcetagory] = useState([]);
    useEffect(() => {

        const url = `https://server-nexttech-h6uhrs8ll-bnexttechitc-gmailcom.vercel.app/blogCategory`;


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setcetagory(data);
            })
    }, [])

    console.log(cetagory);

    return (
        <div className='flex flex-col mt-5 border-2 rounded px-5 bg-indigo-900 pb-5'>
            <h1 className='font-bold text-3xl m-5 text-white'>Categories</h1>
            {cetagory.map((course, index) =>
  <Link
    key={index}
    className='mt-4 text-white cetaText text-xl text-blue-500 dark:text-white font-semibold ml-5'
    to={`/blogLayout/${course.id}`}>
      {index + 1}. {course.name}
  </Link>
)}
        </div>
    );
};

export default CourseCetagory;