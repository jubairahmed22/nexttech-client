import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RecentPostCetegory = () => {
    const [cetagory, setcetagory] = useState([]);
    useEffect(() => {

        const url = `https://server-nexttech.vercel.app/full`;


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
        <div className='flex flex-col mt-5  border-2 rounded p-5'>
            <h1 className='font-bold recentPost text-2xl m-5'>Popular Blogs</h1>
            {
                cetagory.slice(0, 6).map(course =>
                    <button onClick={() =>
                        handleRouting(course._id)} className='btn btn-link mt-2 items-start justify-start recentPost'>{course.name.slice(0, 32)}...</button>
                )
            }
        </div>
    );
};

export default RecentPostCetegory;