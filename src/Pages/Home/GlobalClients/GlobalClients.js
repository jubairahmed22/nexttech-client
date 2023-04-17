import React, { useEffect, useState } from 'react';
import './GlobalClients.css'
import { Link } from 'react-router-dom';




const GlobalClients = () => {
    const [cetagory, setcetagory] = useState([]);
    useEffect(() => {

        const url = `https://server-nexttech.vercel.app/courses`;


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setcetagory(data);
            })
    }, [])
    return (
        <div>
            <div className='mainBody '>
                <div class="listItems ">
                    <div class="wrapper">

                        <div class="list ">
                            {
                                cetagory.map(cet =>
                                    <div>
                                        <div class="item"><div className="card w-96  ml-5 bg-base-100   shadow-xl">
                                            <div className="card-body">
                                                <Link to={`/courseDetails/${cet.id}`} class="text-xl font-bold text-center">{cet.name}</Link>
                                            </div>
                                        </div><span>&nbsp;</span>
                                        </div>

                                    </div>

                                )
                            }
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default GlobalClients;