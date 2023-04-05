import React, { useEffect, useState } from 'react';
import { ButtonToolbar } from 'react-bootstrap';

import { BsCalendarFill, BsFillEyeFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SpinLoading from '../Shared/SpinLoading/SpinLoading';
import './AllBlog.css'





const BlogPost = () => {

    // const { products, count } = useLoaderData();
    const [allBlogs, setAllblogs] = useState([]);

    const [count, setCount] = useState(0);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(4);

    useEffect(() => {
        const url = `http://localhost:5000/blogs?page=${page}&size=${size}`;
        console.log(page, size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);

                setAllblogs(data.products);

            })
    }, [page, size])

    const pages = Math.ceil(count / size);




    console.log(allBlogs);
    return (
        <div>

            <div className='mt-32 '>
                {
                    allBlogs.length === 0 ? <div><SpinLoading /></div> : allBlogs.map(blogs =>
                        <div className="card cardMajer  bg-base-100 shadow-xl mt-5">

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
                                    <button className="btn btnCol">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="pagination flex flex-col lg:items-center justify-center mt-10 mb-10">
                    <p>Currently selected page: {page} and size: {size}</p>

                    <div className='flex flex-inline'>

                        {
                            [...Array(pages).keys()].map(number =>

                                <button
                                    href="#"
                                    class="px-3 py-2 leading-tight text-gray-500 bg-white 
                            border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
                            dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                            dark:hover:text-white"

                                    key={number}
                                    onClick={() => setPage(number)}
                                >
                                    {number + 1}
                                </button>

                            )

                        }
                        <select className='ml-5' onChange={event => setSize(event.target.value)}>
                            <option value="2">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>

                    </div>


                </div>
            </div>
        </div>

    );
};

export default BlogPost;