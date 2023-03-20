import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { BsCalendarFill, BsFillEyeFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import '../Blog/AllBlog.css'
import './AllBlog.css'

const AllBlog = () => {
    const allBlogs = useLoaderData();
    console.log(allBlogs);
    const navigate = useNavigate()
    const handleRouting = (id) => {
        navigate(`/blogLayout/details/${id}`)
    }

    return (
        <div>
            <div className='mt-10'>
                {
                    allBlogs.map(blogs =>
                        <div className="card cardMajer bg-base-100 shadow-xl mt-5">

                            <h1 className='title p-5'>{blogs.name}</h1>
                            <div className='inline-flex items-center gap-3 mt-2 font-semibold text-lg p-5'>
                                <BsCalendarFill></BsCalendarFill>
                                <h1 >{blogs.date}</h1>
                                <FaUser className='ml-5'></FaUser>
                                <h1>{blogs.author}</h1>
                                <BsFillEyeFill className='ml-5'></BsFillEyeFill>
                                <h1>{blogs.view}</h1>
                            </div>


                            <img className='imgMegar' src={blogs.img} alt="blogs" />
                            <div className="card-body">

                                <p>{blogs.description}</p>
                                <div className="card-actions justify-start">
                                    <button onClick={() => handleRouting(blogs._id)} className="btn btnCol">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllBlog;

