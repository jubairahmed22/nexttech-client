import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AllBlog.css'

const RecentPostCetegory = () => {
    const [cetagory, setcetagory] = useState([]);
    useEffect(() => {

        const url = `https://server-nexttech-h6uhrs8ll-bnexttechitc-gmailcom.vercel.app/full`;


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setcetagory(data);
            })
    }, [])

    const navigate = useNavigate()
    const handleRouting = (id) => {
        navigate(`/blogLayout/details/${id}`)
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='flex flex-col mt-5  border-2 rounded p-5 bg-indigo-900'>
            <h1 className='font-bold text-3xl m-5 text-white'>Popular Blogs</h1>
            {
  cetagory.slice(0, 6).map((course, index) =>
    <button onClick={() => handleRouting(course._id)} className='btn btn-link mt-2 items-start mt-8 justify-start text-lg recentPostPera text-white'>
      {index + 1}. {course.name.slice(0, 32)}...
    </button>
  )
}

        </div>
    );
};

export default RecentPostCetegory;