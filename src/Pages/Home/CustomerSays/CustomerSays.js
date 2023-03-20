import React from 'react';
import CustomerSaysHook from '../../Hooks/CustomerSaysHook';
import './Customer.css'

const CustomerSays = () => {
    const { customer } = CustomerSaysHook();
    return (
        <div className='mt-5 p-5 mb-5 lg-h-screen min-h-full'>
            <h1 className='text-center header mt-10'>What <span className='text-orange-500'>Our Customer</span> Says</h1>
            <h2 className='text-center mt-5 mb-5 subHeading'>Our honorable and valueable clients share their values with us. Lets <br />
                hear our satified client voices</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5 flex items-center justify-center place-items-center'>
                {
                    customer.map(details =>
                        <div className="card w-96 bg-base-100 shadow-xl mt-5">

                                <div className="card-body">
                                <div className='inline-flex items-center'>
                                <div className="avatar">
                              <div className="w-24 rounded-full">
                                  <img src={details.img} alt="" />
                                </div>
                              </div>
                                <div className='flex flex-col ml-3'>
                                <h2 className="card-title font-bold text-2xl">{details.name}</h2>
                                <p className='subname'>{details.subName}</p>
                                </div>
                                </div>
                                <p className='description'>{details.description}</p>
                                <div className="card-actions mt-5">
                                    <div className="rating rating-md">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CustomerSays;