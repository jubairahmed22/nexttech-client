import React, { useEffect, useState } from 'react';
import IndrustrySarvedHook from '../../Hooks/IndrustrySarvedHook';
import './Indrastry.css'
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const envetsData = [
    {
        name: "These 25 Technology Trends Will Define The Next Decade",
        img: "https://i.ibb.co/nP8K2Yt/Rectangle-249.png"
    },
    {
        name: "Infographic: 11 Tech Trends to Watch in 2023 - Visual Capitalist",
        img: "https://i.ibb.co/93m60zH/Rectangle-250.png"
    },
    {
        name: "Top 10 Technology Trends in 2023 and Beyond | Yondu",
        img: "https://i.ibb.co/WxxY7M1/Rectangle-251.png"
    },
]


const IndrastrySarved = () => {


    const { indrustryData } = IndrustrySarvedHook();
    const [visible, setvisible] = useState(3)
    const showMore = () => {
        setvisible(prevValue => prevValue + 3);
    };
    const showLess = () => {
        setvisible(3);
    };



    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let animationFrameId;
        const startCount = 0;
        const endCount = 1400;
        const duration = 5000; // 5 seconds

        const startTimestamp = performance.now();

        const animateCount = (timestamp) => {
            const elapsedTime = timestamp - startTimestamp;
            const progress = Math.min(elapsedTime / duration, 1); // Calculate progress between 0 and 1

            const currentCount = Math.round(progress * (endCount - startCount)) + startCount;
            setCount(currentCount);

            if (elapsedTime < duration && isCounting) {
                animationFrameId = requestAnimationFrame(animateCount);
            }
        };

        const handleScroll = () => {
            const element = document.documentElement;
            const scrollTop = element.scrollTop || document.body.scrollTop;
            const viewportHeight = window.innerHeight;

            if (scrollTop > viewportHeight / 2) {
                setIsCounting(true);
                animationFrameId = requestAnimationFrame(animateCount);
            } else {
                setIsCounting(false);
                cancelAnimationFrame(animationFrameId);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isCounting]);

    const [countTwo, setCountTwo] = useState(0);
    const [isCountingTwo, setIsCountingTwo] = useState(false);

    useEffect(() => {
        let animationFrameId;
        const startCount = 0;
        const endCount =  5000;
        const duration = 5000; // 5 seconds

        const startTimestamp = performance.now();

        const animateCount = (timestamp) => {
            const elapsedTime = timestamp - startTimestamp;
            const progress = Math.min(elapsedTime / duration, 1); // Calculate progress between 0 and 1

            const currentCount = Math.round(progress * (endCount - startCount)) + startCount;
            setCountTwo(currentCount);

            if (elapsedTime < duration && isCountingTwo) {
                animationFrameId = requestAnimationFrame(animateCount);
            }
        };

        const handleScroll = () => {
            const element = document.documentElement;
            const scrollTop = element.scrollTop || document.body.scrollTop;
            const viewportHeight = window.innerHeight;

            if (scrollTop > viewportHeight / 2) {
                setIsCountingTwo(true);
                animationFrameId = requestAnimationFrame(animateCount);
            } else {
                setIsCountingTwo(false);
                cancelAnimationFrame(animationFrameId);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isCountingTwo]);
    const [countThree, setCountThree] = useState(0);
    const [isCountingThree, setIsCountingThree] = useState(false);

    useEffect(() => {
        let animationFrameId;
        const startCount = 0;
        const endCount = 10000;
        const duration = 5000; // 5 seconds

        const startTimestamp = performance.now();

        const animateCount = (timestamp) => {
            const elapsedTime = timestamp - startTimestamp;
            const progress = Math.min(elapsedTime / duration, 1); // Calculate progress between 0 and 1

            const currentCount = Math.round(progress * (endCount - startCount)) + startCount;
            setCountThree(currentCount);

            if (elapsedTime < duration && isCountingThree) {
                animationFrameId = requestAnimationFrame(animateCount);
            }
        };

        const handleScroll = () => {
            const element = document.documentElement;
            const scrollTop = element.scrollTop || document.body.scrollTop;
            const viewportHeight = window.innerHeight;

            if (scrollTop > viewportHeight / 2) {
                setIsCountingThree(true);
                animationFrameId = requestAnimationFrame(animateCount);
            } else {
                setIsCountingThree(false);
                cancelAnimationFrame(animationFrameId);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isCountingThree]);





    const [feature, setfeature] = useState([]);
    useEffect(() => {

        const url = `FeatureCourses.json`;


        fetch(url)
            .then(res => res.json())
            .then(data => {

                setfeature(data);
            })
    }, [])


    return (
        <div className='mt-10 pt-3 pb-3'>
            <div className='courseAllBackground rounded-xl'>
                <h1 className='text-center pt-20 HeadingTittleOne text-white lg:mt-20'>Featured <span className='text-orange-600'>Courses</span></h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-20'>
                    {
                        feature.map(feat =>
                            <Link to={`/courseDetails/${feat.id}`}>

                                <div className='courseCard dark:border-4 bg-base-200 border-sky-500 shadow-lg rounded-2xl gap-5 mb-20 transform transition duration-500 hover:scale-110 hover:shadow-2xl'>

                                    <img className='courseCardImg w-96 h-56 rounded-t-2xl' src={feat.img} alt="" />
                                    <h1 className='m-5 courseCardText'>{feat.name}</h1>
                                    <div className="rating m-5 mt-5 ">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                    </div>
                                </div>

                            </Link>
                        )
                    }
                </div>
            </div>

            {/* count section start */}

            <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center'>
                <div className='countOne inline-flex items-center'>
                    <div className='mb-20 ml-5'>
                        <img src='https://i.ibb.co/vPQh6tK/Group-428.png' alt=''></img>
                    </div>
                    <div className='ml-10'>
                        <h3 className='countText'>{count} + Graduates</h3>
                        <p className='countTextPera'>Nexttech ITC has trained 1400+ trainees so far. And it's increasing everyday.</p>
                    </div>
                </div>
                <div className='countTwo inline-flex items-center'>
                    <div className='mb-20 ml-5'>
                        <img src='https://i.ibb.co/h8sS63L/Group-429.png' alt=''></img>
                    </div>
                    <div className='ml-10'>
                        <h3 className='countText'>{countTwo} + Enrolled Students</h3>
                        <p className='countTextPera'>Over 5k+ students are enrolled in our courses.</p>
                    </div>
                </div>
                <div className='countThree inline-flex items-center'>
                    <div className='mb-20 ml-5'>
                        <img src='https://i.ibb.co/HTKcX4V/Group-454.png' alt=''></img>
                    </div>
                    <div className='ml-10'>
                        <h3 className='countText'>{countThree} + Members</h3>
                        <p className='countTextPera'>Over 10K+ people are connected with us through social media and supporting our mission.</p>
                    </div>
                </div>

            </div>
            {/* count section end */}

            {/* indrustry data start */}
            <h1 className='text-center mt-20 workTittle'>Cutting Edge Solution <span className='text-orange-500'> For
                <br />  Your Business</span></h1>
            <h1 className='supportPera text-center'>Bright Your Business with the Virtual World</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:mx-32 place-items-center mt-10 '>
                {
                    indrustryData.slice(0, visible).map(indrustry =>
                        <div className="boxCard shadow-xl mt-8 p-5 dark:border-4 rounded-2xl border-sky-500 transform transition duration-500 hover:scale-110 hover:shadow-2xl">
                            <div className="">
                                <div className="avatar flex ">
                                    <div className="w-34  rounded-full p-5">
                                        <img src={indrustry.img} alt="" />
                                    </div>

                                </div>
                                <h2 className="cardTittle ">{indrustry.name}</h2>
                                <p className='cardPera mt-3 pb-2 '>{indrustry.description}</p>
                            </div>
                        </div>
                    )
                }

            </div>
            {visible < indrustryData.length ?
                <div className="text-center mt-8">

                    <button className=" mx-2 slideButton text-white  z-0 " onClick={showMore}>Show More</button>
                </div>

                :
                <div className="text-center mt-8">
                    <button className="mx-2  z-0 mx-2 slideButton text-white" onClick={showLess}>Show Less</button>
                </div>
            }
            {/* indrustry data end */}

            {/* project based learning section start */}
            <div>
    
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-32 mt-20 place-content-between'>
                    <div className='mr-20'>
                        <h1 className='projectText'>Project Based <br />Learning</h1>
                    </div>
                    <div className=''>
                        <img className='projectImg  shadow-2xl' src='https://i.ibb.co/27vMtWZ/Rectangle-245.png' alt=''></img>
                    </div>
                </div>
                <p className='projectTextTwo mt-10  lg:mx-32'>Nexttech ITC's teaching is based on projects in every way. It means you will work on real projects for real clients. Mentors will get you involved in dealing with the real client's experience.</p>
            </div>
            {/* project based learning section end */}

            {/* lifetime Support start */}
            <div className='lg:mx-32'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1  place-items-center gap-5 mt-20'>
                    <div>
                        <img className='lifetimeImg rounded-xl' src='https://i.ibb.co/rHQnPWd/Rectangle-247.png' alt=''></img>
                    </div>
                    <div>
                        <h1 className='lifetimeHeading'>Lifetime Free Support</h1>
                        <p className='lifetimePera mt-10'>During the training and after the training, Shikhbe Shobai provides offline and online support to all of their students whenever needed. And it's free for the lifetime!</p>
                        <button className="slideButton text-white mt-10"><Link to="/contact">Get Help !!</Link></button>

                    </div>
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 place-content-between gap-5 mt-20'>

                    <div >
                        <h1 className='lifetimeHeading'>Learn To Earn</h1>
                        <p className='lifetimePera mt-10'>Our training is meant to help you get a job. Our students work as freelancers on sites like Upwork, Fiverr, etc., do remote work for foreign companies, and work locally for good companies.</p>
                        <button className="slideButton text-white"><Link to="/CourseLayout/allCourses">View Courses</Link></button>

                    </div>
                    <div>
                        <img className='lifetimeImg rounded-xl ' src='https://i.ibb.co/8NxNsSP/Rectangle-248.png' alt=''></img>
                    </div>

                </div>
            </div>
            {/* lifetime Support end */}

            {/* Event and news start */}
            {/* <div className='mt-20'>
                <h1 className='text-center eventTxt'>News & <span className='text-orange-500'>Events</span></h1>
                <div className='grid grid-cols-3 gap-5 place-items-center mt-10'>
                    {
                        envetsData.map(events =>
                            <div className='courseCard dark:border-4 bg-base-200 border-sky-500 shadow-lg rounded-2xl gap-5 mb-20 transform transition duration-500 hover:scale-110 hover:shadow-2xl'>

                                <img className='courseCardImg w-96 h-56 rounded-t-2xl' src={events.img} alt="" />
                                <h1 className='m-5 courseCardText'>{events.name}</h1>

                            </div>
                        )
                    }
                </div>
            </div> */}
            {/* Event and news end */}

            {/* contact start */}
            {/* <div>
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
        </div> */}
            {/* contact end */}

            <div>

                
 <h1 className='text-center mt-20 workTittle'>How we <span className='text-orange-500'> Work</span></h1>
            <h1 className='supportPera text-center'>Discover our streamlined process for delivering high-quality
IT solutions and training to our clients</h1>
                <div className='grid lg:grid-cols-2 place-content-between lg:mx-32  gap-20'>

                    <div className=''>

                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-24 h-24' />
                            <h1 className='boxImgOnelist mt-8'>Discover our streamlined process for delivering high-quality IT solutions and training to our clients.

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-24 h-24' />
                            <h1 className='boxImgOnelist mt-8'>Collaborate with our experts to develop a custom solution that meets your specific needs and goals

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-24 h-24' />
                            <h1 className='boxImgOnelist mt-8'>Leverage the latest technologies and industry best practices to design and implement innovative solutions

                            </h1>
                        </div>


                    </div>
                    <div>
                        <img className='boxImgTwo rounded' src='https://i.ibb.co/mb7xSw9/teacher-watching-student-doing-exercise-min.jpg' alt=''></img>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <h1 className='lg:mx-32 Support'>Support And <span className='text-orange-500'>Management</span></h1>
                <p className='lg:mx-32 supportPera text-center mt-5 '>Nexttech ITC provides customised help and management services <br /> to provide reliable support and efficient management.</p>
                <div className='grid lg:grid-cols-2 lg:mx-32 mt-10 place-items-center gap-20'>
                    <div>
                        <img className='boxImgOne rounded' src='https://i.ibb.co/jTsRMVP/group-young-business-people-working-office-min.jpg' alt=''></img>
                    </div>

                    <div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Industry Expertise: Experienced professionals with specialized knowledge.</h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Worldwide Presence: Global reach to serve you wherever you are.
                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Creative Approach: Unique solutions to meet your business needs.
                            </h1>
                        </div>

                    </div>
                </div>
                <div className='grid lg:grid-cols-2 lg:mx-32 place-items-center  mt-10 gap-20'>

                    <div >

                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Collaborative Partnership: Work with us to achieve your goals.

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Customized Training: Personalized training programs for your organization.

                            </h1>
                        </div>
                        <div className='inline-flex items-start'>
                            <BsDot className='text-orange-500 w-20 h-20' />
                            <h1 className='boxImgOnelist mt-6'>Continuous Improvement: Ongoing improvement for your success worldwide.

                            </h1>
                        </div>
                    </div>
                    <div>
                        <img className='boxImgTwo rounded' src='https://i.ibb.co/b2Wym77/Support-And-Management-2-min-1.jpg' alt=''></img>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default IndrastrySarved;


