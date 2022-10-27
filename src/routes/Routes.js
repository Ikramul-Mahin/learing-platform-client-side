import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Pages/Category/Home/Home";
import Category from "../component/Pages/Category/Category";
import Login from "../component/Login/Login";
import Register from "../Register/Register";
import Blog from "../component/Blog/Blog";
import Faq from "../component/Faq/Faq";
import Courses from "../component/Pages/Category/Courses/Courses";
import Info from "../component/Pages/Category/Info/Info";
import PrivateRoute from "./PrivateRoute";
import EnroleCourse from "../component/Pages/Category/Courses/EnroleCourse"
import Intro from "../component/Pages/Category/Home/Intro";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Intro></Intro>
            },
            {
                path: '/course',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-server-10-eight.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://assignment-server-10-eight.vercel.app/category/${params.id}`)
            },

            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => { return fetch(`https://assignment-server-10-eight.vercel.app/courses/${params.id}`) }

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <Faq ></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/info',
                element: <PrivateRoute> <Info></Info></PrivateRoute>
            },
            {
                path: '/enrole',
                element: <PrivateRoute><EnroleCourse></EnroleCourse></PrivateRoute>
            },
            {
                path: '*',
                element: <div className="mt-5 pt-5 text-center pb-5"> <h2 className="pb-5 mb-5">404!!! <br /> Page Not Found </h2> </div>
            }

        ]
    }
])