import { createBrowserRouter } from "react-router-dom"
import BlogLayout from "../../Layout/BlogLayout";
import Main from "../../Layout/Main"
import AboutUs from "../../Pages/AboutUs/AboutUs";
import AllBlog from "../../Pages/Blog/AllBlog";
import BlogDetails from "../../Pages/Blog/BlogDetails";
import BlogPost from "../../Pages/Blog/BlogPost";
import Contact from "../../Pages/Contact/Contact";
import CourseDetails from "../../Pages/Courses/CourseDetails";
import Courses from "../../Pages/Courses/Courses";



import Home from "../../Pages/Home/Home/Home"
import HomeTwo from "../../Pages/Home/HomeTwo/HomeTwo";
import Login from "../../Pages/Login/Login";
import Service from "../../Pages/Service/Service";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeTwo></HomeTwo>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://server-nexttech.vercel.app/coursedetails/${params.id}`)
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },

    {
        path: '/blogLayout',
        element: <BlogLayout></BlogLayout>,
        children: [
            {
                path: '/blogLayout',
                element: <BlogPost></BlogPost>
            },  

            {
                path: '/blogLayout/:id',
                element: <AllBlog></AllBlog>,
                loader: ({ params }) => fetch(`https://server-nexttech.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/blogLayout/details/:id',
                element: <BlogDetails></BlogDetails>
            },



        ]
    }
])

export default router;