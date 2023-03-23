import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = () => {

  const [cetagory, setcetagory] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/blogCategory`;

    fetch(url)
      .then(res => res.json())
      .then(data => {

        setcetagory(data);
      })
  }, [])
    return (
       <div className='mt-5 flex items-center justify-center'>
       <div class="flip-card">
      <div class="flip-card-inner">
       <div class="flip-card-front">
      <img src="https://i.ibb.co/3pnVYFD/3.jpg" className='flipImg ' alt=''></img>

    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
       </div>
    );
};

export default Card;