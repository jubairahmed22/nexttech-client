import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetailsHook from '../Hooks/BlogDetailsHook';

import { BsCalendarFill, BsFillEyeFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const BlogDetails = () => {
    const { id } = useParams();
    const [details] = BlogDetailsHook(id);
    console.log(details);

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
        <div className='mt-10'>
            {
                details.map(blogs =>
                    <div className="card cardMajer bg-base-100 shadow-xl mt-5">

                        <h1 className='title p-5'>{blogs.name}</h1>
                        <div className='inline-flex items-center gap-3 mt-10 font-semibold text-lg p-5'>
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
                            
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    );
};

export default BlogDetails;