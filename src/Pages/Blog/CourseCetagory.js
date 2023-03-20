import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCetagory = () => {



    const [cetagory, setcetagory] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/blogCategory`;

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setcetagory(data);
            })
    }, [])

    console.log(cetagory);

    return (
        <div className='flex flex-col mt-5 border-2 rounded p-5'>
            <h1 className='font-bold text-2xl m-5'>Categories</h1>
            {
                cetagory.map(course =>
                    <Link className='mt-2 text-blue-500 font-semibold ml-5' to={`/blogLayout/${course.id}`}>{course.name}</Link>
                )
            }
        </div>
    );
};

export default CourseCetagory;