import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = () => {

  const [cetagory, setcetagory] = useState([]);
  useEffect(() => {

    const url = `https://server-nexttech-h6uhrs8ll-bnexttechitc-gmailcom.vercel.app/blogCategory`;


    fetch(url)
      .then(res => res.json())
      .then(data => {

        setcetagory(data);
      })
  }, [])

  return (
    <div>
      <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
        <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="https://i.ibb.co/d6Pd95j/web-design-website-coding-concept.jpg" alt="" />
        <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
        <div class="absolute bg-gradient-to-t  from-indigo-900 via-indigo-900 to-indigo-900 opacity-90  w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div class="absolute w-full flex place-content-center">
            <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Team work</p>
          </div>
          <div class="absolute w-full flex place-content-center mt-20">
            <p class="font-sans text-center w-4/5 text-white mt-5">Collaborative effort of a group to achieve a common goal the most effective and efficient way!</p>
          </div>
          <button class="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Card;