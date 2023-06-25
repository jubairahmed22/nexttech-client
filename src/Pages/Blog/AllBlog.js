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

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='mt-10 place-items-center'>
                {
                    allBlogs.map(blogs =>
                        <div className="card cardMajer cardCol dark:border  border-sky-500 bg-base-100 shadow-xl mt-5">

                            <h1 className='title p-5  text-white'>{blogs.name}</h1>
                            <div className='inline-flex items-center gap-3 mt-10 font-semibold text-lg p-5'>
                                <BsCalendarFill className='iconCol'></BsCalendarFill>
                                <h1 className='iconCol text-white'>{blogs.date}</h1>
                                <FaUser className='ml-5 iconCol '></FaUser>
                                <h1 className='iconCol  text-white'>{blogs.author}</h1>
                                <BsFillEyeFill className='ml-5 iconCol'></BsFillEyeFill>
                                <h1 className='iconCol  text-white'>{blogs.view}</h1>
                            </div>


                            <img className='imgMegar' src={blogs.img} alt="blogs" />
                            <div className="card-body">

                                <p className=' text-white'>{blogs.description.slice(0,200)} ....</p>
                                <div className="card-actions justify-start">
                                    <button onClick={() => handleRouting(blogs._id)} className="bg-orange-500 hover:bg-orange-600 text-white text-lg  py-2 px-4 border border-orange-500 rounded z-0">Read More</button>
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

