import React from 'react';
import { toast } from 'react-hot-toast';
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import './Contact.css';

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
        fetch('https://jubair-portfolio-server-jubairahmed22.vercel.app/mail', {
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
        <div className=' '>


            <div className='grid lg:grid-cols-2 emailCard p-10 mt-20'>
                <div>
                    <h1 className='emialcardText'>Don't Hesitate to
                        contact with us for any
                        kind of information
                    </h1>
                    <p className='emialCardPera mt-5'>Call us for query</p>
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
                            <input type="name" name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="phone" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="address" name="address" id="floating_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Address</label>
                        </div>


                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

                </div>
            </div>
            <div>
                <h1 className='text-center ourTeam  mt-10'>Our <span className='text-orange-500'>Team</span></h1>

                <div className='grid grid-cols-3 gap-5 mt-10 place-items-center'>
                    {
                        cardData.map(data =>

                            <div className=''>
                                <div className="card w-96 glass">
                                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                    <div className="card-body text-center">
                                        <h2 className="text-2xl font-bold text-center">{data.name}</h2>
                                        <p>{data.subName}</p>
                                        <p>{data.department}</p>
                                        <p>{data.email}</p>
                                        <p>{data.hired}</p>
                                        <p>{data.location}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Contact;