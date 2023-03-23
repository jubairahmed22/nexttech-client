import { createBrowserRouter } from "react-router-dom"
import BlogLayout from "../../Layout/BlogLayout";
import Main from "../../Layout/Main"
import AllBlog from "../../Pages/Blog/AllBlog";
import BlogDetails from "../../Pages/Blog/BlogDetails";
import BlogPost from "../../Pages/Blog/BlogPost";
import Courses from "../../Pages/Courses/Courses";



import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Service from "../../Pages/Service/Service";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: '/blogLayout/details/:id',
                element: <BlogDetails></BlogDetails>
            },



        ]
    }
])

export default router;