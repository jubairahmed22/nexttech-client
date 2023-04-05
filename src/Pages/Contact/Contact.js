import React from 'react';
import { toast } from 'react-hot-toast';
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

import './Contact.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import icon from '../image/Service/icon/material-symbols_check-circle-rounded.svg'
import { FaLongArrowAltRight } from 'react-icons/fa';

import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { Link } from "react-router-dom";

const cardData = [
    {

        name: "Nayeem Akbar",
        subName: "Managing Director",
        department: "IT",
        email: "xyz@gmail.com",
        hired: "1 March 2023",
        location: "Bangladesh"

    },
    {

        name: "Nayeem Akbar",
        subName: "Managing Director",
        department: "IT",
        email: "xyz@gmail.com",
        hired: "1 March 2023",
        location: "Bangladesh"

    },
    {

        name: "Nayeem Akbar",
        subName: "Managing Director",
        department: "IT",
        email: "xyz@gmail.com",
        hired: "1 March 2023",
        location: "Bangladesh"

    },
    {

        name: "Nayeem Akbar",
        subName: "Managing Director",
        department: "IT",
        email: "xyz@gmail.com",
        hired: "1 March 2023",
        location: "Bangladesh"

    },
    {

        name: "Nayeem Akbar",
        subName: "Managing Director",
        department: "IT",
        email: "xyz@gmail.com",
        hired: "1 March 2023",
        location: "Bangladesh"

    },
    {

        name: "Nayeem Akbar",
        subName: "Managing Director",
        department: "IT",
        email: "xyz@gmail.com",
        hired: "1 March 2023",
        location: "Bangladesh"

    },


]


const Contact = () => {
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
        fetch('https://server-nexttech.vercel.app/mail', {
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

                    alert('Your message is sent to admin');
                    form.reset();
                   
                }
                else {
                    toast.error(data.message);
                   
                }
            })




    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className=' '>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="contactImg">
                        <img src={require('../image/contact-page/headphone.jpg')} alt="" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 slideHeadingTwo">
                        <h1 className="textHeading mb-56"><span className='text-orange-500'>Let's</span> get in touch!</h1>
                    </div>
                    

                </SwiperSlide>
            </Swiper>


            <div className='grid lg:grid-cols-2 emailCard p-10 mt-20'>
                <div>
                    <h1 className='emialcardText'>Don't Hesitate to
                     <br/>
                        contact with us for any
                    <br/>
                        kind of information
                    </h1>
                    <p className='emialCardPera mt-5'>Call us for query</p>
                    <h1 className='text-3xl mt-3 text-white'>+1 (682) 283 3319</h1>
                    <h1 className='text-3xl mt-3 text-white'>+1 (682) 283 4734</h1>
                    <h1 className='text-3xl mt-3 text-white'>+880 1941 460 114</h1>
                    <div className='inline-flex items-center mt-5 gap-5'>
                        <AiOutlineInstagram className='w-10 h-10 text-white'></AiOutlineInstagram>
                        <AiFillFacebook className='w-10 h-10 text-white'></AiFillFacebook>
                        <AiFillLinkedin className='w-10 h-10 text-white'></AiFillLinkedin>
                    </div>
                </div>
                <div className=''>

                    <form onSubmit={handleBooking}>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="name" name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-white text-2xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-white text-2xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="phone" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-white text-2xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="address" name="address" id="floating_address" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-white text-2xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Address</label>
                        </div>


                        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-6 border border-orange-500 rounded z-0 w-32">Submit</button>
                    </form>

                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-10 place-items-center mt-20 usBox'>
                <div>
                    <h1 className='usCardHeading'>USA Office</h1>
                    <p className='mt-5 usPera'>2214 W Walnut Hill Ln <br /> Irving, TX 75038 <br /> USA</p>
                    <p className='mt-5 usNumber'>Phone: +1 (682) 283 3319,  +1 (682) 283 4734
                        <br />
                        Email: info@nexttechitc.com</p>
                </div>
                <div>
                    <h1 className='usCardHeading'>Dhaka Office</h1>
                    <p className='mt-5 usPera'>House 18, Sector 11, Sonargaon Janapath Road
                        <br />Uttara, Dhaka,<br />Bangladesh</p>
                    <p className='mt-5 usNumber'>Phone: +880 1845399772,  +880 1941460114
                        <br />Email: info@nexttechitcbd.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;