import React from 'react';

import './Customer.css'
const served = [
    {
        image: "https://i.ibb.co/hBqvr43/signal-tower.png",
        name: "Telco",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: "https://i.ibb.co/TvkWG8B/cardiogram.png",
        name: "Non-Profit",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: "https://i.ibb.co/WGY33ff/check-out.png",
        name: "Retail",
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://i.ibb.co/tLTQwMg/grocery-store.png",
        name: "E-com",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/3Wr0TT0/list.png",
        name: "Miscellaneous",
        prev: 3,
        id: 4,
        next: 5
    },

    {
        image: "https://i.ibb.co/S7QR5F2/mobile-banking.png",
        name: "Fintech",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/s5Pfc6n/steering-wheel.png",
        name: "Automotive",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/W3WN3NP/real-estate.png",
        name: "Real Estate",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/HgN2bGW/education.png",
        name: "Education",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ibb.co/qY2TyY5/software-application.png",
        name: "Software",
        prev: 3,
        id: 4,
        next: 5
    },
]

const CustomerSays = () => {
    
    return (
       <div className='mt-10'>
              <h1 className='dark:text-white mainHading text-center'>Industries <span className='text-orange-500'>We Serve</span></h1>

         <div className='h-96 dark:bg-white mt-10'>
             <div className='max-w-[1145px] mx-auto '>
               <div className='grid grid-cols-5 gap-5 place-items-center '>
                  {
                  served.map(served=>
                    <div className='mt-10'>
                       
                        <img src={served.image} className='imgMejar ' alt=''></img>
                        <h1>{served.name}</h1>
                    </div>
                  )
                  }
               </div>
             </div>
          </div>
       </div>
    );
};

export default CustomerSays;