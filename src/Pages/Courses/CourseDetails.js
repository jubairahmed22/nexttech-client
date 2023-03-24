import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import toast from 'react-hot-toast';

const CourseDetails = () => {

    const allCourses = useLoaderData();
    console.log(allCourses);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            name: name,
            address,
            email,
            phone,

        }
        console.log(booking);
        fetch('http://localhost:5000/mail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    alert('Your message is sent to admin')

                }
                else {
                    toast.error(data.message);
                }
            })




    }
    return (
        <div className="grid lg:grid-rows-3 gap-4">
            <div className="row-span-full col-span-10 leftLayOut">
                {
                    allCourses.map(details =>
                        <div>
                            <img className='courseImg' src={details.img} alt="" />
                            <h1 className='courseName mt-5'>{details.name}</h1>
                            <h1 className='courseDescription mt-10'>Course Description</h1>
                            <p className='courseDespera'>{details.description}</p>
                        </div>
                    )
                }
            </div>
            <div className="row-span-full col-span-2  rightLayOut">
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>


                    <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="phone" placeholder="Phone Number" className="input w-full input-bordered" />
                    <input name="address" type="address" placeholder="address" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default CourseDetails;